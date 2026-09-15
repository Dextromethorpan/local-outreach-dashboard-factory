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
