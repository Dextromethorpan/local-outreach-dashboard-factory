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


## 2026-09-18 — StatsBomb licence

Owner: Codex. User requested this priority on its own branch, starting from
commit d757e94, the same base as research/main-leagues-gate-1.
Prior study ff3d57f is research context, not inherited Git history.
Scope: StatsBomb licence; six European competitions. No product selection,
vendor contact, subscription purchase or Gate 1 approval.
Evidence and results: research/statsbomb-license/. Status: research in progress.

Completed public research pass on 2026-09-18. Results, source IDs and open
dependencies are in research/statsbomb-license/report.md and handoff.md.
Verification: research/statsbomb-license/verification.md. Original study unchanged.
No Gate 1 approval, vendor contact, purchase or authenticated API test.
