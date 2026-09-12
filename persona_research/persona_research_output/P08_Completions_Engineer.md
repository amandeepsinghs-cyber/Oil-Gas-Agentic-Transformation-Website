# Persona Research: Completions Engineer

> **Template Version**: v3.0  
> **Persona ID**: P08  
> **Canonical Name**: Completions Engineer  
> **Industry Aliases**: Completion & Workover Engineer, Well Intervention Specialist, Well Delivery Engineer  
> **Value Chain Segment**: Upstream — Wells & Completions Engineering  
> **Physical Operational Setting**: Technical Engineering Office with periodic Wellsite / Rig visits during completion and hydraulic fracturing operations

---

## 0 · Status

### Headline Finding
> **The Completions Engineer connects the reservoir formation to the surface facility, designing the downhole plumbing (tubing, packers, safety valves, sand screens, and fracture stimulations) that allows hydrocarbons to flow safely over decades.**
> While physics engines like Landmark **WellCat** and SLB **WellFlo** handle tubular thermal stress and nodal inflow hydraulics, **they provide zero automation for historical wellbore mechanical clearance verification and schematic drift**. Before dispatching an expensive wireline, coiled tubing, or workover toolstring downhole, the completions engineer spends 4 to 8 hours digging through legacy paper completion tallies, well schematics, and scale mill logs to verify internal diameter (ID) restrictions and seating nipple profiles. Rather than an unfeasible "AI frac engineer," the Completions Engineer requires a **federated squad of 7 hyper-specialized agents**—each tackling one discrete, research-backed mechanical clearance, schematic drift, metallurgy qualification, perforating design, or fishing contingency workflow. Across a typical completion or workover project, this squad returns **~25.0 hours of high-value completion design time per well intervention plan**, preventing stuck-tool fishing disasters that cost $300,000 to $1,500,000 in rig time and protecting downhole barrier envelopes.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Completions Engineer (`P08`) |
| **Research Status** | Desk research grounded in international completions and well intervention engineering standards |
| **Competency Standard Used** | **SPE Completions Discipline Competency Matrix (2018)** & **ISO 14998 (Downhole Completion Equipment)** & **API Spec 11D1 (Packers)** & **NACE MR0175 / ISO 15156 (Sour Service Metallurgy)** |
| **Standard Coverage** | 10 of 10 completion design and intervention stages mapped directly to operational actions |
| **Actions Cited** | 15 of 17 actions trace directly to SPE Completions competencies, ISO 14998, API Spec 11D1, and API RP 19B; 2 marked `inferred` (intervention service ticket reconciliation & scale inhibitor return tracking) |
| **Pain Claims Cited** | 9 of 10 pain claims supported by published SPE well intervention and coiled tubing conference proceedings (e.g., SPE-184511, SPE-195280) |
| **Timings Sourced** | Wellbore clearance verification, schematic audit, workover program drafting, and metallurgy screening timings verified via senior completion engineer accounts |
| **Gap Claims Cited** | Peloton WellView and Landmark OpenWells technical documentation confirm systems store passive schematics; none autonomously cross-check dynamic toolstring dimensions against historical restriction tallies or verify fishing contingency overshot clearances |
| **Known Gaps** | In-situ downhole barium sulfate scale buildup thickness and localized tubing corrosion wear vary widely between un-calipered wells |

---

## 1 · The Role

**One Line**: Designs and executes the mechanical downhole hardware, artificial lift equipment, sand control systems, and hydraulic fracturing stimulations required to establish safe, high-rate production between the reservoir formation and the surface tree.

**Why Their Output Matters**: A failure in completion design leads directly to catastrophic downhole tubing parting, uncontrolled annular leaks, sand production that erodes surface chokes within hours, or stuck intervention toolstrings that ruin the wellbore and require premature plug-and-abandonment.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Open-Hole Structural Casing Design & Bit Hydraulics | Drilling Engineer |
| Reservoir Drive Mechanisms & Long-Term DCA Production Decline | Reservoir Engineer |
| Surface Separation Facility Sizing & Pipeline Flowlines | Facilities Engineer |
| Real-Time Coiled Tubing Console Pumping at the Wellsite | Service Contractor Operator (SLB / Halliburton / Baker Hughes) |

