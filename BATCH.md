# Batch 001 — Dashboard Factory Contract

**Owner:** Unassigned
**Branch:** `feature/dashboard-factory-contract`
**Status:** Evidenced — awaiting review and merge

## Hypothesis

A validated domain brief can produce a portable local-instance contract without giving any model uncontrolled email or cross-domain access.

## Scope

- Define the top-level architecture, privacy boundaries, instance manifest, and evidence standards.
- Provide a dependency-free local instance generator with validation.
- Provide tests proving invalid briefs are rejected and valid briefs generate the required operational structure.

## Out of scope

- Dashboard UI, live web research, database migrations, geocoding, Gmail OAuth, model connectors, and automatic email sending.

## Acceptance evidence

- `npm test` passes.
- A valid sample brief produces an isolated instance manifest and directories.
- Invalid port, non-kebab slug, and a non-Claude email policy are rejected.
- Architecture documents explicitly cover per-domain local servers, one-agent branches, evidence-driven completion, and the Knowledge Connector Base.

## Completion rule

Mark this batch `evidenced` only when its test output and a short reproducible walkthrough are stored in `docs/evidence/batches/001-dashboard-factory-contract/`.


## Football Gate 2 analysis setup — 2026-09-18

Owner Codex. User requests a new branch from main; Gate 2 findings should inform
completion of Gate 1, with Gate 1 eventually integrated into main. Created
research/football-gate-2-analysis directly from fetched origin/main at 411438f.
Adapted procedure from ed167e7; README records evidence lineage, revised workflow,
future integration boundaries and next pilot. No gate approval, actual pain
research or merge performed. This branch is now the active Gate 2 analysis
location; prior procedure branch remains historical. Documentation checks:
procedure source/provenance, main base, local links and staged whitespace verified.
