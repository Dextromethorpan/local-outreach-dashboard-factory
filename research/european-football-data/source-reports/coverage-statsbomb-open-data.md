# Coverage review — StatsBomb Open Data

**Assignment:** Prompt 2 — StatsBomb Open Data only  
**Researcher:** ChatGPT (GPT-5.6 Sol)  
**Retrieval date:** 2026-09-17  
**Repository:** `hudl/open-data`, default branch shown as `master`  
**Status:** **PARTIAL** — competition catalogue fully inspected for the six scoped competitions; match/event/lineup/360 file-by-file enumeration is not complete within the eight-file/page budget.  
**Scope:** Premier League, La Liga, Serie A, 1. Bundesliga, Ligue 1 and Champions League.

## Evidence rules

- **Repository file inspected:** content of that actual repository file/page was inspected.
- **Catalogue listing:** a competition-season row exists in `data/competitions.json`. This does **not** prove the repository contains every fixture from the real-world season.
- **README description:** repository documentation describes a file convention; it is not treated as proof that every described file exists.
- **360 catalogue marker:** non-null `match_available_360` at competition-season level; this is not treated as proof that every match has a `three-sixty/{match_id}.json` file.
- **Complete season:** **not claimed** unless match enumeration establishes it. No real-world fixture total is assumed.
- No continuous tracking, live coverage or update guarantee is inferred.

## Repository identity and commit

The official repository currently resolves under the **Hudl** GitHub organisation as `hudl/open-data`, branch `master`. The retrieved repository page shows **1,089 commits**.

**Commit SHA:** **not established in this bounded pass.** The GitHub representation available to the research tool did not expose the current `master` SHA, and the direct GitHub commit/tree API retrieval attempt failed. No SHA is invented.

### SB-COV-01
- **Sources inspected:** repository root; README.
- **Finding:** StatsBomb Open Data is a repository of selected JSON exports from the StatsBomb Data API.
- **Limit:** “Open Data” is branding/descriptive wording here, not a licence conclusion.

## Exact competition-season catalogue

**Repository file actually inspected:** `data/competitions.json`

| Competition | competition_id | Exact seasons listed (season_id) | Count of listed competition-seasons |
|---|---:|---|---:|
| Premier League | **2** | 2015/2016 (**27**); 2003/2004 (**44**) | 2 |
| La Liga | **11** | 2020/2021 (**90**); 2019/2020 (**42**); 2018/2019 (**4**); 2017/2018 (**1**); 2016/2017 (**2**); 2015/2016 (**27**); 2014/2015 (**26**); 2013/2014 (**25**); 2012/2013 (**24**); 2011/2012 (**23**); 2010/2011 (**22**); 2009/2010 (**21**); 2008/2009 (**41**); 2007/2008 (**40**); 2006/2007 (**39**); 2005/2006 (**38**); 2004/2005 (**37**); 1973/1974 (**278**) | 18 |
| Serie A | **12** | 2015/2016 (**27**); 1986/1987 (**86**) | 2 |
| 1. Bundesliga | **9** | 2023/2024 (**281**); 2015/2016 (**27**) | 2 |
| Ligue 1 | **7** | 2022/2023 (**235**); 2021/2022 (**108**); 2015/2016 (**27**) | 3 |
| Champions League | **16** | 2018/2019 (**4**); 2017/2018 (**1**); 2016/2017 (**2**); 2015/2016 (**27**); 2014/2015 (**26**); 2013/2014 (**25**); 2012/2013 (**24**); 2011/2012 (**23**); 2010/2011 (**22**); 2009/2010 (**21**); 2008/2009 (**41**); 2006/2007 (**39**); 2004/2005 (**37**); 2003/2004 (**44**); 1999/2000 (**76**); 1972/1973 (**277**); 1971/1972 (**71**); 1970/1971 (**276**) | 18 |

**Total scoped catalogue rows: 45 competition-seasons.**

### SB-COV-02 — Listing is not completeness

A row in `competitions.json` establishes that StatsBomb lists that competition-season in the Open Data catalogue. It does **not** establish that the corresponding match file contains every real-world fixture from that season.

Accordingly, this report does not describe, for example, “La Liga 2020/21” as a complete season merely because it appears in the catalogue.

## Match files