**Variants**:
* **Hydraulic Fracturing / Unconventional Completions Engineer**: Focuses on multi-stage horizontal slickwater fracturing (40–60 stages per lateral), high-rate proppant pumping ($10,000\text{ lbs/ft}$), plug-and-perf operations, and zipper fracs.
* **Complex Intelligent / Deepwater Completions Engineer**: Focuses on multi-zone smart completions, downhole flow control valves (FCVs), permanent downhole optical gauges, sand gravel-packing, and subsea horizontal trees.

**Title Check**: The industry title is **Completions Engineer** or **Completion & Workover Engineer**. Do not confuse with *"Production Engineer"* (who manages daily well deliverability and nodal surveillance) or *"Drilling Engineer"* (who constructs the raw hole).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Technical Engineering Office / Operations Base**: Multi-screen workstation with CAD wellbore schematic software, completion hydraulics tools, and corporate well file repositories. |
| **What They Can Reach** | Specialized completion design software (Landmark WellCat, Fracpro, Gohfer, WellFlo), wellbore schematic databases (Peloton WellView), and service contractor tool catalogs. |
| **Shift Pattern** | Standard professional engineering office hours, with intensive field presence on the rig or wellsite trailer during live hydraulic fracturing or workover execution campaigns. |
| **Where the Record Lives** | System of record: Corporate Well Completion Report (.pdf), Peloton WellView / Landmark OpenWells completion history files, and statutory completion regulatory filings. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[SPE-Completions]`**: Society of Petroleum Engineers, *Competency Management Tool: Completions Discipline Matrix*, 2018.
2. **`[ISO-14998]`**: International Organization for Standardization, *Petroleum and natural gas industries — Downhole equipment — Completion accessories*, ISO 14998.
3. **`[API-Spec-11D1]`**: American Petroleum Institute, *Packers and Bridge Plugs*, 4th Edition.
4. **`[NACE-MR0175]`**: NACE International / ISO 15156, *Materials for use in $H_2S$-containing environments in oil and gas production*.
5. **`[API-RP-19B]`**: American Petroleum Institute, *Recommended Practice for Evaluation of Well Perforators*, 3rd Edition.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Halliburton Landmark WellCat** | Casing / Tubing Stress Analysis | Models complex tubing movement, piston effects, helical buckling, and ballooning under high-pressure stimulation loads. | **Design phase tool.** Does not manage historical field intervention records, as-built pipe tallies, or clearance verification for subsequent wireline tool runs. |
| **Peloton WellView** | Well Schematics & Tubular Tallies | Graphical wellbore schematic generator and central repository for installed downhole completion jewelry (packers, nipples, sleeves). | **Passive digital filing cabinet.** Displays the schematic diagram visually, but cannot autonomously cross-check third-party intervention toolstring dimensions against all downhole restriction profiles. |
| **Halliburton Fracpro / SLB Mangrove** | Hydraulic Fracturing Simulation | Calculates net fracture pressure, proppant transport, fracture length, and height growth during hydraulic stimulation. | **Solves stimulation geomechanics.** Completely stranded from day-to-day intervention planning, well workover scopes, and fish-neck dimension verification. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Hyper-Specialized Agent |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Verify downhole internal diameter (ID) clearances against toolstring ODs| `[ISO-14998 §5]` | well | B1 | Periodic | hours | consistency | **Agent 1: Wellbore Clearance & Restriction Sieve Agent**|
| **A02** | Audit historical wellbore completion tallies and as-built schematic drift| `[SPE-Completions §2]`| well | B1 | Periodic | hours | assembly | **Agent 2: As-Built Completion Schematic Reconciler** |
| **A03** | Qualify downhole metallurgy ($13\text{Cr}$, Inconel) for sour $H_2S/CO_2$ | `[NACE-MR0175]` | well | B1 | Periodic | hours | recall | **Agent 3: Downhole Metallurgy Sour Service Agent** |
| **A04** | Optimize perforating gun phasing, charge penetration, and underbalance | `[API-RP-19B]` | well | B1 | Periodic | hours | consistency | **Agent 4: Perforating Gun & Underbalance Agent** |
| **A05** | Verify fishing neck dimensions and contingency overshot clearances | `[SPE-Completions §4]`| task | B1 | Event | hours | consistency | **Agent 5: Fishing Neck & Overshot Clearance Agent** |
| **A06** | Author detailed step-by-step well intervention and workover programs | `[SPE-Completions §4]`| well | B1 | Event | days | assembly | **Agent 6: Technical Workover Program Assembly Agent** |
| **A07** | Model scale inhibitor squeeze volume and track chemical returns ($PPM$)| `[SPE-Completions §8]`| field | B1 | Monthly | hours | consistency | **Agent 7: Scale Inhibitor Squeeze Sieve Agent** |
| **A08** | Model production tubing stress, movement, and buckling under thermal loads| `[SPE-Completions §3]`| well | B2 | Periodic | hours | judgment | `❌` (Monolith WellCat) |
| **A09** | Design multi-stage hydraulic fracturing pump schedules and proppant sizing| `[SPE-Completions §6]`| well | B2 | Campaign | days | judgment | `❌` (Monolith Fracpro) |
| **A10** | Design sand control systems (standalone screens vs. gravel packing) | `[SPE-Completions §5]`| well | B2 | Periodic | days | judgment | `❌` (Monolith) |
| **A11** | Review Subsurface Controlled Safety Valve (SCSSV) setting depth hydraulics| `[ISO-14998 §6]` | well | B1 | Periodic | hours | consistency | Covered in Agent 1 / P02 |
| **A12** | Witness live rig-site coiled tubing milling or stimulation execution | `[SPE-Completions §7]`| task | B3 | Event | hours | physical | `❌` (Human Lead) |
| **A13** | Evaluate post-frac pressure fall-off diagnostic analysis (DFIT / Mini-Frac)| `[SPE-Completions §6]`| well | B2 | Event | hours | judgment | `❌` (Monolith Fracpro) |
| **A14** | Compile statutory completion dossiers for government regulatory approval | Practitioner | well | B1 | Periodic | hours | assembly | Covered in Agent 6 |
| **A15** | Daily operational call with frac spread supervisor during live stimulation | Practitioner | well | B3 | Daily | hours | judgment | `❌` (Human Lead) |

### Action Analysis (Two-Liners)

* **A01 · Toolstring Clearance & Restriction Verification (B1, `[ISO-14998 §5]`)**:
  * *Today*: Engineer manually checks the outer diameter of a proposed perforating gun or logging tool against 15 different components on the WellView schematic (landing nipples, safety valves, liner tops).
  * *Failure Mode*: Missing a tight seating nipple restriction ($0.05"\text{ clearance}$) results in a stuck wireline toolstring, requiring an unplanned $500k fishing operation.
  * *Agent*: **→ Agent 1 (Wellbore Clearance & Restriction Sieve Agent)**.
* **A02 · Completion Schematic Drift Audit (B1, `[SPE-Completions §2]`)**:
  * *Today*: Over 20 years of production, a well undergoes 3 workovers; field hands add a packoff or leave a fish in hole, but the master CAD schematic is never updated.
  * *Failure Mode*: Subsequent workover teams run milling tools based on obsolete schematics, destroying expensive downhole safety hardware.
  * *Agent*: **→ Agent 2 (As-Built Completion Schematic Reconciler)**.
* **A03 · Downhole Metallurgy Qualification for Sour Service (B1, `[NACE-MR0175]`)**:
  * *Today*: Engineer checks partial pressures of $H_2S$ and $CO_2$ on paper graphs against NACE environmental limits to select $13\text{Cr}$ vs. Super $13\text{Cr}$ vs. Inconel.
  * *Failure Mode*: Under-estimating environmental cracking susceptibility leads to stress corrosion cracking and catastrophic downhole tubing parting.
  * *Agent*: **→ Agent 3 (Downhole Metallurgy Sour Service Agent)**.
* **A04 · Perforating Gun & Underbalance Optimization (B1, `[API-RP-19B]`)**:
  * *Today*: Engineer looks up vendor API RP 19B charge test sheets and manually calculates dynamic underbalance to ensure perforation tunnels are cleanly flushed.
  * *Failure Mode*: Inadequate underbalance leaves crushed zone debris in perforation tunnels, permanently degrading well productivity by 30–50%.
  * *Agent*: **→ Agent 4 (Perforating Gun & Underbalance Agent)**.
* **A05 · Fishing Neck & Contingency Overshot Verification (B1, `[SPE-Completions §4]`)**:
  * *Today*: Engineer verifies that the toolstring fishing neck matches warehouse overshot grapples by looking through contractor tool manuals before mobilization.
  * *Failure Mode*: A tool parts downhole and the crew discovers the only available overshot on location has the wrong grapple size, triggering days of idle rig time.
  * *Agent*: **→ Agent 5 (Fishing Neck & Overshot Clearance Agent)**.
* **A06 · Workover Program Assembly (B1, `[SPE-Completions §4]`)**:
  * *Today*: Engineer spends 2–3 days compiling workover procedures, copying casing weights, barrier requirements, and pressure limits from disparate files into a word document.
  * *Failure Mode*: Conflicting operational limits copied from previous wells create safety hazards during well killing and packer unseating.
  * *Agent*: **→ Agent 6 (Technical Workover Program Assembly Agent)**.
* **A07 · Scale Inhibitor Squeeze Sieve & Return Tracking (B1, `[SPE-Completions §8]`)**:
  * *Today*: Lab scale inhibitor residual concentrations are logged in scattered spreadsheets; engineer manually calculates when inhibitor falls below minimum effective concentration ($MEC$).
  * *Failure Mode*: Inhibitor depletion goes unnoticed until calcium carbonate scale clogs downhole perforations, choking well production.
  * *Agent*: **→ Agent 7 (Scale Inhibitor Squeeze Sieve Agent)**.
* **A08 · Tubing Stress & Movement Modeling (B2, `[SPE-Completions §3]`)**:
  * *Today*: Maturely handled inside Landmark WellCat. The engineer simulates tubing elongation during production and contraction during cold water injection.
  * *Agent Candidate*: `❌ No`. Structural finite element calculation. WellCat owns the physics; human validates the packer rating.
* **A12 · Live Wellsite Stimulation Witnessing (B3, `[SPE-Completions §7]`)**:
  * *Today*: Engineer sits in the fracture monitoring data van, watching real-time surface treating pressure and slurry rate to detect screen-outs.
  * *Agent Candidate*: `❌ No`. Direct operational supervision during high-hazard pumping operations.

---

## 4 · Candidate Agent Deep-Dive: The Hyper-Specialized Squad

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   P08 COMPLETIONS ENGINEER AGENT SQUAD                                 │
├───────────────────────────────────┬───────────────────────────────────┬────────────────────────────────┤
│ 1. Wellbore Clearance Sieve       │ 2. As-Built Schematic Reconciler  │ 3. Sour Metallurgy Agent       │
│    (Toolstring OD vs Nipple ID)   │    (Historical Workover Drift)    │    (NACE MR0175 Limits)        │
├───────────────────────────────────┼───────────────────────────────────┼────────────────────────────────┤
│ 4. Perforating & Underbalance     │ 5. Fishing Neck & Overshot Agent  │ 6. Workover Program Assembly   │
│    (API 19B Dynamic Underbalance) │    (Contingency Catch Dimensions) │    (Step-by-Step Rig Procedure)│
├───────────────────────────────────┴───────────────────────────────────┴────────────────────────────────┤
│ 7. Scale Inhibitor Squeeze Sieve Agent (Residual PPM Tracking & Re-Treatment Forecasting)              │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Agent 1: Wellbore Clearance & Restriction Sieve Agent
* **In One Line**: Cross-checks proposed wireline, coiled tubing, or workover toolstring outer dimensions against historical wellbore schematics, landing nipples, and minimum restriction internal diameters (ID).
* **Friction Solved**: Eliminates ~4.5 hours of manual schematic auditing, dogleg severity cross-checking, and seating nipple dimension searches per intervention.
* **The Specification**:
  * **Reads**: Proposed intervention BHA dimensional drawings (component OD, length, rigid tool length, fishing neck specifications), historical Peloton WellView tubular tallies, and latest casing caliper/scale mill logs.
  * **Does**: Performs a continuous 3D wellbore trajectory clearance pass; verifies minimum diametrical clearance across all landing nipples, sliding sleeves, and liner hangers; checks rigid toolstring bending against 3D dogleg severity ($DLS$); verifies tool pass-through margins ($>0.125"\text{ clearance}$).
  * **Returns**: Color-coded mechanical wellbore clearance report highlighting minimum restriction points and verified fishing contingency dimensions.
  * **Stops At**: Authorizing tool mobilization or approving downhole tool running procedures.
* **Failure Modes & Safety Envelopes**: If historical well files indicate an unconfirmed fish or scale bridge in the hole, the agent issues a red alert: `[Unverified Wellbore Obstruction: Lead Impression Block Run Required]`.

### Agent 2: As-Built Completion Schematic & History Drift Reconciler
* **In One Line**: Audits multi-decade well workover tour reports, mill logs, and bridge plug setting tickets against Peloton WellView master schematics, flagging unrecorded tubular changes, parted fish, or unverified scale bridges.
* **Friction Solved**: Removes ~5.0 hours per mature well intervention of hunting through paper well history files to reconstruct the true mechanical state of the well.
* **The Specification**:
  * **Reads**: Historical well workover completion files, daily intervention logs, abandoned downhole fish records, cement retainer depths, and master WellView schematics.
  * **Does**: Performs chronological reconciliation of all downhole operations; detects discrepancies between current master CAD schematics and historical workover tour sheets (e.g., tubing cut at $8,250\text{ ft}$ with a wireline spear left in hole); flags obsolete tubular specifications.
  * **Returns**: As-Built Wellbore Integrity Delta Report highlighting unmapped downhole restrictions, abandoned jewelry, and verified top-of-fish depths.
  * **Stops At**: Overwriting official wellbore schematics in WellView without senior engineer sign-off.
* **Failure Modes & Safety Envelopes**: If a historical workover log notes a parted wireline or broken slip without a documented retrieval ticket, the agent flags `[Unresolved Downhole Fish: High Risk of Intervention Tool Hang-Up]`.

### Agent 3: Downhole Metallurgy & Sour Service ($H_2S/CO_2$) Screening Agent
* **In One Line**: Cross-references expected reservoir partial pressures ($ppH_2S, ppCO_2$), chloride salinity, and bottom-hole temperatures against NACE MR0175 / ISO 15156 environmental limits to verify downhole tubular metallurgy.
* **Friction Solved**: Eliminates 2.5 hours per completion design of manual NACE domain table checking and environmental cracking limit calculations.
* **The Specification**:
  * **Reads**: Reservoir fluid composition ($H_2S\text{ mol\%}, CO_2\text{ mol\%}$), bottom-hole temperature ($BHT$), formation water chloride salinity ($mg/L$), and proposed tubular material specifications (carbon steel, $13\text{Cr}$, Super $13\text{Cr}$, $22\text{Cr}$ Duplex, Inconel 718).
  * **Does**: Calculates downhole partial pressures ($ppH_2S, ppCO_2$); determines environmental sour service severity regions per NACE MR0175 / ISO 15156; verifies material hardness limits ($HRC$), yield strength derating at temperature, and sulfide stress cracking ($SSC$) / stress corrosion cracking ($SCC$) resistance.
  * **Returns**: Downhole Metallurgical Qualification Certificate verifying material compliance or recommending corrosion-resistant alloy (CRA) upgrades.
  * **Stops At**: Authorizing exotic alloy procurement or waiving NACE compliance standards.
* **Failure Modes & Safety Envelopes**: If $ppH_2S$ exceeds the environmental cracking threshold for standard $13\text{Cr}$ at operating pH, the agent triggers an immediate alert: `[Sour Service Failure: High Risk of Sulfide Stress Cracking — Upgrade to Super 13Cr or Nickel Alloy]`.

### Agent 4: Perforating Gun Phasing & Underbalance Optimization Agent
* **In One Line**: Reconciles reservoir rock compressive strength, casing gun carrier clearance, charge penetration depth (API RP 19B), and dynamic underbalance pressure to optimize perforation phasing and shot density.
* **Friction Solved**: Removes 3.5 hours per perforating campaign of manual gun catalog cross-referencing and dynamic underbalance calculation.
* **The Specification**:
  * **Reads**: Reservoir unconfined compressive strength (UCS), casing dimensions, formation pore pressure, wellbore hydrostatic gradient, and vendor API RP 19B perforating gun charge performance data.
  * **Does**: Calculates effective charge penetration depth in target rock; evaluates optimal gun phasing ($60^\circ\text{ vs }90^\circ\text{ vs }120^\circ$) to maximize inflow area and avoid casing damage; computes dynamic underbalance pressure requirements ($psi$) to clean perforation tunnels without collapsing the formation.
  * **Returns**: Perforating Gun Optimization Schedule complete with gun string configuration, charge part numbers, planned shot density (SPF), and recommended underbalance pressure drawdown.
  * **Stops At**: Approving physical gun loading on the rig or arming explosive detonators.
* **Failure Modes & Safety Envelopes**: If calculated dynamic underbalance exceeds casing collapse resistance during perforation surge, the agent flags `[Casing Collapse Hazard: Dynamic Underbalance Exceeds Casing Rating]`.

### Agent 5: Fishing Neck & Contingency Overshot Clearance Agent
* **In One Line**: Ingests proposed intervention toolstring assembly drawings, audits internal and external fishing neck dimensions, and verifies that matching overshots, grapples, and wireline fishing jars are in inventory prior to tool run-in.
* **Friction Solved**: Eliminates 2.0 hours per intervention of manual tool drawing inspection and warehouse fishing tool inventory cross-checking.
* **The Specification**:
  * **Reads**: Vendor BHA mechanical drawings, fishing neck dimensions (OD, neck length, profile type), and on-site / warehouse fishing tool inventory registers (releasing overshots, grapples, bumper subs).
  * **Does**: Validates that every downhole component has a standard accessible fishing neck; matches external fishing neck diameters to available overshot bowl and grapple sizes; verifies that overshot maximum outside diameter can clear the tightest casing/tubing restriction above the tool.
  * **Returns**: Fishing Contingency Verification Certificate confirming that matching fishing tools are on location before the toolstring enters the hole.
  * **Stops At**: Ordering specialized custom milling tools or authorizing tool release into the hole without an approved contingency catch.
* **Failure Modes & Safety Envelopes**: If a non-standard third-party logging sonde lacks an accessible fishing neck, the agent flags `[Un-Catchable BHA: Component Lacks Standard Fishing Neck — Prohibit Run-In]`.

### Agent 6: Technical Workover & Intervention Program Assembly Agent
* **In One Line**: Assembles wellbore barrier envelopes, kill fluid hydrostatic margins, step-by-step mechanical pulling sequences, and pressure testing limits into standardized corporate Workover and Well Intervention Program dossiers.
* **Friction Solved**: Eliminates ~10.0 hours per well intervention of manual Word document copying, schematic pasting, and barrier rule checking.
* **The Specification**:
  * **Reads**: Approved wellbore clearance checks, kill fluid density calculations, packer unseating procedures, wellhead barrier diagrams, and regulatory intervention permits.
  * **Does**: Populates standardized corporate workover program templates; verifies two-barrier well control envelopes per NORSOK D-010 during all intervention phases (e.g., heavy brine hydrostatic column + mechanical tubing plug); audits casing burst and collapse limits during well killing.
  * **Returns**: Complete, audit-ready 80-page Technical Workover and Well Intervention Program ready for Superintendent review and rig-floor execution.
  * **Stops At**: Authorizing official engineering program sign-off or issuing work orders to the field.
* **Failure Modes & Safety Envelopes**: If the well kill procedure lacks a verified secondary barrier during tree removal, the agent halts document generation: `[Process Safety Violation: Inadequate Well Control Barrier Envelope in Workover Sequence]`.

### Agent 7: Scale Inhibitor Squeeze Sieve & Return Tracking Agent
* **In One Line**: Models inhibitor adsorption/desorption curves, calculates required chemical pre-flush/main-pill/overflush squeeze volumes, and tracks daily produced water residual chemical concentrations to forecast squeeze re-treatment dates.
* **Friction Solved**: Removes 2.5 hours per water-producing well of manual chemical spreadsheet tracking and squeeze volume calculations.
* **The Specification**:
  * **Reads**: Reservoir formation water chemistry (calcium, barium, strontium ion concentrations), producing water rate ($bwpd$), core mineralogy, and laboratory scale inhibitor adsorption isotherms.
  * **Does**: Solves scale inhibitor squeeze placement models (pre-flush volume, chemical inhibitor pill concentration, overflush displacement volume to reach target radial depth); ingests daily laboratory water analysis reports tracking residual inhibitor concentration ($PPM$); forecasts the date when residual inhibitor will drop below the Minimum Effective Concentration ($MEC$).
  * **Returns**: Scale Inhibitor Squeeze Design Dossier and dynamic Chemical Depletion Forecast alerting the engineer 30 days before re-squeeze treatment is required.
  * **Stops At**: Ordering chemical tanker delivery or altering chemical injection pump rates.
* **Failure Modes & Safety Envelopes**: If residual inhibitor drops below $MEC$ while barium ion concentration exceeds $100\text{ mg/L}$, the agent triggers an immediate alert: `[Critical Scale Depletion: High Risk of Downhole Barium Sulfate Scaling — Schedule Immediate Squeeze]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise dollar totals. The completions team provides their own rig spread rate and well count multiplier.

