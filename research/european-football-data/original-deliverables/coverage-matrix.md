# Consolidated coverage matrix

**Prompt:** 4 — documentation-only correction  
**Date:** 2026-09-17  
**Scope:** Sportmonks, API-Football, football-data.org and StatsBomb
Open Data across Premier League, La Liga, Serie A, Bundesliga, Ligue 1
and UEFA Champions League.  
**Status:** Partial comparison. No provider is fully verified or
approved; no Gate 1 decision is made.

## Reviewer roles and evidence labels

The source-specific reports and the Prompt 4 rechecks were performed by
**ChatGPT (GPT-5.6 Sol)**. Reopening a primary source during Prompt 4 is
therefore a **same-researcher primary-source recheck**, not an
independent review. **Codex** is the only separately named independent
reviewer in the retained record, and its independent check is limited to
the six StatsBomb sampled match counts. No independent reviewer is
recorded for the other coverage or rights claims.

Evidence is matched to the claim being made: repository/API observations
support claims about actual returned/file contents; current official
documentation supports advertised capabilities, identifiers, packages
and coverage mechanisms; current published terms support
permission/restriction claims. Documentation examples are not promoted
to current API observations.

## Provider-level coverage

| Provider            | Six-competition evidence                                                                                                                                       | Current-season status                                                                                             | Advertised/documented capabilities                                                                                                                                                    | History                                                                                                 | Update evidence                                                                                                            | Packages / quotas                                                                                                                                                                  | Actual data observations                                                                                                   |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| Sportmonks          | Source reports document all six. IDs retained: PL 8, La Liga 564, Serie A 384, Bundesliga 82, Ligue 1 301, CL 2.                                               | 2025/26 examples are dated documentation, not 2026/27 verification. Account-specific current coverage unresolved. | Fixtures/results/standings, teams/players, lineups, events/stats documented at API/marketing level; advanced features coverage/add-on dependent. Continuous tracking not established. | Historical availability advertised; exact six-competition depth not fully enumerated.                   | Live-data capability documented; no independent timing observation or SLA established.                                     | Same-researcher recheck retained: Starter €29/mo, 5 leagues, 2,000 calls/entity/hour; Growth €99, 30, 2,500; Pro €249, 120, 3,000; Enterprise custom/all advertised leagues/5,000. | None; no authenticated API calls.                                                                                          |
| API-Football        | `API-F-01` reports current catalogue presence for all six. IDs retained: PL 39, La Liga 140, Bundesliga 78, Ligue 1 61, CL 2; Serie A ID remains unreverified. | `API-F-09`: no 2026/27 season-specific flags observed.                                                            | `API-F-05`: broad endpoint set documented; season-specific availability controlled by `/leagues` coverage flags.                                                                      | Earliest season by scoped competition unresolved; Free season set unresolved.                           | `API-F-08`: polling/update guidance documented but not guaranteed; no actual freshness test.                               | `API-F-06` and `API-F-07`: daily quotas and per-minute throttles documented.                                                                                                       | None; no authenticated API calls.                                                                                          |
| football-data.org   | `FD-COV-01` reports all six in current public catalogue; `FD-COV-02` documents v4 IDs PL 2021, PD 2014, SA 2019, BL1 2002, FL1 2015, CL 2001.                  | No current 2026/27 API observation. Documentation payloads remain examples.                                       | `FD-COV-05`: fixtures/scores/standings/teams plus package-dependent lineups/subs, scorers, bookings/cards, squads and statistics. Per-competition population unresolved.              | `FD-COV-04`: exact six-competition season lists unresolved; ML Pack Light advertises 10 seasons.        | `FD-COV-09` distinguishes delayed Free from paid live scores; `FD-COV-10` gives general update guidance, no numerical SLA. | `FD-COV-07` pricing; `FD-COV-08` preserves pricing/policy rate-limit conflict.                                                                                                     | None; no authenticated API calls.                                                                                          |
| StatsBomb Open Data | `SB-COV-03..08` enumerate selected catalogue seasons for all six; 45 scoped competition-season rows total.                                                     | Historical/selective repository evidence, not current/live coverage.                                              | `SB-COV-09` README documents matches/events/lineups and selected-match 360 paths. `SB-COV-10` does not establish live coverage or continuous tracking.                                | Exact catalogue rows enumerated, but `SB-COV-02` controls: a listing is not proof of a complete season. | Catalogue timestamps do not establish SLA or future update commitments.                                                    | Repository data access observed; licence permissions unresolved because `LICENSE.pdf` was not inspected.                                                                           | Six match files plus one event and corresponding lineup were inspected by ChatGPT; six counts separately checked by Codex. |

## StatsBomb bounded sample

| Competition      | Sampled season | Raw path                  | Match records | Original observation                                                         | Independent review                |
|------------------|----------------|---------------------------|--------------:|------------------------------------------------------------------------------|-----------------------------------|
| Premier League   | 2015/16        | `data/matches/2/27.json`  |           380 | ChatGPT inspected/count reported in `coverage-statsbomb-open-data-sample.md` | Codex independently checked count |
| La Liga          | 2020/21        | `data/matches/11/90.json` |            35 | Same                                                                         | Codex independently checked count |
| Serie A          | 2015/16        | `data/matches/12/27.json` |           380 | Same                                                                         | Codex independently checked count |
| Bundesliga       | 2023/24        | `data/matches/9/281.json` |            34 | Same                                                                         | Codex independently checked count |
| Ligue 1          | 2022/23        | `data/matches/7/235.json` |            32 | Same                                                                         | Codex independently checked count |
| Champions League | 2018/19        | `data/matches/16/4.json`  |             1 | Same                                                                         | Codex independently checked count |

The counts establish only the number of repository records in those
sampled files. **Season completeness remains unverified.** The
event/lineup observation is limited to match `22912` (Tottenham Hotspur
v Liverpool, 2019-06-01). 360 enumeration remains unresolved.

## Corrections preserved

- `SM-A-CORR-01`: Sportmonks 2025/26 examples are documentation
  examples, not current 2026/27 observations.
- Sportmonks quota mapping is 2,000 / 2,500 / 3,000 / 5,000 per
  entity/hour; `rights-sportmonks.md` corrects the continuation's
  mistaken description of that mapping as a reversal.
- `SM-RIGHTS-12` later establishes Sportmonks VAT/currency wording from
  the Terms; it does not establish jurisdiction-specific tax treatment.
- football-data.org uses current v4 evidence; the coverage website's
  `CUP` label does not establish the current API `type` or prove
  Champions League standings unavailable.
- StatsBomb catalogue rows are not complete-season claims; 360 season
  markers do not prove every-match 360 coverage.
- StatsBomb `LICENSE.pdf` remains **not inspected—tool-access blocker**;
  no licensing conclusion is inferred from “Open Data.”

## Remaining coverage gaps

Sportmonks current 2026/27/account-specific feature coverage;
API-Football 2026/27 flags, Serie A ID, exact history and Free-season
set; football-data.org exact season lists, deep-data/add-on mapping,
effective paid rate limits and current Champions League API
type/standings; StatsBomb remaining 39 catalogue match files, broader
event/lineup reconciliation, 360 enumeration and repository HEAD SHA all
remain unresolved.
