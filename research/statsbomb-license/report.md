# StatsBomb Open Data: Licence Verification

## Abstract

The prior study's PDF-access blocker is closed. Codex retrieved the governing
five-page licence from a pinned official repository commit, extracted its text
with two PDF libraries and visually inspected all five rendered pages. The
repository's name does not establish a permissive open-data licence.

## Method and provenance

Research date: 2026-09-18. Prior baseline: [study at ff3d57f](https://github.com/Dextromethorpan/local-outreach-dashboard-factory/tree/ff3d57f/research/european-football-data).
The repository HEAD resolved to `4b73468fc5b0f1950f9f66fada70ad3a4f9327cb`. The document footer identifies
8 September 2023 as its last update; that is not its retrieval date.

- [Official pinned licence](https://github.com/hudl/open-data/blob/4b73468fc5b0f1950f9f66fada70ad3a4f9327cb/LICENSE.pdf)
- [Preserved PDF](evidence/LICENSE.pdf)
- [Extracted text](evidence/license-extracted.txt)
- [Retrieval time, URL and SHA-256](evidence/retrieval.json)

The initial sandbox HTTP request failed at DNS resolution. Authorized network
retrieval succeeded. `pypdf` lost word spacing; `pdfplumber` provided readable text.
PDFium rendering was checked visually against that text, including the footer.
Extraction artifacts in punctuation do not amend the source PDF.

## Findings and claim register

| Claim | Finding | Governing location |
|---|---|---|
| SB-LIC-01 | Analysis/research access and public sharing of conclusions are contemplated, subject to the agreement. | Introduction and §1.1, p.1 |
| SB-LIC-02 | Commercial exploitation of data **and derived analysis** is prohibited under these terms. | §1.2.2, p.1 |
| SB-LIC-03 | Third-party provision, distribution and sale of the data are restricted; raw customer exports are not generally authorized. | §1.2.1, p.1; §7, p.4 |
| SB-LIC-04 | Published analysis must carry the StatsBomb logo. | §1.4, p.2 |
| SB-LIC-05 | No explicit general caching duration or post-termination retention grant was found. Do not infer either perpetual rights or a specific deletion deadline. | Whole document; §§2.1, 6, 7 |
| SB-LIC-06 | Service can be withheld/suspended; accuracy and completeness are not warranted. | §§2.1, 3.4, 6 |
| SB-LIC-07 | §7 refers to prior written consent for uses outside express permissions. A separate commercial agreement was not inspected. | §7, p.4 |
| SB-LIC-08 | The document asks users to provide name/email before access; no registration was submitted in this research. | §2.2, p.2 |

These are source-based research findings, not a legal opinion on a particular product.
No affirmative video, club-logo or unrestricted third-party-media grant is established.

## Effect on the earlier study

Replace **licence not inspected—tool-access blocker** with **licence inspected;
research/public analysis subject to conditions; commercial exploitation expressly
restricted**. This change applies to the Open Data agreement, not every commercial
StatsBomb product. Public accessibility is not sufficient commercial permission.

## Conclusion and stop condition

Priority 1 is complete. The source no longer needs repeated retrieval attempts.
If a future proposed use is commercial, evaluate an appropriate separately licensed
source or agreement. If it depends on customer exports or retention, clarify those
specific rights before relying on them. No vendor contact, credentials, purchase,
provider selection or gate approval occurred.

![StatsBomb attribution](https://raw.githubusercontent.com/hudl/open-data/4b73468fc5b0f1950f9f66fada70ad3a4f9327cb/img/SB%20-%20Icon%20Lockup%20-%20Colour%20positive.png)
