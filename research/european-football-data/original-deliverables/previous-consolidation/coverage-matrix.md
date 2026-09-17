# Consolidated coverage matrix

**Prompt:** 4 --- consolidation and independent checks\
**Date:** 2026-09-17\
**Scope:** Sportmonks, API-Football, football-data.org, StatsBomb Open
Data; Premier League, La Liga, Serie A, Bundesliga, Ligue 1, UEFA
Champions League.\
**Status:** Comparison only. No provider is fully verified or approved.
No Gate 1 decision.

## Evidence classes

-   **Researcher report:** claim carried from the source-specific Prompt
    2 report/amendment.
-   **Independent documentation check:** decision-relevant official page
    reopened during Prompt 4.
-   **Actual data observation:** a repository/API data file was actually
    inspected. Only the bounded StatsBomb sample qualifies in the
    retained evidence; the user additionally records that Codex
    independently checked its six sampled match counts.
-   **Unresolved:** not established by the evidence reviewed.

## Provider-level matrix

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Provider                Six-competition       Current-season     Main documented data depth                   History           Live/update        Packages / quotas         Observation
                          presence              evidence                                                                          evidence                                     status
  ----------------------- --------------------- ------------------ -------------------------------------------- ----------------- ------------------ ------------------------- ---------------
  **Sportmonks**          Research reports      **Not              Fixtures/results/standings, teams/players,   Historical        Live-data product  **Independently           No
                          document all six;     independently      lineups, events and stats documented         availability      documented; no     checked:** Starter €29/mo authenticated
                          stable IDs recorded   observed.**        supplier-wide/competition marketing;         exists, but exact independent SLA    5 leagues 2,000           API
                          for PL 8, La Liga     2025/26            advanced features coverage/add-on dependent. six-competition   verification in    calls/entity/hour; Growth observation.
                          564, Serie A 384,     documentation      No continuous tracking established.          depth not fully   consolidation.     €99, 30, 2,500; Pro €249, 
                          Bundesliga 82, Ligue  examples were                                                   enumerated.                          120, 3,000; Enterprise    
                          1 301, CL 2.          corrected: they                                                                                      custom, all advertised    
                                                are not 2026/27                                                                                      leagues, 5,000.           
                                                verification.                                                                                                                  
                                                Account-specific                                                                                                               
                                                current coverage                                                                                                               
                                                remains                                                                                                                        
                                                unresolved.                                                                                                                    

  **API-Football**        Research report says  No 2026/27         Pricing independently confirms endpoints     Exact earliest    Report records     **Independently           No
                          current official      league-season      including standings, teams, livescore,       season by scoped  near-real-time     checked:** Free \$0/100   authenticated
                          catalogue lists all   feature flags      fixtures, events, lineups, players,          competition       polling guidance   requests day; Pro         API
                          six. IDs retained: PL observed.          injuries, odds, statistics, predictions.     unresolved; Free  and hourly         \$19/7,500; Ultra         observation.
                          39, La Liga 140,                         Per-season coverage flags remain unobserved. has limited       standings as       \$29/75,000; Mega         
                          Bundesliga 78, Ligue                                                                  seasons.          guidance, not SLA; \$39/150,000; all         
                          1 61, CL 2; **Serie A                                                                                   Terms say update   competitions/endpoints,   
                          ID still not                                                                                            frequencies are    Free season-limited.      
                          re-verified**.                                                                                          indicative/not                               
                                                                                                                                  guaranteed.                                  

  **football-data.org**   Research              No current 2026/27 Fixtures/schedules/scores/standings/teams;   Exact             Pricing            **Independently           No
                          report/current        API observation.   paid tiers advertise lineups/subs, scorers,  six-competition   distinguishes      checked:** Free €0/10     authenticated
                          catalogue says all    Old v4 payload     bookings/cards, squads; statistic add-on     season lists      delayed Free       calls min; Livescores     API
                          six are included.     examples remain    lists match statistics. Competition-specific unresolved; ML    scores/schedules   €12/20; ML Light €29/20;  observation.
                          **Independently       documentation      deep-field population remains unresolved.    Pack Light        from paid live     Deep Data €29/30;         
                          checked v4 IDs:** PL  examples.                                                       advertises 10     scores. No         Standard €49/60; Advanced 
                          2021, La Liga 2014,                                                                   seasons.          numerical          €99/100; Pro €199/120.    
                          Serie A 2019,                                                                                           delay/SLA          Earlier v4 policy quota   
                          Bundesliga 2002,                                                                                        established.       conflict remains          
                          Ligue 1 2015, CL                                                                                                           unresolved.               
                          2001.                                                                                                                                                

  **StatsBomb Open Data** `competitions.json`   Not a current/live README documents matches, events, lineups    Exact catalogue   Repository         Repository access;        Six season
                          report records all    feed finding.      and selected-match 360 JSON. One event +     seasons           timestamps do not  licence scope **not       match files
                          six for selected      Catalogue contains corresponding lineup were actually           enumerated in     establish live     inspected---tool-access   sampled. Counts
                          historical seasons:   selected           inspected. 360 is not continuous tracking.   source report;    coverage, SLA or   blocker**. Do not infer   independently
                          PL 2 rows, La Liga    historical                                                      **season listing  future update      permissions from "Open    checked by
                          18, Serie A 2,        seasons.                                                        ≠ complete        guarantee.         Data."                    Codex per
                          Bundesliga 2, Ligue 1                                                                 season**.                                                      handoff
                          3, CL 18.                                                                                                                                            instruction;
                                                                                                                                                                               completeness
                                                                                                                                                                               unverified.
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## StatsBomb bounded observations retained

  -------------------------------------------------------------------------------------------
  Competition   Latest listed Raw match file                  Match records Evidence
                season                                                      
                sampled                                                     
  ------------- ------------- --------------------------- ----------------- -----------------
  Premier       2015/16       `data/matches/2/27.json`                  380 Actual
  League                                                                    repository-file
                                                                            sample; Codex
                                                                            independently
                                                                            checked count

  La Liga       2020/21       `data/matches/11/90.json`                  35 Same

  Serie A       2015/16       `data/matches/12/27.json`                 380 Same

  Bundesliga    2023/24       `data/matches/9/281.json`                  34 Same

  Ligue 1       2022/23       `data/matches/7/235.json`                  32 Same

  Champions     2018/19       `data/matches/16/4.json`                    1 Same
  League                                                                    
  -------------------------------------------------------------------------------------------

