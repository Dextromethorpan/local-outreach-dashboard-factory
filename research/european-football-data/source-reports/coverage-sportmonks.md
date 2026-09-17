# Coverage review — Sportmonks Football API

**Assignment:** Prompt 2 — Sportmonks only  
**Researcher:** ChatGPT (GPT-5.6 Sol)  
**Retrieval date:** 2026-09-17  
**API documentation:** Football API 3.0 / v3  
**Status:** **PARTIAL** — bounded by the eight-primary-page limit. No authenticated API calls were made.  
**Scope:** Premier League, La Liga, Serie A, Bundesliga, Ligue 1, UEFA Champions League.  
**Stopping boundary:** Prompt 2 only; no Prompt 3 rights classification.

## Evidence-status vocabulary

- **Marketing claim** — statement on an official Sportmonks product/competition page.
- **Documented** — current Sportmonks API 3.0 documentation describes an endpoint, ID, entity, workflow or coverage-check mechanism.
- **Observed** — response obtained by the researcher from an executed API request. **None in this review** because no credentialed API test was authorized/performed.
- **Unknown / not checked** — the eight-page budget did not support verification.
- **Not established** — evidence seen does not justify the stronger claim.

Sportmonks' own current documentation says that account-specific `My` endpoints are the “single source of truth” for features enabled for a league/account. Consequently, public marketing coverage is not upgraded here into an actual observation.

## Competition coverage summary

| Competition | Competition-specific evidence | Current ID / season evidence | Fixtures/results | Standings | Teams / players / lineups | Match events / statistics | Advanced metrics | Tracking | Historical depth | Live/delayed evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Premier League** | API 3.0 docs explicitly use English Premier League as a simple domestic-league example. General current coverage page also names Premier League. | **Documented:** `league_id: 8`; API docs show 2025/26 `season_id: 25583` in an example response. | **Documented at endpoint/structure level** via league→season/stage/round workflow; marketing pages claim fixtures/live scores/events. | **Documented:** docs give `/standings/seasons/25583` for the example season. | **Marketing/general documentation only in this batch**; no PL fixture response inspected for lineup/player fields. | **Marketing/general documentation only in this batch.** | Coverage-dependent; public feature workflow says check xG/feature-specific coverage. | **Not established.** Ball-coordinate availability is not continuous player/ball tracking. | **Unknown** in this batch. | Live league/fixture mechanisms are documented generally; no PL live request observed. | **Partial** |
| **La Liga** | API 3.0 docs explicitly list La Liga as simple domestic league; official La Liga page claims broad coverage. | **Documented:** `league_id: 564`. Current season ID not verified in the bounded pages. | **Marketing claim:** schedules, historical results, live scores. | **Marketing claim:** live standings; generic v3 standings workflow applies but no La Liga response observed. | **Marketing claim:** squads, player profiles, formations, lineups. | **Marketing claim:** match statistics and in-play events. | **Marketing claim:** xG, expected lineups, Pressure Index, Match Facts; feature-specific availability still requires coverage checks. | **Not established.** Page mentions ball-coordinate tracking; that is not evidence of continuous tracking. | Historical data claimed; exact season depth not verified. | Live data claimed; no API observation and no league-specific freshness commitment verified. | **Partial** |
| **Serie A** | API 3.0 docs explicitly list Serie A as a simple domestic league; general Sportmonks coverage/Football API material names Serie A. | **Unknown in this batch:** no Serie A league ID or current season ID captured from the eight retained pages. | Supplier-wide/general claim only. | Generic v3 league/standings structure supports the category, but Serie A-specific response not inspected. | Supplier-wide/general claim only. | Supplier-wide/general claim only. | **Unknown competition-specific availability.** | **Not established.** | **Unknown.** | **Unknown competition-specific live/freshness evidence.** | **Partial — largest competition-specific gap** |
| **Bundesliga** | Official Bundesliga page plus API 3.0 league documentation. | **Documented:** `league_id: 82`. Current season ID not captured in retained evidence. | **Marketing claim:** schedules, historical results, live scores. | **Marketing claim:** live standings. | **Marketing claim:** squads/player profiles, formations/lineups. | **Marketing claim:** detailed match stats and in-play events; page names possession, shots, passes, corners, fouls, cards, tackles, interceptions, saves, offsides, chances, etc. | **Marketing claim:** xG/add-on, Pressure Index, Match Facts. | **Not established.** Ball-coordinate language does not prove continuous player/ball tracking. | **Marketing claim:** results/final standings from 2005/06; deeper fixtures/player stats/lineups/events “roughly 2010 onwards depending on availability.” | **Marketing claim:** real-time scores/events/statistics; no executed observation. | **Partial, comparatively strong public evidence** |
| **Ligue 1** | Official Ligue 1 page. | **Marketing page documents:** 2025/26 `season_id: 25651`; league ID not captured in retained evidence. | **Marketing claim:** every fixture, current/historical schedules. | General category claimed; no Ligue 1 standings response inspected. | **Marketing claim:** squads/teams; fixture includes said to support lineups. | Broad marketing coverage; exact Ligue 1 event/stat fields not enumerated in retained evidence. | Page describes “advanced metrics” generally; feature-by-feature Ligue 1 availability not verified. | **Not established.** | Page claims historical and current schedules; exact earliest season not verified. | Immediate/current data is marketed, but no league-specific freshness commitment or observation was verified. | **Partial** |
| **UEFA Champions League** | API 3.0 docs and official Champions League page. | **Documented:** `league_id: 2`, 2025/26 `season_id: 25580`. | **Documented/marketing:** qualifying, league phase and knockout structure; page gives schedule/fixture paths. | **Documented/marketing:** league-stage table; docs describe stages/rounds. | **Marketing claim:** squads/player profiles, formations/lineups. | **Marketing claim:** match statistics and in-play events. | **Marketing claim:** xG/xPts, expected lineups, Pressure Index. | **Not established.** Ball-coordinate fixture data is not continuous tracking. | Marketing page claims covered historical UCL seasons including legacy group-stage era; wording on earliest year is internally suspect (“2005/26”) and is **not normalized or silently corrected**. | Page says REST polling of livescore endpoint typically every 10–15 seconds; this is usage guidance, not an SLA or an executed freshness measurement. | **Partial, comparatively strong public evidence** |

