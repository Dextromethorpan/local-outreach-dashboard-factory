# StatsBomb coverage sample — bounded continuation

**Date:** 2026-09-17  
**Scope:** Sample only; preserves the prior catalogue report.  
**Budget:** six season match files + one event file + its corresponding lineup file.  
**Important:** No sampled season is labelled complete. 360 enumeration remains unresolved.

## Six sampled season match files

The latest catalogue-listed season for each scoped competition was selected.

| Competition | Season | Exact raw path | Match records in file | Count method |
|---|---|---|---:|---|
| Premier League | 2015/2016 (season 27) | `data/matches/2/27.json` | **380** | Manual structural count from successfully inspected raw JSON |
| La Liga | 2020/2021 (season 90) | `data/matches/11/90.json` | **35** | Manual structural count from successfully inspected raw JSON |
| Serie A | 2015/2016 (season 27) | `data/matches/12/27.json` | **380** | Manual structural count from successfully inspected raw JSON |
| 1. Bundesliga | 2023/2024 (season 281) | `data/matches/9/281.json` | **34** | Manual structural count from successfully inspected raw JSON |
| Ligue 1 | 2022/2023 (season 235) | `data/matches/7/235.json` | **32** | Manual structural count from successfully inspected raw JSON |
| Champions League | 2018/2019 (season 4) | `data/matches/16/4.json` | **1** | Manual count from successfully inspected raw JSON |

These numbers are **repository records in the sampled files**, not claims that the repository contains every real-world fixture from those seasons. The contrast is itself useful: some files contain hundreds of records, while La Liga 2020/21, Bundesliga 2023/24, Ligue 1 2022/23 and Champions League 2018/19 contain much smaller samples.

### Successfully inspected raw URLs

1. `https://raw.githubusercontent.com/hudl/open-data/master/data/matches/2/27.json`
2. `https://raw.githubusercontent.com/hudl/open-data/master/data/matches/11/90.json`
3. `https://raw.githubusercontent.com/hudl/open-data/master/data/matches/12/27.json`
4. `https://raw.githubusercontent.com/hudl/open-data/master/data/matches/9/281.json`
5. `https://raw.githubusercontent.com/hudl/open-data/master/data/matches/7/235.json`
6. `https://raw.githubusercontent.com/hudl/open-data/master/data/matches/16/4.json`

## Event + lineup sample

The single Champions League match was selected because its sampled season file contains exactly one match, making the selection unambiguous:

- **match_id:** `22912`
- **date:** 2019-06-01
- **fixture:** Tottenham Hotspur vs Liverpool
- **competition/season:** Champions League 2018/2019
- event file: `data/events/22912.json`
- lineup file: `data/lineups/22912.json`

Both raw files were successfully inspected.

### Event fields actually observed

The event JSON contains event-level fields observed in this one match including:

- `id`, `index`, `period`, `timestamp`, `minute`, `second`
- `type`
- `possession`, `possession_team`
- `play_pattern`
- `team`
- `player`
- `position`
- `location`
- `duration`
- `related_events`
- `tactics`, including `formation` and a starting lineup
- type-specific nested objects observed including `pass`, `ball_receipt` and `carry`
- within sampled pass records: recipient, length, angle, height, `end_location`, body part, type/outcome where applicable.

Example observations include a Starting XI event with Tottenham formation `4231`, Liverpool formation `433`, and a pass event containing both `location` and `end_location`.

**Limit:** These are fields actually observed in `events/22912.json`; they are not generalized to every event, match, season or competition.

### Lineup fields actually observed

The lineup JSON contains two team objects (Tottenham Hotspur and Liverpool). Fields observed include:

- `team_id`, `team_name`, `lineup`
- player `player_id`, `player_name`, `player_nickname`, `jersey_number`
- player `country`
- `cards`
- `positions`
- position `position_id`, `position`
- `from`, `to`
- `from_period`, `to_period`
- `start_reason`, `end_reason`

The sample includes players with empty `positions` arrays as well as players with one or multiple position intervals reflecting starting roles, substitutions and tactical shifts.

**Limit:** These observations apply only to `lineups/22912.json`.

## Commit SHA

A current `master` commit SHA was **not reliably exposed by the accessible official repository representation during this bounded sample**. A commit-history page exposed historical commit identifiers, but not enough evidence to identify the current `master` HEAD safely. The SHA therefore remains unresolved rather than guessed.

## Failed attempts distinguished from successful inspection

Earlier directory-page retrieval attempts failed and remain non-evidence. In this continuation, all six direct raw match-file URLs and the selected direct raw event and lineup URLs were successfully inspected. A separate attempt to retrieve file metadata through the GitHub API was blocked by the retrieval environment and is not treated as inspected evidence.

## Remaining gaps

1. Verify the current repository `master` commit SHA from an accessible authoritative Git reference.
2. Enumerate the other 39 catalogue-listed season match files if broader match counts are later required.
3. Compare any repository match count with an independent official fixture total before calling a season complete.
4. Reconcile event-file and lineup-file presence against match IDs beyond the single sampled match.
5. Enumerate `three-sixty/{match_id}.json` separately. No 360 conclusion is added by this sample.
6. Inspect representative 360 content only if a later coverage step requires field-level 360 evidence.
7. Licence interpretation remains reserved for Prompt 3.

## Stop

This continuation adds only the bounded six-season match sample and one corresponding event/lineup sample. Prompt 3 was not performed.
