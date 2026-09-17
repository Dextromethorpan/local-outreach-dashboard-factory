# Rights review — API-Football

**Assignment:** Prompt 3 — API-Football only  
**Researcher:** ChatGPT (GPT-5.6 Sol)  
**Retrieval date:** 2026-09-17  
**Terms version:** current official Terms page, “Last updated: Mai 21, 2025”  
**Status:** Rights review only; not provider approval or legal clearance. Technical Prompt 2 gaps remain open.

## Core reconciliation

API-Football's Terms must be read without collapsing two distinct statements.

Under **Terms of use**, API-Football says it provides data so users can create “applications, websites, fantasy soccer games etc.” and prohibits directly reselling supplied data.

Under **Service & data**, it states: “We do not provide a ‘license’ for the use and publication of the data” in user-created applications, websites or other products; necessary permission must be obtained by the user from competent authorities. It also states that API-Football “does not grant any commercial rights on such competitions.”

**Conclusion:** API subscription/access authorizes use of the API service subject to its contract. It does not itself establish permission to publish the underlying competition data or grant underlying commercial competition rights. The Terms contemplate application-building while assigning responsibility for necessary publication/commercial rights to the user. They do not resolve which external rights are required for every use, competition or jurisdiction.

## Permitted-uses matrix

| Category | Classification | Section / short excerpt | Limits |
|---|---|---|---|
| API access / building applications | Contractually contemplated | **Terms of use:** “applications, websites, fantasy soccer games etc.” | Service access is distinct from publication rights. |
| Commercial display | Conditional / external-rights-dependent | **Service & data:** “do not provide a ‘license’ for the use and publication”; “does not grant any commercial rights” | Terms do not establish that every display requires the same separate licence; user must determine required rights. |
| Derived analysis | Ambiguous | **Terms of use:** projects may be created from data; direct resale prohibited | No definition of derived data, aggregation, statistical analysis, model outputs or transformation threshold. |
| Raw-data resale | Explicitly restricted without permission | **Terms of use:** “resale of our data without permission is not permitted” | Direct sale is expressly prohibited. |
| Raw redistribution without sale | Ambiguous / no affirmative general grant found | **Terms of use; Service & data** | Resale is addressed, but no general bulk-redistribution licence was found. |
| Customer exports / downstream publication | Ambiguous / external-rights-dependent | **Service & data:** publication permission must be obtained from competent authorities where necessary | CSV/PDF exports, downloadable tables, reports and downstream publications are not specifically classified. |
| Caching | Technically contemplated; contractual retention scope unclear | Official optimization guide: **Use caching as a quota strategy** | Terms do not specify cache TTL, retention duration or post-termination retention. Technical guidance is not a publication licence. |
| Attribution — numerical data | No general requirement found | No general numerical-data attribution clause found in Terms | Separate rightsholder licences may impose attribution. |
| Termination / suspension | Explicit provider powers | **Accounts and membership:** violations and recognized-rightsholder complaints can lead to suspension/termination | Survival of rights in previously fetched data is not stated. |
| Post-termination retention/use | Not found / unresolved | **Accounts and membership; Cancellation; Plans & Payments** | No explicit retention, deletion, display or reuse rule found for stored API responses/derived outputs. |
| Logos/images/trademarks | No IP licence granted by API-Football; third-party-rights-dependent | **Data/Logos/images:** “solely for identification and descriptive purposes”; API-Football “does not own” the assets | Use may require authorization/licensing from respective rights holders. |
| Third-party competition rights | Explicitly reserved / user responsibility | **Service & data:** data may be subject to third-party IP/commercial restrictions | Leagues, federations and event organizers are specifically identified. |
| Betting/TV/fantasy/mass media | Potential additional-licence requirement | **Service & data:** these uses “may require additional licenses” | Conditional wording; not a blanket conclusion for every use. |
| Account sharing | Restricted | **Terms of use:** accounts “may not be shared with other developers” | Dashboard team/project features do not by themselves rewrite this clause. |

## Direct dashboard vs RapidAPI

API-Football's **Subscription** section says users may subscribe directly through its dashboard or through RapidAPI and that “API data are the same regardless of the subscription chosen.” Administrative terms differ.

| Issue | Direct API-Football | RapidAPI |
|---|---|---|
| Account/payment/access | API-Football dashboard | RapidAPI manages account, payments and access |
| API data | Same, per API-Football | Same, per API-Football |
| Billing | Prepaid agreed period | Recurring monthly; overages may apply |
| Daily quota reset | 00:00 UTC | 24-hour cycle from subscription time |
| Quota exhaustion | Dashboard stops requests for remainder of day | Overage mechanism may apply |
| Cancellation | Purchases final; expiry returns account to Free | Stops next billing; API-Football Terms say access is immediately cancelled |
| Publication/commercial-rights disclaimer | Applies under API-Football Terms | API-Football Terms state the same disclaimer; RapidAPI's separate marketplace/customer terms were not inspected |

Nothing inspected establishes that RapidAPI grants broader competition-data rights. Conversely, this report does not claim RapidAPI imposes no additional terms.

## Claim register

