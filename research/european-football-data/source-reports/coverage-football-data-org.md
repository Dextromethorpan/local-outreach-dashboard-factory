# Coverage review — football-data.org

**Assignment:** Prompt 2 — football-data.org only  
**Researcher:** ChatGPT (GPT-5.6 Sol)  
**Retrieval date:** 2026-09-17  
**API documentation:** v4  
**Status:** **PARTIAL public-documentation review.** No authenticated API calls were made.  
**Scope:** Premier League, La Liga, Serie A, Bundesliga, Ligue 1 and UEFA Champions League.  
**Boundary:** Earlier football-data.org work was treated only as a lead. Findings below were rechecked against current official coverage/pricing and v4 documentation.

## Evidence-status vocabulary

- **Current public coverage:** the current official football-data.org coverage page lists the competition.
- **Documented:** current v4 documentation or current pricing/coverage material establishes the ID, resource, field category, plan rule or policy.
- **Documentation example:** an example payload in v4 docs; it illustrates API structure but is not treated as a current-season observation.
- **Actual current-season observation:** an API response obtained during this research. **None.**
- **Unknown:** not established by the public pages inspected.

## Six-competition coverage matrix

| Competition | v4 ID | Code | Current public coverage | Available seasons | Documented categories | Current-season observation |
|---|---:|---|---|---|---|---|
| Premier League | **2021** | **PL** | Listed in current Free Tier and all-competitions catalogue | Exact season list **not established publicly in this pass**. v4 competition resource is documented as exposing `currentSeason` and `seasons`; its PL sample is old and not current evidence. | Fixtures/matches, scores, standings, teams; deeper categories depend on package: lineups/subs, goals/scorers, bookings/cards, squads; statistics via add-on. | **None** |
| La Liga / Primera Division | **2014** | **PD** | Listed in current Free Tier catalogue | Exact season list **unknown** | Same documented resource/package categories; v4 standings example uses PD but is a historical documentation sample. | **None** |
| Serie A | **2019** | **SA** | Listed in current Free Tier catalogue | Exact season list **unknown** | Same documented resource/package categories; v4 scorer documentation uses SA as an example but does not establish current-season availability. | **None** |
| Bundesliga | **2002** | **BL1** | Listed in current Free Tier catalogue | Exact season list **unknown** | Same documented resource/package categories; v4 teams subresource uses BL1 as an example. | **None** |
| Ligue 1 | **2015** | **FL1** | Listed in current Free Tier catalogue | Exact season list **unknown** | Same documented categories. v4 Match Resource sample is a Ligue 1 2021/22 match and demonstrates deep match fields, but is not current-season evidence. | **None** |
| UEFA Champions League | **2001** | **CL** | Listed in current Free Tier catalogue | Exact season list **unknown** | Matches/scores and competition resources documented; cup-type standings behavior differs: v4 docs state standings return 404 for `CUP` competitions. Other deep-data categories remain package/resource dependent. | **None** |

## FD-COV-01 — All six competitions are in the current public Free Tier catalogue

**Source:** https://www.football-data.org/coverage  
**Retrieved:** 2026-09-17  
**Section:** **Free Tier** / **All competitions**  
**Supporting evidence:** The page says access to the listed leagues/cups is “free” and explicitly lists Champions League, Premier League, Bundesliga, Ligue 1, Serie A and La Liga.

**Conclusion:** All six scoped competitions have current public catalogue presence and are among the 12 Free-tier competitions.

**Limit:** Catalogue presence does not establish every deep-data field, exact historical season depth, live-score entitlement on the €0 plan, or a current-season API observation.

## FD-COV-02 — Current v4 identifiers

**Source:** https://docs.football-data.org/general/v4/lookup_tables.html  
**Retrieved:** 2026-09-17  
**Section:** **League-Codes**  
**Documented IDs/codes:**

- Premier League — `2021`, `PL`
- La Liga / Primera Division — `2014`, `PD`
- Serie A — `2019`, `SA`
- Bundesliga — `2002`, `BL1`
- Ligue 1 — `2015`, `FL1`
- UEFA Champions League — `2001`, `CL`

**Conclusion:** These are current v4 lookup-table identifiers, not copied from the earlier legacy v2 reference.

## FD-COV-03 — Competition and season model

**Source:** https://docs.football-data.org/general/v4/competition.html  
**Retrieved:** 2026-09-17  
**Section:** **Competition — Overview**

The v4 Competition Resource is documented as the way to see which competitions are available to a client and to inspect how much historical data exists for a competition. It exposes `currentSeason` and a `seasons` collection. The docs support a `season` filter keyed by the starting year.

