/* GENERATED FILE, DO NOT EDIT BY HAND.
 * Source:     persona_research/persona_research_output/*.md
 * Regenerate: python3 scripts/extract_persona_research.py
 */
window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};
window.PERSONA_DETAIL["P06"] = {
  "id": "P06",
  "title": "Reservoir Engineer",
  "aliases": [
    "Surveillance Reservoir Engineer",
    "Asset Reservoir Engineer",
    "Classical Reservoir Engineer"
  ],
  "segment": "Subsurface & Geosciences",
  "segmentLong": "Upstream — Subsurface & Reservoir Management",
  "setting": "Subsurface Asset Team Office (seated in integrated asset pod alongside production engineers and geologists)",
  "tier": "Core 20",
  "core20": true,
  "governingStandards": "SPE Reservoir; PRMS",
  "agentFocus": "Material Balance & Pressure Survey Assembly Agent",
  "sourceFile": "P06_Reservoir_Engineer.md",
  "person": "Daniel Chen",
  "avatar": "avatars/P06_persona.jpg",
  "thumb": "avatars/thumbs/P06_thumb.jpg",
  "initials": "RE",
  "headline": "The Reservoir Engineer manages the thermodynamic bank account of the oil company, calculating how much hydrocarbon remains in the ground, how fast it can be extracted, and what it is commercially worth. While analytical monoliths like Petex MBAL, Kappa Saphir, and S&P Harmony possess mature mathematical engines for material balance, well testing, and decline analysis, they require pristine, un-corrupted input data that almost never exists in reality. The reservoir engineer spends 50–70% of surveillance cycles manually cleaning noisy surface test separator data, transcribing sporadic bottom-hole pressure (BHP) build-up surveys, and hunting down laboratory fluid PVT reports. Rather than an unfeasible \"AI reservoir simulator,\" the Reservoir Engineer requires a federated squad of 7 hyper-specialized agents—each tackling one discrete, research-backed data conditioning, diagnostic classification, or reserves reconciliation workflow. Across a monthly field surveillance cycle, this squad returns ~24.0 hours of high-value recovery optimization time per reservoir asset, eliminating allocation errors, diagnosing water breakthrough mechanisms, and compiling audit-ready PRMS reserves statements.",
  "confidence": {
    "Persona": "Reservoir Engineer (P06)",
    "Research Status": "Desk research grounded in international reserves standards and classical reservoir engineering technical frameworks",
    "Competency Standard Used": "SPE Reservoir Discipline Competency Matrix (2018) & Petroleum Resources Management System (PRMS - 2018) & API RP 44 (Fluid Sampling)",
    "Standard Coverage": "10 of 10 classical reservoir engineering competencies mapped directly to operational actions",
    "Actions Cited": "15 of 17 actions trace directly to SPE Reservoir competencies, PRMS guidelines, and Kappa Dynamic Data Analysis manuals; 2 marked inferred (internal production allocation reconciliation & field abandonment thresholding)",
    "Pain Claims Cited": "9 of 10 pain claims backed by published SPE surveillance literature (e.g., SPE-174823, SPE-181287) and reserves auditing proceedings",
    "Timings Sourced": "Material balance data assembly, PTA curve conditioning, DCA screening, and PRMS dossier assembly timings verified via active reservoir engineer accounts",
    "Gap Claims Cited": "Petex MBAL, Kappa Saphir, and S&P Harmony technical documentation confirm tools require clean, pre-structured .csv or .vol files; none autonomously de-noise raw PDG streams, reconcile back-allocation factors, or classify Chan diagnostic water curves",
    "Known Gaps": "Multi-phase relative permeability hysteretic curves in complex fractured carbonate reservoirs require specialized laboratory SCAL core testing"
  },
  "role": {
    "oneLine": "Forecasts hydrocarbon recovery, diagnoses reservoir drive mechanisms, interprets pressure transient tests, and certifies corporate reserves to maximize economic field recovery throughout the asset lifecycle.",
    "whyItMatters": "The reservoir engineer's decline curves and recovery factors govern corporate reserves booked on financial exchanges (SEC / PRMS), bank borrowing bases, and multi-million-dollar field development capital investments. Over-estimating reservoir drainage volume leads to expensive, stranded surface processing facilities; under-estimating reserves causes premature field abandonment and lost shareholder capital.",
    "notOwned": [
      {
        "task": "Static Geological Depositional Grids & Fault Frameworks",
        "owner": "Development Geologist"
      },
      {
        "task": "Continuous Wellbore Porosity/Saturation Log Splicing",
        "owner": "Petrophysicist"
      },
      {
        "task": "Artificial Lift Pump Sizing & Downhole Hardware Execution",
        "owner": "Production Engineer / Artificial Lift Specialist"
      },
      {
        "task": "Full-Field 3D Numerical Grid Simulation Coding & History Matching",
        "owner": "Reservoir Simulation Engineer"
      }
    ],
    "variants": [
      {
        "name": "Surveillance / Production Reservoir Engineer",
        "detail": "Manages active producing fields; tracks monthly decline curve analysis (DCA), water-cut trends, gas-oil ratio (GOR) spikes, and well test back-allocations."
      },
      {
        "name": "Appraisal / New Field Reservoir Engineer",
        "detail": "Evaluates newly discovered accumulations; plans initial drill stem tests (DST) and fluid PVT sampling programs; calculates early P/Z reserves and drive mechanism indices."
      }
    ],
    "titleCheck": "The industry title is Reservoir Engineer. Do not confuse with \"Reservoir Simulation Engineer\" (who specializes specifically in large-scale numerical grid simulators like Eclipse/tNavigator) or \"Production Engineer\" (who focuses on wellbore hydraulics and lift hardware).",
    "whereTheWorkHappens": {
      "Work Setting": "Subsurface Technical Office: Professional corporate office within an integrated asset team pod (seated adjacent to geologists and production engineers).",
      "What They Can Reach": "Multi-screen workstation running analytical reservoir tools (Petex MBAL, Kappa Saphir, S&P Harmony, SLB OFM), corporate production allocation databases, and SCADA historians.",
      "Shift Pattern": "Standard professional office hours, structured around monthly production allocation closes, quarterly reserves reviews, and annual PRMS/SEC audits.",
      "Where the Record Lives": "System of record: Corporate Reserves Database, Petex IPM project files, Kappa workstation databases, and regulatory reserves declarations."
    }
  },
  "standards": [
    {
      "key": "",
      "citation": "[SPE-Reservoir]: Society of Petroleum Engineers, Competency Management Tool: Reservoir Engineering Discipline Matrix, 2018."
    },
    {
      "key": "",
      "citation": "[PRMS-2018]: SPE / WPC / AAPG / SPEE / SEG / SPWLA / EAGE, Petroleum Resources Management System, Revised 2018 Edition."
    },
    {
      "key": "",
      "citation": "[API-RP-44]: American Petroleum Institute, Recommended Practice for Sampling Petroleum Reservoir Fluids, 2nd Edition."
    },
    {
      "key": "",
      "citation": "[Kappa-Dynamic]: Kappa Engineering, Dynamic Data Analysis: Theory and Practice of Pressure Transient Analysis."
    }
  ],
  "vendorGaps": [
    {
      "product": "Petroleum Experts (Petex) IPM",
      "module": "MBAL (Material Balance)",
      "solves": "Industry standard analytical material balance solver (Havlena-Odeh straight-line, water influx aquifer models).",
      "gap": "Requires manual data input. Does not autonomously clean raw wellhead gauge pressures, reconcile erratic production allocations, or parse PVT lab fluid reports."
    },
    {
      "product": "Kappa Engineering Ecrin",
      "module": "Saphir (PTA)",
      "solves": "Advanced analytical and numerical pressure transient analysis (derivative Bourdet curves, wellbore storage, boundary models).",
      "gap": "Assumes pre-conditioned pressure data. Saphir requires the engineer to manually clean raw gauge files, filter out electrical gauge noise, and pick start-of-shut-in times."
    },
    {
      "product": "S&P Global Harmony Enterprise",
      "module": "Forecast (DCA / RTA)",
      "solves": "Arps decline curve fitting (exponential, hyperbolic, harmonic) and rate transient analysis for tight/unconventional reservoirs.",
      "gap": "Fits curves well when production data is clean. Severely corrupted when wells experience operational shut-ins, choke changes, or compressor downtime without manual filtering."
    }
  ],
  "actions": [
    {
      "code": "A01",
      "action": "Clean and de-noise high-frequency bottom-hole pressure (BHP) gauge data",
      "source": "[Kappa-Dynamic §2]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Periodic",
      "time": "hours",
      "friction": "consistency",
      "agentRef": 1,
      "owner": "agent",
      "agentLabel": "Agent 1: Downhole Gauge De-Noising & Shut-In Agent",
      "label": "Downhole Pressure Data De-Noising (B1, [Kappa-Dynamic §2])",
      "today": "Engineer downloads 500,000 raw gauge readings from a permanent downhole gauge (PDG); manually filters out electrical noise spikes and tidal fluctuations in Excel.",
      "failureMode": "Unfiltered gauge drift corrupts PTA derivative curves, causing engineers to misidentify non-existent reservoir boundaries or false skin damage.",
      "agentNote": "→ Agent 1 (Downhole Gauge De-Noising & Shut-In Agent)."
    },
    {
      "code": "A02",
      "action": "Align and parse sporadic well test separator measurements vs. allocations",
      "source": "[SPE-Reservoir §4]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Daily",
      "time": "hours",
      "friction": "assembly",
      "agentRef": 2,
      "owner": "agent",
      "agentLabel": "Agent 2: Production Back-Allocation Sieve Agent",
      "label": "Well Test vs. Allocation Reconciliation (B1, [SPE-Reservoir §4])",
      "today": "Daily production allocations are derived by multiplying theoretical well tests by a field allocation factor; engineers manually inspect discrepancy gaps.",
      "failureMode": "Allocation factors swing wildly (0.70 to 1.30) due to unmeasured flaring or meter drift, distorting well cumulative production curves.",
      "agentNote": "→ Agent 2 (Production Back-Allocation Sieve Agent)."
    },
    {
      "code": "A03",
      "action": "Screen multi-well Arps decline curves (DCA) for anomaly breaks & staleness",
      "source": "[PRMS-2018 §2]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Monthly",
      "time": "days",
      "friction": "volume",
      "agentRef": 3,
      "owner": "agent",
      "agentLabel": "Agent 3: Batch DCA Outlier & Staleness Agent",
      "label": "Batch Decline Curve Analysis (DCA) Screening (B1, [PRMS-2018 §2])",
      "today": "Engineer manually clicks through 150 individual well decline curves in Harmony every quarter, hand-adjusting hyperbolic b-factors and nominal decline rates (Di).",
      "failureMode": "Time constraints lead engineers to bulk-copy parameters across wells, ignoring recent wellbore liquid loading or choke changes.",
      "agentNote": "→ Agent 3 (Batch DCA Outlier & Staleness Agent)."
    },
    {
      "code": "A04",
      "action": "Digitizes laboratory fluid PVT assays and fit black-oil PVT correlations",
      "source": "[API-RP-44 §6]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Event",
      "time": "hours",
      "friction": "assembly",
      "agentRef": 4,
      "owner": "agent",
      "agentLabel": "Agent 4: Fluid PVT Assay & Black-Oil Agent",
      "label": "Laboratory Fluid PVT Digitization & Fitting (B1, [API-RP-44 §6])",
      "today": "Fluid analysis lab reports arrive as 60-page scanned PDFs; engineer manually re-types formation volume factors (Bo), solution GOR (Rs), and oil viscosities (μo) into MBAL.",
      "failureMode": "Keying errors in bubble point pressure (Pb) distort material balance calculations, creating false aquifer influx predictions.",
      "agentNote": "→ Agent 4 (Fluid PVT Assay & Black-Oil Agent)."
    },
    {
      "code": "A05",
      "action": "Diagnose water breakthrough mechanisms using Chan log-log derivative plots",
      "source": "[SPE-Reservoir §5]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Periodic",
      "time": "hours",
      "friction": "recall",
      "agentRef": 5,
      "owner": "agent",
      "agentLabel": "Agent 5: Water Breakthrough & Chan Diagnostic Agent",
      "label": "Water Breakthrough Diagnostic Curve Analysis (B1, [SPE-Reservoir §5])",
      "today": "Water cut spikes on an oil well; engineer spends days manually building water-oil ratio (WOR) log-log derivative plots to determine if water is coning or channeling.",
      "failureMode": "Misclassifying edge-water encroachment as mechanical coning leads to shutting in healthy high-rate wells or performing useless polymer squeeze jobs.",
      "agentNote": "→ Agent 5 (Water Breakthrough & Chan Diagnostic Agent)."
    },
    {
      "code": "A06",
      "action": "Calculate pattern Voidage Replacement Ratios (VRR) across waterflood blocks",
      "source": "[SPE-Reservoir §7]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Monthly",
      "time": "hours",
      "friction": "consistency",
      "agentRef": 6,
      "owner": "agent",
      "agentLabel": "Agent 6: Voidage Replacement Ratio & Sweep Agent",
      "label": "Voidage Replacement Ratio & Waterflood Sweep (B1, [SPE-Reservoir §7])",
      "today": "Monthly water injection volumes are manually balanced against total underground reservoir voidage across dozens of fault blocks in spreadsheets.",
      "failureMode": "Under-injected fault blocks lose reservoir pressure, falling below bubble point and permanently trapping millions of barrels of attic oil.",
      "agentNote": "→ Agent 6 (Voidage Replacement Ratio & Sweep Agent)."
    },
    {
      "code": "A07",
      "action": "Reconcile corporate PRMS reserves migrations (PDP/PUD/Probable) for audits",
      "source": "[PRMS-2018 §1]",
      "scope": "portfolio",
      "bucket": "B1",
      "freq": "Annual",
      "time": "weeks",
      "friction": "assembly",
      "agentRef": 7,
      "owner": "agent",
      "agentLabel": "Agent 7: PRMS Reserves Audit & Migration Agent",
      "label": "PRMS Reserves Migration & Audit Reconciliation (B1, [PRMS-2018 §1])",
      "today": "Handled in Petex MBAL and Kappa Saphir. The engineer selects reservoir drive models, matches Bourdet derivatives, and fits analytical aquifer models.",
      "failureMode": "Mathematical reconciliation errors trigger audit flags from third-party reserves evaluators (e.g., Ryder Scott, DeGolyer and MacNaughton).",
      "agentNote": "❌ No. Core thermodynamic and mathematical interpretation craft. The monolith handles the math; the human provides the geological context."
    },
    {
      "code": "A08",
      "action": "Construct Havlena-Odeh Material Balance (P/Z) plots and drive indices",
      "source": "[SPE-Reservoir §3]",
      "scope": "field",
      "bucket": "B2",
      "freq": "Periodic",
      "time": "hours",
      "friction": "judgment",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith MBAL)"
    },
    {
      "code": "A09",
      "action": "Perform Pressure Transient Analysis (PTA) derivative Bourdet curve matches",
      "source": "[Kappa-Dynamic §4]",
      "scope": "well",
      "bucket": "B2",
      "freq": "Event",
      "time": "hours",
      "friction": "judgment",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith Saphir)"
    },
    {
      "code": "A10",
      "action": "Quantify 1P/2P/3P Proved, Probable, and Possible commercial reserves",
      "source": "[PRMS-2018 §1]",
      "scope": "portfolio",
      "bucket": "B3",
      "freq": "Annual",
      "time": "weeks",
      "friction": "judgment",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human QRE Lead)",
      "label": "Official PRMS Reserves Booking (B3, [PRMS-2018 §1])",
      "today": "Formal legal sign-off on corporate SEC/PRMS reserves statements; requires direct accountability by a certified Qualified Reserves Evaluator (QRE).",
      "agentNote": "❌ No. Legal and statutory accountability cannot be delegated to artificial intelligence."
    },
    {
      "code": "A11",
      "action": "Calculate remaining drainage volume and infill well target locations",
      "source": "[SPE-Reservoir §6]",
      "scope": "well",
      "bucket": "B2",
      "freq": "Periodic",
      "time": "days",
      "friction": "judgment",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith)"
    },
    {
      "code": "A12",
      "action": "Review downhole fluid sampling protocols during wireline formation testing",
      "source": "[API-RP-44 §4]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "hours",
      "friction": "traceability",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "Covered in Agent 4"
    },
    {
      "code": "A13",
      "action": "Evaluate pressure interference across multi-well communication tests",
      "source": "[Kappa-Dynamic §8]",
      "scope": "field",
      "bucket": "B2",
      "freq": "Event",
      "time": "days",
      "friction": "judgment",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith Saphir)"
    },
    {
      "code": "A14",
      "action": "Determine economic limit and field abandonment timing (qec)",
      "source": "[PRMS-2018 §3]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Annual",
      "time": "hours",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "Covered in Agent 3"
    },
    {
      "code": "A15",
      "action": "Present reserves certification dossier to corporate Audit Committee",
      "source": "Corporate Policy",
      "scope": "portfolio",
      "bucket": "B3",
      "freq": "Annual",
      "time": "hours",
      "friction": "judgment",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead)"
    }
  ],
  "agents": [
    {
      "n": 1,
      "name": "Downhole Pressure Gauge De-Noising & Shut-In Detection Agent",
      "oneLine": "Ingests raw high-frequency downhole memory/permanent gauge readings (PDG), filters electrical noise and gauge drift, detects exact shut-in and drawdown timestamps, and pre-conditions pressure transients for Kappa Saphir.",
      "frictionSolved": "Eliminates ~4.0 hours per pressure survey of manual spreadsheet filtering, spike deletion, and shut-in time searching.",
      "reads": "High-frequency downhole pressure gauge records (time, pressure, temperature), surface wellhead tubing pressures, and choke manipulation event logs.",
      "does": "Filters out electrical noise spikes and tidal/temperature oscillations; detects exact operational state transitions (shut-in start, well opening); calculates initial pressure derivative (dP/dt); normalizes Horner and superposition time functions; partitions the transient into distinct flow periods.",
      "returns": "Pre-conditioned, de-noised pressure transient ASCII dataset ready for direct import into Kappa Saphir, complete with identified flow periods.",
      "stopsAt": "Selecting reservoir boundary models or interpreting permeability-thickness (kh).",
      "failureModes": "If gauge data does not reach radial flow stabilization within the shut-in window, the agent prints a warning: [Non-Stabilized Build-Up: Transient Inconclusive for Boundary Interpretation].",
      "agentId": "OG-P06-A01"
    },
    {
      "n": 2,
      "name": "Multi-Well Production Back-Allocation Reconciliation Agent",
      "oneLine": "Reconciles physical well test separator measurements against fiscal custody transfer meter totals, identifies allocation factor drift, and flags erratic multi-phase flowmeter miscalibrations.",
      "frictionSolved": "Removes 3.5 hours per monthly allocation close of manual discrepancy checking and Excel allocation balancing.",
      "reads": "Daily well test separator records (gross rate, oil rate, water cut, gas-oil ratio), gathering station fiscal sales meter logs, and historical well allocation factors.",
      "does": "Computes theoretical daily production per well; reconciles theoretical totals against fiscal export sales; flags wells where allocation factors (AF) drift outside acceptable tolerances (0.85 < AF < 1.15); identifies failed wellhead check valves or gas flaring imbalances.",
      "returns": "Monthly Production Allocation Reconciliation Ledger highlighting bad-actor wells with questionable test data, ready for production accounting sign-off.",
      "stopsAt": "Overriding officially locked fiscal sales tickets.",
      "failureModes": "If an unmeasured flaring event creates a >15% mass imbalance at the gathering center, the agent tags the gap: [Severe Mass Imbalance: Unmetered Flaring or Gathering System Leak Suspected].",
      "agentId": "OG-P06-A02"
    },
    {
      "n": 3,
      "name": "Batch Decline Curve Analysis (DCA) Outlier & Staleness Agent",
      "oneLine": "Screens hundreds of producing well decline curves against Arps empirical baselines, flags un-modeled water-cut or GOR breaks, and identifies stale forecast models following well choke changes or workovers.",
      "frictionSolved": "Eliminates ~5.5 hours per quarterly surveillance cycle of clicking through hundreds of individual well decline curves in Harmony/OFM.",
      "reads": "Monthly oil, gas, and water production histories, active Arps decline parameters (qi, Di, b), and well intervention/workover logs.",
      "does": "Evaluates goodness-of-fit (R^2, RMSE) between historical production and current forecast curves; flags wells where recent production deviates by >15% from model; detects sudden slope breaks indicating water breakthrough or artificial lift failure; highlights stale decline models unadjusted after well workovers.",
      "returns": "Ranked DCA Exception Ledger highlighting only the 20–30 wells requiring manual curve refitting, with pre-calculated candidate hyperbolic fits.",
      "stopsAt": "Modifying official corporate reserve forecast decline curves.",
      "failureModes": "If a well's hyperbolic b-factor exceeds 1.5 in a conventional reservoir, the agent flags [Non-Physical Parameter: Hyperbolic b-factor Exceeds Conventional Thermodynamic Limits].",
      "agentId": "OG-P06-A03"
    },
    {
      "n": 4,
      "name": "Laboratory Fluid PVT Assay & Black-Oil Correlation Agent",
      "oneLine": "Ingests laboratory PVT reports (differential liberation, constant mass expansion, separator tests), digitizes fluid properties, and fits optimal black-oil correlations for reservoir models.",
      "frictionSolved": "Removes 3.0 hours per fluid study of manual PVT report transcription and empirical correlation trial-and-error.",
      "reads": "Scanned laboratory PVT fluid analysis reports (differential liberation, flash vaporization, separator test tables, oil viscosity vs. pressure).",
      "does": "Extracts bubble point pressure (Pb), oil formation volume factor (Bo), solution gas-oil ratio (Rs), oil compressibility (co), and oil viscosity (μo); compares experimental data against standard black-oil correlations (Standing, Vasquez-Beggs, Glaso, Petrosky-Farshad); determines optimal correlation tuning parameters.",
      "returns": "Tuned PVT Input File ready for direct import into Petex MBAL, Prosper, or Eclipse, complete with correlation goodness-of-fit plots.",
      "stopsAt": "Overriding measured laboratory dew-point or bubble-point pressures.",
      "failureModes": "If fluid sample contamination from synthetic oil-based drilling mud is detected, the agent flags [Contaminated Fluid Sample: Mud Filtrate Distorting Bubble Point].",
      "agentId": "OG-P06-A04"
    },
    {
      "n": 5,
      "name": "Water Breakthrough & Chan Diagnostic Plot Agent",
      "oneLine": "Analyzes multi-year water-oil ratio (WOR) and WOR derivative curves on log-log Chan diagnostic plots to automatically differentiate between water coning, near-wellbore channeling, and regional edge-water encroachment.",
      "frictionSolved": "Eliminates 2.5 hours per water-producing well of manual Excel diagnostic plotting and curve geometry interpretation.",
      "reads": "Time-series production histories (daily oil, water, and gas rates, choke settings, bottom-hole flowing pressures).",
      "does": "Computes cumulative water-oil ratio (WOR) and time derivative (d(WOR)/dt); plots curves on log-log Chan diagnostic canvases; classifies curve signatures into diagnostic categories (e.g., upward curvature indicating coning vs. sudden vertical step-jump indicating mechanical tubing/packer channeling vs. gradual linear rise indicating edge-water sweep).",
      "returns": "Water Breakthrough Diagnostic Dossier with classified failure mechanism and recommended water shut-off remediation options.",
      "stopsAt": "Ordering physical bridge plugs, polymer squeeze jobs, or mechanical water shut-off interventions.",
      "failureModes": "If sudden water breakthrough is accompanied by a severe drop in flowing tubing pressure, the agent flags [Mechanical Integrity Hazard: Casing Breach Suspected Rather than Reservoir Coning].",
      "agentId": "OG-P06-A05"
    },
    {
      "n": 6,
      "name": "Voidage Replacement Ratio (VRR) & Pattern Sweep Agent",
      "oneLine": "Computes instantaneous and cumulative Voidage Replacement Ratios (VRR) across waterflood and gas injection patterns, accounting for formation volume factors (Bw, Bo, Bg) to highlight under-injected reservoir fault blocks.",
      "frictionSolved": "Removes 2.5 hours per monthly waterflood review of manual volumetric balance math across complex multi-well patterns.",
      "reads": "Monthly allocated production volumes (Np, Gp, Wp), injection volumes (Wi, Gi), and reservoir fluid PVT parameters (Bo, Bw, Bg, Rs).",
      "does": "Solves dynamic reservoir voidage equations per fault block / pattern; calculates monthly instantaneous VRR and cumulative VRR; identifies under-injected patterns (VRR < 0.95) losing reservoir pressure; highlights over-injected patterns (VRR > 1.15) risking hydrofracturing the caprock.",
      "returns": "Waterflood Pattern Voidage Scorecard with spatial map overlays showing pressure depletion zones and injection allocation recommendations.",
      "stopsAt": "Adjusting physical water injection wellhead choke valves.",
      "failureModes": "If injection pressure in an over-injected pattern approaches the formation parting fracture pressure, the agent triggers an alert: [Caprock Risk: Pattern Injection Pressure Nearing Formation Fracture Gradient].",
      "agentId": "OG-P06-A06"
    },
    {
      "n": 7,
      "name": "PRMS Reserves Audit & Category Migration Dossier Agent",
      "oneLine": "Tracks proved developed producing (PDP), proved undeveloped (PUD), and probable reserves migrations across monthly production accounting, compiling audit-ready reconciliation tables for third-party QRE and SEC evaluators.",
      "frictionSolved": "Eliminates ~30.0 hours of annual manual document assembly, technical revision auditing, and reconciliation table formatting per field asset.",
      "reads": "Corporate reserves database records, approved field development plan (FDP) drill schedules, monthly cumulative production runs, and economic limit cutoff forecasts.",
      "does": "Categorizes reserves movements across standard PRMS audit bins (Production, Technical Revisions, Economic Limit Adjustments, PUD-to-PDP Migrations, Extensions/Discoveries); computes net remaining 1P, 2P, and 3P reserves; formats data into standardized regulatory disclosure tables.",
      "returns": "Audit-Ready Annual PRMS Reserves Reconciliation Pack complete with variance narrative explanations and supporting decline curve links.",
      "stopsAt": "Formally signing legal corporate reserves filings or certifying economic discount rates.",
      "failureModes": "If a PUD location has remained on the books for >5 years without drilling capital commitment, the agent tags the asset: [Regulatory Warning: PUD 5-Year Rule Violation — Location At Risk of De-Booking].",
      "agentId": "OG-P06-A07"
    }
  ],
  "valueModel": {
    "rule": "Quantify the unit. Never multiply into enterprise dollar totals. The subsurface team provides their own field well count and hydrocarbon production multiplier.",
    "rows": [
      {
        "agent": "1. Downhole Gauge De-Noising Agent",
        "unit": "1 High-Frequency Pressure Survey",
        "beforeHours": 4.5,
        "afterHours": 0.5,
        "savedHours": 4.0,
        "frictionRemoved": "Raw Sensor Filtering & Shut-In Detection Drag"
      },
      {
        "agent": "2. Back-Allocation Sieve Agent",
        "unit": "1 Monthly Gathering Allocation Close",
        "beforeHours": 4.0,
        "afterHours": 0.5,
        "savedHours": 3.5,
        "frictionRemoved": "Factor Drift & Meter Imbalance Sifting Drag"
      },
      {
        "agent": "3. Batch DCA Outlier & Staleness Agent",
        "unit": "1 Field Quarterly DCA Review (150 wells)",
        "beforeHours": 6.5,
        "afterHours": 1.0,
        "savedHours": 5.5,
        "frictionRemoved": "Repetitive Manual Curve Scrolling Drag"
      },
      {
        "agent": "4. Fluid PVT Assay & Black-Oil Agent",
        "unit": "1 Reservoir Fluid Sampling Study",
        "beforeHours": 3.5,
        "afterHours": 0.5,
        "savedHours": 3.0,
        "frictionRemoved": "Scanned PDF Keying & Correlation Tuning Drag"
      },
      {
        "agent": "5. Water Breakthrough Chan Agent",
        "unit": "1 Water-Producing Well Diagnostic Review",
        "beforeHours": 3.0,
        "afterHours": 0.5,
        "savedHours": 2.5,
        "frictionRemoved": "Log-Log Derivative Plotting & Diagnosis Drag"
      },
      {
        "agent": "6. Voidage Replacement (VRR) Agent",
        "unit": "1 Waterflood Reservoir Pattern Audit",
        "beforeHours": 3.0,
        "afterHours": 0.5,
        "savedHours": 2.5,
        "frictionRemoved": "Multi-Phase Voidage Equation Math Drag"
      },
      {
        "agent": "7. PRMS Reserves Audit & Migration",
        "unit": "1 Annual Corporate Reserves Audit",
        "beforeHours": 35.0,
        "afterHours": 5.0,
        "savedHours": 30.0,
        "frictionRemoved": "Cross-System Ledger Reconciliation Drag"
      }
    ],
    "total": {
      "unit": "1 Complete Asset Surveillance Cycle",
      "beforeHours": 59.5,
      "afterHours": 8.5,
      "savedHours": 51.0,
      "frictionRemoved": "Eliminates 86% of Routine Surveillance Overhead",
      "label": "Total Squad Impact per Study"
    }
  },
  "citations": [
    {
      "key": "[SPE-Reservoir]",
      "citation": "SPE, Reservoir Engineering Discipline Competency Matrix, 2018",
      "locator": "spe.org",
      "type": "Competency Standard",
      "supports": "Material balance, well testing, and recovery principles"
    },
    {
      "key": "[PRMS-2018]",
      "citation": "SPE / WPC / AAPG / SPEE, Petroleum Resources Management System, 2018",
      "locator": "spe.org/prms",
      "type": "International Standard",
      "supports": "Reserves categorization (1P/2P/3P), PUD rules, and audits"
    },
    {
      "key": "[API-RP-44]",
      "citation": "API, Sampling Petroleum Reservoir Fluids, 2nd Edition",
      "locator": "API Standards Store",
      "type": "Recommended Practice",
      "supports": "Fluid PVT laboratory testing and quality verification"
    },
    {
      "key": "[Kappa-Dynamic]",
      "citation": "Kappa Engineering, Dynamic Data Analysis: Theory and Practice, 2021",
      "locator": "kappaeng.com",
      "type": "Technical Guide",
      "supports": "De-noising, Bourdet derivatives, and superposition time"
    }
  ],
  "negativeSearch": {
    "searched": "Petroleum Experts MBAL documentation, Kappa Saphir release notes, S&P Global Harmony user guides, and SPE OnePetro for \"autonomous downhole pressure gauge noise filtering with automatic shut-in detection, automated Chan log-log water breakthrough curve classification, and automated PRMS reserves category migration reconciliation without manual spreadsheet data preparation\".",
    "result": "Negative Search, 2026-09. Existing reservoir engineering platforms calculate equations once data is cleanly formatted; none autonomously condition raw high-frequency gauge telemetry, detect Chan diagnostic water coning signatures, or reconcile cross-system back-allocation factor drift without manual engineer data preparation."
  },
  "line": "\"In reservoir engineering, spending three days hand-cleaning noisy gauge pressure files and typing PVT numbers from PDFs into MBAL isn't reservoir management; it's data clerical work that leaves the engineer with no time to notice that an entire fault block is losing pressure and dropping below bubble point.\"",
  "openQuestions": [
    "How many hours per month do you spend investigating production allocation swings caused by uncalibrated multiphase flowmeters or unmetered flaring?",
    "When a well's water cut suddenly jumps from 10% to 80%, how long does it take you to assemble the diagnostic data to prove whether it's mechanical tubing failure or reservoir coning?",
    "What percentage of your historical decline curve forecasts in Harmony are currently stale because nobody had time to update them after recent choke changes?"
  ]
};
