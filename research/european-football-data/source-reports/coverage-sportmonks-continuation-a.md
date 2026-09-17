# Amendment — Sportmonks Prompt 2 continuation A

**Researcher:** ChatGPT (GPT-5.6 Sol)  
**Retrieval date:** 2026-09-17  
**Scope:** New findings and corrections only. This amends, rather than replaces, the original candidate inventory and the partial `coverage-sportmonks.md` checkpoint.  
**Status:** Partial. No authenticated API request was performed. Prompt 3 not performed.

## Corrections to the checkpoint

### SM-A-CORR-01 — 2025/26 examples are not current-season verification

**Correction:** Every earlier statement that treated a documented `2025/26` season example as evidence of **current-season availability on 2026-09-17** is withdrawn.

The API 3.0 Leagues documentation contains examples in which Premier League season `25583` and Champions League season `25580` are marked `is_current: true`, but the example payloads themselves contain November 2025 timestamps. They therefore document the API shape and the state represented by those examples; they do **not** verify the current 2026/27 state as of this research date.

Likewise, the competition pages for Premier League, La Liga, Serie A, Bundesliga and Ligue 1 contain 2025/26 feed examples. Those are useful evidence that Sportmonks held data for those seasons, not proof that the provider's current catalogue/account exposes 2026/27.

- Source: https://docs.sportmonks.com/v3/endpoints-and-entities/endpoints/leagues
- Retrieval date: 2026-09-17
- API version: 3.0
- Limit: dated documentation example, not a live API observation.

## New league-ID findings

### SM-A-ID-01 — Serie A league ID

Sportmonks' current official solutions page displays `Serie A id 384`. The current Serie A competition page also shows a 2025/26 fixture payload with `league_id: 384`.

**Conclusion:** **Serie A league ID = `384` (documented by current official Sportmonks pages).**

- Sources:
  - https://www.sportmonks.com/football-api/solutions/
  - https://www.sportmonks.com/football-api/serie-a-api/
- Retrieval date: 2026-09-17
- Limit: ID is documented; this does not by itself prove current-season entitlement or account availability.

### SM-A-ID-02 — Ligue 1 league ID

The current Ligue 1 competition page shows fixture and prediction payload examples with `league_id: 301` and 2025/26 `season_id: 25651`.

**Conclusion:** **Ligue 1 league ID = `301` (documented by current official Sportmonks page).**

- Source: https://www.sportmonks.com/football-api/ligue-1-api/
- Retrieval date: 2026-09-17
- Limit: ID is documented; the displayed season example is 2025/26 and is not current-season verification.

## Current-season availability check — 2026/27

The research date is 2026-09-17, so for the five domestic leagues and UEFA Champions League the relevant current edition is **2026/27**, not 2025/26.

| Competition | New public evidence | Classification for current-season availability |
|---|---|---|
| Premier League | Official Sportmonks article, updated 2026-08-05, discusses the 2026/27 Premier League and says Sportmonks data can be used to track the race. | **Current 2026/27 marketing evidence found; current catalogue/API availability not independently verified.** |
| La Liga | Official Sportmonks article, updated 2026-08-06, describes the 2026/27 campaign and Sportmonks prediction/data products. | **Current 2026/27 marketing evidence found; current catalogue/API availability not independently verified.** |
| Serie A | Official Sportmonks article, updated 2026-08-06, describes the 2026/27 Serie A campaign and Sportmonks APIs/add-ons. | **Current 2026/27 marketing evidence found; current catalogue/API availability not independently verified.** |
| Bundesliga | Official Sportmonks article, updated 2026-08-06, describes the 2026/27 Bundesliga campaign. | **Current 2026/27 marketing evidence found; current catalogue/API availability not independently verified.** |
| Ligue 1 | Official Sportmonks article, updated 2026-08-06, says the Ligue 1 API provides the live table, form and fixtures “as the season unfolds” in its 2026/27 discussion. | **Current 2026/27 marketing evidence found; current catalogue/API availability not independently verified.** |
| UEFA Champions League | A current Sportmonks article published in 2026 discusses the 2026/27 Champions League structure and says “our current Champions League data” exposes stages, but its concrete Sportmonks identifier example remains the 2025/26 season (`25580`). | **2026/27 competition/product marketing evidence found; no 2026/27 season ID or current catalogue/API response verified in this batch.** |

### SM-A-CURR-01 — exact account/API dependency

Sportmonks documents `GET /v3/my/leagues` as returning all leagues available **within the caller's subscription**. It requires an API token. The normal League-by-ID endpoint can include `currentSeason`, but it likewise requires an API token.

Therefore, the exact dependency for turning the public evidence above into an **account-specific current-availability observation** is an authorized Sportmonks API token for the subscription being evaluated, followed by:

- `GET /v3/my/leagues`
- and, for each target league ID, `GET /v3/football/leagues/{ID}?include=currentSeason`

No credentials were requested and no authenticated calls were made.

