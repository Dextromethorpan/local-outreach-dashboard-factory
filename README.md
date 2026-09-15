# Local Outreach Dashboard Factory

This repository creates independent, local dashboard instances for job-role and content-creator research domains while sharing one governed application model.

## Non-negotiable rules

- Every domain instance has its own local server port and local operational data.
- Every feature is developed in one feature branch by one agent at a time.
- Every completion claim needs stored test or research evidence.
- Only the Claude email gateway can receive a Gmail credential or create/read mailbox drafts. All other models can work on research and proposed copy inside the dashboard only.
- No AI sends email. A human approves the content and sends it.
- Cross-dashboard sharing is explicit through the Knowledge Connector Base; private notes and restricted contact history are not copied by default.

## First implementation batch

See [BATCH.md](BATCH.md). The factory contract is in [docs/architecture.md](docs/architecture.md), the security model in [docs/security.md](docs/security.md), and the instance format in [docs/instance-contract.md](docs/instance-contract.md).

## Create an instance

```sh
npm run create-instance -- specs/testing-roles-belgium.example.json
```

The command validates the domain brief and creates `instances/<slug>/` with a manifest and operational directories. It intentionally does not start a dashboard server yet: the generated manifest is the stable contract for the future UI, database, research worker, and Claude-only email gateway.

## Run an instance locally

```sh
npm run start-instance -- instances/testing-roles-belgium
```

The sample responds only on `http://127.0.0.1:4101`. `GET /health` reports runtime health and `GET /api/instance` exposes only safe configuration metadata for a future UI; neither endpoint accesses email or operational data.
