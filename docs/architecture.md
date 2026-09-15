# Architecture — Dashboard Factory

## Top-down model

```text
Dashboard Factory (shared code, Git governance, schemas)
├─ Instance: testing-roles-belgium (localhost:4101)
│  ├─ local dashboard + local operational store
│  ├─ research review queue
│  └─ Claude-only email gateway adapter
├─ Instance: content-creators-proptech-eu (localhost:4102)
│  └─ local dashboard + local operational store
└─ Knowledge Connector Base (local, opt-in shared knowledge)
   ├─ canonical public company/person/location records
   ├─ evidence and reusable research insights
   └─ links between instance-specific records
```

The factory is the control plane. An instance is a domain-specific, independently runnable dashboard. The Knowledge Connector Base is not the owner of each instance's private operational data.

## Data ownership

| Data class | Owner | Default sharing |
| --- | --- | --- |
| Public company facts, locations, public sources | Knowledge Connector Base | Shareable after review |
| Research candidates and job listings | Domain instance | Not shared until approved |
| Contact details, outreach timeline, applications | Domain instance | Restricted |
| Private intuition and personal interview/application notes | Domain instance | Private |

## Factory lifecycle

1. Supply a domain brief: role or creator niche, geography, inclusion rules, sources, evidence threshold, port, and outreach rules.
2. Validate the brief and create an isolated local instance contract.
3. Run research into a review queue; every claim carries a source, date, and confidence.
4. Human approves records for operational outreach or reusable Knowledge Connector Base publication.
5. The instance dashboard operates locally; only approved shared facts flow outward through a connector.

## Development governance

Each feature receives a branch and `BATCH.md`. Exactly one agent holds a branch's active batch at a time. A batch moves through `implemented → tested → evidenced → merged`. A new model takes over only by reading the branch's batch, tests, evidence, and handoff note.
