# Football Data Documentation: Conflicts and Package Boundaries

## Abstract and methodology

The football-data.org paid-plan quota contradiction persists in official sources.
This review documents both sides, resolves package distinctions supported by
public wording, and provides focused questions for unresolved items. It does not
select a quota as effective without evidence or test a paid account.

Date: 2026-09-18. Researcher: Codex. Baseline: [study at ff3d57f](https://github.com/Dextromethorpan/local-outreach-dashboard-factory/tree/ff3d57f/research/european-football-data).
Read-only retrievals and source digests are in [sources.json](evidence/sources.json).
Where direct HTTP returned 403, readable web-tool source access was used and is
identified in [web observations](evidence/web-observations.json).

## DOC-FD-01 — Unresolved paid-plan rate limits

| Plan | Current pricing: calls/min | v4 policy: requests/min | Result |
|---|---:|---:|---|
| Free | 10 | 10 | Consistent |
| Standard | 60 | 30 | Conflict |
| Advanced | 100 | 60 (plans above Standard) | Conflict |
| Pro | 120 | 60 (plans above Standard) | Conflict |

Sources: [Pricing, named plan cards](https://www.football-data.org/pricing) and
[v4 API policies, Request-Throttling](https://docs.football-data.org/general/v4/policies.html).
No statement found on the reviewed official pages explicitly reconciles them.
The older [API Reference](https://www.football-data.org/documentation/api) repeats
the policy numbers but identifies itself as v2. It is not an independent current
confirmation. Public catalogue responses cannot validate paid-account throttling.
**Effective paid limits remain unresolved.** Do not deliberately exhaust quotas to test them.

## DOC-FD-02 — Package distinctions clarified

The pricing page separates Free w/ Livescores (€12), ML Pack Light (€29),
and Free + Deep Data (€29); they are not interchangeable. ML Pack Light advertises
10 seasons and trend/form data. Deep Data lists lineups, substitutions, scorers,
cards and squads. Odds and Statistics are separate €15 add-ons requiring a base
subscription. Neither all deep fields in ML Pack nor ten-season history in every
plan is established. VAT may apply. This is advertised packaging, not observed entitlement.

## DOC-FD-03 — Remaining field/history ambiguity

The named trend/form feature has no precise field definition in the reviewed
pricing, coverage and v4 resource material. Free delay has no verified numeric
threshold in this pass. Exact history by competition/field/package remains open;
a large catalogue season count is not an account entitlement.
The [official blog, xg data, 24 January 2026](https://www.football-data.org/blog)
announces future xG availability, not a verified launch. Do not promote it to
available endpoint data without a current release/response.

## DOC-SM-01 — Historical access and add-ons

[Sportmonks pricing FAQ](https://www.sportmonks.com/football-api/plans-pricing/)
places history older than three seasons behind a one-time add-on for Starter,
Growth and Pro, with full historical access on Enterprise. It mentions a monthly
league-swap limit without specifying the number. The
[xG coverage documentation](https://docs.sportmonks.com/v3/tutorials-and-guides/tutorials/expected/coverage)
requires an xG add-on even when a base plan is available. History entitlement and
xG collection history are different constraints. No account-specific quote was tested.

## DOC-AF-01 — All competitions does not mean all seasons

[API-Football pricing](https://www.api-football.com/pricing) advertises every
competition and endpoint across plans while expressly restricting Free seasons.
This resolves the apparent contradiction: the dimensions differ. Which exact
seasons a particular account can retrieve remains unverified. Paid access also
does not guarantee populated fields for every match; the documented season coverage
flags and actual responses remain necessary.

## Resolution register

| Item | Status | Required next evidence |
|---|---|---|
| FD Standard/Advanced/Pro quotas | Unresolved documented conflict | Written current provider clarification, then authorized account configuration/response evidence |
| FD package identities and add-on dependency | Resolved at advertised-package level | Account verification only if selected |
| FD trend fields, free delay and per-package history | Unresolved precision | Provider definitions or current documentation plus authorized samples |
| FD xG availability | Not established | Current release/endpoint evidence |
| SM historical add-on / xG separation | Documented distinction | Selected account entitlements |
| SM numeric league-swap limit | Unresolved | Current subscription rules/provider response |
| API-Football Free history restriction | Documented distinction | Authorized per-season access results |

## Prepared clarification questions — not sent

For football-data.org:

1. Which calls-per-minute limits currently govern Standard, Advanced and Pro?
   Pricing publishes 60/100/120; v4 policy publishes 30/60/60. Which page will be corrected?
2. What are the exact trend/form fields and endpoints in ML Pack Light, and which
   history is included per scoped competition and field in each candidate plan?
3. What numeric delay applies to Free scores/schedules, and is there a latency commitment?
4. Is xG production-accessible today? If so, which endpoint, plan, seasons and competitions?

For Sportmonks: what is the numeric monthly league-swap limit for the selected plan?
For API-Football: which seasons are accessible on the selected Free account?

Only ask relevant questions after narrowing the intended use/provider. No vendor
was contacted, no subscription purchased and no authenticated request executed.
Priority 3's public investigation is complete; unresolved conflicts are not closed
by repeating searches. Gate 1 remains unapproved.
