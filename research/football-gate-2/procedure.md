# Gate 2 — Football: Researching People's Experiences

Date: 2026-09-18. Owner: Codex. Status: procedure executed in the bounded 2026-09-18 research; gate decision pending.
Branch: research/football-gate-2-analysis, based directly on main at 411438f.
Procedure adapted from ed167e7 on research/football-gate-2-procedure;
that earlier branch remains a historical procedure checkpoint.

## Decision and scope

The user explicitly asked to set aside the provisional football use case and
investigate people's experience. For this football exploration, Gate 1 approval
and a product hypothesis are not prerequisites for gathering Gate 2 evidence.
This supersedes the earlier prerequisite in docs/domain-validation-pipeline.md
and docs/gemini-pain-research-prompt.md in the original hi checkout for this scope.
Those historical files are not copied or silently rewritten on this branch.

Gate 1 remains unresolved. This research neither approves it nor authorizes the
200-creator runs. Before a product/discovery run proceeds, all applicable gates
must be approved against the resulting scope. No global policy change for other
domains is inferred. We distinguish permission to explore from gate approval.

Question: What do people actually do around football, where do they experience
friction, what consequences follow, and how do they cope today?
Do not start from charts, APIs, statistics, a supplier, an app idea or a desired answer.

## 1. Explore roles and activities before choosing a problem

Start with football content creators, independent writers/podcasters, community
organizers, amateur analysts and engaged fans. Treat these as sampling starting
points, not proven customer segments. Record the evidenced role or unknown.
Fans' accounts may supply context without proving creator pain or buyer fit.

Cover activities such as following matches, finding reliable information,
understanding events, discussing football, producing material and managing a
community. These are exploratory search areas, not assumed pains. Keep an other
category and follow unexpected problems supported by evidence.

Record competition, language and location only when stated. The six previously
studied competitions are useful tags, not reasons to discard relevant experience.
A subreddit or language does not establish a person's country. Initial English
research must be labelled English-language and cannot represent all four regions.
Follower counts and the 1k–10k tiers are not required for this pain-research sample.

## 2. Search broadly, then open original accounts

Use Reddit AND independent source families: specialist forums, public support
communities/issue trackers, user reviews, and firsthand creator/operator posts.
Search engines locate evidence; snippets and AI summaries do not count as evidence.
Use public pages or permitted APIs; no bulk scraping or access-control bypass.

First use neutral activity queries, for example:
- football content creator workflow / how I prepare a football podcast
- football fan how I follow matches / football community moderation experience
- amateur football analysis process / tools I use to research football

Then use experience queries (difficult, takes time, stopped using, workaround,
reliable, inaccurate, solved, works well) attached to activities that emerge.
Run explicit counterqueries for adequate alternatives, easy workflows and people
who do not experience the proposed problem. Do not search only for complaints.

Prefer the last 24 months, preserving exact publication/access dates. Older
material may explain a pattern but does not establish current recurrence.
Record all queries and original pages inspected, including exclusions and failures.

## 3. Capture evidence consistently

One record per distinct firsthand incident or account. Required fields:

- Evidence ID, original URL, page/thread title, publication and access dates.
- Source family/community, language, pseudonymous author reference.
- Self-described role and supporting evidence; unknown when not established.
- Activity and trigger; what happened, in the person's terms.
- Concrete consequence: time, money, missed opportunity, trust, frustration, etc.
- Existing workaround/alternative and whether the author says it works.
- Spending only if explicitly reported; never inferred willingness to pay.
- Short exact excerpt or faithful paraphrase and its source locator.
- Firsthand / hearsay / promotion / researcher inference / inaccessible status.
- Duplicate/incident group, counterevidence, uncertainty and candidate theme.

Keep quotes short and copyright-compliant. Do not copy entire discussions or
collect contact details. Preserve only public information necessary for evidence.
Do not infer sensitive attributes or identify anonymous people across sites.
Use distinct authors when known; mark cross-platform identity unknown rather than
claiming confirmed independence. Several people in one thread can add context,
but the thread is one clustered source, not multiple independent corroborations.

## 4. Work in bounded, reviewable batches

Pilot: inspect up to 12 original pages across at least three source families and
at least two communities where accessible. Log failures rather than filling a quota
with weak evidence. This is a workload budget, not a scientific sample or pass rule.

After the pilot, report what was found and what is missing. Conduct a targeted
second batch of up to 12 originals to challenge the strongest emerging themes,
include satisfactory alternatives and fill role/source gaps. Pause for synthesis
after these two batches. More searching requires a named unanswered question;
do not repeat broad searches to manufacture support.

At each checkpoint save evidence, exclusions, search log and a handoff. No
background loop, other-model assignment or automatic coordinator is assumed.

## 5. Cluster problems from evidence

Group by role + activity + difficulty + consequence, not by proposed feature.
For each theme include supporting IDs, distinct-account/thread/source-family
counts, recency, workarounds, counterexamples and unresolved questions.
Distinguish widespread inconvenience claims from measured severity; qualitative
online material does not estimate population prevalence. Upvotes are not people
with independently verified problems. Vendor copy is not customer testimony.

Do not merge unlike audiences into a single problem statement. Keep creator,
fan and analyst patterns separate when their activities or incentives differ.
No solution or provider recommendation is required to complete this stage.

## 6. Validate the research and evaluate Gate 2

Reopen every source used in a proposed conclusion. Check that it supports the
attributed role, problem, consequence and quoted wording. Audit duplicates,
thread clustering, publication dates, access failures and claims contradicted by
other accounts. A second-model review may help if separately requested, but does
not replace original-source checks or become independent just by changing chats.

Recommend one of these outcomes for each clearly defined problem/segment:
- Supported for further investigation: concrete recurring firsthand accounts,
  meaningful consequences, corroboration beyond one thread/community, and
  counterevidence addressed without assuming universal pain.
- Needs evidence: weak, old, inaccessible, promotional, highly clustered or
  contradictory support; state exactly what would improve the judgment.
- Not supported in this sample: adequate alternatives or lack of recurring
  consequential difficulty. This does not prove nobody has the problem.

No post count automatically passes Gate 2. Submit the reviewable evidence and
rationale for the user's gate decision; agents do not approve their own gate.
Gate 2 concerns evidence of a problem, not willingness to pay, market size,
commercial feasibility or permission to use supplier data.

## 7. Deliverables and next steps

Produce in this folder:
- search-log.md — queries, dates, inspected/excluded pages and reasons.
- evidence-register.json — source-linked records using section 3 fields.
- experience-map.md — activities, themes, current alternatives and counterevidence.
- findings.md — strongest supported problems, weak hypotheses, limits and recommendation.
- handoff.md — completed checks, open questions and exact next assignment.

Templates or empty registers must never be labelled findings. The completed bounded
batch is documented in findings.md; source inspection does not verify identities
or independently establish the truth of self-reported incidents.

After evidence review, the resulting problem statements can inform a provisional
use case and a focused return to Gate 1. Gate 3 separately examines who would pay
and whether buyers are individuals/small operators. No creator collection run is
released until all required approvals are recorded for the resulting scope.
