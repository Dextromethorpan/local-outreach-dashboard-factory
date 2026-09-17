# Batch 002 — Local Instance Runtime

**Owner:** Codex
**Branch:** `feature/local-instance-runtime`
**Status:** Evidenced — awaiting review and merge

## Hypothesis

Every validated domain instance can run independently on its own loopback-only local server before any dashboard UI or external integration exists.

## Scope

- Load and validate a generated `instance.json` manifest.
- Run a minimal HTTP server bound exclusively to `127.0.0.1`.
- Provide non-sensitive `/health` and `/api/instance` endpoints for a future dashboard UI.
- Prove isolated startup, endpoint behavior, and invalid-manifest rejection with automated tests.

## Out of scope

- UI, database, research, mapping, Gmail OAuth, any model connector, and email sending.

## Acceptance evidence

- `npm test` passes.
- The sample Testing Roles instance serves a health response locally.
- The runtime rejects manifests whose server host is not `127.0.0.1`.
- No endpoint exposes credentials, message bodies, or operational records.

## Completion rule

Mark this batch `evidenced` only when test output and a reproducible local walkthrough are stored in `docs/evidence/batches/002-local-instance-runtime/`.

## European football source landscape — 2026-09-17

Owner: Codex; branch research/main-leagues-gate-1, based on d757e94.
User confirms European leagues including Premier League and Champions League;
objective is available data and permitted uses, not an assumed product.
Working first-pass list: Premier League, La Liga, Serie A, Bundesliga, Ligue 1,
UEFA Champions League. Added research/european-football-data/README.md and
research-prompts.md. Prepared five bounded assignments for inventory, source coverage,
rights, consolidation/review and paper. No source research executed or model dispatched.
No gate pass, vendor contact or discovery authorized. Next: run Prompt 1 with shared
instructions and brief. This branch does not contain the later memory module; use
the original hi checkout memory CLI/store for cross-worktree handoffs.

## European football comparative package publication — 2026-09-17

Owner Codex; research/main-leagues-gate-1. Imported 22 supplied original artifacts
(source reports, amendments, earlier consolidation and final deliverables) with
SHA-256 manifest into research/european-football-data/. Five working synthesis files
correct candidate legitimacy and reviewer attribution; originals preserved verbatim.
Added publication notes and linked research index. No provider selection, gate
approval or authenticated API test. StatsBomb licence remains uninspected.
Verification: all imported hashes match originals; working links and corrections
checked. Original Markdown whitespace retained intentionally for byte fidelity.
