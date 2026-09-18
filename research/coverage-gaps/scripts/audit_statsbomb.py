"""Read-only, pinned public repository audit; emits aggregate research, not raw data."""
import concurrent.futures
import datetime
import hashlib
import json
from pathlib import Path
import urllib.request

SHA = '4b73468fc5b0f1950f9f66fada70ad3a4f9327cb'
BASE = f'https://raw.githubusercontent.com/hudl/open-data/{SHA}/'
OUT = Path(__file__).resolve().parents[1] / 'evidence'
CACHE = Path('/tmp/football-source-audit') / SHA
CACHE.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)

def get(url):
    data = urllib.request.urlopen(url, timeout=60).read()
    digest = hashlib.sha256(data).hexdigest()
    (CACHE / digest).write_bytes(data)
    return json.loads(data), {'url': url, 'sha256': digest, 'bytes': len(data)}

catalog, catalog_ref = get(BASE + 'data/competitions.json')
tree, tree_ref = get(f'https://api.github.com/repos/hudl/open-data/git/trees/{SHA}?recursive=1')
assert not tree['truncated'], 'A truncated tree cannot establish absent files'
paths = {x['path']: x for x in tree['tree']}
scoped = [r for r in catalog if r['competition_id'] in (2, 11, 12, 9, 7, 16)]
assert len({(r['competition_id'], r['season_id']) for r in scoped}) == len(scoped)

def season(row):
    path = f"data/matches/{row['competition_id']}/{row['season_id']}.json"
    matches, source = get(BASE + path)
    ids = [m['match_id'] for m in matches]
    result = {k: row[k] for k in ('competition_id', 'competition_name', 'season_id', 'season_name')}
    result.update(records=len(ids), unique_match_ids=len(set(ids)), source=source)
    result['files'] = {}
    for kind in ('events', 'lineups', 'three-sixty'):
        present = [mid for mid in ids if f'data/{kind}/{mid}.json' in paths]
        result['files'][kind] = {'present': len(present), 'missing': len(ids)-len(present)}
    result['completeness'] = 'Not verified against an authoritative full fixture list'
    return result

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    rows = sorted(pool.map(season, scoped), key=lambda x: (x['competition_id'], x['season_name']))

sample = {}
for kind in ('events', 'lineups', 'three-sixty'):
    path = f'data/{kind}/22912.json'
    if path not in paths:
        sample[kind] = {'file_present': False}
        continue
    data, ref = get(BASE+path)
    sample[kind] = {'file_present': True, 'records': len(data), 'source': ref,
                    'top_level_fields': sorted({k for r in data for k in r})}
    if kind == 'events':
        shots = [r for r in data if r.get('type', {}).get('name') == 'Shot']
        sample[kind].update(shots=len(shots), shots_with_xg=sum('statsbomb_xg' in r.get('shot', {}) for r in shots),
                            events_with_location=sum('location' in r for r in data))

result = {'retrieved_at': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'commit': SHA,
          'catalogue': catalog_ref, 'tree': tree_ref, 'tree_truncated': tree['truncated'],
          'scope': 'Six competitions; all listed seasons at pinned commit', 'seasons': rows,
          'sample_22912': sample,
          'limits': 'File presence does not establish content validity, completeness, continuous tracking, or rights.'}
(OUT/'statsbomb-audit.json').write_text(json.dumps(result, indent=2)+'\n')
print(json.dumps({'seasons': len(rows), 'match_records': sum(r['records'] for r in rows),
                  'files': {k: sum(r['files'][k]['present'] for r in rows) for k in ('events','lineups','three-sixty')},
                  'sample': sample}, indent=2))
print('Logo paths:', [p for p in paths if 'logo' in p.lower()])
