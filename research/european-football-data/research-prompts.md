# Sequential prompts: European football data landscape

Attach README.md from this folder. Paste the shared instructions plus one numbered
prompt at a time. In a fresh chat, attach earlier outputs. These assignments may be
used with Gemini, ChatGPT or Claude; record who actually performed each assignment.
Do not describe planned participation as completed work.

## Shared instructions

```text
Research available data and permitted uses for Premier League, La Liga, Serie A,
Bundesliga, Ligue 1 and UEFA Champions League. This is a data-source landscape,
not feasibility for an assumed product. Do not select graphics, a six-hour delay,
English Championship or a particular business model. Do not claim customer demand.

Use current original provider documentation, licences and official datasets. Browse
original pages; if browsing is unavailable, say so and stop verification. Public
web access is not proof of an open licence. Exclude scraping as product data access.

For each claim give a claim ID, researcher, direct URL, retrieval date, document/API
version, section/page, short supporting excerpt or permitted sample reference,
conclusion and limits. Distinguish documentation, executed tests and interpretation.
Do not invent quotes, endpoints, samples, prices, commercial permissions or SLAs.
Record unknowns and contradictions instead of choosing a convenient answer.

Each response is one bounded batch: at most eight primary pages and no more than
one alternate retrieval attempt for an inaccessible page. Report the pages inspected,
remaining queue and new evidence gained. A blocked result is acceptable; do not
repeat the same report. Stop at the stated boundary. If the page budget prevents
completion, mark the batch partial and identify the exact remaining work.

Do not buy access, contact vendors, collect creators, expose credentials or approve
any gate. Do not claim filesystem/GitHub writes unless actually performed. Return
copyable Markdown or downloadable artifacts. Preserve source copyright limits.
```

## Prompt 1 — Candidate inventory

```text
Find up to five candidate licensed APIs or genuinely open datasets relevant to the
six competitions. Use original provider sources. For each list source/operator,
access method, documented competition coverage (or unknown), data categories,
licence/terms URL and official pricing URL where found. Distinguish a supplier's
coverage claim from verified field availability. Include candidates with partial
coverage; do not conclude market-wide absence from a few suppliers.

Return candidate-sources.md and a prioritized queue for deeper checks. Rank by
clarity of evidence and documented coverage, not invented affordability or product
fit. Stop after the inventory; no provider is approved.
```

## Prompt 2 — Data coverage for one queued source

```text
Take the next unreviewed source from the attached inventory. If no queue exists,
request the inventory. Inspect current versioned documentation and available
coverage catalogues for this source only.

For each of the six competitions record IDs/seasons if documented; fixtures,
results, standings, lineups, player/team statistics, events, advanced metrics,
tracking and media availability; historical depth; live/delayed access and any
actual freshness commitment; endpoints/dataset paths; package and quota limits;
and published prices with currency, billing period and tax notes.

Use documented / observed / unavailable / unknown statuses. Separate lack of evidence
from evidence of absence. Flag media as a distinct rights category. Without
credentials, do not invent API observations. No product-specific field floor or
latency target applies. Return coverage-[source].md, evidence IDs and remaining
questions. Stop; repeat this prompt for other candidates only when assigned.
```

## Prompt 3 — Permitted uses for one reviewed source

```text
Take one source with a completed or partial coverage review. Inspect its actual
current licence/terms through official navigation. API documentation version and
legal-document version are separate. Record which plan/dataset the terms govern.

Create a rights matrix for personal/research use, commercial app display, derived
analysis, exported outputs, downstream customer publication, raw-data redistribution,
caching/retention, attribution, territory restrictions, termination and media rights.
These are uses to investigate, not requirements for an assumed product.

Classify each as explicitly permitted, explicitly restricted, conditional, ambiguous
or not found. Cite the relevant clause and limits. Do not infer a prohibition from
silence, or permission from attribution, payment or API access. If a document cannot
be inspected, do not claim it lacks a clause. Distinguish our usage from our customers'.
Return rights-[source].md and concise unsent vendor questions only for unresolved
material issues. Stop without contacting anyone or declaring legal clearance.
```

## Prompt 4 — Consolidate and independently check

```text
Use the candidate inventory and source-specific coverage/rights reports. Build
coverage-matrix.md (competition by source), rights-matrix.md (source by possible use),
and evidence-register.md. Preserve claim IDs and distinguish author-verified from
independently checked claims. Do not upgrade unverified claims during consolidation.

Use this batch's page budget to independently reopen decision-relevant primary
sources, prioritizing licences and conflicting coverage/pricing claims. Record what
was checked, corrections, reviewer identity and what remains unreviewed. If all
checks do not fit the budget, return the remaining review queue; do not pretend
review is complete. Keep a question/owner/next-evidence table for blockers.

Conclude what the source landscape supports and what is unknown. Do not choose a
product, rank leagues by demand, approve Gate 1 or begin creator discovery. Stop.
```

## Prompt 5 — Research paper

```text
Using the evidence package and independent-review results, write a research paper
with a content-specific title, abstract, introduction/requirements, actual methodology,
results, limitations and conclusion. Cite evidence IDs and original sources. Record
which models actually contributed and which checks/tests were never performed.

Compare the six competitions by documented data availability and permitted uses.
Explain gaps without extrapolating a few suppliers to the whole market. Keep
researcher proposals distinct from user requirements. Do not turn a convenient data
source into an implied product or target market. If evidence remains partial, call
the study partial and name the next bounded work rather than presenting completion.
A later product-specific Gate 1 decision requires an explicit intended use; this
paper provides a source landscape only. Return the paper and final handoff, then stop.
```