**Important correction against over-reading examples:** The Premier League payload on the page shows 2021/22 and other examples also use historical seasons. Those are **documentation examples**, not evidence that 2021/22 is current and not evidence of 2026/27 availability.

## FD-COV-04 — Public historical depth is incomplete

The current pricing page documents one explicit history entitlement: **ML Pack Light includes 10 seasons of history**. The general v4 Competition Resource says the competition endpoint exposes historical season availability, but this public-documentation pass did not obtain a current six-competition season enumeration.

**Conclusion:** Exact earliest/latest available seasons for each scoped competition remain **unknown** from the pages inspected. It would be incorrect to import old historical-depth claims from earlier API versions.

**No account-access dependency is asserted:** the remaining check is first to locate any current public catalogue/documentation exposing those season lists. An authenticated endpoint could also answer it, but this Prompt 2 public pass does not require credentials.

## FD-COV-05 — Core and deep data categories

**Sources:**  
- https://www.football-data.org/pricing  
- https://docs.football-data.org/general/v4/competition.html  
- https://docs.football-data.org/general/v4/match.html  
- https://docs.football-data.org/general/v4/lookup_tables.html

**Documented core categories:** fixtures/schedules, scores, competition matches, standings for supported competition types, teams and season filtering.

**Documented deeper categories:** lineups, substitutes, goals/scorers, bookings/cards and squads. v4 request headers can unfold lineups, bookings, substitutions and goals in match-list responses.

The v4 Match Resource additionally demonstrates fields including attendance, venue, team lineups/bench, goals, penalties, bookings and a statistics object. The statistics example includes corners, free kicks, goal kicks, offsides, fouls, possession, saves, throw-ins, shots and cards.

**Limit:** A field appearing in a v4 sample is evidence that v4 supports that field shape, **not proof that it is populated for all six competitions/seasons or available under every plan**.

## FD-COV-06 — Statistics and odds are separate add-ons

**Source:** https://www.football-data.org/pricing  
**Retrieved:** 2026-09-17

- **Odds Add-On:** €15/month, 40 competitions, pre-match home/draw/away odds.
- **Statistic Add-On:** €15/month, listing corners, free kicks, goal kicks, offsides, fouls, possession, saves, throw-ins, shots on/off goal and cards.
- A **regular plan is required first** before an add-on can be booked.
- The page states: **VAT charges may apply.**

**Limit:** The public coverage table contains Odds/Stats columns, but the text extraction inspected here did not preserve the visual per-row markers well enough to prove that each add-on covers every one of the six scoped competitions. That competition-by-add-on mapping remains unresolved.

## Package restrictions and quotas

### FD-COV-07 — Current public pricing

**Source:** https://www.football-data.org/pricing  
**Retrieved:** 2026-09-17

| Plan | Price | Competitions | Score/schedule status | Deep data | Published quota |
|---|---:|---:|---|---|---:|
| Free | **€0/month** | 12 | Scores delayed; fixtures; schedules delayed | League tables; no deep-data list advertised | **10 calls/min** |
| Free w/ Livescores | **€12/month** | 12 | Live scores; fixtures/schedules | League tables | **20 calls/min** |
| ML Pack Light | **€29/month** | 12 | Live scores; fixtures/schedules | League tables; advanced trend/form; **10 seasons history** | **20 calls/min** |
| Free + Deep Data | **€29/month** | 12 | Live scores; fixtures/schedules | Lineups/subs, goal scorers, bookings/cards, squads | **30 calls/min** |
| Standard | **€49/month** | 30 | Live | Same advertised deep categories | **60 calls/min** |
| Advanced | **€99/month** | 50 | Live | Same advertised deep categories | **100 calls/min** |
| Pro | **€199/month** | 100 | Live | Same advertised deep categories | **120 calls/min** |

Prices marked with `*` on the page carry the note **“VAT charges may apply.”**

### FD-COV-08 — Rate-limit documentation conflicts with current pricing

**Source:** https://docs.football-data.org/general/v4/policies.html  
**Section:** **Request-Throttling**

The v4 policy page says registered clients receive **10 requests/minute on Free, 30/minute on Standard, and 60/minute on all plans above**. This conflicts with the current pricing page, which publishes Standard 60, Advanced 100 and Pro 120 calls/minute and also includes newer plans not represented in that policy sentence.

**Conclusion:** The pricing page and v4 policy page are inconsistent on paid-plan rate limits. This report preserves the contradiction rather than selecting one as the effective contractual/technical limit.

The same policy page says unauthenticated clients get **100 requests per 24 hours** and can access only area and competition-list resources.

## Update and freshness guidance

### FD-COV-09 — Live versus delayed is package-defined