The README documents this convention:

`data/matches/{competition_id}/{season_id}.json`

and says each competition folder is named for the competition ID and each file for the season ID.

Applying that documented naming convention to the 45 inspected catalogue rows yields 45 **expected catalogue match-file paths**, including:

- Premier League: `data/matches/2/27.json`, `data/matches/2/44.json`
- La Liga: `data/matches/11/{90,42,4,1,2,27,26,25,24,23,22,21,41,40,39,38,37,278}.json`
- Serie A: `data/matches/12/27.json`, `data/matches/12/86.json`
- 1. Bundesliga: `data/matches/9/281.json`, `data/matches/9/27.json`
- Ligue 1: `data/matches/7/235.json`, `data/matches/7/108.json`, `data/matches/7/27.json`
- Champions League: `data/matches/16/{4,1,2,27,26,25,24,23,22,21,41,39,37,44,76,277,71,276}.json`

**Important evidence distinction:** the naming convention and catalogue rows were inspected, but these 45 match JSON files were **not individually opened in this bounded batch**. The GitHub directory-page retrieval attempts failed. Therefore their existence and match counts are not promoted to “file inspected” evidence here.

### Match counts

**Not enumerated in this batch.** Counting the JSON entries requires inspecting the season match files. There are 45 scoped competition-season rows, so a complete season-file enumeration would exceed the remaining primary-file budget.

No season is labelled complete and no real-world fixture count is used as a substitute.

## Events

### README description
The README says events are stored at:

`data/events/{match_id}.json`

with one file named for each match ID.

### Repository-file inspection
No scoped competition's complete event-file set was individually inspected in this batch.

**Conclusion:** event data is a documented repository category, but event-file completeness for each of the 45 competition-seasons remains unverified.

**No continuous tracking inference:** event locations or event coordinates are discrete event data and are not continuous player/ball trajectories.

## Lineups

### README description
The README says lineups are stored at:

`data/lineups/{match_id}.json`

with files named for match IDs.

### Repository-file inspection
No scoped competition's complete lineup-file set was individually inspected.

**Conclusion:** lineups are a documented repository category; file-by-file availability/completeness by competition-season remains unresolved.

## StatsBomb 360

### README description
The README explicitly says StatsBomb 360 data is available **“for selected matches”** and is stored at:

`data/three-sixty/{match_id}.json`

This wording itself rules out treating 360 as universally available.

### Catalogue markers actually inspected
`competitions.json` has non-null `match_available_360` for these scoped competition-seasons:

- **1. Bundesliga 2023/2024** — competition 9, season 281
- **La Liga 2020/2021** — competition 11, season 90
- **Ligue 1 2022/2023** — competition 7, season 235
- **Ligue 1 2021/2022** — competition 7, season 108

For the other scoped catalogue rows inspected, `match_available_360` is null.

**Interpretation limit:** a non-null competition-season marker supports the presence of some 360 availability at that catalogue level. It does **not** prove every match in that season has a 360 file. Actual `three-sixty/{match_id}.json` files must be enumerated against the match IDs.

### Tracking classification

StatsBomb 360 is treated here only as **event-associated 360/freeze-frame data for selected matches**, following the repository's own terminology. It is **not classified as continuous optical player tracking or continuous ball tracking**.

## Update evidence

`competitions.json` includes fields such as `match_updated`, `match_available`, `match_updated_360` and `match_available_360`. These are timestamps attached to catalogue rows and show that repository data has been updated at particular times.

They do **not** establish:
- live coverage;
- a guaranteed update interval;
- an SLA;
- a maximum publication delay;
- future update commitments.

The README contains no live/update guarantee inspected in this batch.

## Licence location — interpretation deferred

The repository root contains:

`LICENSE.pdf`

The README also has a **Terms & Conditions** section and links to StatsBomb's Media Pack.

**Licence classification:** **pending Prompt 3.** The licence file's presence is recorded, but its terms are not interpreted here. The repository's “Open Data” name and README statements are **not** treated as proof of a verified open licence.

## Claim register

### SB-COV-03 — Premier League catalogue
**Source:** `data/competitions.json`  
**Finding:** competition ID 2; seasons 2015/16 (27) and 2003/04 (44).  
**Status:** Repository catalogue rows inspected; match-file completeness not verified.

