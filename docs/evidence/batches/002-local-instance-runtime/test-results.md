# Batch 002 Test Results

**Date:** 2026-09-15
**Command:** `npm test`

## Result

Five automated tests passed:

1. Factory generation accepts a controlled domain brief.
2. Factory validation rejects attempts to weaken the email controls.
3. A loopback instance responds correctly to health, metadata, missing-route, and disallowed-method requests.
4. The runtime rejects a manifest configured to bind to `0.0.0.0`.
5. The safe instance view omits the local server binding.

## Live local-server walkthrough

```sh
npm run start-instance -- instances/testing-roles-belgium
curl http://127.0.0.1:4101/health
```

Observed health response:

```json
{"status":"ok","instance":"testing-roles-belgium"}
```

The server is configured to bind only to `127.0.0.1`; it is not reachable from the local network.
