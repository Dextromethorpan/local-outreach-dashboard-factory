# Consolidated rights matrix

**Prompt:** 4 --- consolidation and independent checks\
**Date:** 2026-09-17\
**Status:** Contract/document comparison only; not legal clearance,
provider approval or Gate 1.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------
  Use / issue             Sportmonks                              API-Football                           football-data.org       StatsBomb Open Data
  ----------------------- --------------------------------------- -------------------------------------- ----------------------- ----------------------------
  **Research/personal     Terms permit use of supplied data       API access permitted subject to Terms; API access expressly    **Licence not
  use**                   within service rules; website materials underlying publication rights remain   permitted after         inspected---tool-access
                          separately personal/non-commercial.     user's responsibility.                 registration;           blocker.** README says data
                                                                                                         publication scope not   made available for
                                                                                                         comprehensively         research/genuine
                                                                                                         defined.                football-analytics interest,
                                                                                                                                 but README guidance is not
                                                                                                                                 substituted for licence.

  **Commercial            **Independently checked:** Terms        **Independently checked:**             Terms do not expressly  **Unknown --- licence not
  application/display**   contemplate apps/websites/games and     applications are contemplated, but     grant or prohibit       inspected.**
                          earning money from creations based on   Terms explicitly say they do not       general commercial      
                          data.                                   provide a publication licence and      publication during      
                                                                  grant no commercial rights in          subscription. §9.1      
                                                                  competitions; external rights may be   post-cancellation       
                                                                  needed.                                restriction implies     
                                                                                                         active referencing is   
                                                                                                         contemplated, but this  
                                                                                                         is interpretation, not  
                                                                                                         an affirmative          
                                                                                                         commercial licence.     

  **Derived analysis**    Retained review: permitted in principle Ambiguous; no transformation           Silence/unresolved.     Unknown. README discusses
                          as a creation based on data; exact      threshold.                                                     research/analysis sharing
                          derived-data/redistribution boundary                                                                   with attribution guidance,
                          undefined.                                                                                             but governing licence
                                                                                                                                 unavailable.

  **Raw resale /          **Independently checked:** direct       **Independently checked:** direct      No explicit             Unknown.
  redistribution**        resale without approval prohibited;     resale prohibited without permission;  resale/redistribution   
                          Terms say distribution/transfer/storage general non-sale bulk redistribution   clause found in         
                          of data is allowed, while reselling     not affirmatively licensed.            published Terms.        
                          product/data is restricted.                                                                            

  **Customer exports**    Ambiguous boundary:                     Ambiguous/external-rights-dependent.   Silence/unresolved.     Unknown.
                          distribution/transfer allowed, direct                                                                  
                          resale prohibited;                                                                                     
                          CSV/PDF/report/downstream-publication                                                                  
                          rule not defined.                                                                                      

  **Storage / caching**   **Independently checked:** Terms        Official technical guidance in         No customer-cache       Unknown.
                          expressly allow storage of data         retained report contemplates caching;  grant/TTL found; §4.6   
                          supplied by services; post-termination  Terms do not define                    account deletion is not 
                          use unresolved.                         retention/post-termination rights.     a customer-cache rule.  

  **Attribution**         No general numerical-data attribution   No general numerical-data attribution  **Explicit §7.1:**      Licence unknown. README
                          requirement found in retained Terms     requirement found in retained Terms    visible "Football data  separately asks
                          review.                                 review.                                provided by the         publishers/sharers of
                                                                                                         Football-Data.org API"  research/analysis/insights
                                                                                                         attribution.            to identify StatsBomb and
                                                                                                                                 use its logo.

  **Termination /         Cancellation normally preserves access  Provider may suspend/terminate,        **Explicit §9.1:**      Unknown.
  post-termination**      through paid period; provider may       including following                    after cancellation,     
                          terminate for violation; stored-data    recognized-rightsholder complaint;     customer may not        
                          rights after termination unresolved.    stored/cached-data survival            reference API-obtained  
                                                                  unresolved.                            football data on own    
                                                                                                         site/service. §4.6      
                                                                                                         deletes account and     
                                                                                                         corresponding           
                                                                                                         provider-side           
                                                                                                         stored/indexed data.    

  **Media / third-party   Logos/profile photos owned by legal     Logos/images/trademarks not owned by   §9.2 retained review    Governing licence unknown;
  rights**                owners; video URLs "use at your own     API-Football; user responsible for     requires consent/proof  README's logo instruction is
                          risk."                                  necessary third-party permissions.     of rights for graphics  guidance, not a substitute
                                                                                                         including logos/profile for licence/media-pack
                                                                                                         photos.                 terms.

  **Underlying            Standard Terms reviewed do not          **Explicit:** provider says it does    Published Terms do not  Unknown because licence not
  competition rights**    establish official league-rights        not grant commercial rights in         comprehensively address inspected.
                          grants; do not infer them.              competitions and data may face         upstream numerical-data 
                                                                  third-party restrictions.              rights.                 
  -----------------------------------------------------------------------------------------------------------------------------------------------------------

## Key independent confirmations

**Sportmonks:** current Terms explicitly say users may build
apps/websites/games, may earn money from creations based on data, may
distribute/transfer/store supplied data, and may not resell the data
without approval. The Terms also separate Sportmonks website/media
copyright from supplied API data.

**API-Football:** current Terms preserve the central tension: they
contemplate building applications while stating that API-Football does
not provide a licence for use/publication of supplied data and does not
grant commercial competition rights. Direct resale is prohibited;
third-party authorizations may be necessary.

**football-data.org:** the published General Terms display **Last
updated June 1, 2018**. §7.1 requires attribution. §9.1 restricts
referencing API-obtained football data after cancellation. The document
remains silent on several active-subscription downstream-use questions.

**StatsBomb:** Prompt 3 did not reach the licence text. Status is
exactly **not inspected---tool-access blocker**. It is neither
classified as prohibited use nor as verified open licensing. README
wording is recorded separately.

## Unresolved rights questions carried forward

Sportmonks: customer-export boundary, derived-dataset redistribution,
post-termination storage/use, multiple-domain implementation, media
rights. API-Football: exact publication permissions by competition/use,
derived outputs, exports, cache survival, RapidAPI additional terms.
football-data.org: affirmative commercial-publication scope,
redistribution/resale, derived analysis, exports, caching and upstream
rights. StatsBomb: every requested licence category remains unresolved
until the actual `LICENSE.pdf` can be inspected.
