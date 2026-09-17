# European Football Data Sources: A Partial Comparative Study of Available Data and Published Permitted Uses

**Date:** 2026-09-17  
**Scope:** Sportmonks, API-Football, football-data.org and StatsBomb
Open Data; Premier League, La Liga, Serie A, Bundesliga, Ligue 1 and
UEFA Champions League.  
**Study status:** Partial. This paper compares evidence collected in
bounded research passes; it does not select a provider, define a
product, provide legal clearance or approve Gate 1.

## Abstract

This study compares four legitimate football-data sources across six
major European competitions, separating two questions that are often
conflated: **what data a source documents or actually exposes**, and
**what uses its published terms appear to permit or restrict**. The
evidence base is intentionally incomplete. Sportmonks, API-Football and
football-data.org were reviewed primarily through current official
documentation, coverage/pricing pages and published terms, without
authenticated API calls. StatsBomb Open Data additionally supplied a
bounded set of directly inspected repository files, but its governing
`LICENSE.pdf` could not be retrieved by the available research tooling
and therefore remains unclassified.

The study finds materially different evidence structures. Sportmonks
documents broad API capabilities and its standard Terms expressly
contemplate applications and monetized creations while restricting
direct resale. API-Football documents broad coverage and
application-building but expressly distinguishes API access from
publication licences and underlying commercial competition rights.
football-data.org documents v4 resources and current packages while its
published 2018 General Terms explicitly require attribution and restrict
post-cancellation referencing, yet remain silent on several
downstream-use questions. StatsBomb provides concrete historical JSON
data for all six scoped competitions, including sampled
match/event/lineup files, but the unresolved licence prevents this study
from classifying its commercial, redistribution, export, storage or
termination rights.

## 1. Research question and boundaries

The research question is: **What data are available through legitimate
sources for the six scoped competitions, and what uses do the sources'
published licences or contracts permit?**

The study does not test a specific graphics product, customer workflow,
delay threshold, Championship requirement, business model or budget. It
does not infer demand or product feasibility. Supplier-wide claims are
not treated as proof that every field is populated for every competition
and season. Public accessibility is not treated as an open licence, and
scraping is outside scope.

## 2. Methodology

Research was executed sequentially in bounded prompts. Prompt 1 created
a preliminary candidate inventory. Prompt 2 reviewed technical coverage
source by source. Prompt 3 reviewed published rights source by source.
Prompt 4 consolidated the results and reopened a bounded set of
decision-relevant primary sources. This Prompt 5 paper summarizes that
evidence without closing unresolved questions.

The study uses **claim-appropriate evidence**. Direct API or
repository-file observations support claims about actual contents.
Current official API documentation, coverage catalogues and pricing
pages support claims about advertised capabilities, identifiers, package
restrictions and coverage mechanisms. Published terms or licences
support claims about permissions and restrictions. Documentation
examples are not current-season observations, and technical availability
is not treated as legal permission.

No authenticated API calls were performed for Sportmonks, API-Football
or football-data.org. Consequently, their current 2026/27 field
availability is not an observed result in this study. StatsBomb
repository files were directly inspected in a bounded sample.

### Reviewer roles

**ChatGPT (GPT-5.6 Sol)** was the primary researcher for the
source-specific reports, amendments, consolidation and same-researcher
primary-source rechecks. Those Prompt 4 rechecks are not independent
review. **Codex** is separately recorded as an independent reviewer only
for the six StatsBomb sampled match counts. No independent rights
reviewer is recorded.

## 3. Coverage comparison

### 3.1 Sportmonks

Sportmonks v3 documentation and competition pages support the presence
of all six scoped competitions. Retained identifiers are Premier League
`8`, La Liga `564`, Serie A `384`, Bundesliga `82`, Ligue 1 `301` and
Champions League `2`. The source reports document
fixtures/results/standings structures and broader advertised coverage of
teams, players, lineups, events, match statistics and advanced products.
Advanced features remain coverage/add-on dependent, and no continuous
optical player or ball tracking was established.

A material correction applies to season evidence: documentation examples
showing 2025/26 cannot be used as verification of 2026/27 availability.
Sportmonks documents account-specific coverage mechanisms, including
`My` endpoints, but no authorized account/API observation was performed.
Thus the study supports advertised/documented capability, not current
account-specific completeness.

Public pricing evidence records Starter, Growth, Pro and Enterprise
league-selection/call-limit structures, with the retained call mapping
of 2,000 / 2,500 / 3,000 / 5,000 per entity per hour. Exact historical
depth and feature entitlement remain incomplete.

### 3.2 API-Football

The retained current coverage review reports all six competitions in
API-Football's public catalogue. Original coverage claim IDs `API-F-01`
through `API-F-09` are preserved. Documented IDs include Premier League
`39`, La Liga `140`, Bundesliga `78`, Ligue 1 `61` and Champions League
`2`; Serie A's stable ID was not reverified in the bounded pass.