## Important distinction: coordinates are not tracking

Official competition/product pages refer to **ball coordinate tracking**, and Sportmonks documentation exposes fixture/event-related coordinate concepts. This review does **not** classify that as optical/tracking data or continuous player/ball trajectories. No retained source establishes frame-by-frame player coordinates, continuous ball trajectories, tracking frequency, tracking provider, or tracking completeness. Therefore:

- **match/event coordinates:** potentially available / feature-dependent;
- **continuous player tracking:** **not established**;
- **continuous ball tracking:** **not established**.

## Documented API 3.0 structure

The current v3 Leagues documentation establishes the normalized hierarchy and league identifiers used in this review. It identifies simple domestic-league examples including Premier League, La Liga, Serie A and Bundesliga; gives `league_id` 8 for Premier League, 564 for La Liga and 82 for Bundesliga; and gives `league_id` 2 for Champions League. It also documents league→current season→stage/round relationships and season standings.

The current “Data features per league” guide is especially important because Sportmonks instructs users to check feature availability by league and says the account-level `My` endpoints should be used as the authoritative view of enabled features. It specifically warns against relying on outdated static lists. That prevents this review from treating a broad product page as proof that every advertised feature is populated for every scoped competition and season.

## Package / quota evidence retained

The competition pages inspected consistently advertise:

- Starter: starting at **€29/month**, 5 leagues, **2,000 API calls per entity per hour**.
- Growth: starting at **€99/month**, 30 leagues, **2,500 per entity per hour**.
- Pro: starting at **€249/month**, 120 leagues, **3,000 per entity per hour**.
- Enterprise: custom, all advertised leagues, **5,000 per entity per hour**.
- Advanced products such as xG/Pressure Index, odds/predictions, news, historical data and other features may be separate bundles/add-ons.

