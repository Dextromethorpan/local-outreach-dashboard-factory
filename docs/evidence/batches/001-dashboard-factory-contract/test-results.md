# Batch 001 Test Results

**Date:** 2026-09-15
**Command:** `npm test`

## Result

Two automated tests passed:

1. A valid domain brief generated an isolated instance contract with local operational-data and evidence directories.
2. A brief with a non-kebab slug, privileged port, multi-model email access, or automatic sending was rejected.

## Reproducible walkthrough

```sh
npm test
npm run create-instance -- specs/testing-roles-belgium.example.json
```

The second command produced `instances/testing-roles-belgium/instance.json`, with server binding restricted to `127.0.0.1:4101`, `claude-only-drafts` email mode, mandatory human sending, and review-required Knowledge Connector publication.