API-Football documents fixtures/results/livescore, events, lineups,
fixture/team/player statistics, standings, players, injuries, odds,
predictions, transfers and other endpoints. Its documentation makes
season-specific coverage flags important: supplier-wide endpoint
existence does not prove a category is available for a particular
league-season. No 2026/27 `/leagues` coverage response was observed.

The public plans reviewed range from Free through Mega, with daily
quotas and separate per-minute throttles. Historical depth for each
scoped competition, exact Free-plan season availability and
fixture-level variation remain unresolved. Polling/update guidance was
recorded, but the Terms qualify availability/update statements; the
study therefore records no guaranteed latency SLA.

### 3.3 football-data.org

Current v4 lookup documentation identifies the six competitions as
Premier League `2021` (`PL`), La Liga `2014` (`PD`), Serie A `2019`
(`SA`), Bundesliga `2002` (`BL1`), Ligue 1 `2015` (`FL1`) and Champions
League `2001` (`CL`). The public coverage report lists all six.

The v4 resource documentation supports fixtures/matches, scores,
standings, teams and season filtering, while public packages advertise
deeper categories including lineups/substitutions, scorers,
bookings/cards and squads. A statistics add-on lists match-statistic
categories. These are documented capabilities and field shapes, not
evidence that every field is populated for all six competitions or
plans.

Exact historical season lists were not established. A public package
advertises ten seasons of history, but that does not answer
competition-by-competition depth. The current pricing page and v4 policy
documentation also conflict on some paid-plan rate limits; the
contradiction remains unresolved.

An earlier inference concerning Champions League standings was
corrected. The coverage website's `CUP` classification does not
establish the current v4 API `type` for the current Champions League
edition and does not prove that standings are unavailable. Current API
type/standings behavior remains a technical gap.

### 3.4 StatsBomb Open Data

StatsBomb differs from the three API services because the evidence
reviewed is a repository of selected historical JSON exports. Its
`competitions.json` catalogue contains 45 scoped competition-season rows
across all six competitions: two Premier League rows, 18 La Liga, two
Serie A, two Bundesliga, three Ligue 1 and 18 Champions League. A
catalogue row is not proof that every real-world fixture from that
season is present.

A bounded sample inspected the latest listed season file for each
competition. The repository-record counts were: Premier League 2015/16 —
380; La Liga 2020/21 — 35; Serie A 2015/16 — 380; Bundesliga 2023/24 —
34; Ligue 1 2022/23 — 32; Champions League 2018/19 — 1. ChatGPT
performed the original raw-file inspection; Codex independently checked
these six counts. **No count establishes season completeness.**

The sample also inspected event and lineup files for Champions League
match `22912`, Tottenham Hotspur v Liverpool on 2019-06-01. The event
sample contained event timing/type, possession, team/player/position,
location, formation and type-specific nested data; the lineup sample
contained team/player identity, jersey/country/cards and positional
intervals. These observations apply only to the sampled match.

The README documents StatsBomb 360 files for **selected matches**. The
study does not treat 360 as continuous optical tracking, and match-level
360 enumeration remains unresolved. Repository timestamps do not
establish live coverage or an update SLA.

## 4. Published permitted uses

### 4.1 Sportmonks

The inspected Sportmonks Terms expressly contemplate users building
apps, websites and games from supplied data and state that earning money
from a creation based on the data is, in principle, acceptable. The same
Terms prohibit direct resale without approval. They separately permit
distribution, transfer and storage of data provided by the services.
These clauses support a distinction between value-added creations and
prohibited direct resale, but the precise boundary for bulk
redistribution, customer exports and derived datasets is not defined.

Storage is expressly addressed, but post-termination retention/use is
not. No general numerical-data attribution requirement was found in the
inspected standard Terms. Logos and profile photos remain copyrighted by
their legal owners, and no affirmative reproduction/redistribution
licence was found for linked video highlights. Standard Terms do not
establish an official competition-rights grant.

These findings describe the published standard Terms only. They do not
constitute legal clearance for a particular use.

### 4.2 API-Football

API-Football's Terms contain an important tension that must be preserved
rather than resolved by selecting one clause. They state that data are
provided so users can create applications, websites and fantasy games,
while separately stating that API-Football does not provide a licence
for use/publication of the supplied data and does not grant commercial
rights in the competitions. Direct resale of supplied data is
prohibited.

Accordingly, API subscription/access and technical application-building
do not themselves establish the user's right to publish underlying
competition data commercially. The Terms place responsibility for
necessary third-party permissions on the user and note that
logos/images/trademarks may require authorization. Derived analysis,
customer exports, non-sale bulk redistribution and post-termination
cache survival remain unresolved.

The Terms distinguish direct API-Football subscriptions from RapidAPI
administration and state that the API data are the same. RapidAPI's
separate marketplace/customer terms were not inspected, so no conclusion
is drawn that the two subscription routes have identical contractual
conditions beyond API-Football's own statements.

