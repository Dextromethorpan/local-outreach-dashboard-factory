# Football Data Feasibility: An AI-Assisted Study of Sources, Evidence, and Scope Drift

**Date:** 2026-09-17
**Author:** Codex, synthesizing user-mediated Gemini and ChatGPT research
**Branch:** Gate-1-Football
**Status:** Retrospective of this research phase; not a Gate 1 approval.

## Abstract

This report examines an AI-assisted investigation of legitimate football data
sources within a broader creator-discovery project. The original objective was
to identify creators by topical domain, region and audience size, with domain
validation preceding large discovery runs. Research subsequently narrowed to a
hypothetical graphics service using English Championship fixtures, results and
standings. That narrowing reflected data availability and convenience rather
than validated demand or an established user product requirement. Gemini produced
supplier leads but also inaccurate pricing, unsupported quotations and repeated
unresolved assertions. Bounded ChatGPT assignments improved source traceability,
corrected legacy API claims and located relevant supplier terms. No authenticated
Championship data tests, measured freshness results, vendor permission or completed
independent gate audit were obtained. The principal outcome is an auditable partial
source assessment and a correction of scope drift: graphics and Championship must
remain hypotheses. Gate 1 remains Needs Evidence. Further supplier-specific work
should follow clarification of the intended problem and product use.

## 1. Introduction and research requirements

### 1.1 Original project objective

The user requested creator discovery organized as domain / region / follower tier,
with 200 creators per instance. Domains describe topics, not geography. Regions
are USA, Europe, Latin America and Africa. Platforms are YouTube, Instagram,
TikTok and Twitch, counting each creator once per instance. The agreed audience
ranges are 1,000–1,999; 2,000–4,999; 5,000–6,999; 7,000–9,999; and 10,000–19,999.
These are research targets, not counts of records collected in this investigation.

The planned discovery workflow alternates five creators from Claude and five from
Codex for an instance, with another full loop after eligible instances are covered.
A coordinator with pause/resume controls, shared GitHub records and a coordinator-
assigned classification agent was discussed. This investigation did not implement
that runtime. Branches and documentation provide persistence, not automatic agents.

### 1.2 Superseding domain-validation requirements

The user required sequential domain gates, later explicitly including football:

1. **Legitimate product data:** a licensed API or genuinely open data supporting
   the intended product use; scraping is not an acceptable product data source.
2. **Researched pain:** proper Reddit research and multiple independent resources
   supporting real problems. This replaced an earlier requirement for direct
   conversations; interviews became optional.
3. **Buyer suitability:** intended buyers are individuals or small operators,
   rather than institutions.

No domain receives a 200-contact discovery run before passing the gates. Public
complaints alone do not prove willingness to pay. This report covers the football
source investigation, not completed validation of all domains or Gates 2 and 3.

### 1.3 Research question and assumptions

The appropriate Gate 1 question is whether legitimate data can support the intended
product's fields, coverage, timeliness and commercial-use workflow. The underlying
product was not yet established. Two hypotheses were introduced: basic graphics
from fixtures/results/standings (Option A), and advanced event-analysis graphics
(Option B). Option A was subsequently narrowed to the English Championship.

| Item | Origin and status |
| --- | --- |
| Creator discovery by domain/region/audience | User requirement |
| Sequential domain gates, including football | User requirement |
| Graphics exported as PNG/SVG | Researcher-introduced product hypothesis |
| Championship-only test | ChatGPT proposal, endorsed by Codex for technical convenience |
| Six-hour post-match delay | Proposed test threshold, not demonstrated supplier performance |
| Current season; no crests or advanced analytics | Constraints of the provisional test, not the original project objective |

Later artifacts call this scope “confirmed.” In the subsequent conversation, the
user questioned both graphics and Championship, and Codex acknowledged that these
were researcher-introduced assumptions. This report supersedes any interpretation
that the earlier wording established a final product or market decision. It does
not erase the historical handoff or its source findings.

## 2. Methodology

### 2.1 Participants and actual roles