### AF-RIGHTS-01 — Application creation vs publication licence
- **URL:** https://www.api-football.com/terms
- **Sections:** **Terms of use**; **Service & data**
- **Excerpts:** “create different projects such as applications, websites”; “do not provide a ‘license’ for the use and publication”.
- **Finding:** Application-building is contemplated, but publication permission is separately disclaimed.

### AF-RIGHTS-02 — Commercial competition rights
- **URL:** https://www.api-football.com/terms
- **Section:** **Service & data**
- **Excerpt:** “does not grant any commercial rights on such competitions.”
- **Finding:** API access is not represented as a grant of underlying commercial competition rights.
- **Limit:** Terms do not decide which particular uses legally require separate rights.

### AF-RIGHTS-03 — Raw resale
- **URL:** https://www.api-football.com/terms
- **Section:** **Terms of use**
- **Excerpts:** “prohibited to resell this data”; “cannot directly sell the data we provide.”
- **Finding:** Direct resale is explicitly restricted absent permission.

### AF-RIGHTS-04 — Third-party rights
- **URL:** https://www.api-football.com/terms
- **Section:** **Service & data**
- **Excerpt:** “subject to intellectual property rights or commercial restrictions imposed by third parties”.
- **Finding:** User must verify and obtain necessary external authorizations.

### AF-RIGHTS-05 — Derived outputs and customer exports
- **URL:** https://www.api-football.com/terms
- **Sections:** **Terms of use**; **Service & data**
- **Finding:** No specific transformation threshold or customer-export classification was found.
- **Classification:** Ambiguous; do not infer permission or prohibition beyond the clauses actually published.

### AF-RIGHTS-06 — Caching
- **URL:** https://www.api-football.com/news/post/how-to-optimize-api-sports-calls-and-quota-usage
- **Section:** **Use caching as a quota strategy**
- **Excerpt:** “Caching is not only about speeding up display.”
- **Finding:** Current official technical guidance contemplates caching responses to conserve quota.
- **Limit:** This does not define contractual retention duration, post-termination rights or third-party publication rights.

### AF-RIGHTS-07 — Attribution
- **URL:** https://www.api-football.com/terms
- **Finding:** No general numerical-data attribution requirement found.
- **Limit:** Separate rightsholder permissions may have their own conditions.

### AF-RIGHTS-08 — Media
- **URL:** https://www.api-football.com/terms
- **Section:** **Data/Logos/images**
- **Excerpts:** “solely for identification and descriptive purposes”; “does not own any of these visual assets”.
- **Finding:** API delivery does not constitute an IP grant for logos/images/trademarks; additional authorization may be necessary.

### AF-RIGHTS-09 — Rightsholder complaints / termination
- **URL:** https://www.api-football.com/terms
- **Section:** **Accounts and membership**
- **Excerpt:** recognized-rightsholder complaints may cause API access to “immediately suspend or terminate” “without refund”.
- **Finding:** A rights complaint can affect API access.
- **Limit:** Clause does not determine merits of any hypothetical complaint.

### AF-RIGHTS-10 — Post-termination use
- **URL:** https://www.api-football.com/terms
- **Sections:** **Accounts and membership**; **Cancellation**; **Plans & Payments**
- **Finding:** Access termination is described, but no explicit rule was found for continued retention/display/use of previously cached numerical data or derived analysis.

### AF-RIGHTS-11 — Subscription channels
- **URL:** https://www.api-football.com/terms
- **Sections:** **Subscription**; **Plans & Payments**; **Overages**; **Cancellation**
- **Excerpt:** “API data are the same regardless of the subscription chosen.”
- **Finding:** API-Football says direct and RapidAPI subscriptions deliver the same API data, while administration differs.
- **Limit:** RapidAPI's separate terms were not inspected.

## Unresolved rights questions

1. Which forms of public/commercial display of numerical competition data require separate rightsholder permission for each competition/use?
2. Where is the boundary between a contemplated application and prohibited direct resale/redistribution?
3. How are aggregated/derived datasets, analyses, rankings or model outputs treated?
4. How are CSVs, downloadable tables, reports, customer publications or syndicated outputs classified?
5. What contractual caching/retention period applies, and what happens to stored data after termination?
6. Do data partners impose additional terms not reproduced in API-Football's public Terms?
7. Which logos/images/trademarks require additional authorization for a given use?
8. What additional contractual conditions apply through RapidAPI? Its separate terms were outside this API-Football-only review.

## Technical coverage gaps preserved

Prompt 2 gaps remain open: authenticated 2026/27 season-specific feature flags, Serie A ID re-verification, complete historical depth, Free-plan season restrictions, fixture-level coverage variation and endpoint-specific freshness. No credentials were requested or used.

## Primary pages inspected

1. **API-Football — Terms of Service** — https://www.api-football.com/terms
2. **API-Football — Pricing** — https://www.api-football.com/pricing
3. **API-Football — Coverage** — https://www.api-football.com/coverage
4. **API-Football — How to optimize API-Sports calls and quota usage** — https://www.api-football.com/news/post/how-to-optimize-api-sports-calls-and-quota-usage

**Page-budget status:** 4 primary pages, within the eight-page maximum.

## Stop

Prompt 3 for API-Football ends here. No product or business model is assumed, no provider is approved, no vendor was contacted, no credentials were requested, and no technical coverage gap was closed by inference.
