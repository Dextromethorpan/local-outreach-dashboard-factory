# Rights review — football-data.org

**Assignment:** Prompt 3 — football-data.org only  
**Researcher:** ChatGPT (GPT-5.6 Sol)  
**Retrieval date:** 2026-09-17  
**Published Terms:** `https://www.football-data.org/about`  
**Displayed date:** **Last updated: June 1, 2018**  
**Effective date:** **June 1, 2018** (§12.1)  
**Status:** Rights review of the published Terms; not provider approval or legal clearance. Technical Prompt 2 gaps remain open.

## Correction to retained Prompt 2 checkpoint

The earlier coverage review's statement that the coverage website classifies UEFA Champions League as `CUP` is only evidence about the **coverage website's displayed catalogue classification**. It does **not** establish the value returned by the current v4 API's `type` field for the current Champions League competition/season, and it does **not** prove that Champions League standings are unavailable.

The earlier inference from the v4 generic `CUP` standings behavior is therefore withdrawn as a current Champions League availability conclusion. Current API/type and standings behavior remain a technical Prompt 2 gap.

## Reading rule for this rights review

The published Terms contain a small number of explicit operational and intellectual-property clauses. They do **not** contain a general licence clause spelling out permitted commercial publication, redistribution, caching, derived-data or customer-export rights. This report therefore distinguishes:

- **Explicit:** the Terms directly say it.
- **Interpretation:** a limited implication from the wording, clearly labelled.
- **Silence / unresolved:** the Terms inspected do not answer the question.

No permission is inferred merely because the API technically exposes data or because a paid tier exists.

## Permitted-uses matrix

| Category | Classification | Terms evidence | Conclusion / limit |
|---|---|---|---|
| **Access/use of API** | **Explicit** | **§1.1 Accepting the Terms:** signing up accepts the Terms. **§2.2 Using the Football-Data API:** registered customers receive an API key “which they can use to access” the API. | Contract explicitly permits API access subject to registration, subscription and Terms. |
| **Application scope** | **Explicit restriction** | **§2.3:** API key applies to “a single Application”; for web, subscription applies to “a single domain name.” | One subscribed API key/application is contractually scoped to a single application/domain as described. |
| **Commercial application / commercial display of numerical data** | **Silence / unresolved** | No clause expressly grants or prohibits commercial publication/display while subscribed. §4 confirms paid tiers but is a subscription provision, not a publication licence. | A paid subscription cannot by itself be treated as an explicit commercial-publication licence. Conversely, the published Terms do not expressly prohibit commercial display during an active subscription. |
| **Numerical football data while subscribed** | **Implicit operational use; publication scope unresolved** | **§9.1** prohibits referencing specified football data *after cancellation*, including “match fixtures, results, league tables, player/squad data, top scorers.” | This strongly presupposes some ability to reference data before cancellation, but the Terms do not define the permitted audience, commercial scope, redistribution scope or external rights. Treat that as interpretation, not an affirmative licence clause. |
| **Derived analysis** | **Silence / unresolved** | No clause defines derived data, analytics, aggregations, model outputs or transformation thresholds. | No explicit permission or prohibition found. Do not equate access to raw data with a defined right to distribute derived datasets. |
| **Raw redistribution / resale** | **Silence / unresolved** | No inspected section expressly addresses resale, sublicensing, bulk redistribution or operating a downstream data feed. | Neither permission nor prohibition should be invented. |
| **Customer exports** | **Silence / unresolved** | No clause addresses CSVs, downloads, reports, customer exports, syndication or downstream publication. | Terms do not establish whether exports are permitted, restricted, or subject to a particular threshold. |
| **Caching / local storage by customer** | **Silence / unresolved** | No clause grants a cache/storage right or states a TTL/retention period. | §4.6 concerns deletion of the customer's account and corresponding provider-side “stored and indexed data”; it should **not** be interpreted as a rule about customer-created caches. |
| **Attribution** | **Explicitly required** | **§7.1 Attribution:** “Football data provided by the Football-Data.org API”. | Attribution must appear in the app/website in a visible location. |
| **Customer cancellation** | **Explicit** | **§4.3:** customer may cancel at any time; no partial-month refunds. **§4.6:** cancellation effective after the last subscription month and causes account deletion. | Access/account consequences are explicit. |
| **Provider cancellation** | **Explicit** | **§3.3:** excessive/unfair/inconsistent usage may lead to cancellation without prior formal notice. **§4.5:** provider can otherwise cancel with at least 15 days' written notice. | Published Terms provide multiple cancellation mechanisms. |
| **Post-termination use of numerical data** | **Explicitly restricted** | **§9.1 Intellectual Property:** after cancellation customer “is not permitted to reference the football data” obtained through the API on its own site/service. | Continued referencing/display on the customer's own site/service is expressly prohibited after cancellation. The clause does not separately define deletion obligations, archival retention, private analysis or third-party copies. |
| **Media — logos/profile photos/graphics** | **Explicit third-party-rights requirement** | **§9.2:** graphics including logos/profile photos “are copyrighted by their legal owner”; customer must “obtain consent” and arrange proof of IP rights. | API availability does not supply media permission. Rights must be obtained from respective owners. |
| **Other media categories** | **Silence / unresolved** | §9.2 expressly names graphics, team logos and profile photos; no separate clauses were found for video/audio or other media. | Do not generalize §9.2 into a complete media-rights catalogue beyond its wording. |
| **Accuracy/availability** | **Explicit disclaimer** | **§8.1 Warranties and Liability:** “no guarantees regarding the availability of the Service or the accuracy of the data”. | This is a warranty/availability disclaimer, not evidence of any particular update delay or freshness level. |
| **Credentials** | **Explicit restriction** | **§6.1:** credentials must remain confidential and may not be stored in open-source code repositories. | Operational access restriction; not a data-publication rule. |