| Participant | Documented role in this phase |
| --- | --- |
| User | Carried prompts and responses between tools, supplied files, and requested storage/publication. |
| Gemini | Returned source-feasibility reports and a bounded football-data.org verification response. |
| ChatGPT | Executed a provisional-scope assignment, supplier review, correction/licensing review and evidence consolidation. |
| Codex | Designed/refined prompts, checked selected primary sources, reviewed outputs, preserved artifacts and published the branch. |
| Claude | Planned participant in future alternating creator research. No Claude execution or football verification output is documented for this phase. |

Accordingly, a methodology claiming that Gemini and Claude jointly performed this
source review would be inaccurate. The observed research involved Gemini and
ChatGPT with Codex review. Claude can later consume the shared handoff, but that
is a proposed role, not an experiment or result reported here.

### 2.2 Gemini prompt sequence

The early assignments asked for source feasibility, coverage, licensing, costs and
missing evidence. Follow-ups requested separation of vendor coverage tiers from
football divisions, competition-specific requirements, basic versus advanced data,
and documented facts versus inference. Further instructions required a field-to-
endpoint map, additional suppliers and explicit evidence needed to close blockers.

Repeated revisions improved presentation more than verification. The assignment
was therefore narrowed to one provider and at most five sourced findings: inspect
official coverage, prices and terms; correct earlier errors; identify unresolved
publishing rights; and stop. This bounded check still returned prices inconsistent
with the inspected pricing page and legal quotations that were not substantiated.
Codex recommended treating Gemini responses as leads rather than accepted evidence.
This evaluates the submitted outputs, not the model's general capability or intent.

### 2.3 ChatGPT prompt sequence

The reusable [prompt file](chatgpt-prompts.md) specifies original-source inspection,
claim IDs, direct URLs, dates, short supporting excerpts, explicit uncertainty and
bounded stopping rules. It prohibits invented samples, assumed permissions and
unapproved gate advancement.

| Prompt | Assignment | Observed outcome |
| --- | --- | --- |
| 1 | Define a small provisional product scope and stop for confirmation | Proposed Championship graphics; exposed the assumptions later questioned by the user. |
| 2 | Verify one supplier against that scope | Produced a requirement map, documented prices and technical gaps; initially relied partly on a legacy v2 reference. |
| Correction + 3 | Repair version-dependent claims and inspect publishing rights | Used v4 documentation, revised historical-standings claims and found actual terms on the provider's About page. |
| 4 | Consolidate evidence and assign next actions | Produced evidence-register.md and handoff.md, stored verbatim with checksums. |
| 5 | Independent Gate 1 acceptance audit | Prepared but not completed; no gate approval resulted. |

### 2.4 Evidence handling and verification

Evidence was assessed at distinct levels: provider documentation, provider examples,
authorized target-competition observations, vendor clarification and independent
review. These are not interchangeable. A field in a schema does not prove actual
coverage; an API subscription does not establish every downstream publishing right;
a successful observation does not establish a contractual service guarantee.

Codex reopened selected official pages to check claims. This was a desk review,
not an authenticated integration test or legal determination. The imported register
labels claims “accepted” at the researcher level and explicitly leaves independent
review incomplete. Only selected findings were separately checked by Codex; this
report does not upgrade every register row to independently verified status.

The two Prompt 4 files were copied byte-for-byte and SHA-256 values recorded in the
[import manifest](chatgpt-prompt-4/chatgpt-import.json). Checksums establish file
integrity, not factual truth. The source record contains links and short excerpts,
not a complete immutable archive of all pages or all intermediate conversations.

## 3. Results

### 3.1 Source assessment

The following summarizes the dated 2026-09-17 review and is not a fresh claim that
prices, terms or coverage will remain unchanged.

| Candidate | Evidence gained | Limit |
| --- | --- | --- |
| StatsBomb Open Data | Repository separates competition/season metadata, matches, events, lineups and selected 360 data. | Licence text was not successfully inspected in this work; commercial suitability and required coverage/freshness remain unestablished. |
| Sportradar | Scheduling and match endpoints are documented; coverage requires competition/season-specific checks. | No scoped package, contract rights, quote or authenticated target sample obtained. |
| football-data.org | Championship coverage and relevant schemas documented; current price cards and published terms located. | Target data completeness, freshness and the proposed downstream publication workflow remain unresolved. |