These are public supplier statements, not an executed entitlement test. VAT/currency/legal-use questions belong to later rights/terms work, not this Prompt 2 coverage review.

## Freshness

No independent API timing test was executed. Public material markets live data. The Champions League page advises polling the in-play livescore endpoint roughly every 10–15 seconds. That is **not recorded as a contractual freshness SLA**. No universal latency threshold is assumed.

## Media

League/team `image_path` and logo/crest presentation are referenced by Sportmonks materials, but **media availability is kept separate from media rights**. This file does not infer permission to redistribute logos, photos, video, or other media. Rights analysis is reserved for Prompt 3.

## Claims and evidence

### SM-COV-01 — API version and league model
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://docs.sportmonks.com/v3/endpoints-and-entities/endpoints/leagues
- **Retrieved:** 2026-09-17
- **Version:** API 3.0 / v3; page reported updated 3 months ago.
- **Evidence:** Current docs describe leagues, seasons, stages and rounds; simple domestic examples include Premier League, La Liga, Serie A and Bundesliga.
- **Conclusion:** Current versioned documentation supports the competition/entity model used here.
- **Limits:** Documentation examples are not authenticated observations of this researcher's subscription.

### SM-COV-02 — Identifiers captured from v3 docs
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://docs.sportmonks.com/v3/endpoints-and-entities/endpoints/leagues
- **Retrieved:** 2026-09-17
- **Version:** API 3.0.
- **Evidence:** Premier League `8`; La Liga `564`; Bundesliga `82`; Champions League `2`; examples show Premier League 2025/26 season `25583` and Champions League 2025/26 `25580`.
- **Conclusion:** These IDs are documented rather than inferred.
- **Limits:** Serie A and Ligue 1 league IDs were not established within the retained page set.

### SM-COV-03 — Feature availability must be checked per league/account
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://docs.sportmonks.com/v3/tutorials-and-guides/tutorials/data-features-per-league
- **Retrieved:** 2026-09-17
- **Version:** API 3.0; page reported updated 7 days ago.
- **Evidence:** Guide instructs users to cross-reference league/features and calls the `My` endpoints the “single source of truth” for what is enabled in an account.
- **Conclusion:** Marketing lists cannot be promoted to verified per-league field availability without the relevant feature/coverage evidence or API observation.
- **Limits:** No account/API-token test was authorized.

### SM-COV-04 — Public coverage catalogue
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://www.sportmonks.com/football-api/coverage/
- **Retrieved:** 2026-09-17
- **Page state:** displayed last update 2026-08-18.
- **Evidence:** Sportmonks says the catalogue covers 2,200+ leagues and specifically names Premier League and Champions League; coverage fields vary by league.
- **Conclusion:** Useful supplier coverage evidence, not field-level verification.
- **Limits:** The downloadable/full matrix was not exhaustively extracted within this batch.

### SM-COV-05 — La Liga competition page
- **Source:** https://www.sportmonks.com/football-api/la-liga-api/
- **Retrieved:** 2026-09-17
- **Evidence type:** Marketing/competition-specific.
- **Evidence:** Claims schedules/historical results, match statistics/events, squads/player profiles, formations/lineups, live standings/top scorers, xG and other advanced products.
- **Conclusion:** Strong competition-specific supplier claim.
- **Limits:** No authenticated response observed; feature add-ons and season-by-season completeness remain to verify.

### SM-COV-06 — Bundesliga competition page
- **Source:** https://www.sportmonks.com/football-api/bundesliga-api/
- **Retrieved:** 2026-09-17
- **Evidence type:** Marketing/competition-specific.
- **Evidence:** Enumerates match-stat categories and claims historical depth: results/final standings from 2005/06 and deeper data roughly from 2010 depending on availability.
- **Conclusion:** Stronger public depth evidence than available for several other scoped leagues.
- **Limits:** Supplier claim only; “depending on availability” prevents uniform historical-field conclusions.

