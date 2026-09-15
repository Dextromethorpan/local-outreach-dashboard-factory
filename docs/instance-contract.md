# Domain Instance Contract

Each generated `instance.json` is a concise, versioned domain brief.

```json
{
  "schemaVersion": 1,
  "slug": "testing-roles-belgium",
  "displayName": "Testing Roles — Belgium",
  "server": { "host": "127.0.0.1", "port": 4101 },
  "research": {
    "kind": "job-role",
    "focus": "Software testing and QA roles",
    "geographies": ["BE"],
    "requiredEvidence": "source-url-and-date"
  },
  "email": { "mode": "claude-only-drafts", "humanSendRequired": true },
  "knowledgeConnector": { "publication": "review-required" }
}
```

`slug` is immutable after creation. A dashboard can change its display name or scope only through a versioned migration/decision record, preserving the history of its role definition.