- Sources:
  - https://docs.sportmonks.com/v3/core-api/my-sportmonks/get-my-leagues
  - https://docs.sportmonks.com/v3/endpoints-and-entities/endpoints/leagues/get-league-by-id
- Retrieval date: 2026-09-17
- API version: 3.0

## Package and pricing findings

### SM-A-PRICE-01 — league-selection limits and billing basis

The current official Football API pricing page publishes both monthly and yearly billing:

| Plan | Monthly billing | Yearly-billed equivalent shown | League selection |
|---|---:|---:|---:|
| Starter | from **€29/month** | **€24/month**, paid yearly | any **5** leagues |
| Growth | from **€99/month** | **€79/month**, paid yearly | any **30** leagues |
| Pro | from **€249/month** | **€199/month**, paid yearly | any **120** leagues |
| Enterprise | **Custom** | **Custom** | all advertised leagues |

Sportmonks states that paid plans can be month-to-month with no minimum commitment; selected leagues can be swapped subject to a monthly swap limit, and extra-league add-ons can be purchased.

- Source: https://www.sportmonks.com/football-api/plans-pricing/
- Retrieval date: 2026-09-17
- Limit: the numerical monthly **swap limit itself was not stated in the inspected material**.

### SM-A-PRICE-02 — quota correction

The current dedicated API 3.0 rate-limit documentation states:

- Starter: **2,000 API calls / entity / hour**
- Growth: **2,500 / entity / hour**
- Pro: **3,000 / entity / hour**
- Enterprise: **5,000 / entity / hour**

Limits are per entity rather than per endpoint and reset one hour after the first request to that entity. API-call add-ons can increase the limit.

**Correction:** Any earlier checkpoint wording that assigned **2,500 to Pro and 3,000 to Growth** was reversed and is corrected by the current dedicated rate-limit documentation and current pricing page.

- Source: https://docs.sportmonks.com/v3/api/rate-limit
- Retrieval date: 2026-09-17
- API version: 3.0

### SM-A-PRICE-03 — historical and capacity add-ons

The pricing FAQ states that historical data **older than three seasons** is a one-time add-on for Starter, Growth and Pro; Enterprise includes full historical access. It also states that extra API-call packages and extra-league add-ons are available.

- Source: https://www.sportmonks.com/football-api/plans-pricing/
- Retrieval date: 2026-09-17
- Limits: prices for these add-ons were not established on the inspected page; no assumption is made about which advanced-data add-ons are included beyond the page's own plan wording.

### SM-A-PRICE-04 — currency and VAT

The official pricing material uses **EUR (€)**. An official Sportmonks Football Stats API page explicitly states that prices are **exclusive of VAT** and that VAT is applied at the standard rate where applicable. The main plans/pricing page inspected for plan amounts did not expose a more specific country/tax calculation in the retrieved material.

- Sources:
  - https://www.sportmonks.com/football-api/plans-pricing/
  - https://www.sportmonks.com/football-api/football-stats-api/
- Retrieval date: 2026-09-17
- Limit: no jurisdiction-specific VAT rate or customer tax treatment was established.

## Unresolved Prompt 2 checks after continuation A

1. **Current 2026/27 season IDs for all six competitions:** not established from a current catalogue/API response in this batch.
2. **Account-specific current availability:** requires an authorized Sportmonks API token and the documented `My Leagues` / league `currentSeason` calls. Stop this check unless such access is separately authorized; do not request credentials.
3. **Champions League 2026/27:** public 2026/27 product/competition discussion exists, but a current Sportmonks 2026/27 season ID/API response remains unverified.
4. **Current coverage-feature flags by competition:** still require the documented coverage mechanisms/account evidence; public marketing is not promoted to account observation.
5. **League-swap limit:** pricing says swaps are subject to a monthly limit, but the exact numeric limit remains unresolved.
6. **Add-on prices and exact entitlement mapping:** historical, extra-league and extra-call add-ons are documented as available, but their prices were not established here; advanced products still need a bounded package-entitlement check.
7. **Tax:** EUR and VAT-exclusive wording are documented, but no jurisdiction-specific VAT treatment was checked.

## Primary pages used in continuation A

1. https://docs.sportmonks.com/v3/endpoints-and-entities/endpoints/leagues
2. https://docs.sportmonks.com/v3/core-api/my-sportmonks/get-my-leagues
3. https://docs.sportmonks.com/v3/endpoints-and-entities/endpoints/leagues/get-league-by-id
4. https://www.sportmonks.com/football-api/solutions/
5. https://www.sportmonks.com/football-api/serie-a-api/
6. https://www.sportmonks.com/football-api/ligue-1-api/
7. https://www.sportmonks.com/football-api/plans-pricing/
8. https://docs.sportmonks.com/v3/api/rate-limit

**Page-budget note:** eight primary pages were retained for the bounded continuation. Other official Sportmonks search results were used only to locate current-season references; they are not promoted here into additional primary-page claims beyond the classifications stated above.

**Stop:** Prompt 2 continuation A ends here. Prompt 3 has not been performed.