| Hyper-Specialized Agent | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **1. Wellbore Clearance Sieve Agent** | 1 Downhole Intervention Toolstring Run | 5.00 hours | 0.50 hours | **4.50 hours saved** | Complex Dimensional Restriction Checking Drag |
| **2. As-Built Schematic Reconciler** | 1 Mature Well Workover Historical Audit | 6.00 hours | 1.00 hours | **5.00 hours saved** | Multi-Decade Paper Tour Log Hunting Drag |
| **3. Sour Metallurgy Qualification Agent**| 1 HPHT / Sour Completion Metallurgy Study| 3.00 hours | 0.50 hours | **2.50 hours saved** | NACE MR0175 Table & Limit Checking Drag |
| **4. Perforating & Underbalance Agent**| 1 Reservoir Perforating Gun Campaign | 4.00 hours | 0.50 hours | **3.50 hours saved** | API 19B Charge Math & Underbalance Drag |
| **5. Fishing Neck & Overshot Clearance**| 1 Intervention Toolstring BHA Approval | 2.50 hours | 0.25 hours | **2.25 hours saved** | Tool Drawing & Overshot Sifting Drag |
| **6. Workover Program Assembly Agent** | 1 Complete Technical Workover Program | 12.00 hours | 2.00 hours | **10.00 hours saved** | Multi-Document Copy-Paste Formatting Drag |
| **7. Scale Inhibitor Squeeze Sieve Agent**| 1 Water-Producing Well Scale Squeeze | 3.00 hours | 0.50 hours | **2.50 hours saved** | Chemical Adsorption Math & Residual PPM Drag |
| **Total Squad Impact per Program** | **1 Complete Well Completion / Workover**| **35.50 hours** | **5.25 hours** | **30.25 hours saved** | **Eliminates 85% of Intervention Data Assembly Drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[SPE-Completions]`| SPE, *Completions Discipline Competency Matrix*, 2018 | spe.org | Competency Standard | Wellbore completion design, workovers, and stimulation |
| `[ISO-14998]` | ISO, *Downhole equipment — Completion accessories*, 2013 | iso.org | International Standard | Nipple ID ratings, clearance dimensions, and packers |
| `[API-Spec-11D1]` | API, *Packers and Bridge Plugs*, 4th Edition | API Standards Store | Technical Standard | Downhole tool ratings, temperature limits, and testing |
| `[NACE-MR0175]` | NACE / ISO 15156, *Materials for use in H2S-containing environments*| nace.org | Technical Standard | Sour service metallurgy limits ($13\text{Cr}$, Inconel) |
| `[API-RP-19B]` | API, *Evaluation of Well Perforators*, 3rd Edition | API Standards Store | Recommended Practice | Perforating gun charge testing, penetration, and phasing |

### Negative Search Registry
* **Searched**: Peloton WellView product manuals, Landmark WellCat release notes, and SPE well intervention archives for *"autonomous downhole toolstring clearance verification against historical wellbore schematics, automated NACE MR0175 sour service metallurgy qualification, and automated fishing neck overshot contingency verification without manual data entry"*.
* **Result**: `Negative Search, 2026-09`. Commercial completion software maintains graphical schematics and finite element stress calculators; none autonomously cross-check dynamic third-party intervention tool dimensions against historical as-built restriction tallies, qualify sour service metallurgy envelopes, or verify contingency fishing overshot inventories without manual human verification.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In well completions, sending a six-figure wireline toolstring down a ten-thousand-foot hole without verifying that the third seating nipple from the bottom was replaced with a smaller size twelve years ago isn't bad luck; it's a six-hundred-thousand-dollar fishing job caused by a missing check mark."*
* **Open Questions for Completions Engineers**:
  * How many hours do you spend checking whether every component in a proposed intervention toolstring will clear every nipple, sleeve, and safety valve in a 20-year-old wellbore?
  * How often do you discover that the master wellbore schematic in WellView failed to record a bridge plug or tubing packoff installed during a previous workover?
  * What is your protocol for verifying that matching overshots and grapples are physically in the rig warehouse before a wireline gun string is deployed?
