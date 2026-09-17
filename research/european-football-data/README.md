# European Football Data: Availability and Permitted Uses

Date: 2026-09-17
Owner: Codex
Branch: research/main-leagues-gate-1
Starting commit: d757e94
Status: Partial comparative study and supporting evidence collected; no provider selected or gate approved.

## Research question

What data are available through legitimate sources for major European football
competitions, and what uses do the published licences or contracts permit?

The user selected European leagues including Premier League and Champions League,
and explicitly chose a data-and-permissions landscape rather than product feasibility.
The operational first-pass list is Premier League (England), La Liga (Spain), Serie A
(Italy), Bundesliga (Germany), Ligue 1 (France), and UEFA Champions League. The last
is a continental competition, not a domestic league. This list is a bounded working
interpretation of major European leagues, not an exhaustive European inventory.
Other competitions require an explicit scope addition.

## Requirements

- Assess each competition separately; supplier-wide claims do not establish field coverage.
- Record available seasons, competition identifiers, field categories, depth and update evidence.
- Include fixtures/results/standings, teams/players/lineups, aggregate statistics,
  match events/coordinates, advanced metrics, tracking data, and media assets where documented.
  These are categories to investigate, not mandatory features of a product.
- Distinguish live, delayed and historical access. Do not invent a freshness threshold.
- Record access method, public prices or quote-only status, quotas and package restrictions.
- Use licensed APIs or genuinely open datasets. Public accessibility is not an open licence.
  Scraping is excluded as a means of obtaining product data.
- Compare permitted personal/research use, commercial application display, derived analyses,
  exports, customer publication, raw redistribution, caching, attribution and termination.
  These are possible uses to classify, not selected product requirements.
- Assess image/video/logo rights separately from numerical data.
- Preserve contradictions, evidence gaps and retrieval failures; do not infer rights from silence.

## Method and boundaries

Use the [sequential research prompts](research-prompts.md). A provider is investigated
in a bounded batch, then findings are consolidated by competition. All outputs must
identify researcher, date, source and verification status. Another model's text is
not evidence. Original documentation is distinct from an executed API test.

There is no assumed graphics product, English Championship scope, six-hour requirement,
customer demand finding or budget. No vendor contact, subscription purchase or API
credential disclosure is authorized. Prepare inquiries only when specific questions
remain. No automated multi-model worker is running.

This source landscape can inform a later Gate 1 assessment, but cannot pass a
product-specific gate without a defined intended use. Gates 2 (public pain research)
and 3 (individual/small-operator buyer fit) are not evaluated by this assignment.
No creator discovery run is authorized by source availability alone.

## Expected artifacts

1. Candidate-source inventory, including excluded/unverified candidates.
2. Competition-by-source data coverage matrix.
3. Source-by-use rights matrix with clause references.
4. Evidence register, corrections, unresolved questions and independent-review results.
5. Research paper: abstract, requirements, methodology, results, limitations and conclusion.

Prepared prompts are assignments; findings and their verification limits are recorded in the artifacts linked below.


## Read the research package

1. [Comparative study](partial-comparative-study.md)
2. [Coverage matrix](coverage-matrix.md) and [rights matrix](rights-matrix.md)
3. [Evidence register](evidence-register.md) and [handoff](handoff.md)
4. [Original provider reports and amendments](source-reports/)
5. [Original consolidation and paper](original-deliverables/)
6. [Publication notes](publication-notes.md) and [import checksums](import-manifest.json)

The original reports preserve the research history. The working synthesis incorporates
corrections; conflicts should be resolved through the amendments and evidence register.