These counts are repository records only. **No sampled season is
labelled complete.**

The retained event/lineup sample is Champions League match `22912`,
Tottenham Hotspur v Liverpool, 2019-06-01. Event fields actually
observed include time/index fields, event type,
possession/team/player/position, locations, related events,
tactics/formation and type-specific nested pass/carry/receipt data.
Lineup fields actually observed include team/player IDs and names,
jersey number, country, cards, positions and position intervals. This
one-match sample is not generalized.

## Corrections preserved

1.  Sportmonks 2025/26 examples are dated documentation evidence, not
    current 2026/27 observations.
2.  Sportmonks quota mapping retained as 2,000 / 2,500 / 3,000 / 5,000
    per entity/hour.
3.  Unsupported Sportmonks 2026/27 article/VAT claims from the earlier
    continuation were superseded: VAT/currency were later directly
    established in the Terms amendment; current-season API availability
    remains unresolved.
4.  football-data.org legacy v2 evidence is not used as current v4
    evidence.
5.  football-data.org coverage-site `CUP` labeling does **not**
    establish current API `type` and does not prove Champions League
    standings are unavailable.
6.  StatsBomb catalogue rows are not complete-season claims; 360 markers
    do not establish every-match 360 coverage.

## Prompt-4 independent checks used

Reopened official pages: Sportmonks Terms and pricing; API-Football
Terms and pricing; football-data.org Terms/About and pricing;
football-data.org v4 lookup tables; StatsBomb README. Coverage details
not expressly rechecked on these pages remain researcher-report evidence
rather than newly independent verification.

## Coverage questions still open

Current 2026/27 observations remain absent for the three API providers.
Sportmonks account-specific feature coverage, API-Football
season-specific flags/Serie A ID/history, football-data.org exact season
depth/deep-data mapping/effective rate-limit discrepancy, and StatsBomb
remaining 39 match files/event-lineup reconciliation/360
enumeration/HEAD SHA remain unresolved.