### SM-COV-07 — Ligue 1 competition page
- **Source:** https://www.sportmonks.com/football-api/ligue-1-api/
- **Retrieved:** 2026-09-17
- **Evidence type:** Marketing/competition-specific.
- **Evidence:** Claims current/historical schedules and gives 2025/26 season ID `25651`; describes squads/teams and fixture includes.
- **Conclusion:** Confirms a current Ligue 1 product/data claim and a current season identifier.
- **Limits:** League ID, earliest season and detailed field matrix remain unchecked.

### SM-COV-08 — Champions League competition page
- **Source:** https://www.sportmonks.com/football-api/champions-league-api/
- **Retrieved:** 2026-09-17
- **Evidence type:** Marketing/competition-specific plus endpoint examples.
- **Evidence:** Gives league ID `2`, 2025/26 season ID `25580`, competition stages, fixtures/standings claims and live polling guidance.
- **Conclusion:** Strong current competition-specific evidence.
- **Limits:** Historical wording includes an apparent “2005/26” anomaly; preserved as a source issue rather than corrected. Polling guidance is not an SLA.

## Eight primary pages retained for this batch

1. https://docs.sportmonks.com/v3/endpoints-and-entities/endpoints/leagues
2. https://docs.sportmonks.com/v3/tutorials-and-guides/tutorials/data-features-per-league
3. https://www.sportmonks.com/football-api/coverage/
4. https://www.sportmonks.com/football-api/la-liga-api/
5. https://www.sportmonks.com/football-api/bundesliga-api/
6. https://www.sportmonks.com/football-api/ligue-1-api/
7. https://www.sportmonks.com/football-api/champions-league-api/
8. https://www.sportmonks.com/terms-of-service/

The Terms page is retained here only to record the corrected governing-terms location requested in the inventory handoff. **No Prompt 3 rights matrix or legal-clearance conclusion is made.**

## Exact remaining Prompt 2 checks

The eight-page limit prevents a complete Sportmonks coverage review. The next bounded Sportmonks coverage batch should check, in this order:

1. **Serie A:** official competition-specific coverage page/current catalogue row; league ID; 2025/26 season ID; exact historical depth; fixtures/results/standings; lineups; player/team statistics; events; advanced-feature flags.
2. **Premier League:** competition-specific page/current coverage row; exact historical depth and current feature flags beyond the structural v3 example already captured.
3. **Per-league feature matrix:** use the current documented coverage mechanisms for all six leagues, especially xG, Match Facts, predictions, news, expected lineups and any other add-ons; record documented/unknown separately.
4. **Fixture entity/includes documentation:** establish exact documented fields for scores/results, participants, events, lineups, statistics, formations, referees and venue data without assuming that an include is populated in every competition.
5. **Player/team statistics documentation:** establish field types and whether season/fixture statistics differ.
6. **Historical seasons:** enumerate current documented season IDs/earliest available seasons for each of the six competitions; distinguish base historical results from deeper event/player/lineup history.
7. **Live/freshness:** inspect livescore documentation for update semantics and any actual freshness commitment; do not convert polling recommendations into an SLA.
8. **Coordinates/tracking:** inspect ball-coordinate documentation and any dedicated tracking documentation. Keep event/ball coordinates separate from continuous tracking unless continuous trajectories are explicitly documented.
9. **Media availability:** document which API entities expose logos/images/media references; leave usage rights for Prompt 3.
10. **Package entitlements:** reconcile league selection, historical-data add-on, xG/Pressure Index and other bundle restrictions against the feature matrix.

No credentialed execution should be reported unless an API request is actually performed with authorized credentials.

## Handoff

This is a **partial Prompt 2 Sportmonks coverage review**. It supports current v3 competition identifiers for Premier League, La Liga, Bundesliga and Champions League, current-season IDs for Premier League, Ligue 1 and Champions League, and varying levels of official competition-specific supplier evidence. It does **not** yet establish a complete field-by-field, season-by-season matrix across all six competitions.

Stop here. Prompt 3 has not been executed.
