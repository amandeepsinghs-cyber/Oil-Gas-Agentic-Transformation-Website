/* GENERATED FILE, DO NOT EDIT BY HAND.
 * Source:     persona_research/persona_research_output/*.md
 * Regenerate: python3 scripts/extract_persona_research.py
 */
window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};
window.PERSONA_DETAIL["P22"] = {
  "id": "P22",
  "title": "Reservoir Simulation Engineer",
  "aliases": [
    "Dynamic Modeler",
    "Numerical Simulation Specialist",
    "Reservoir Simulation Specialist",
    "Eclipse Modeler"
  ],
  "segment": "Subsurface & Geosciences",
  "segmentLong": "Upstream — Subsurface & Dynamic Field Development",
  "setting": "Subsurface Technical Center / High-Performance Computing (HPC) Modeling Lab (connected to dedicated Linux compute clusters)",
  "tier": "Extended",
  "core20": false,
  "governingStandards": "SPE Reservoir Simulation",
  "agentFocus": "Numerical Simulation & Dynamic Forecasting Squad (7 Agents)",
  "sourceFile": "P22_Reservoir_Simulation_Engineer.md",
  "person": "Kenji Nakamura",
  "avatar": "avatars/P22_persona.jpg",
  "thumb": "avatars/thumbs/P22_thumb.jpg",
  "initials": "RS",
  "headline": "The Reservoir Simulation Engineer builds the dynamic digital twin of the reservoir, solving non-linear multiphase fluid flow equations across millions of 3D grid cells to predict decades of oil and gas recovery and justify multi-billion-dollar field development capital. While advanced numerical flow solvers like SLB ECLIPSE / Intersect, RFD tNavigator, and CMG GEM / STARS solve mass and momentum conservation equations across parallel compute nodes, the pre-processing and debugging of simulation decks remains a brutal manual chore. Before an engineer can history-match a multi-decade field, they must manually transcribe hundreds of unstructured well completion records, reperforation logs, and production allocations into rigid, unforgiving simulator schedule keywords (WELSPECS, COMPDAT, WCONHIST). Furthermore, when an 8-hour parallel simulation crashes at year 15 due to numerical time-step chopping, the engineer spends hours manually sifting through 100MB+ .PRT log files to identify which grid cell caused the non-convergence. An integrated squad of 7 hyper-specialized micro-agents compiles well event schedules, diagnoses numerical convergence failures, normalizes relative permeability curves, audits pattern voidage replacement, validates PVT tables, computes history-match error metrics, and synthesizes dynamic recovery forecasts—saving 79.25 engineering hours per simulation study and accelerating Field Development Plans (FDP).",
  "confidence": {
    "Persona": "Reservoir Simulation Engineer (P22)",
    "Research Status": "Deep-dive field research grounded in international reservoir simulation standards, high-performance computing workflows, and dynamic field development practices",
    "Competency Standard Used": "SPE Reservoir Simulation Discipline Matrix, Aziz & Settari Petroleum Reservoir Simulation, ECLIPSE / tNavigator Technical Guidelines, and PRMS-2018",
    "Standard Coverage": "10 of 10 dynamic numerical simulation, history-matching, and recovery forecasting competencies mapped to operational actions",
    "Actions Cited": "15 of 15 operational actions substantiated by published SPE simulation symposium papers, standard simulator keyword reference manuals, and industrial modeling benchmarks",
    "Pain Claims Cited": "8 of 8 industry pain claims backed by published SPE history-matching papers, assisted history matching (AHM) studies, and reservoir engineering practitioner reports",
    "Timings Sourced": "Schedule deck compilation, convergence debugging, SCAL curve fitting, pattern voidage balancing, and forecast dossier synthesis validated against active simulation engineers",
    "Gap Claims Cited": "SLB Petrel RE, RFD tNavigator, and CMG Results technical documentation confirm graphical keyword interfaces exist, but none autonomously extract unstructured workover PDFs into spatial grid indices, diagnose root causes of Newton-Raphson iteration chopping, or balance pattern voidage without manual human intervention",
    "Known Gaps": "Grid formulation preferences vary across structured corner-point Cartesian grids and unstructured Voronoi / Perpendicular Bisector (PEBI) grids in complex fault regimes"
  },
  "role": {
    "oneLine": "Simulates non-linear multiphase fluid flow through heterogeneous porous media using numerical reservoir simulators (ECLIPSE, Intersect, tNavigator, CMG), calibrating dynamic models against historical production and pressure data to forecast future field recovery and optimize depletion, waterflood, and EOR strategies.",
    "whyItMatters": "The simulation engineer's dynamic forecasts govern mega-capital investment decisions (100M to10B+): determining how many offshore production platforms to fabricate, what water injection plant capacity to construct, whether to initiate expensive chemical/miscible EOR flooding, and certifying commercial hydrocarbon reserves for statutory financial filings.",
    "notOwned": [
      {
        "task": "3D Static Geocellular Pillar Gridding, Structural Horizons & Facies Geostatistics",
        "owner": "Development Geologist (P21)"
      },
      {
        "task": "1D Single-Well Petrophysical Cutoffs, Mineralogy & Saturation Height Modeling",
        "owner": "Petrophysicist (P04)"
      },
      {
        "task": "Day-to-Day Field Choke Optimization, Well Deliverability & Liquid Loading Triage",
        "owner": "Production Engineer (P09)"
      },
      {
        "task": "Physical Wellhead Choke Adjustments, Fluid Sampling & Field Metering",
        "owner": "Lease Operator (P10) / Field Operations"
      },
      {
        "task": "Detailed Well Trajectory Directional Surveying & Drilling Assembly Engineering",
        "owner": "Drilling Engineer (P07)"
      }
    ],
    "variants": [
      {
        "name": "Black-Oil Full-Field Modeler",
        "detail": "Simulates conventional depletion, pressure maintenance waterflooding, and gas cap injection using three-phase black-oil formulations (ECLIPSE 100, tNavigator Black Oil)."
      },
      {
        "name": "Compositional & Enhanced Oil Recovery (EOR) Specialist",
        "detail": "Simulates miscible gas injection (CO2, hydrocarbon solvent), thermal recovery (SAGD, CSS), and chemical polymer/surfactant flooding requiring multi-component equation-of-state (EOS) thermodynamics (ECLIPSE 300, CMG STARS / GEM)."
      }
    ],
    "titleCheck": "The industry canonical title is Reservoir Simulation Engineer, Dynamic Modeler, or Numerical Reservoir Engineer. Do not confuse with \"Reservoir Engineer\" (who primarily performs classical decline curve analysis, material balance, and field surveillance, P06) or \"Software Engineer\" (who develops simulator source code).",
    "whereTheWorkHappens": {
      "Work Setting": "Subsurface Technical Center / High-Performance Computing (HPC) Modeling Lab: Professional engineering office environment with high-speed network connections to dedicated on-premise Linux clusters or cloud HPC nodes running multi-core parallel simulation jobs.",
      "What They Can Reach": "Advanced dynamic simulation environments (tNavigator, SLB Petrel RE, CMG Results), text/keyword editors (VS Code, Emacs), cluster queue managers (SLURM, LSF, PBS), PVT modeling suites (PVTi, PVTP, WinProp), and corporate data lakes.",
      "Shift Pattern": "Standard professional corporate office hours (08:00–17:00), structured around multi-month Field Development Plan (FDP) milestones and overnight/weekend batch cluster simulation runs.",
      "Where the Record Lives": "System of Record: Master simulation decks (.DATA, .sched, .inc), restart and summary files (.UNRST, .SMSPEC), corporate subsurface repositories, and approved Field Development Plans (FDP)."
    }
  },
  "standards": [
    {
      "key": "",
      "citation": "[SPE-Simulation]: Society of Petroleum Engineers, Competency Management Tool: Reservoir Simulation Discipline Matrix (Dynamic Modeling, Upscaling, History Matching, Forecasting)."
    },
    {
      "key": "",
      "citation": "[Aziz-Settari]: K. Aziz and A. Settari, Petroleum Reservoir Simulation, Applied Science Publishers (The classical foundational reference on numerical discretization, multi-phase flow equations, and non-linear solver convergence)."
    },
    {
      "key": "",
      "citation": "[Eclipse-Reference]: SLB, ECLIPSE Technical Reference Manual: Keyword Formulations, Mathematical Solvers, and Schedule Syntax."
    },
    {
      "key": "",
      "citation": "[PRMS-2018]: SPE / WPC / AAPG / SPEE, Petroleum Resources Management System, Dynamic Simulation Verification and Reserves Estimation Rules."
    },
    {
      "key": "",
      "citation": "[Carlson-Simulation]: M. R. Carlson, Practical Reservoir Simulation: Using, Assessing, and Developing Results, PennWell Books."
    }
  ],
  "vendorGaps": [
    {
      "product": "SLB ECLIPSE (100/300) / Intersect",
      "module": "Numerical Flow Simulator & Physics Engine",
      "solves": "Solves non-linear multiphase flow equations using fully implicit and AIM schemes; handles complex dual-porosity and multi-segment well models.",
      "gap": "Unforgiving keyword input silo. Eclipse solves the reservoir physics once the deck is assembled. It provides zero automation for extracting historical well workover dates from PDF reports into COMPDAT tables, and crashes completely if a single syntax comma or cell coordinate is misplaced."
    },
    {
      "product": "Rock Flow Dynamics (RFD) tNavigator",
      "module": "Integrated Parallel Simulator & AHM",
      "solves": "Ultra-fast GPU-accelerated parallel simulation, graphical deck building, assisted history matching (AHM), and integrated Python scripting.",
      "gap": "Graphical interface simplifies keyword visualization, but still requires the engineer to manually transcribe perforation intervals, skin factors, and historical tubing changes from field documentation."
    },
    {
      "product": "CMG CMOST / SLB MEPO",
      "module": "Assisted History Matching & Uncertainty",
      "solves": "Global optimization algorithms (genetic algorithms, Bayesian optimization), proxy modeling, and parameter sensitivity tornado charts.",
      "gap": "Optimizes continuous multiplier parameters (e.g., kv/kh, fault transmissibility multipliers); completely blind to qualitative historical operational events (e.g., unrecorded well shut-ins, surface separator choke constraints)."
    },
    {
      "product": "SLB PVTi / KBC Infochem Multiflash",
      "module": "Thermodynamic Equation of State (EOS)",
      "solves": "Fluid PVT characterization, flash calculations, and black-oil table generation.",
      "gap": "Generates fluid tables; does not verify whether generated tables exhibit unphysical non-monotonic property crossovers that crash the numerical simulator during transient expansion."
    }
  ],
  "actions": [
    {
      "code": "A01",
      "action": "Compile historical well workovers and reperforations into schedule keywords",
      "source": "[Eclipse-Reference]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Campaign",
      "time": "24.0h",
      "friction": "assembly",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Historical Well Workover Schedule Compilation (B1, [Eclipse-Reference])",
      "today": "Engineer spends weeks reading paper workover files and typing COMPDAT lines ('WELL_01' 14 22 5 7 'OPEN' ...) for 60 wells across 30 years of operations.",
      "failureMode": "A single mistyped grid coordinate allocates production to the wrong reservoir layer, corrupting the entire history match.",
      "agentNote": "→ See §4 (Agent 1: Well Event History & Recurring Schedule Keyword Sieve)."
    },
    {
      "code": "A02",
      "action": "Upscale static geological cellular grids to dynamic simulation blocks",
      "source": "[Aziz-Settari §4]",
      "scope": "field",
      "bucket": "B2",
      "freq": "Periodic",
      "time": "10.0h",
      "friction": "judgment",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Petrel RE)",
      "label": "Static Grid Upscaling (B2, [Aziz-Settari §4])",
      "today": "Executed inside Petrel Reservoir Engineering or tNavigator using flow-based or tensor-averaging upscaling to convert 10M geological cells to 500k dynamic blocks.",
      "failureMode": "Pure mathematical tensor calculation core within the commercial modeling suite.",
      "agentNote": "❌ No. Monolith compute engine."
    },
    {
      "code": "A03",
      "action": "History-match multi-decade reservoir pressure and water/gas production rates",
      "source": "[SPE-Simulation §3]",
      "scope": "field",
      "bucket": "B2",
      "freq": "Campaign",
      "time": "40.0h",
      "friction": "judgment",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (tNavigator)",
      "label": "Full-Field History Matching Optimization (B2, [SPE-Simulation §3])",
      "today": "Engineer uses tNavigator AHM or CMG CMOST to iterate on regional permeability multipliers, fault transmissibility, and aquifer support to match historical pressure.",
      "failureMode": "Core dynamic reservoir modeling craft; the human engineer provides the geological plausibility to prevent unphysical parameter adjustments.",
      "agentNote": "❌ No. Dynamic modeling core domain."
    },
    {
      "code": "A04",
      "action": "Debug simulation deck convergence failures and time-step chopping (.PRT logs)",
      "source": "[Eclipse-Reference]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Daily",
      "time": "3.0h",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Non-Convergence Debugging & Time-Step Chopping (B1, [Eclipse-Reference])",
      "today": "An overnight 8-hour simulation run crashes at year 1998 due to time-step chopping; engineer spends hours scrolling through an 80,000-line text print file (.PRT).",
      "failureMode": "Engineers struggle to identify which single grid cell has extreme throughput ratios or unphysical relative permeability crossovers.",
      "agentNote": "→ See §4 (Agent 2: Simulator Numerical Non-Convergence & PRT Debugger)."
    },
    {
      "code": "A05",
      "action": "Format multi-well historical production allocation tables (WCONHIST)",
      "source": "[Eclipse-Reference]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Monthly",
      "time": "8.0h",
      "friction": "assembly",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Historical Production Rate Formatting (WCONHIST) (B1, [Eclipse-Reference])",
      "today": "Engineer exports monthly allocated oil, water, and gas rates from production accounting; manually formats them into rigid space-delimited Eclipse syntax tables.",
      "failureMode": "Syntax formatting errors cause the simulator to reject the entire dataset during deck compilation.",
      "agentNote": "Integrated into Well Event History & Recurring Schedule Sieve (Agent 1)."
    },
    {
      "code": "A06",
      "action": "Calibrate relative permeability end-points (Swr, Sor) and hysteresis tables",
      "source": "[SPE-Simulation §2]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Periodic",
      "time": "8.0h",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Relative Permeability & SCAL Table Calibration (B1, [SPE-Simulation §2])",
      "today": "Engineer fits Corey or LET exponents to laboratory coreflood data in spreadsheets; manually formats SWOF and SGOF keyword tables.",
      "failureMode": "Unphysical relative permeability crossovers or negative slopes cause non-linear solver divergence.",
      "agentNote": "→ See §4 (Agent 3: Relative Permeability & SCAL Property Table Calibrator)."
    },
    {
      "code": "A07",
      "action": "Model waterflood voidage replacement ratio (VRR) and pattern sweep efficiency",
      "source": "[SPE-Simulation §4]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Periodic",
      "time": "8.0h",
      "friction": "volume",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Waterflood Pattern Voidage Replacement Sieve (B1, [SPE-Simulation §4])",
      "today": "Engineer exports field and pattern production/injection volumes to Excel to calculate reservoir voidage replacement ratios (VRR).",
      "failureMode": "Pattern imbalance goes unnoticed, causing localized pressure depletion or rapid water breakthrough in adjacent producer wells.",
      "agentNote": "→ See §4 (Agent 4: Waterflood Voidage Replacement & Pattern Sweep Diagnostic Sieve)."
    },
    {
      "code": "A08",
      "action": "Formulate future development prediction cases (well spacing, choke limits)",
      "source": "[PRMS-2018 §2]",
      "scope": "portfolio",
      "bucket": "B2",
      "freq": "Campaign",
      "time": "30.0h",
      "friction": "judgment",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith)",
      "label": "Development Prediction Case Formulation (B2, [PRMS-2018 §2])",
      "today": "Handled inside simulator forecast decks defining future well locations, platform gas handling limits, and water injection capacities.",
      "failureMode": "Core reservoir engineering strategy domain requiring economic and commercial optimization.",
      "agentNote": "❌ No. Monolith forecasting domain."
    },
    {
      "code": "A09",
      "action": "Reconcile fluid PVT Equation-of-State (EOS) black-oil table property consistency",
      "source": "[SPE-Simulation §2]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Event",
      "time": "6.0h",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Thermodynamic PVT & Black-Oil Table Quality Sieve (B1, [SPE-Simulation §2])",
      "today": "Engineer checks PVT lab reports against generated black-oil tables (PVTO, PVTG, DENSITY) to verify monotonic compressibility and gas solubility curves.",
      "failureMode": "Discontinuous Bo or Rs curves cause simulator volume balance failures.",
      "agentNote": "→ See §4 (Agent 5: Thermodynamic PVT & Black-Oil Table Quality Sieve)."
    },
    {
      "code": "A10",
      "action": "Tune fault transmissibility multipliers (MULTFLT) and regional aquifer parameters",
      "source": "[SPE-Simulation §3]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Periodic",
      "time": "16.0h",
      "friction": "volume",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Fault Transmissibility & History-Match Sensitivity Sieve (B1, [SPE-Simulation §3])",
      "today": "Engineer sifts through restart files across 50 AHM runs, manually computing mismatch error metrics against historical pressure surveys and water cut trends.",
      "failureMode": "Engineers get overwhelmed by multi-variable parameter spaces, missing key sensitive faults that control water movement.",
      "agentNote": "→ See §4 (Agent 6: Dynamic History-Match Objective Function & Sensitivity Sieve)."
    },
    {
      "code": "A11",
      "action": "Model complex Multi-Segment Wells (MSW) and downhole inflow control devices (ICDs)",
      "source": "[Eclipse-Reference]",
      "scope": "well",
      "bucket": "B2",
      "freq": "Periodic",
      "time": "8.0h",
      "friction": "judgment",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Eclipse MSW)",
      "label": "Multi-Segment Well (MSW) Modeling (B2, [Eclipse-Reference])",
      "today": "Complex hydrodynamics modeled using ECLIPSE multi-segment well keywords (WELSEGS, COMPSEGS) simulating pressure drops along horizontal completions.",
      "failureMode": "Specialized simulator feature requiring detailed completion mechanical geometry.",
      "agentNote": "❌ No. Monolith MSW modeling core."
    },
    {
      "code": "A12",
      "action": "Audit simulation grid quality for non-orthogonal and pinched cells",
      "source": "[Aziz-Settari §3]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Periodic",
      "time": "4.0h",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔",
      "label": "Simulation Grid Quality Audit (B1, [Aziz-Settari §3])",
      "today": "Engineer inspects .GRDECL files for extreme cell aspect ratios and non-orthogonal block connections before launching runs.",
      "failureMode": "Degraded cells cause numerical truncation errors.",
      "agentNote": "Supported via Simulator Non-Convergence Debugger (Agent 2)."
    },
    {
      "code": "A13",
      "action": "Coordinate parallel computing cluster queue submissions (SLURM / PBS scripts)",
      "source": "Practitioner",
      "scope": "task",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.0h",
      "friction": "waiting",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔",
      "label": "HPC Cluster Queue Coordination (B1, Practitioner)",
      "today": "Engineer writes SLURM bash scripts, specifies CPU core counts, and monitors cluster job queues.",
      "failureMode": "Script submission errors cause jobs to stall in queues.",
      "agentNote": "Automated utility script within modeling infrastructure."
    },
    {
      "code": "A14",
      "action": "Compile dynamic modeling chapter and recovery profiles for Field Development Plan",
      "source": "Practitioner",
      "scope": "field",
      "bucket": "B1",
      "freq": "Campaign",
      "time": "16.0h",
      "friction": "assembly",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "FDP Dynamic Modeling Chapter Synthesis (B1, Practitioner)",
      "today": "Engineer spends weeks compiling recovery factor plots, watercut curves, pressure profiles, and plateau duration tables into Word and PowerPoint.",
      "failureMode": "Administrative documentation drag pulling specialists away from dynamic reservoir analysis.",
      "agentNote": "→ See §4 (Agent 7: Field Development Plan Dynamic Forecast & Reserves Dossier Synthesizer)."
    },
    {
      "code": "A15",
      "action": "Defend field production plateau forecast before corporate Executive Board",
      "source": "Practitioner",
      "scope": "portfolio",
      "bucket": "B3",
      "freq": "Event",
      "time": "2.0h",
      "friction": "judgment",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead)",
      "label": "Executive Production Plateau Defense (B3, Practitioner)",
      "today": "Senior dynamic modeler defends field plateau longevity, recovery factors, and reserves certifications before corporate leadership.",
      "failureMode": "Executive investment governance, peer review cross-examination, and capital accountability.",
      "agentNote": "❌ No. Human technical leadership."
    }
  ],
  "agents": [
    {
      "n": 1,
      "name": "Well Event History & Recurring Schedule Keyword Sieve",
      "oneLine": "Ingests unstructured well workover summaries, completion schematics, and monthly allocated production histories, mapping perforation depths to 3D grid cell indices (I, J, K) and generating syntax-validated simulation schedule include files.",
      "frictionSolved": "Eliminates 21.50 hours per history-match setup of tedious manual keyword typing, date sequencing, and spatial grid cell coordinate lookups.",
      "reads": "Well completion and workover history files (PDFs/Excel), completion schematics (tubing ID, liner depths), monthly allocated production tables (oil, gas, water rates, static BHP), and 3D simulation grid geometry (.GRDECL / .EGRID).",
      "does": "Extracts chronological well event timestamps (spud date, initial perforation, cement squeezes, re-perforations, tubing swaps, artificial lift installations, shut-ins); performs spatial coordinate mapping to project measured depth (MD) perforation intervals onto exact active 3D grid block indices (I, J, K); generates fully formatted, syntax-validated ECLIPSE / tNavigator schedule keywords (WELSPECS, COMPDAT, WCONHIST, WCONPROD); validates that allocated rates match historical well completion status.",
      "returns": "Clean, syntax-validated .sched and .inc simulation schedule include decks ready for direct insertion into master .DATA decks, complete with spatial mapping audit logs.",
      "stopsAt": "Altering historical allocated production rate volumes or modifying relative permeability parameters.",
      "failureModes": "If a historical perforation depth falls into an inactive or zero-pore-volume simulation grid block, the agent flags [Perforation Inactive Cell: Re-gridding or Depth Shift Check Required] and excludes the entry from the active schedule until validated.",
      "agentId": "OG-P22-A01"
    },
    {
      "n": 2,
      "name": "Simulator Numerical Non-Convergence & PRT Debugger",
      "oneLine": "Ingests massive simulator print files (.PRT and .LOG), isolating the exact grid cell coordinates, time-steps, and physical saturation discontinuities causing Newton-Raphson iteration chopping and run crashes.",
      "frictionSolved": "Eliminates 10.50 hours across a simulation campaign of manual log scrolling and diagnostic hunting through 100MB+ simulation print files.",
      "reads": "Raw numerical flow simulator print files (ECLIPSE, Intersect, tNavigator .PRT, .LOG, and .DBG files).",
      "does": "Parses non-linear Newton-Raphson convergence summaries across all chopped time-steps; isolates the specific grid block indices (I, J, K) exhibiting maximum pressure, saturation, or gas-oil ratio residuals; correlates non-convergence with physical phenomena (e.g., cell throughput ratio exceedance, unphysical relative permeability end-point crossovers, extreme capillary pressure gradients, or cross-flow between completions); recommends targeted simulator tuning adjustments (TUNING, CVCRIT, or local transmissibility smoothing).",
      "returns": "Convergence Failure Diagnostic Dossier identifying the exact problem cells, spatial location in the 3D reservoir grid, root-cause physical mechanism, and recommended deck modifications to achieve run convergence.",
      "stopsAt": "Overwriting master simulator numerical controls (TUNING keyword) without specialist review and sign-off.",
      "failureModes": "If non-convergence is driven by fundamental grid pinching (e.g., cell pore volume <0.001 m^3 adjacent to an active well completion), the agent flags [Grid Geometry Defect: Local Transmissibility Multiplier Required] rather than recommending looser numerical tolerances.",
      "agentId": "OG-P22-A02"
    },
    {
      "n": 3,
      "name": "Relative Permeability & SCAL Property Table Calibrator",
      "oneLine": "Normalizes laboratory Special Core Analysis (SCAL) coreflood measurements, fits robust Corey and LET saturation functions, and outputs syntax-checked simulator relative permeability tables (SWOF, SGOF).",
      "frictionSolved": "Eliminates 7.0 hours per study of manual spreadsheet curve fitting, normalization math, and syntax formatting errors.",
      "reads": "Laboratory SCAL test reports (unsteady-state and steady-state oil-water and gas-oil coreflood measurements), capillary pressure curves (Pc), and petrophysical rock-type facies definitions.",
      "does": "Normalizes coreflood relative permeability curves against residual fluid saturations (Swr, Sorw, Sgc, Sorg); executes non-linear regression to fit standard Corey (nw, no, ng) or LET empirical saturation functions; verifies mathematical consistency (confirming monotonic behavior, zero negative slopes, and smooth derivatives); formats verified data into standard simulator keyword tables (SWOF, SGOF, SOF3); incorporates capillary pressure end-points.",
      "returns": "Calibrated Simulator Saturation Function Package containing validated relative permeability keyword tables ready for direct deck inclusion, accompanied by curve comparison plots.",
      "stopsAt": "Overriding laboratory experimental end-point measurements without sedimentological justification.",
      "failureModes": "If fitted relative permeability curves exhibit a negative slope (d kr / d S < 0) or crossover inconsistency, the agent triggers an immediate [Unphysical Relative Permeability Behavior: Non-Monotonic Curve Rejected] warning.",
      "agentId": "OG-P22-A03"
    },
    {
      "n": 4,
      "name": "Waterflood Voidage Replacement & Pattern Sweep Diagnostic Sieve",
      "oneLine": "Evaluates pattern-level reservoir voidage replacement ratios (VRR) and waterflood sweep dynamics across historical and simulated prediction cases to detect pattern imbalance and thief zones.",
      "frictionSolved": "Eliminates 7.0 hours per review cycle of manual production/injection volume extraction, pattern allocation, and spreadsheet voidage balancing.",
      "reads": "Dynamic simulation summary files (.SMSPEC, .UNSMRY), historical injection and production records, reservoir fluid formation volume factors (Bo, Bw, Bg), and 3D well completion coordinates.",
      "does": "Calculates instantaneous and cumulative Voidage Replacement Ratio (VRR = Injected Volume / Produced Volume at reservoir conditions) across individual injector-producer patterns; identifies over-injected patterns causing premature water breakthrough via high-permeability thief zones; flags under-injected patterns suffering from localized pressure depletion; maps pattern sweep efficiency and water breakthrough timing.",
      "returns": "Waterflood Pattern Sweep & Voidage Diagnostic Report featuring pattern VRR heat maps, flagged unbalanced patterns, and recommended injection rate balancing targets to optimize areal sweep.",
      "stopsAt": "Directly modifying field water injection pump setpoints or changing platform choke lineups.",
      "failureModes": "If simulated pattern VRR exceeds 1.35 in a formation with known low fracture gradient, the agent flags [Over-Injection Warning: Formation Hydrofracture Risk] to prevent out-of-zone water injection.",
      "agentId": "OG-P22-A04"
    },
    {
      "n": 5,
      "name": "Thermodynamic PVT & Black-Oil Table Quality Sieve",
      "oneLine": "Audits laboratory PVT fluid analyses and generated simulator black-oil tables (PVTO, PVTG, DENSITY) to eliminate unphysical property crossovers that trigger volume balance crashes.",
      "frictionSolved": "Eliminates 5.25 hours per study of manual PVT data auditing, thermodynamic cross-checking, and deck compilation debugging.",
      "reads": "Fluid laboratory PVT reports (Constant Composition Expansion [CCE], Differential Liberation [DL], Separator Tests), corporate fluid flash models, and candidate simulator PVT keyword include decks.",
      "does": "Cross-checks oil and gas properties across pressure steps (bubble point pressure Pb, oil formation volume factor Bo, solution gas-oil ratio Rs, oil viscosity μo, gas formation volume factor Bg, gas viscosity μg); verifies thermodynamic consistency (ensuring Bo decreases monotonically above bubble point, Rs increases monotonically up to Pb, and compressibility remains strictly positive); formats verified tables into standard ECLIPSE / tNavigator keyword syntax (PVTO, PVTG, PVTW, DENSITY).",
      "returns": "Validated Simulator Black-Oil Property Package featuring syntax-checked include decks, thermodynamic sanity check logs, and property trend plots.",
      "stopsAt": "Overriding measured fluid laboratory bubble point or saturation pressure data.",
      "failureModes": "If black-oil tables exhibit negative undersaturated oil compressibility (d Bo / d P > 0 above Pb), the agent triggers a critical [Thermodynamic Violation: Negative Compressibility in PVT Table] error and halts deck generation.",
      "agentId": "OG-P22-A05"
    },
    {
      "n": 6,
      "name": "Dynamic History-Match Objective Function & Sensitivity Sieve",
      "oneLine": "Parses multi-case Assisted History Matching (AHM) simulation output files, calculating standardized objective function errors and mapping parameter sensitivities across historical pressure and production data.",
      "frictionSolved": "Eliminates 14.0 hours per history-match campaign of manual restart file extraction, mismatch calculation, and parameter sensitivity cross-plotting across dozens of simulation runs.",
      "reads": "Simulation restart and summary vectors (.UNRST, .SMSPEC), historical well pressure survey points (RFT, MDT, static BHP), and allocated surface production profiles (oil, water, gas rates, water cut, GOR).",
      "does": "Computes Normalized Root-Mean-Square Error (NRMSE) objective functions for pressure, water cut, and GOR across field, region, and individual well levels; identifies outlying \"bad-actor\" wells contributing >40% to total mismatch error; correlates parameter multipliers (fault transmissibility MULTFLT, vertical permeability kv/kh, aquifer strength) against objective function reductions; generates sensitivity tornado charts.",
      "returns": "Dynamic History-Match Quality Dossier ranking all simulation cases by objective function error, detailing well-level mismatch heat maps, and highlighting optimal parameter ranges for subsequent iterations.",
      "stopsAt": "Arbitrarily applying non-geological permeability multipliers exceeding ±2 orders of magnitude without sedimentologist review.",
      "failureModes": "If an AHM case achieves a low mathematical error by applying unphysical transmissibility multipliers (>100× or <0.001×) across a known open sand-on-sand boundary, the agent flags [History Match Artifact: Unphysical Transmissibility Multiplier Detected].",
      "agentId": "OG-P22-A06"
    },
    {
      "n": 7,
      "name": "Field Development Plan Dynamic Forecast & Reserves Dossier Synthesizer",
      "oneLine": "Autonomously compiles dynamic simulation production forecasts, recovery factor comparisons, plateau duration curves, and PRMS reserves classifications into the authoritative Field Development Plan (FDP) chapter.",
      "frictionSolved": "Saves 14.0 hours per field development study of manual chart formatting, profile aggregation, and documentation assembly before executive gate reviews.",
      "reads": "Calibrated history-match decks, prediction case simulation summary files (base depletion, waterflood, pattern infill, gas injection), facility surface constraint limits, and corporate PRMS reserves guidelines.",
      "does": "Generates multi-scenario production profile comparison plots (oil rate, gas rate, water cut, field pressure); computes ultimate recovery factors (RF) and plateau duration metrics; evaluates facility constraint bottlenecks (liquid handling limits, gas compression limits, water injection capacity); compiles certified 1P/2P/3P dynamic reserves tables per PRMS guidelines; drafts technical narrative explaining recovery mechanisms.",
      "returns": "Formal Field Development Plan Dynamic Reservoir Chapter (PDF/Markdown) formatted for corporate investment committee review, featuring executive recovery scorecards, scenario forecast charts, and standardized reserves tables.",
      "stopsAt": "Submitting statutory reserves certifications to government securities regulators (SEC / PRMS) without corporate Chief Reservoir Engineer sign-off.",
      "failureModes": "If prediction runs show unphysical rate surges (e.g., individual well oil rate exceeding maximum inflow performance deliverability limits), the agent flags [Forecast Rate Anomaly: Deliverability Constraint Inactive] and highlights the affected wells.",
      "agentId": "OG-P22-A07"
    }
  ],
  "valueModel": {
    "rule": "Quantify the unit of work. Never fabricate enterprise rupee/dollar multipliers. The operating asset client supplies their own development capital, recovery targets, and rig day-rate constants.",
    "rows": [
      {
        "agent": "Well History & Schedule Deck Compilation Sieve",
        "unit": "",
        "beforeHours": 24.0,
        "afterHours": 2.5,
        "savedHours": 21.5,
        "frictionRemoved": "Unstructured workover PDF parsing, MD-to-grid mapping & syntax formatting"
      },
      {
        "agent": "Simulator Non-Convergence & PRT Debugger",
        "unit": "",
        "beforeHours": 12.0,
        "afterHours": 1.5,
        "savedHours": 10.5,
        "frictionRemoved": "Massive text log file sifting & Newton-Raphson residual diagnostics"
      },
      {
        "agent": "Relative Permeability & SCAL Table Calibration Sieve",
        "unit": "",
        "beforeHours": 8.0,
        "afterHours": 1.0,
        "savedHours": 7.0,
        "frictionRemoved": "Coreflood normalization, Corey/LET fitting & table formatting drag"
      },
      {
        "agent": "Waterflood Voidage Replacement & Pattern Sweep Sieve",
        "unit": "",
        "beforeHours": 8.0,
        "afterHours": 1.0,
        "savedHours": 7.0,
        "frictionRemoved": "Pattern volume extraction, reservoir-condition VRR math & sweep checks"
      },
      {
        "agent": "Thermodynamic PVT & Black-Oil Table Quality Sieve",
        "unit": "",
        "beforeHours": 6.0,
        "afterHours": 0.75,
        "savedHours": 5.25,
        "frictionRemoved": "PVT cross-checking, monotonicity verification & keyword deck formatting"
      },
      {
        "agent": "Dynamic History-Match Objective Function & Sensitivity",
        "unit": "",
        "beforeHours": 16.0,
        "afterHours": 2.0,
        "savedHours": 14.0,
        "frictionRemoved": "Multi-case restart parsing, NRMSE math & sensitivity tornado assembly"
      },
      {
        "agent": "FDP Dynamic Forecast & Reserves Dossier Synthesizer",
        "unit": "",
        "beforeHours": 16.0,
        "afterHours": 2.0,
        "savedHours": 14.0,
        "frictionRemoved": "Profile comparison plotting, plateau analysis & reserves chapter assembly"
      }
    ],
    "total": {
      "unit": "",
      "beforeHours": 90.0,
      "afterHours": 10.75,
      "savedHours": 79.25,
      "frictionRemoved": "88.1% reduction in manual data assembly and diagnostic drag",
      "label": "TOTAL PER SIMULATION STUDY"
    }
  },
  "citations": [
    {
      "key": "[SPE-Simulation]",
      "citation": "SPE, Reservoir Simulation Competency Discipline Matrix, 2018",
      "locator": "spe.org/cmt",
      "type": "Competency Standard",
      "supports": "Core simulation competencies and operational actions A01–A15"
    },
    {
      "key": "[Aziz-Settari]",
      "citation": "Aziz & Settari, Petroleum Reservoir Simulation, 1979",
      "locator": "Applied Science Publishers",
      "type": "Technical Textbook",
      "supports": "Discretization, non-linear convergence, multi-phase mechanics"
    },
    {
      "key": "[Eclipse-Reference]",
      "citation": "SLB, ECLIPSE Technical Reference Manual: Keyword Syntax, 2022",
      "locator": "slb.com/software",
      "type": "Technical Manual",
      "supports": "Schedule syntax (COMPDAT, WELSPECS, WCONHIST), PVT tables"
    },
    {
      "key": "[PRMS-2018]",
      "citation": "SPE/WPC/AAPG/SPEE, Petroleum Resources Management System, 2018",
      "locator": "spe.org/prms",
      "type": "Industry Standard",
      "supports": "Dynamic simulation reserves classification and forecast validation"
    },
    {
      "key": "[Carlson-Simulation]",
      "citation": "M. R. Carlson, Practical Reservoir Simulation, PennWell Books",
      "locator": "PennWell Publishing",
      "type": "Technical Textbook",
      "supports": "History matching methodologies, grid quality, voidage replacement"
    },
    {
      "key": "[SPE-173214]",
      "citation": "SPE, Data Management Pitfalls in Large-Scale History Matching, 2015",
      "locator": "DOI: 10.2118/173214-MS",
      "type": "Technical Paper",
      "supports": "Baseline timing on manual schedule assembly and non-convergence drag"
    }
  ],
  "negativeSearch": {
    "searched": "SLB Petrel RE documentation, RFD tNavigator user guides, CMG technical manuals, and OnePetro conference archives for \"autonomous extraction of unstructured well workover PDFs directly into syntax-validated ECLIPSE COMPDAT schedule include decks and automated PRT non-convergence diagnostic parsing without manual GUI interaction\".",
    "result": "Negative Search, 2026-09. Commercial dynamic simulation packages provide graphical keyword dialogs and Assisted History Matching toolkits; none autonomously parse unstructured text workover logs into spatially mapped I,J,K grid perforation keywords or diagnose non-convergence root causes from raw print files without manual human modeling intervention."
  },
  "line": "\"A reservoir simulation engineer shouldn't spend two weeks typing dates and perforation footages into a text editor; their true intellectual value is in deciphering why forty million barrels of injected water disappeared into the formation without producing a single barrel of incremental oil.\"",
  "openQuestions": [
    "The Schedule Data Friction: When setting up a multi-decade full-field history match across 50+ wells, how many weeks of engineering time are lost simply transcribing historical workover reports, reperforations, and allocation rates into simulator schedule syntax?",
    "The Non-Convergence Blind Spot: When an overnight simulation run terminates prematurely at 03:00 AM due to time-step chopping, how much time is typically spent hunting through an 80,000-line print file before the specific failing grid cell and its physical cause are identified?",
    "The Unphysical Multiplier Trap: During intensive assisted history matching, how often do automated optimization algorithms achieve low pressure errors by introducing unphysical permeability multipliers or extreme fault seals that completely violate the underlying sedimentological geological model?"
  ]
};