## Claim register

### FD-RIGHTS-01 — API access
**Source:** `https://www.football-data.org/about`  
**Sections:** **§1 Accepting the Terms; §2 Using the Football-Data API**  
**Short excerpt:** API key “can be used to access the Football-Data API.”

**Finding:** Registration and acceptance of the Terms establish contractual API access. This is not, by itself, a detailed licence to redistribute or commercially publish the data.

**Classification:** Explicit access permission; downstream-use scope unresolved.

### FD-RIGHTS-02 — Single-application restriction
**Section:** **§2.3 Using the Football-Data API**  
**Short excerpt:** “API Key applies to a single Application”.

**Finding:** The subscription/API key is scoped to one application, and a web application to one domain name.

**Classification:** Explicit restriction.

### FD-RIGHTS-03 — Commercial display
**Sections checked:** **§2, §4, §7, §9**

**Finding:** The published Terms do not expressly say “commercial use is permitted” or “commercial display is prohibited” during an active subscription. Paid subscription tiers exist under §4, but payment alone is not explicit publication-rights language.

**Interpretation:** §9.1's post-cancellation prohibition on referencing football data implies that referencing data while subscribed is contemplated. It does not define the full commercial/publication scope.

**Classification:** Unresolved beyond active-service operational use.

### FD-RIGHTS-04 — Derived analysis
**Sections checked:** entire published Terms, especially **§7 Attribution** and **§9 Intellectual Property**.

**Finding:** No clause specifically addresses derived analyses, aggregations, transformations, rankings, statistical outputs or model-generated outputs.

**Classification:** Silence / unresolved.

### FD-RIGHTS-05 — Redistribution/resale
**Sections checked:** entire published Terms.

**Finding:** No explicit resale, sublicensing, raw-feed redistribution or bulk-transfer clause was found.

**Classification:** Silence / unresolved.

### FD-RIGHTS-06 — Customer exports
**Sections checked:** entire published Terms.

**Finding:** No explicit treatment of customer downloads, CSV/PDF exports, reports, syndication or downstream publication was found.

**Classification:** Silence / unresolved.

### FD-RIGHTS-07 — Caching and §4.6
**Section:** **§4.6 Subscriptions & Tiers**  
**Short excerpt:** cancellation causes “automatic deletion of the Customer's Account, along with all corresponding stored and indexed data.”

**Finding:** §4.6 states what cancellation does to the **Customer's Account and corresponding stored/indexed data** in the service context. It does not say that a customer's independently stored API cache must be deleted, nor does it grant a right to keep such a cache.

**Classification:** Customer-cache rights and retention duration remain unresolved.

