# Coverage review — API-Football

**Assignment:** Prompt 2 — API-Football only  
**Researcher:** ChatGPT (GPT-5.6 Sol)  
**Retrieval date:** 2026-09-17  
**API:** API-Football v3  
**Status:** **PARTIAL** — public documentation/coverage evidence only. No authenticated API calls were made.  
**Scope:** Premier League, La Liga, Serie A, Bundesliga, Ligue 1, UEFA Champions League.

## Evidence-status vocabulary

- **Documented coverage:** current official API-Football coverage catalogue or current official documentation says the competition/category is covered.
- **Season-specific feature flags:** the `/leagues` response's per-season `coverage` object is the authoritative documented mechanism for determining supported categories for a league-season.
- **Actual observation:** a response obtained by this researcher from an executed API call. **None.**
- **Unknown:** public evidence inspected did not establish the point.

## Competition matrix

| Competition | League ID evidence | Current coverage catalogue | 2026/27 season-specific flags | Actual observation | Historical depth |
|---|---:|---|---|---|---|
| Premier League | **39** — current 2026 beginner guide | Present under England in current coverage catalogue | **Not observed.** Requires `/leagues?id=39&season=2026` (or `current=true`) response. | None | Current guide demonstrates 2025/26 (`season=2025`) and describes historical match data generally; earliest PL season not established. |
| La Liga | **140** — current 2026 beginner guide | Present under Spain | **Not observed.** Requires `/leagues?id=140&season=2026`. | None | Exact earliest season not established. |
| Serie A | **Not re-verified in retained pages.** A stable ID should be read from `/leagues`/dashboard rather than inferred. | Present under Italy | **Not observed.** Requires current `/leagues` response for the Serie A ID and season 2026. | None | Exact earliest season not established. |
| Bundesliga | **78** — official API-Football tutorial | Present under Germany | **Not observed.** Requires `/leagues?id=78&season=2026`. | None | Exact earliest season not established. |
| Ligue 1 | **61** — official API-Football tutorial | Present under France | **Not observed.** Requires `/leagues?id=61&season=2026`. | None | Exact earliest season not established. |
| UEFA Champions League | **2** — current 2026 beginner guide | Present under UEFA | **Not observed.** Requires `/leagues?id=2&season=2026`. | None | Exact earliest season not established. |

The current coverage catalogue was last updated **2026-09-15** and lists all six scoped competitions. Its detailed-coverage table warns that coverage “may vary according to the seasons or fixtures.” The web extraction confirms the competition rows but does not expose the table's icon/boolean state reliably enough to transcribe feature flags. Those flags are therefore not invented.

## API-F-01 — Current catalogue contains all six competitions

**Source:** https://www.api-football.com/coverage  
**Retrieved:** 2026-09-17  
**Page evidence:** Current catalogue says it covers 1,245 leagues/cups, is marked last updated 2026-09-15, and lists Premier League (England), La Liga (Spain), Serie A (Italy), Bundesliga (Germany), Ligue 1 (France), and UEFA Champions League (UEFA).

**Conclusion:** All six competitions have current public catalogue presence.

**Limit:** Catalogue presence does not establish that every data category is populated for season 2026/27 or every fixture.

## API-F-02 — Season-specific coverage model

**Source:** https://www.api-football.com/news/post/how-to-get-started-with-api-football-the-complete-beginners-guide  
**Retrieved:** 2026-09-17  
**Published:** 2026-03-13  
**Evidence:** The official guide says `/leagues` returns each competition's seasons and a `coverage` object; the coverage object tells users whether categories such as standings, injuries, odds, predictions and player statistics are available for that league-season. It also says `current=true` can return competitions currently in progress.

**Conclusion:** Feature availability must be evaluated **per league-season**, not inferred from the supplier-wide endpoint list.

**Limit:** The guide itself is documentation, not a 2026/27 API response.

## API-F-03 — Stable IDs documented for three scoped competitions

**Source:** same 2026 beginner guide  
**Evidence:** It explicitly states Premier League `39`, La Liga `140`, Champions League `2`.

**Conclusion:** These three IDs are current documented identifiers.

## API-F-04 — Bundesliga and Ligue 1 IDs

**Source:** https://www.api-football.com/news/post/how-to-get-all-teams-and-their-ids  
**Retrieved:** 2026-09-17  
**Published:** 2023-07-05  
**Evidence:** Official examples use Bundesliga `78`, Premier League `39`, Ligue 1 `61`, and state competition IDs can be retrieved through the dashboard or `/leagues`.

**Conclusion:** Bundesliga `78` and Ligue 1 `61` are documented official IDs.

**Limit:** This is older official documentation; a current `/leagues` response was not executed.