### 4.3 football-data.org

football-data.org's published General Terms display **Last updated: June
1, 2018**. They explicitly permit registered access to the API subject
to the Terms and scope an API key to a single application/domain. They
do not contain a general clause expressly granting or prohibiting
commercial publication/display of numerical data during an active
subscription.

Section 7.1 explicitly requires visible attribution. Section 9.1
explicitly states that after cancellation the customer may not reference
specified API-obtained football data on its own site/service. Section
9.2 states that graphics such as team logos and profile photos are
copyrighted by their legal owners and that the customer must obtain
consent/proof of rights.

The Terms are silent or unresolved on derived analysis, raw
redistribution/resale, customer exports and customer caching/retention
during the subscription. The account-deletion clause does not by itself
establish a rule for independently stored customer caches. The
availability/accuracy disclaimer is not evidence of a particular delay.

### 4.4 StatsBomb Open Data

The repository README states that certain data are made freely available
for research projects and genuine interest in football analytics, and
separately asks users publishing/sharing/distributing research, analysis
or insights to identify StatsBomb as the source and use its logo.

However, the governing root `LICENSE.pdf` was located but **not
inspected—tool-access blocker**. The permitted-use categories requested
in Prompt 3—research/personal use, commercial use, derived analysis,
redistribution, customer exports, storage, attribution under the
licence, termination and separate media requirements—therefore remain
unclassified.

This study does **not** infer a verified open licence from the
repository's “Open Data” name, does not classify commercial use as
permitted, and does not classify it as prohibited. README guidance is
reported separately from the uninspected licence.

## 5. Comparative observations

The four sources cannot be compared as though they had the same evidence
type. Sportmonks, API-Football and football-data.org are primarily
documented API services in this study; their current-season data were
not directly observed. StatsBomb supplied directly inspectable
historical repository data, but its governing licence could not be
inspected.

The published rights language also differs materially. Sportmonks'
standard Terms contain affirmative language around creations based on
supplied data alongside a direct-resale restriction. API-Football
expressly separates application-building from publication/commercial
competition rights. football-data.org's older published Terms contain
explicit attribution and post-cancellation rules but leave several
active downstream-use categories undefined. StatsBomb cannot be placed
into the same permissions comparison until its licence is actually
inspected.

These differences are descriptive. They do not establish which source
should be chosen for any unspecified product or use.

## 6. Limitations

The study is intentionally partial. No authenticated API observations
establish 2026/27 feature availability for the three API providers.
Coverage marketing and documentation may not equal fixture-level
population. Historical depth remains incomplete for several providers.
Rate-limit and package evidence may change and, in football-data.org's
case, contains an unresolved internal discrepancy.

The StatsBomb sample is bounded to six match files plus one event and
one lineup file; 39 other catalogue match files were not enumerated,
event/lineup presence was not reconciled across all matches, 360 was not
enumerated, and repository HEAD SHA remained unresolved. Season
completeness was not established even where a sampled file contained a
familiar full-season-sized count.

Rights analysis is documentary rather than legal advice. It does not
determine what external database, competition, trademark, copyright or
other rights may apply in a jurisdiction or to a specific use. No
negotiated/custom agreements were reviewed. API-Football's separate
RapidAPI terms were not reviewed. Most importantly, StatsBomb's
governing licence remains unavailable to this research pass.

Reviewer independence is also limited. ChatGPT performed both the
primary research and Prompt 4 rechecks. Codex independently checked only
the six StatsBomb sampled match counts. There is no recorded independent
rights review.

## 7. Unresolved questions

Before this evidence could support a later product-specific gate, the
research would still need to resolve, where relevant:
current-season/account feature availability; exact historical depth;
provider-specific deep-data mapping; effective rate limits where
documentation conflicts; customer-export and derived-data boundaries;
post-termination storage/use; additional subscription-channel terms;
media and upstream competition rights; and the StatsBomb `LICENSE.pdf`.

Those are research gaps, not findings of absence or prohibition.

## 8. Conclusion

The evidence establishes that all four sources are relevant to the
six-competition data landscape, but in different ways and with
materially different verification states. The API providers document
broad current capabilities without authenticated current-season
observations in this study. StatsBomb supplies directly inspectable
selected historical data, with sample contents verified more concretely
than the API providers' data contents, but without a successfully
inspected governing licence.

The published terms provide useful but incomplete distinctions around
permitted use. Sportmonks expressly addresses creations,
storage/distribution and direct resale; API-Football expressly separates
API/application access from publication and competition-rights
permission; football-data.org explicitly addresses attribution and
post-cancellation referencing while remaining silent on several
downstream uses; StatsBomb's licence remains unresolved.

Accordingly, this paper is a **partial comparative study of available
data and published permitted uses**. It does not select a provider,
invent or evaluate a product, provide legal clearance, or imply Gate 1
approval.
