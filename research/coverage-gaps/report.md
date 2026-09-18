# European Football Data: Coverage Gap Review

## Abstract and method

This follow-up closes repository enumeration gaps and strengthens public coverage
evidence for six competitions. It does not certify complete seasons or subscriber
entitlements. Codex inspected official documentation, ran a pinned StatsBomb audit,
and made one documented, unauthenticated football-data.org catalogue request.
No authenticated API, fixture or standings request was executed.

The [prior study](https://github.com/Dextromethorpan/local-outreach-dashboard-factory/tree/ff3d57f/research/european-football-data) supplied questions, not proof. Public-documentation
claims, actual metadata observations and file-content observations remain distinct.
The old eight-page assignment cap was not reused as a reason to leave the known
45-file enumeration unfinished. This follow-up was bounded by the six competitions
and three requested gaps, with four concurrent public repository reads at most.

## COV-SB-01 — Full scoped repository enumeration

Pinned official commit: `4b73468fc5b0f1950f9f66fada70ad3a4f9327cb`. All 45 competition-season match files listed for
our six competitions were parsed. A non-truncated Git tree was used to check event,
lineup and 360 file presence by match ID.

| Competition | Listed seasons | Match records | Event files present | Lineup files present | 360 files present |
|---|---:|---:|---:|---:|---:|
| Premier League | 2 | 418 | 418 | 418 | 0 |
| Ligue 1 | 3 | 435 | 435 | 435 | 58 |
| 1. Bundesliga | 2 | 68 | 68 | 68 | 34 |
| La Liga | 18 | 867 | 867 | 867 | 35 |
| Serie A | 2 | 381 | 381 | 381 | 0 |
| Champions League | 18 | 18 | 18 | 18 | 0 |
| **Total** | **45** | **2,187** | **2,187** | **2,187** | **127** |

Source: [official catalogue at pinned commit](https://github.com/hudl/open-data/blob/4b73468fc5b0f1950f9f66fada70ad3a4f9327cb/data/competitions.json).
Evidence: [all 45 rows](evidence/statsbomb-season-counts.csv),
[URLs, SHA-256 values and tree check](evidence/statsbomb-audit.json),
[reproducible audit script](scripts/audit_statsbomb.py).

The 18 Champions League season files each contain one match. These are repository
records, not complete campaigns. The prior six latest-season counts remain
380/35/380/34/32/1 for PL/La Liga/Serie A/Bundesliga/Ligue 1/CL respectively.
No listed match ID lacks an event or lineup file at this commit. Presence alone
is not content validation. No scoped listing represents 2026/27.

## COV-SB-02 — Content sample and limits

Match 22912's event file parses into 3,165 events, including 30 shots carrying
`statsbomb_xg`; 3,140 events have a location. Its lineup file has two team entries.
Its 360 file is absent. These observations apply only to this match's contents.
The 127 360 files above were checked for presence, not exhaustively parsed or
reconciled against event IDs. No continuous tracking is established.

Raw match/event datasets are not republished here. Aggregate research is attributed
to StatsBomb below. Neither matching counts nor file presence proves official
fixture completeness. That requires a separate authoritative fixture comparison.

## COV-FD-01 — Actual public catalogue observations

Source: [GET /v4/competitions](https://api.football-data.org/v4/competitions),
HTTP 200 on 2026-09-18 without a token. Public list access is documented under
[Request-Throttling](https://docs.football-data.org/general/v4/policies.html).
[Observed subset](evidence/football-data-observations.json) and
[response digest/time](evidence/sources.json) are retained.

| Code | Competition ID | Returned type | Current-season ID | Returned season date range | Reported season count |
|---|---:|---|---:|---|---:|
| PL | 2021 | LEAGUE | 2502 | 2026-08-21 → 2027-05-30 | 128 |
| CL | 2001 | CUP | 2557 | 2026-09-08 → 2027-01-27 | 47 |
| FL1 | 2015 | LEAGUE | 2497 | 2026-08-22 → 2027-05-29 | 83 |
| BL1 | 2002 | LEAGUE | 2522 | 2026-08-28 → 2027-05-22 | 64 |
| SA | 2019 | LEAGUE | 2494 | 2026-08-23 → 2027-05-30 | 95 |
| PD | 2014 | LEAGUE | 2518 | 2026-08-16 → 2027-05-30 | 95 |

All six return `TIER_ONE`. These are server-reported metadata, not verified fixture
calendars. `numberOfAvailableSeasons` is a catalogue count, not evidence of an
account's accessible history, contiguous years, data depth or completeness.
The Champions League end date is preserved as returned; it is not asserted to
be the date of the tournament final.

## COV-FD-02 — Champions League standings remains a narrower open check

The API list actually returns `CUP` for CL, superseding the earlier uncertainty
about its metadata type. The [v4 Competition documentation, Standings](https://docs.football-data.org/general/v4/competition.html)
says CUP/PLAYOFFS standings return 404. Together these suggest a limitation;
**we did not observe a standings response**. Current league-phase support requires
an authorized `/v4/competitions/CL/standings?season=2026` check or provider clarification.
The website's CUP label alone was insufficient; this new evidence is API metadata.

## COV-SM-01 — Sportmonks advanced-data coverage

The [official xG coverage documentation](https://docs.sportmonks.com/v3/tutorials-and-guides/tutorials/expected/coverage)
explicitly lists all six: PL 8, La Liga 564, Serie A 384, Bundesliga 82,
Ligue 1 301 and Champions League 2. It states a 2024/25 starting season and requires
an xG add-on: Basic supplies post-match data; Advanced includes live access.
These are documented capabilities, not observed per-match completeness or account access.
The [xG product FAQ](https://www.sportmonks.com/football-api/xg-data/) also excludes
pre-2024 xG history; old fixture history must not be equated with old xG coverage.

## COV-SM-02 — Historical and Champions League documentation

The [Sportmonks FAQ](https://www.sportmonks.com/faq/), Champions League section,
explicitly describes a 36-team standings table and stage-based schedules.
Its Bundesliga section advertises results/final standings from 2005/06, with deeper
fields roughly from 2010 depending on availability. Exact season lists still need
the seasons endpoint. The CL history text contains an apparent `2005/26` typo;
no corrected start year is inferred. Older 2025/26 example IDs are not current-season
observations. These are supplier claims, not executed API results.

## COV-AF-01 — API-Football public evidence boundary

The [coverage catalogue](https://www.api-football.com/coverage) lists the scoped
competitions, but the retrieved text drops the visual feature indicators. Blank
rendered cells cannot be interpreted as missing coverage. The
[official guide, leagues/coverage discussion](https://www.api-football.com/news/post/how-to-get-started-with-api-football-the-complete-beginners-guide)
assigns feature flags to each season. Therefore exact historical season lists,
2026/27 flags and field completeness remain account/API checks, including CL standings.
The [pricing page](https://www.api-football.com/pricing) says Free has season restrictions;
all-endpoint access does not establish every season or field.

## Conclusion and remaining checks

Public research is complete for this pass. The full StatsBomb file enumeration,
public football-data.org metadata and Sportmonks xG documentation materially reduce
the gaps. Remaining work has concrete dependencies:

1. Authorized per-provider season and feature queries for a selected account/use.
2. A CL standings response for football-data.org; do not mark support or failure observed.
3. Official-fixture reconciliation if season completeness becomes a requirement.
4. A deeper event/360 content audit if those fields are actually required.

No product, buyer segment, provider or gate was approved. The licence priority is
published separately; data presence here supplies no usage permission.

![StatsBomb attribution](https://raw.githubusercontent.com/hudl/open-data/4b73468fc5b0f1950f9f66fada70ad3a4f9327cb/img/SB%20-%20Icon%20Lockup%20-%20Colour%20positive.png)
