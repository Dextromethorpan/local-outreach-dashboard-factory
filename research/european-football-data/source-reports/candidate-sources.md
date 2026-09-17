# Candidate sources — European football data landscape

**Assignment:** Prompt 1 — Candidate inventory  
**Researcher:** ChatGPT (GPT-5.6 Sol)  
**Retrieval date:** 2026-09-17  
**Scope:** Premier League (England), La Liga (Spain), Serie A (Italy), Bundesliga (Germany), Ligue 1 (France), UEFA Champions League.  
**Status:** Bounded candidate inventory only. No provider approved; no Prompt 2 coverage review performed.

## Method and status vocabulary

This inventory follows the attached research brief: each competition is to be assessed separately; public accessibility is not treated as an open licence; scraping is excluded; numerical-data rights and media rights remain separate; and unknowns are preserved rather than inferred.

For this Prompt 1 batch, a **supplier claim** means an official provider page says the competition or category is covered. **Observed dataset listing** means an official/open dataset catalogue itself contains a named competition/season. Neither status establishes complete field availability for every season. Detailed endpoint/field verification is deferred to Prompt 2.

## Candidate inventory

| Priority | Candidate / operator | Access method | Documented competition coverage in this batch | Data categories documented at inventory level | Licence / terms | Official pricing | Verification limits |
|---|---|---|---|---|---|---|---|
| 1 | **Sportmonks Football API — Sportmonks** | Authenticated JSON API | **Supplier claim:** official Football API page explicitly names Premier League, La Liga, Bundesliga, Serie A, Ligue 1 and Champions League among covered leagues. | Schedules/results; live scores; statistics; in-play events; squads/player profiles; formations/lineups; standings/top scorers; odds/predictions; xG; coach/referee data; transfer/news content; ball coordinates/match facts. | A current dedicated legal URL was **not located within this bounded batch**. Official site FAQ exposes a “Terms of service” topic, but the governing document still needs direct inspection. | https://www.sportmonks.com/football-api/plans-pricing/ (pricing also summarized on the Football API page) | Strong six-competition supplier claim and broad category list, but field/season depth is not yet verified competition-by-competition. Some advanced categories may be add-ons. |
| 2 | **API-Football — API-Sports / API-Football** | Authenticated REST API; direct dashboard subscription or RapidAPI | **Supplier claim:** official coverage catalogue contains UEFA Champions League and country league listings; the catalogue reports 1,245 leagues/cups and says detailed coverage varies by season/fixture. The batch did not exhaustively extract all five domestic rows, so exact six-of-six row verification remains queued. | Countries/seasons/leagues; standings; teams; livescore; fixtures; H2H; events; lineups; top scorers; players/coaches; transfers; trophies; injuries/sidelined; odds; statistics; predictions. | https://www.api-football.com/terms | https://www.api-football.com/pricing | Terms are unusually decision-relevant: provider says it does not itself grant publication/commercial rights in competition data and places responsibility for necessary permissions on the user. This is only an inventory flag; Prompt 3 is required for a rights matrix. |
| 3 | **football-data.org API — Daniel Freitag / football-data.org** | Authenticated REST API | **Coverage status: partial/needs current catalogue check.** Official pricing says plans cover 12–100 competitions depending on tier. A current v4 quickstart exists, but a full current six-competition catalogue was not inspected in this batch. | Fixtures; schedules; scores/live scores; league tables; lineups/substitutions; goal scorers; bookings/cards; squads; optional statistics such as possession, shots, fouls, corners, saves and offsides; some plans advertise historical/trend data. | https://www.football-data.org/about (page contains the service Terms & Conditions) | https://www.football-data.org/pricing | Candidate retained because current official pricing/terms are clear and v4 API is active, but six-competition coverage must be verified from current v4 coverage rather than relying on legacy v2 references. |
| 4 | **StatsBomb Open Data — StatsBomb / Hudl** | Downloadable JSON files in official GitHub open-data repository | **Observed dataset listings:** Premier League (e.g. 2015/16, 2003/04), La Liga (many historical seasons), Serie A (e.g. 2015/16, 1986/87), Bundesliga (e.g. 2023/24, 2015/16), Ligue 1 (e.g. 2022/23, 2021/22, 2015/16), Champions League (multiple historical seasons including 2018/19). Thus all six names occur, but only selected seasons are open. | Competition/season catalogue; matches; events; lineups; selected StatsBomb 360 data. | https://github.com/statsbomb/open-data (README terms plus repository `LICENSE.pdf`; licence document itself still needs clause-level review) | **N/A for this open dataset.** Commercial StatsBomb products are outside this candidate’s open-dataset status and were not priced in this batch. | Best evidence here is actual open catalogue presence, but it is historical/selected-season data, not evidence of current/live coverage. README frames the data as freely available for research/genuine interest and requires attribution/logo when publishing research/analysis/insights; exact licence scope still needs Prompt 3 review. |