### SB-COV-04 — La Liga catalogue
**Source:** `data/competitions.json`  
**Finding:** competition ID 11; 18 exact listed seasons from 1973/74 and 2004/05 through 2020/21.  
**Status:** Catalogue rows inspected; no season called complete.

### SB-COV-05 — Serie A catalogue
**Source:** `data/competitions.json`  
**Finding:** competition ID 12; 2015/16 (27), 1986/87 (86).  
**Status:** Catalogue rows inspected.

### SB-COV-06 — Bundesliga catalogue
**Source:** `data/competitions.json`  
**Finding:** competition ID 9; 2023/24 (281), 2015/16 (27). 2023/24 has non-null `match_available_360`.  
**Status:** Catalogue evidence; match-level 360 enumeration unresolved.

### SB-COV-07 — Ligue 1 catalogue
**Source:** `data/competitions.json`  
**Finding:** competition ID 7; 2022/23 (235), 2021/22 (108), 2015/16 (27). First two have non-null `match_available_360`.  
**Status:** Catalogue evidence; match-level 360 enumeration unresolved.

### SB-COV-08 — Champions League catalogue
**Source:** `data/competitions.json`  
**Finding:** competition ID 16; 18 specifically listed seasons, with gaps.  
**Status:** Do not summarize the listing as a continuous 1970–2019 range; seasons such as 2007/08 and 2005/06 are not listed in the inspected catalogue.

### SB-COV-09 — Repository structure
**Source:** `README.md`  
**Finding:** README documents competition, match, event, lineup and selected-match 360 JSON paths.  
**Status:** Documentation description, distinct from file-existence inspection.

### SB-COV-10 — No live/tracking guarantee
**Sources:** `README.md`; `competitions.json`  
**Finding:** repository supplies static JSON and timestamp metadata; 360 is described for selected matches.  
**Conclusion:** no live coverage, update SLA or continuous-tracking claim is supported by these inspected sources.

## Exact remaining Prompt 2 checks

1. **Repository SHA:** obtain and record the exact `master` commit SHA from an accessible official Git reference/commit page. Current retrieval did not expose it.
2. **Match-file existence:** verify all 45 expected `data/matches/{competition_id}/{season_id}.json` paths.
3. **Match counts:** count JSON match records in every verified match file. Report counts as repository match records, not automatically as complete real-world seasons.
4. **Completeness comparison:** only if an official season fixture total is separately available, compare repository count with that total before using “complete season.”
5. **Events:** for every match ID returned by the scoped match files, verify `data/events/{match_id}.json`; count missing/present files by competition-season.
6. **Lineups:** perform the same match-ID reconciliation for `data/lineups/{match_id}.json`.
7. **360:** enumerate `data/three-sixty/{match_id}.json` against match IDs, especially Bundesliga 2023/24, La Liga 2020/21 and Ligue 1 2021/22–2022/23; do not infer all-match coverage from the season marker.
8. **Data-field depth:** inspect representative event/lineup/360 JSON plus repository schema documentation if a field-level matrix is needed.
9. **Licence:** inspect and interpret `LICENSE.pdf` only under Prompt 3.

## Primary pages/files inspected

1. **Official repository root** — `https://github.com/hudl/open-data`
2. **Official README.md** — `https://github.com/hudl/open-data/blob/master/README.md`
3. **Official `data/competitions.json`** — `https://raw.githubusercontent.com/hudl/open-data/master/data/competitions.json`
4. **Official `LICENSE.pdf` repository location** — `https://github.com/hudl/open-data/blob/master/LICENSE.pdf` — location recorded only; licence interpretation deferred.

Attempts to retrieve the six `data/matches/{competition_id}` directory pages failed and produced no usable primary-page evidence. They were not replaced by third-party mirrors.

**Page/file budget:** 4 usable primary pages/files inspected. A full 45-season match-file enumeration was deliberately not started because it cannot fit within the eight-primary-file limit.

## Stop

This is a partial Prompt 2 coverage report for StatsBomb Open Data. Competition IDs and exact catalogue seasons are recorded, but catalogue listing is kept distinct from match-file existence and season completeness. Events, lineups and 360 are separated, and 360 is not treated as continuous tracking.

Prompt 3 was not performed.
