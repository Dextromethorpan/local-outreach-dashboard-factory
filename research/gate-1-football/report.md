# Report: Gemini-Assisted Football Data Feasibility Review

Date: 2026-09-17
Owner: Codex
Branch: Gate-1-Football
Status: Gate 1 Needs Evidence; creator discovery not approved.

## Objective

Assess whether legitimate data sources—licensed APIs or genuinely open data—can
support a proposed football product. Scraping is excluded as a product data source.
Two provisional options were explored, neither an approved product specification:

| Option | Output | Required data |
| --- | --- | --- |
| A | Fixtures, results and standings graphics | Schedules, scores, teams and tables |
| B | Advanced match-analysis graphics | Events, coordinates, passes, shots, xG and selected spatial data |

## Collaboration and work performed

The user manually passed assignments to Gemini and returned its responses to
Codex. Codex reviewed the submissions, checked selected claims against official
sources, identified unsupported conclusions and drafted narrower assignments.
There was no direct Gemini integration, automatic coordinator or background agent.
Assignments progressed from broad feasibility reports to a bounded supplier check.
This report records that review; it does not claim every assertion was verified.

## Findings

| Source | Established during review | Unresolved |
| --- | --- | --- |
| StatsBomb Open Data | Repository separates competition/season metadata, matches, events, lineups and selected 360 data. | Actual licence text remained unread; commercial publishing rights, selected competition fit and refresh suitability unverified. |
| Sportradar | Official documentation describes scheduling and match endpoints; coverage needs competition/season checks. | Required fields, contracted coverage, price and customer publishing permissions. |
| football-data.org | Championship and Brazil Série A appear in the free tier. Published paid options include €12/month live scores, €29 packages, Standard €49, Advanced €99 and Pro €199; VAT may apply. | Terms for our commercial graphics workflow and downstream customer publication. |

Official pages checked during the 2026-09-17 review (time-sensitive; recheck before decisions):

- https://github.com/hudl/open-data
- https://developer.sportradar.com/soccer/docs/soccer-ig-historical-data
- https://developer.sportradar.com/sportradar-updates/changelog/soccer-apis-new-schedule-endpoints
- https://www.football-data.org/coverage
- https://www.football-data.org/pricing

The cited football-data.org /terms page could not be retrieved with the review
tool. This is an access limitation, not proof that terms do not exist. No complete
licence or API integration test was performed. Live source links are not immutable
snapshots; future verification should preserve dated excerpts and permitted samples.

## Gemini quality assessment

Useful contributions were supplier leads, comparison of product options and a
draft field-to-endpoint mapping. Verification quality was insufficient:

- Championship was incorrectly placed behind a paid tier; Brazilian coverage was overlooked.
- A subsequent purported official excerpt quoted €19/€39 plans inconsistent with the inspected pricing page.
- Legal quotations were not independently substantiated.
- Claims about cron ingestion, manual commits, contractual latency and enterprise pricing lacked evidence.
- Successive reports repeated blockers without resolving them.

The bounded verification task failed acceptance. This describes the submitted
output, not its cause or the model's general capabilities. Codex also requested
too many revisions before defining a clear stopping rule.

## Decisions and limits

Football remains Needs Evidence, not proven feasible or infeasible. No 200-creator
run is approved. Treat Gemini output as unverified leads until checked. Creator
residence does not dictate covered competitions. Supplier costs belong in our
business economics; customers need not each buy the underlying API. Schema fields
do not establish actual coverage, usage rights or guaranteed freshness.

Gate 2 requires Reddit and multiple independent public sources of real pain;
interviews are optional. Gate 3 requires individual/small-operator buyer fit.
Neither gate was validated here. Other domains were not fully validated by this
football review. Gate order applies to football as well as every other domain.

## Recommended next steps

1. Define a small provisional scope: output, competitions, fields and acceptable delay.
2. Verify one supplier with original documentation and permitted sample data.
3. Resolve publishing rights through readable terms or written vendor clarification.
4. Separate accepted evidence, rejected claims and unresolved questions in a register.
5. Independently review Gate 1; only after approval proceed to Gate 2, then Gate 3.

Use chatgpt-prompts.md in this folder for bounded manual handoffs. No provider
contact, subscription purchase, creator research or gate approval is authorized
by these prompts alone.

## Storage

Saved in the local project on 2026-09-17 at the user's request. Branch creation
and local files do not publish anything to GitHub. No remote push is part of this task.