## Claim register

### CAND-01 — Sportmonks six-competition coverage claim
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://www.sportmonks.com/football-api/
- **Retrieved:** 2026-09-17
- **Document/API version:** Football API v3 is illustrated on page; page itself has no legal-version identifier observed.
- **Section:** “2,200+ leagues. Every league page in depth” / FAQ.
- **Supporting excerpt:** “Premier League · La Liga · Bundesliga · Serie A · Ligue 1 · Champions League”
- **Conclusion:** Official provider page claims coverage of all six scoped competitions.
- **Limits:** This does not verify every field, season, add-on, or package for each competition.

### CAND-02 — Sportmonks category breadth
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://www.sportmonks.com/football-api/
- **Retrieved:** 2026-09-17
- **Version/section:** Current Football API page, “full feature set”.
- **Supporting excerpt:** Page lists schedules/results, match statistics/events, squads/player profiles, formations/lineups, live scores/standings/top scorers, odds/predictions, xG, coach/referee stats and ball coordinates.
- **Conclusion:** Broad supplier-wide feature claim supports prioritizing the provider for a competition-by-competition check.
- **Limits:** Supplier-wide categories are not verified field availability for any specific league/season.

### CAND-03 — API-Football catalogue and coverage granularity
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://www.api-football.com/coverage
- **Retrieved:** 2026-09-17
- **Document/API version:** Current web coverage catalogue; page shows last update 2026-09-15.
- **Section:** “All competitions in one place” / detailed coverage.
- **Supporting excerpt:** “1245 Leagues & Cups”; detailed coverage “may vary according to the seasons or fixtures”.
- **Conclusion:** Official coverage catalogue is suitable for Prompt 2 per-competition/per-season checks; UEFA Champions League is explicitly present.
- **Limits:** This batch did not exhaustively capture each of the five domestic target rows.

### CAND-04 — API-Football plans and categories
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://www.api-football.com/pricing
- **Retrieved:** 2026-09-17
- **Section:** Pricing.
- **Supporting excerpt:** “All our plans include all competitions and endpoints.”
- **Conclusion:** Official pricing lists Free $0/100 requests per day; Pro $19/7,500 per day; Ultra $29/75,000 per day; Mega $39/150,000 per day, with the listed endpoint categories.
- **Limits:** Free plan has season limitations; pricing alone does not establish legal publication rights or field availability.

### CAND-05 — API-Football rights warning
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://www.api-football.com/terms
- **Retrieved:** 2026-09-17
- **Document version:** Terms page states last updated May 21, 2025.
- **Section:** “Service & data” and “Data/Logos/images”.
- **Supporting excerpt:** “We do not grant any commercial rights on such competitions.”
- **Conclusion:** Provider terms expressly separate API access from rights that may be required to use/publish competition data and media.
- **Limits:** No Prompt 3 rights classification has been performed; applicability to a specific intended use is not decided here.

### CAND-06 — football-data.org pricing/data categories
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://www.football-data.org/pricing
- **Retrieved:** 2026-09-17
- **Section:** Pricing.
- **Supporting excerpt:** Free plan advertises 12 competitions, delayed scores, fixtures and league tables; paid tiers add live scores and deeper data.
- **Conclusion:** Active candidate with transparent public plan information and several relevant data categories.
- **Limits:** Current six-competition coverage was not verified in this batch; plan/category statements are supplier-wide.

### CAND-07 — football-data.org governing terms location
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://www.football-data.org/about
- **Retrieved:** 2026-09-17
- **Document version:** Current Terms & Conditions embedded on About page; no separate version number observed.
- **Section:** “4. Subscriptions & Tiers” observed in this batch.
- **Supporting excerpt:** Terms state free and paid subscription tiers and point to the pricing page for features and limitations.
- **Conclusion:** A current official legal document is locatable for later Prompt 3 review.
- **Limits:** Rights clauses were not comprehensively reviewed because Prompt 1 stops at inventory.

