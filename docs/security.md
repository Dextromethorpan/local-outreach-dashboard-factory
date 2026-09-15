# Security and AI Permission Model

## Email boundary

Mailbox credentials reside only in a separate Claude email gateway. The gateway only supports reading necessary email context and creating/updating drafts after dashboard approval. It never sends mail.

```text
Any model → research / classification / proposed copy stored locally
Human → approves exact draft content in dashboard
Claude gateway → creates or updates Gmail draft
Human → sends through Gmail
```

The dashboard stores an audit event for every proposal, approval, draft creation, edit, and send confirmation. Other model environments receive neither a Gmail OAuth token nor an email tool.

## Content controls

Drafts are versioned and carry a template identifier, personalization evidence, reviewer, approval timestamp, and status. A change to approved subject, body, recipient, or attachments invalidates approval.

## Research integrity

AI-discovered candidates start as `research_review`. Required evidence is source URL, accessed/discovered date, claim, extraction note, and confidence. No record becomes outreach-ready merely because a model suggested it.

## Privacy

Store source and lawful-basis/permission notes for personal data, honor do-not-contact immediately, and define retention rules before bulk outreach. Publication to the Knowledge Connector Base must use explicit `shared`, `restricted`, or `private` classification.