## API-F-05 — Endpoint/data categories

**Sources:** current coverage catalogue, pricing page, 2026 beginner guide.  
**Documented categories include:** fixtures/results/livescore; events; lineups; fixture/team/player statistics; standings; players; top scorers; injuries/sidelined; odds; predictions; transfers; coaches; trophies.

**Conclusion:** API-Football documents a broad endpoint set.

**Limit:** Supplier-wide endpoint existence is not season-specific availability. The per-season coverage flags remain the controlling check for categories exposed by that object.

## API-F-06 — Packages and daily quotas

**Source:** https://www.api-football.com/pricing  
**Retrieved:** 2026-09-17

| Plan | Published price | Daily quota | Competition/endpoint restriction |
|---|---:|---:|---|
| Free | **$0/month** | **100/day** | All endpoints/competitions, but available seasons are limited |
| Pro | **$19/month** | **7,500/day** | All competitions/endpoints |
| Ultra | **$29/month** | **75,000/day** | All competitions/endpoints |
| Mega | **$39/month** | **150,000/day** | All competitions/endpoints |

**Conclusion:** Paid public plans are differentiated principally by quota in the inspected pricing material; the Free plan has a season-availability limitation.

**Limit:** The exact Free-plan season set was not established.

## API-F-07 — Per-minute throttles

**Source:** https://www.api-football.com/news/post/how-ratelimit-works  
**Retrieved:** 2026-09-17  
**Published:** 2026-06-12

The current official rate-limit article publishes:
- Free: **10 requests/minute**
- Pro: **300/minute or 5/second**
- Ultra: **450/minute or 7/second**
- Mega: **900/minute or 15/second**
- Custom: **1,200/minute or 20/second**, for custom plans up to 1.5 million requests/day.

These throttles coexist with the daily quotas.

## API-F-08 — Update/freshness evidence

**Source:** 2026 beginner guide.  
**Evidence:** The guide describes `fixtures?live=...` as the live-score mechanism and suggests polling every 15 seconds for near-real-time use or every minute for less time-sensitive use. It states standings update every hour.

**Conclusion:** Official documentation provides update/polling guidance for some categories.

**Important limit:** API-Football's Terms separately state that documented update frequencies are **indicative and not guaranteed**, and can vary by sport/competition. Therefore no SLA or guaranteed latency is recorded here.

## API-F-09 — Current-season dependency

For the research date 2026-09-17, the relevant European season is 2026/27, represented by `season=2026` under API-Football's documented convention that a season is keyed by its starting year.

To verify the requested **season-specific feature flags** and actual current availability for each competition, the exact needed evidence is an authorized API response from `/leagues` for each league with `season=2026` or `current=true`.

No API key was requested or used. Accordingly:
- current catalogue presence = **documented**;
- season-specific 2026/27 feature flags = **unresolved**;
- actual API observations = **none**.

## Historical depth

The public material inspected documents historical match data as a general API capability and demonstrates Premier League season 2025, but it does not establish the earliest available season for each of the six competitions. The pricing page says paid plans include all competitions/endpoints while the Free plan is limited in available seasons. A league-by-league historical-season enumeration therefore remains unresolved.

## Exact remaining Prompt 2 checks

1. Execute or otherwise inspect authoritative `/leagues?...&season=2026` responses for all six competitions to capture the `current` value and every season-specific coverage boolean.
2. Re-verify **Serie A's stable league ID** from a current `/leagues` response or current dashboard/documentation.
3. Enumerate the complete available season list for each of the six competitions and identify earliest season/historical depth.
4. Record the exact Free-plan season restrictions.
5. Verify whether fixture-level availability differs from league-season `coverage=true` for the scoped competitions; the provider warns coverage can vary by fixture.
6. Inspect endpoint-specific update documentation beyond livescores and standings if a complete freshness table is required.
7. Separate logo/image availability from usage rights in Prompt 3; no rights analysis is performed here.

## Primary pages inspected

1. https://www.api-football.com/coverage
2. https://www.api-football.com/pricing
3. https://www.api-football.com/news/post/how-to-get-started-with-api-football-the-complete-beginners-guide
4. https://www.api-football.com/news/post/how-ratelimit-works
5. https://www.api-football.com/news/post/how-to-get-all-teams-and-their-ids
6. https://www.api-football.com/terms

**Page-budget status:** 6 primary pages, within the eight-page maximum. The Terms page was used only to qualify update-frequency evidence; **Prompt 3 rights review was not performed**.

## Stop

This is a partial Prompt 2 report for API-Football. No vendor was contacted, no credentials were requested, no authenticated API request was executed, and Prompt 3 was not performed.