### CAND-08 — StatsBomb Open Data structure and use framing
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://github.com/statsbomb/open-data
- **Retrieved:** 2026-09-17
- **Document version:** Repository README, current master.
- **Section:** “Terms & Conditions” / “Getting Started”.
- **Supporting excerpt:** README says selected leagues are freely available for “research projects and genuine interest in football analytics”.
- **Conclusion:** Genuine open-data candidate with JSON competition/season, match, event, lineup and selected 360 files.
- **Limits:** The repository licence PDF requires separate clause-level inspection before broader use is classified.

### CAND-09 — StatsBomb target-competition presence
- **Researcher:** ChatGPT (GPT-5.6 Sol)
- **Source:** https://raw.githubusercontent.com/statsbomb/open-data/master/data/competitions.json
- **Retrieved:** 2026-09-17
- **Document version:** Current repository competition catalogue.
- **Section/sample references:** competition IDs visible in catalogue include Bundesliga `9`, Champions League `16`, La Liga `11`, Premier League `2`, Serie A `12`, Ligue 1 `7`.
- **Conclusion:** All six scoped competition names occur in the open catalogue for at least one season.
- **Limits:** Presence is historical/selected-season evidence only; it does not imply current-season, live, or uniform field coverage.

## Prioritized research queue for Prompt 2

| Queue | Source | Why this order | Exact next check |
|---:|---|---|---|
| **1** | **Sportmonks Football API** | Clearest official six-competition supplier claim plus broad documented feature set and public pricing. | Verify each competition separately: stable IDs, available seasons, fixtures/results/standings, lineups, team/player stats, events, advanced metrics, tracking/coordinates, media, history, live/delayed status, packages/add-ons and quotas. Locate the governing terms URL but do not perform Prompt 3 rights analysis yet. |
| **2** | **API-Football** | Strong current coverage catalogue, transparent pricing, and a material legal caveat already visible. | Extract all six league IDs/seasons and coverage flags from the current catalogue/API documentation; distinguish advertised endpoints from fields actually documented for each league-season. |
| **3** | **football-data.org** | Clear current pricing and official terms, but this batch deliberately did not rely on its legacy v2 coverage table. | Use **current v4** documentation/coverage to verify all six competitions, IDs, seasons, fields, historical restrictions and plan-specific access. |
| **4** | **StatsBomb Open Data** | Actual dataset catalogue confirms all six names, but it is selected historical/open data rather than a general current feed. | Enumerate exact seasons for each target competition, dataset paths, event/lineup/360 availability, and document absence/presence without treating old seasons as current coverage. |

## Excluded / unverified candidates

No fifth source is promoted merely to fill the quota. Prompt 1 allows **up to five** candidates. Additional vendors/datasets encountered through non-primary search results were not added because they were not verified against enough current original provider material within the eight-primary-page budget. This is not evidence that they are unsuitable or absent from the market.

## Primary pages inspected in this bounded batch

1. Sportmonks — Football API: https://www.sportmonks.com/football-api/
2. API-Football — Coverage: https://www.api-football.com/coverage
3. API-Football — Pricing: https://www.api-football.com/pricing
4. API-Football — Terms: https://www.api-football.com/terms
5. football-data.org — Pricing: https://www.football-data.org/pricing
6. football-data.org — About / Terms & Conditions: https://www.football-data.org/about
7. StatsBomb/Hudl Open Data — official repository README: https://github.com/statsbomb/open-data
8. StatsBomb Open Data — `data/competitions.json`: https://raw.githubusercontent.com/statsbomb/open-data/master/data/competitions.json

**Page-budget status:** Complete for Prompt 1 inventory within the eight-page cap. Deeper field/season checks remain intentionally queued.

## Handoff / stopping boundary

Prompt 1 is complete as a candidate inventory. No source is approved. No market-wide absence conclusion is drawn. No product, graphics use, freshness threshold, English Championship scope, business model, customer demand, vendor contact, purchase, credential use, Gate 1 decision, or Prompt 2 coverage review has been undertaken.