The current pricing page explicitly distinguishes:
- Free: **scores delayed** and **schedules delayed**;
- all listed paid regular variants: **live scores**, with fixtures/schedules.

This is current package-level freshness evidence, but the page does **not state a numerical delay for the Free plan** and does not provide a numerical live-score SLA.

### FD-COV-10 — v4 resource update guidance

**Source:** https://docs.football-data.org/general/v4/competition.html  
**Section:** **Matches**

The v4 Competition documentation says the Match Subresource is typically used “in a regular interval to update basic information like dates and scores.”

**Source:** https://docs.football-data.org/general/v4/policies.html  
**Sections:** **Defaulting in terms of point in time**; **Current season**

The v4 policy defaults date-sensitive data to the current UTC point in time. It defines “current season” as the season with the latest starting date.

**Conclusion:** Current v4 docs establish current-time/current-season behavior and periodic updating, but **no numerical polling interval, guaranteed latency or freshness SLA was found on the inspected current v4 pages**.

## Standings caveat for Champions League

### FD-COV-11

**Source:** https://docs.football-data.org/general/v4/competition.html  
**Section:** **Standings**

v4 documentation says the Standings Resource:
- returns 404 for competitions of type `CUP` and `PLAYOFFS`;
- provides group standings for `LEAGUE_CUP`;
- provides total/home/away standings for `LEAGUE`.

The current coverage page classifies UEFA Champions League as **CUP**.

**Conclusion:** Do not infer that the generic “League Tables” plan bullet means the standard v4 standings endpoint necessarily provides a Champions League table. The public docs create a competition-type limitation that must be checked against the current Champions League format/data representation.

## Actual observations

**None.** No API token was requested or used, and no authenticated `/v4/competitions/{id}` or match response was executed. Current catalogue entries and v4 documentation are reported as documentation evidence only.

## Exact remaining Prompt 2 checks

1. **Available seasons:** locate current public season lists for IDs 2021, 2014, 2019, 2002, 2015 and 2001, or otherwise leave exact historical depth unresolved; do not import legacy v1/v2 depth claims.
2. **Current 2026/27 season evidence:** find current public/API evidence for each competition's `currentSeason`; dated v4 examples must remain examples.
3. **Deep-data competition mapping:** determine whether lineups/subs, scorers, bookings/cards and squads are uniformly available for all six or vary by competition/season.
4. **Stats Add-On mapping:** verify the per-competition markers for all six because the current coverage page's visual table did not survive text extraction reliably.
5. **Odds Add-On mapping:** same check for pre-match odds.
6. **Champions League standings:** reconcile the current Champions League format with v4's documented CUP/LEAGUE_CUP standings behavior using current official evidence.
7. **Rate limits:** reconcile current pricing quotas (60/100/120 for Standard/Advanced/Pro) with the stale/inconsistent v4 policy statement (30 Standard/60 above). Do not assume the effective limit.
8. **Free-plan delay:** find current official numerical delay/update wording if published; otherwise keep “delayed” without inventing a threshold.
9. **Live update cadence:** find any current v4 numerical update/polling guidance or SLA if published; the current pages inspected establish live/delayed categories but no guaranteed latency.
10. **Advanced trend/form data:** inspect its current documentation/field definitions before treating the ML Pack Light bullet as a known field set.
11. **xG:** a 2026 official blog post says xG is planned/coming soon; it is **not recorded as currently available** without current API/coverage documentation.

## Primary pages inspected — eight-page budget

1. **Current Coverage** — https://www.football-data.org/coverage
2. **Current Pricing** — https://www.football-data.org/pricing
3. **v4 Competition Resource** — https://docs.football-data.org/general/v4/competition.html
4. **v4 Lookup Tables** — https://docs.football-data.org/general/v4/lookup_tables.html
5. **v4 API Policies** — https://docs.football-data.org/general/v4/policies.html
6. **v4 Match Resource** — https://docs.football-data.org/general/v4/match.html
7. **v4 Team Resource** — https://docs.football-data.org/general/v4/team.html
8. **Current official Blog** — https://www.football-data.org/blog — inspected only for current xG status; older v1/v2 historical posts were not used as current coverage evidence.

**Page-budget status:** 8 primary pages inspected. No further page was promoted into the evidence set.

## Stop

This is a **partial Prompt 2 public-documentation review** for football-data.org. It establishes current catalogue presence for all six competitions, current v4 IDs/codes, documented v4 data structures, current public package restrictions/prices and an unresolved quota discrepancy. It does not claim current-season API observations or exact historical depth where the inspected public evidence did not establish them.

Prompt 3 was not performed.