Official sources used in the review include the [StatsBomb repository](https://github.com/hudl/open-data),
[Sportradar coverage guidance](https://developer.sportradar.com/soccer/docs/soccer-ig-historical-data),
and football-data.org's [coverage](https://www.football-data.org/coverage),
[pricing](https://www.football-data.org/pricing),
[v4 guide](https://docs.football-data.org/general/v4/index.html) and
[published terms](https://www.football-data.org/about).

### 3.2 Corrections and concrete progress

The review corrected Gemini's placement of Championship behind a paid tier and its
inaccurate price quotations. Inspected price cards included a €12/month livescore
option, €29 packages and Standard at €49/month, with possible VAT. Commercial rights
were not inferred from those prices. Earlier unsupported legal quotations were
not retained as evidence.

ChatGPT's initial reliance on the legacy API reference was identified and corrected.
The v4 review established documented historical-standings filters with a limitation
concerning reconstructed tables and deductions, and corrected final-score mappings
to home/away fields. A discrepancy between published Standard rate limits remained
recorded rather than silently resolved. Details and claim IDs are preserved in the
[evidence register](chatgpt-prompt-4/evidence-register.md).

Finding the actual terms resolved a document-location blocker. The terms describe
a single-application condition, attribution, cancellation-related restrictions and
third-party-image rights. The proposed customer publication and retention workflow
was still not clearly established. Account deletion was distinguished from the
unresolved treatment of graphics previously exported or published by customers.

### 3.3 Results not obtained

No authenticated current-season Championship samples were collected; no results or
standings latency observations were recorded; no vendor inquiry was sent; no written
permission or relevant contract was obtained; no budget/production-volume fit was
established; and no independent Prompt 5 acceptance audit was completed. This phase
did not validate creator demand, willingness to pay, buyer suitability or a preference
for Championship. It did not execute a 200-creator discovery run.

### 3.4 Scope drift

The investigation began with a broad creator-discovery and domain-validation goal.
A convenient data source led to a hypothetical graphics product and then to one
English competition. These choices simplified technical investigation but did not
answer why creators needed that product or why Championship was the right market.

Codex contributed to the drift by endorsing the narrowed example, supplying scope-
confirmation wording and repeatedly seeking report revisions before establishing a
clear acceptance test. Subsequent artifacts gave the narrowed scope more authority
than the original user requirements supported. The user's questions revealed this
mismatch. The supplier findings remain potentially useful, but cannot retrospectively
justify the product or competition choice.

## 4. Discussion and limitations

The strongest procedural improvement was replacing broad essays with bounded,
traceable questions and explicit blockers. Locating a document, correcting a field
mapping and identifying a specific rights question are progress even when a gate
cannot pass. Another rewrite of an unchanged blocker is not equivalent progress.

The work remains limited by incomplete source preservation, version inconsistencies
in provider documentation, absent target-data tests and unresolved scope. The
freshness handoff also lacks a predefined observation count/window and explicit
pass/fail protocol. Those must be set before testing, if the product requires it.
A single successful sample would demonstrate an example, not season-wide reliability.

The next decision should therefore be the intended user problem and use case. Define
a provisional product brief without treating it as demand validation, then apply
the established gate order. If the graphics hypothesis is retained, the prepared
vendor inquiry and technical test plan become relevant. If a different use is
chosen, adapt the data and rights requirements rather than carrying this narrow
supplier checklist forward automatically. No vendor contact is implied by this report.

## 5. Conclusion

This phase produced a documented partial supplier assessment, a reproducible prompt
sequence and a handoff with explicit gaps. It did not establish a viable football
product or pass Gate 1. The final conclusion is **Needs Evidence, with product scope
requiring clarification**. Graphics and Championship are provisional hypotheses,
not findings about customer needs or a final market selection.

Preserve the existing records as research history. Before resuming supplier-specific
work, clarify what creators should be able to do and what data that requires. Then
close the relevant evidence gaps, conduct independent Gate 1 review, and only after
acceptance proceed to researched pain and individual/small-operator buyer validation.
This study closes the documented review phase; it does not close domain validation.