### FD-RIGHTS-08 — Attribution
**Section:** **§7.1 Attribution**  
**Short excerpt:** “Football data provided by the Football-Data.org API”.

**Finding:** Attribution is expressly required in an app or website, in the footer, about section or another visible location.

**Classification:** Explicit requirement.

### FD-RIGHTS-09 — Post-cancellation numerical data
**Section:** **§9.1 Intellectual Property**  
**Short excerpt:** after cancellation customer “is not permitted to reference the football data”.

**Finding:** After cancellation, the customer may not reference API-obtained football data—including fixtures, results, tables, player/squad data and top scorers—on its own site/service.

**Classification:** Explicit post-cancellation display/reference restriction.

**Limit:** The clause does not expressly answer private archival retention, deletion of local databases, continued internal analysis, previously exported customer copies, or independently derived outputs.

### FD-RIGHTS-10 — Media
**Section:** **§9.2 Intellectual Property**  
**Short excerpts:** “copyrighted by their legal owner”; “obtain consent from the respective owners”.

**Finding:** Team logos/profile photos and graphics require the customer to arrange the necessary IP rights; football-data.org does not purport to grant those rights through API access.

**Classification:** Explicit third-party-rights requirement.

### FD-RIGHTS-11 — Warranty / availability
**Section:** **§8.1 Warranties and Liability**  
**Short excerpt:** “no guarantees regarding the availability of the Service or the accuracy of the data”.

**Finding:** The provider disclaims guarantees of availability and data accuracy.

**Classification:** Explicit disclaimer.

**Limit:** This does not prove any particular update delay, update frequency, SLA failure or freshness characteristic. Those remain Prompt 2 technical questions.

### FD-RIGHTS-12 — Terms date
**Terms heading:** **Last updated: June 1, 2018**  
**Section:** **§12.1 Effective Date:** “effective on June 1st, 2018.”

**Finding:** Although the site and pricing/coverage materials are current in 2026, the published General Terms themselves display a 2018 last-updated/effective date.

**Classification:** Explicit document metadata.

## Material unresolved rights questions

1. Does an active subscription expressly authorize **commercial publication/display** of numerical football data, and under what limits?
2. What rights, if any, apply to **derived analysis**, aggregated datasets and model outputs?
3. Is **raw redistribution/resale**, sublicensing or operating a downstream data feed permitted?
4. Are **customer exports** or downstream publications permitted, and under what conditions?
5. What **caching/storage** rights exist during a subscription, including retention duration?
6. After cancellation, does §9.1 apply to derived outputs as well as the enumerated/raw football data?
7. Must locally cached raw data be deleted after cancellation, or is only continued referencing/display prohibited?
8. Do upstream data suppliers, leagues or other third parties impose additional numerical-data rights not reproduced in the published Terms?
9. Are there additional media-rights rules beyond §9.2 for assets other than graphics/logos/profile photos?

These remain unanswered by the published document. No vendor contact is authorized in this assignment.

## Technical coverage gaps preserved

All technical Prompt 2 gaps remain open. In particular:

- exact six-competition historical season depth;
- current 2026/27 `currentSeason` observations;
- deep-data and Stats/Odds add-on mapping;
- effective paid-plan rate limits given the pricing/policy discrepancy;
- numerical Free-plan delay/live-update cadence;
- current Champions League API `type` and standings behavior.

The coverage website's `CUP` label is not promoted to current API evidence and is not treated as proof that Champions League standings are unavailable.

## Primary pages inspected

1. **football-data.org — About / published General Terms and Conditions**  
   `https://www.football-data.org/about`  
   Primary rights source. Displayed “Last updated: June 1, 2018”; §§1–12 inspected.

2. **football-data.org — FAQ**  
   `https://www.football-data.org/documentation/faq`  
   Used only to cross-check the current public attribution guidance; the Terms remain controlling evidence for this report.

3. **football-data.org — Coverage**  
   `https://www.football-data.org/coverage`  
   Rechecked solely to correct the earlier technical inference concerning the website's Champions League `CUP` label.

**Page-budget status:** 3 primary pages inspected, within the eight-page maximum.

## Stop

Prompt 3 for football-data.org ends here. No provider is approved, no product is assumed, no vendor was contacted, and no technical gap was closed by inference.
