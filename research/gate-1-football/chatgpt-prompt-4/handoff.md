# Football Gate 1 — Handoff

**Handoff version:** v0.4  
**Date:** 2026-09-17  
**Scope version:** v0.2, confirmed 2026-09-17  
**Decision state:** **Gate 1 Needs Evidence; independent review not started; Gate 1 not approved.**

## Scope

Test football-data.org for one narrow Option A workflow: current-season English Championship fixtures/results/standings transformed into static PNG/SVG graphics for independent creators. Previous seasons are optional. Required fields include stable match/team identifiers, explicitly zoned timestamps, teams/status/final score and core standings values. Crests, logos, third-party images, other competitions, live data, advanced events and xG are excluded. The proposed maximum delay of six hours after match completion is a threshold to test, not an assumed guarantee. Budget and production scale remain unknown.

## Completed work

1. Defined and confirmed the narrow research scope.
2. Checked current coverage, pricing and official v4 API documentation.
3. Corrected legacy-v2 claims concerning historical standings and score paths.
4. Separated provider examples/schema from actual Championship observations.
5. Inspected the published General Terms (last updated 2018-06-01), including §§2.3, 4.6, 7.1, 8.1, 9.1 and 9.2.
6. Consolidated accepted, corrected and unresolved claims in `evidence-register.md`.

## Evidence gained

- Championship is listed on the current coverage page.
- v4 documents the required match and standings structures; final score paths are `matches[].score.fullTime.home` and `.away`.
- Null scores are legitimate before/depending on match status; a `FINISHED` match must be evaluated separately for final-score completeness.
- Historical standings filters exist in v4, but reconstructed standings can omit deducted points.
- Current pricing and v4 policies conflict on Standard's rate limit (60 vs 30 calls/minute).
- Terms establish a single-application condition (§2.3), attribution in the API customer's app/site (§7.1), account deletion at cancellation (§4.6), a post-cancellation reference restriction on the customer's site/service (§9.1), and third-party graphic restrictions (§9.2).
- §8.1 disclaims service availability and data accuracy guarantees. It is **not evidence of a particular update delay**.
- §4.6 is specifically about account/provider-side corresponding data deletion. It must not be treated as resolving what happens to customer-exported or previously published graphics; that remains a separate vendor question alongside §9.1.

## Remaining blockers and assignment

| Actor | Assigned blocker | Required output | Stop when |
|---|---|---|---|
| **Authorized researcher** | Current Championship samples | Redacted, permitted current-season match and standings samples demonstrating every mandatory path, with unfinished and completed matches distinguished. | Sample evidence and completeness exceptions are recorded. |
| **Authorized researcher** | Results freshness | Timestamped observations of when completed Championship results appear, with official completion time, retrieval time and timezone. | A bounded observation set is ready for user judgment; do not label it a guarantee. |
| **Authorized researcher** | Standings freshness | A separate timestamped record of when standings reflect those completed matches. | Results and standings latency are reported separately. |
| **Vendor** | Downstream commercial publication | Written confirmation whether independent customers may publish transformed PNG/SVG graphics in monetized sites, newsletters and social posts. | Permission/prohibition and conditions are explicit. |
| **Vendor** | Attribution | Required text and placement for exports and customer publications. | Written rule is received. |
| **Vendor** | Caching/retention | Permitted normalized storage, cache duration and retention. | Written limits are received. |
| **Vendor** | Post-termination graphics | Treatment of already exported/customer-held and already published graphics, distinguished from §4.6 account deletion and §9.1 customer-site/service restriction. | Written obligations are received. |
| **Vendor** | Applicable package and effective rate limits | Required commercial package, whether one service/multiple creators fits §2.3, and actual call limits/burst rules. | Package and effective limits are confirmed in writing. |
| **User** | Send prepared inquiry | Send the existing draft to the vendor without implying permission. | Vendor response is preserved as evidence. |
| **User** | Freshness decision | After observations, decide whether observed freshness is sufficient or a contractual commitment is required. | Decision and rationale are documented. |

## Prepared vendor inquiry — not sent

> We are evaluating football-data.org for one application that retrieves English Championship fixtures, results and standings. Our service would transform those data into original PNG/SVG graphics without team crests, logos or other third-party images. Independent customers would download those graphics and publish them on their own websites, newsletters and social-media accounts, including monetized publications. We would not provide customers with API access or redistribute raw API responses.
>
> Could you confirm in writing whether this workflow is permitted and identify the applicable contractual clauses and required subscription/package? Please address: (1) commercial use by this one service serving multiple independent creators; (2) downstream publication of transformed graphics; (3) exact attribution text and placement on exports/customer publications; (4) caching, normalized storage and retention limits; (5) treatment of graphics already exported or published before subscription termination, separately from account deletion under §4.6; and (6) the effective request limits, including the current Standard-plan 30-versus-60 calls/minute discrepancy between v4 policies and pricing.

**Status:** Draft only. It has not been sent.

## Next controlled sequence

1. Authorized researcher obtains current Championship samples and records **results freshness and standings freshness separately**.
2. User sends the prepared inquiry; vendor resolves the licensing/package/limits questions.
3. User decides whether observed freshness is sufficient or a contractual commitment is required.
4. Only after those materials exist, run Prompt 5 as an independent Gate 1 audit.

## Stopping condition

Stop here. No one has been contacted, no subscription or credentials were requested, no Gate 1 approval was issued, and Gate 2/creator discovery remains unauthorized. Independent review must keep researcher verification separate and treat every unknown mandatory requirement as blocking acceptance.
