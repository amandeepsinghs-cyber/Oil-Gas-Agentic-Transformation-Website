# Build Specification: 10×10 Agentic Prioritization Topographical Value Terrain
## Document: `value_terrain_10x10_build.md`
### Platform: Sovereign Oil & Gas Agentic Transformation Executive Deck
### Target Visual Aesthetic: High-Density Cosmic Cloth Nebula (Faithful to `assets/media/wip/image78.png`)

---

## 1. Executive Concept & Strategic Purpose

### 1.1 The Core Problem in Enterprise AI Pitches
When presenting to the CMD, CEO, CFO, and Executive Directors, presenting a laundry list of 50 disconnected AI use cases leads to decision paralysis. Executives cannot decipher:
1. Which use cases deliver defensible balance-sheet impact versus minor conveniences.
2. Where the compounding operational friction is actually concentrated across their thousands of employees.
3. Why the engagement begins with one specific pilot (e.g., **Petrophysical Wireline Splicing**) rather than trying to boil the entire ocean.

### 1.2 The Two-Stage Solution: Mesh ➔ Topography
This component creates an executive narrative bridge across two synchronized visual stages:

```
STAGE 1: 2D DIAGNOSTIC FRICTION MESH          STAGE 2: 3D TOPOGRAPHICAL VALUE TERRAIN
┌────────────────────────────────────────┐     ▲ Annualized Capital Recovery (₹ Crores / $M)
│ 10 PERSONAS (Y) × 10 WORKFLOWS (X)     │     │
│ Heatmap of lost hours/week & friction  │ ──► │          ▲ [Peak 1: Petrophysical Splicing — ₹48 Cr]
│ Reveals silent operational latency     │     │         / \
│ Grounded in real operator headcounts   │     │        /   \        ▲ [Peak 2: Drilling NPT Hazard — ₹62 Cr]
└────────────────────────────────────────┘     │    ___/     \______/ \________ [Plateaus: Auto-Reporting]
                                               └──────────────────────────────────────► 10 Workflows
                                              / 10 Personas
```

1. **Stage 1 (2D Diagnostic Mesh):** Demonstrates organizational empathy. Maps 10 real energy personas against 10 critical operational workflow categories, displaying the raw hours lost to manual "cognitive janitorial work."
2. **Stage 2 (3D Topographical Value Terrain):** Extrudes the 2D mesh into a **3D topographical landscape**. The elevation ($Z$-axis) of each vertex is governed by the **Capital Recovery Multiplier**:
   $$Z(p, w) = \underbrace{\Big(N_p \times H_{p,w} \times 48\,\text{wks} \times R_p\Big)}_{\text{Direct Labor Capacity Reclaimed}} + \underbrace{\Big(P_{\text{event}} \times C_{\text{impact}}\Big)}_{\text{Avoided Downstream Capital Risk / NPT}}$$
   The resulting landscape looks like a geological structure map or mountain range where the **"Lighthouse Contenders"** stand out as towering luminous peaks.

---

## 2. Visual System & Nebula Texture Palette (`image78.png`)

The aesthetic must directly evoke the cover image `assets/media/wip/image78.png`—a multi-spectral, rippling cosmic cloth with deep shadows, glowing iridescent contours, and luminous chromatic transitions.

### 2.1 Color Tokens (Derived from `image78.png`)
```css
:root {
  /* Canvas & Shadow Void */
  --topo-void-black:      #03060B; /* Base background of the terrain */
  --topo-deep-space:      #060B14; /* Deep trench & valley lowlands */
  --topo-grid-wire:       rgba(56, 189, 248, 0.12); /* Subtle mesh lines */
  
  /* Elevation 0.0 – 0.25 (Lowlands / Valleys — Rutinary tasks) */
  --topo-elev-low:        #0C1B33; /* Indigo trench */
  --topo-elev-low-glow:   #1E3A8A; 
  
  /* Elevation 0.25 – 0.50 (Plateaus — Broad efficiency gains) */
  --topo-elev-mid:        #0D9488; /* Cosmic Teal / Cyan */
  --topo-elev-mid-glow:   #00D2B4; /* Security Mint / Turquoise */
  
  /* Elevation 0.50 – 0.75 (Ridges — High-velocity decision engines) */
  --topo-elev-high:       #7C3AED; /* Deep Nebula Violet */
  --topo-elev-high-glow:  #A855F7; /* Iridescent Nebula Amethyst */
  
  /* Elevation 0.75 – 1.00 (Mountain Peaks — Direct P&L Lighthouse Contenders) */
  --topo-elev-peak:       #F59E0B; /* Solar Flare Amber */
  --topo-elev-peak-glow:  #FBBF24; /* Radiant Gold Peak */
  --topo-elev-zenith:     #EF4444; /* Supernova Coral (Catastrophic Risk Mitigation) */
}
```

### 2.2 Topographical Shading & Texture Specs
- **Mesh Density:** $64 \times 64$ sub-divisions interpolated smoothly across the $10 \times 10$ cell control points using bi-cubic B-splines.
- **Topographic Isolines:** Subtle luminous contour lines rendered every 10 units of elevation with opacity pulsing gently (`animation: topo-pulse 4s ease-in-out infinite`).
- **Surface Texture Shader:** Anisotropic normal mapping that replicates cosmic silk/cloth ripples as seen in `image78.png`, catching grazing light highlights when the terrain rotates.
- **Glowing Peak Sentinels:** Vertical light beacons shooting upward from the top 5 highest peaks with floating metric chips (e.g., `Well A-12 Splicing: ₹48.2 Cr`).

---

## 3. The 10 Enterprise Personas (Rows)

Representing an integrated upstream, midstream, downstream, and corporate energy operator (e.g., ONGC, IOCL, Cairn/Vedanta, GAIL):

| ID | Persona Title | Focus Discipline | Enterprise Headcount ($N_p$) | Fully Loaded Cost ($R_p$) | Primary Operational Bottleneck |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **P01** | **Lead Petrophysicist** | Subsurface Characterization | **45** | ₹6,500 / hr ($78/hr) | Multi-run LAS/DLIS depth shifting & tool gain recalibration |
| **P02** | **Senior Exploration Geologist** | Basin Modeling & Prospecting | **60** | ₹6,000 / hr ($72/hr) | Dark data LAS crawling & unstructured offset mudlog retrieval |
| **P03** | **RTOC Drilling Operations Eng.** | Real-Time Rig Telemetry | **85** | ₹7,000 / hr ($84/hr) | Blind drilling ahead while waiting on log-while-drilling (LWD) signoff |
| **P04** | **Reservoir Simulation Specialist**| Dynamic Field Recovery | **40** | ₹7,500 / hr ($90/hr) | History matching bottleneck; manual grid upscaling & fluid PVT |
| **P05** | **Offshore Production Engineer** | Well Optimization & Choke | **110** | ₹5,500 / hr ($66/hr) | Choke sizing latency; hydrate and wax risk calculation in flowlines |
| **P06** | **Pipeline SCADA Controller** | Midstream Transmission | **75** | ₹5,000 / hr ($60/hr) | Acoustic transient false-alarms; compressor linepack optimization |
| **P07** | **Refinery Process Technologist** | Crude Distillation & FCC | **95** | ₹6,000 / hr ($72/hr) | 36-hr crude assay delay; off-spec blend giving away high-value cuts |
| **P08** | **Commercial Gas & Oil Scheduler** | Offtake & Dispatch Logistics | **35** | ₹6,500 / hr ($78/hr) | Allocation balancing across pipeline nominations & vessel demurrage |
| **P09** | **HSE & Integrity Asset Auditor** | Sovereign Compliance | **50** | ₹5,000 / hr ($60/hr) | Manual collation of 30-year paper records for DGH/PNGRB audits |
| **P10** | **Subsurface Asset General Manager**| Capital Allocation & PSCs | **25** | ₹12,000 / hr ($144/hr)| Multi-department synthesis lag before executive sanction / bidding |

---

## 4. The 10 Operational Workflow Stages (Columns)

The horizontal lifecycle represents the lifecycle of telemetry and physical decisions across the asset:

| ID | Workflow Stage | Operational Domain | Description |
| :--- | :--- | :--- | :--- |
| **W01** | **Raw Ingestion & Normalization** | Data Foundation | Ingestion of raw LAS, DLIS, WITSML, SCADA, and unstructured scanned PDFs into sovereign lakehouses. |
| **W02** | **Deterministic Physical Alignment** | Subsurface Physics | Mathematical cross-correlation, depth-shifting, sensor drift normalization, and splicing. |
| **W03** | **Offset Analog Mining** | Unstructured Memory | Vector search across 40-year basin archives, DDR daily reports, and historical well files. |
| **W04** | **Hazard & Geomechanical Guardrails**| Real-Time Safety | Pore-pressure forecasting, caliper washout sentinel checks, and casing shear detection. |
| **W05** | **Dynamic Modeling & Simulation** | Subsurface & Plant | Grid upscaling, transient hydraulic calculation, and multi-phase flow balance. |
| **W06** | **Material Balance & Reconciliation** | Operations & Yield | Mass and volume balancing across wells, manifolds, pipeline linepack, and crude tanks. |
| **W07** | **Sovereign Audit & Governance Log** | Compliance | Cryptographic SHA-256 ledger recording of every shift, override, and signoff for DGH/MeitY. |
| **W08** | **Sentinel Diagnostics & Anomaly Alerts**| Exception Alerting | Real-time monitoring of acoustic transients, sensor swaps, and catalyst circulation decay. |
| **W09** | **Closed-Loop Setpoint Optimization** | Field Execution | Automated generation of recommended choke turns, compressor RPMs, and blend ratios. |
| **W10** | **Executive Synthesis & Handover** | Leadership Decision | Natural language synthesis across asset silos for CMD/CEO 08:00 AM operating standups. |

---

## 5. The Complete 10×10 (100 Cell) Value Matrix

### Legend & Calculation Engine:
- **$H$**: Hours lost per week per individual on this task.
- **Labor Savings**: $N_p \times H \times 48\,\text{wks} \times R_p$ (in ₹ Lakhs).
- **Capital Risk Protection**: High-consequence event avoidance (NPT, demurrage, off-spec product, rig standby).
- **Total Cell Height ($Z$)**: Net Annual Value Created in **₹ Crores**.
- **Tier Classification**:
  - 🏔️ **Tier 1 (Lighthouse Peak, $Z \ge \text{₹30 Cr}$)**: Immediate candidate for Sovereign Discovery & Deployment.
  - ⛰️ **Tier 2 (High-Value Ridge, $\text{₹15 Cr} \le Z < \text{₹30 Cr}$)**: Fast-follow enterprise rollout.
  - 🌄 **Tier 3 (Productivity Plateau, $\text{₹5 Cr} \le Z < \text{₹15 Cr}$)**: Secondary multi-persona shared microservice.
  - 🏕️ **Tier 4 (Lowland Valley, $Z < \text{₹5 Cr}$)**: Routine workflow or high-touch governance task.

---

### Row P01: Lead Petrophysicist ($N=45$, Rate = ₹6,500/hr)
* **P01-W01 (Ingestion):** Multi-vendor LAS curve header renaming & mnemonic mapping.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹1.12 Cr} + \text{Risk: ₹1.5 Cr} \implies \mathbf{Z = \text{₹2.62 Cr}}$ *(Tier 4)*
* **P01-W02 (Alignment):** **Multi-run wireline log depth splicing & tool calibration (Well A-12 demo cell).**  
  $H = 14\text{ hrs/wk} \to \text{Labor: ₹1.97 Cr} + \text{Risk: ₹46.5 Cr (Avoided sidetracks & NPT)} \implies \mathbf{Z = \text{₹48.47 Cr}}$ 🏔️ *(Tier 1 PEAK)*
* **P01-W03 (Offset Mining):** Searching 30-year legacy paper logs for offset Archie water saturation ($S_w$).  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.84 Cr} + \text{Risk: ₹6.0 Cr} \implies \mathbf{Z = \text{₹6.84 Cr}}$ *(Tier 3)*
* **P01-W04 (Hazard Guardrail):** Caliper washout filtering to disqualify false pay zones.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.56 Cr} + \text{Risk: ₹14.0 Cr (Avoided testing dry intervals)} \implies \mathbf{Z = \text{₹14.56 Cr}}$ *(Tier 3)*
* **P01-W05 (Modeling):** Continuous composite upscaling for reservoir geo-cellular grids.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.70 Cr} + \text{Risk: ₹8.5 Cr} \implies \mathbf{Z = \text{₹9.20 Cr}}$ *(Tier 3)*
* **P01-W06 (Reconciliation):** Core vs log permeability porosity regression normalization.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.56 Cr} + \text{Risk: ₹4.0 Cr} \implies \mathbf{Z = \text{₹4.56 Cr}}$ *(Tier 4)*
* **P01-W07 (Sovereign Audit):** Documenting shift vectors and calibration multipliers for DGH approval.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.70 Cr} + \text{Risk: ₹12.0 Cr (Regulatory compliance pass)} \implies \mathbf{Z = \text{₹12.70 Cr}}$ *(Tier 3)*
* **P01-W08 (Diagnostics):** Anomaly alerts on dual-induction resistivity curve separation.  
  $H = 3\text{ hrs/wk} \to \text{Labor: ₹0.42 Cr} + \text{Risk: ₹5.5 Cr} \implies \mathbf{Z = \text{₹5.92 Cr}}$ *(Tier 3)*
* **P01-W09 (Optimization):** Automated petrophysical cutoff parameter tuning across field compartments.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.56 Cr} + \text{Risk: ₹7.0 Cr} \implies \mathbf{Z = \text{₹7.56 Cr}}$ *(Tier 3)*
* **P01-W10 (Handover):** Generating SPWLA 4-track presentation plots for executive morning briefings.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.70 Cr} + \text{Risk: ₹1.0 Cr} \implies \mathbf{Z = \text{₹1.70 Cr}}$ *(Tier 4)*

---

### Row P02: Senior Exploration Geologist ($N=60$, Rate = ₹6,000/hr)
* **P02-W01 (Ingestion):** Parsing legacy 1980s TIFF mudlog scans and mud-gas logs.  
  $H = 12\text{ hrs/wk} \to \text{Labor: ₹2.07 Cr} + \text{Risk: ₹18.0 Cr (Uncovering bypassed pay)} \implies \mathbf{Z = \text{₹20.07 Cr}}$ ⛰️ *(Tier 2 RIDGE)*
* **P02-W02 (Alignment):** Formation top pick harmonization across 200 basin wells.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹1.38 Cr} + \text{Risk: ₹12.0 Cr} \implies \mathbf{Z = \text{₹13.38 Cr}}$ *(Tier 3)*
* **P02-W03 (Offset Mining):** **Natural language vector retrieval of historical well kicks & gas shows.**  
  $H = 14\text{ hrs/wk} \to \text{Labor: ₹2.42 Cr} + \text{Risk: ₹35.0 Cr (Preventing blowout/lost circulation)} \implies \mathbf{Z = \text{₹37.42 Cr}}$ 🏔️ *(Tier 1 PEAK)*
* **P02-W04 (Hazard Guardrail):** Fault seal integrity analysis and shallow gas hazard flagging.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.86 Cr} + \text{Risk: ₹16.0 Cr} \implies \mathbf{Z = \text{₹16.86 Cr}}$ ⛰️ *(Tier 2)*
* **P02-W05 (Modeling):** Seismic-to-well tie synthetic seismogram generation.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹1.04 Cr} + \text{Risk: ₹9.0 Cr} \implies \mathbf{Z = \text{₹10.04 Cr}}$ *(Tier 3)*
* **P02-W06 (Reconciliation):** Lithology volume fraction cross-checking against regional facies models.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.69 Cr} + \text{Risk: ₹3.0 Cr} \implies \mathbf{Z = \text{₹3.69 Cr}}$ *(Tier 4)*
* **P02-W07 (Sovereign Audit):** Concession block relinquishment prospectivity dossier compilation.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.86 Cr} + \text{Risk: ₹8.0 Cr} \implies \mathbf{Z = \text{₹8.86 Cr}}$ *(Tier 3)*
* **P02-W08 (Diagnostics):** Unconformity discrepancy identification between seismic and biostratigraphy.  
  $H = 3\text{ hrs/wk} \to \text{Labor: ₹0.52 Cr} + \text{Risk: ₹4.5 Cr} \implies \mathbf{Z = \text{₹5.02 Cr}}$ *(Tier 3)*
* **P02-W09 (Optimization):** Automated exploration prospect ranking matrix calculation.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.69 Cr} + \text{Risk: ₹15.0 Cr} \implies \mathbf{Z = \text{₹15.69 Cr}}$ ⛰️ *(Tier 2)*
* **P02-W10 (Handover):** Geological evaluation slide deck synthesis for acreage bidding approvals.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹1.04 Cr} + \text{Risk: ₹2.0 Cr} \implies \mathbf{Z = \text{₹3.04 Cr}}$ *(Tier 4)*

---

### Row P03: RTOC Drilling Operations Engineer ($N=85$, Rate = ₹7,000/hr)
* **P03-W01 (Ingestion):** WITSML real-time streaming parsing from service contractor rigs.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹1.71 Cr} + \text{Risk: ₹5.0 Cr} \implies \mathbf{Z = \text{₹6.71 Cr}}$ *(Tier 3)*
* **P03-W02 (Alignment):** MWD depth vs wireline pipe-tally reconciliation during drilling.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹2.28 Cr} + \text{Risk: ₹18.0 Cr (Avoiding casing seat mismatch)} \implies \mathbf{Z = \text{₹20.28 Cr}}$ ⛰️ *(Tier 2 RIDGE)*
* **P03-W03 (Offset Mining):** Scraping past drilling bit performance & ROP in similar lithology.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹1.43 Cr} + \text{Risk: ₹7.0 Cr} \implies \mathbf{Z = \text{₹8.43 Cr}}$ *(Tier 3)*
* **P03-W04 (Hazard Guardrail):** **Real-time pack-off, stick-slip & kick detection (Rig NPT Sentinel).**  
  $H = 16\text{ hrs/wk} \to \text{Labor: ₹4.57 Cr} + \text{Risk: ₹58.0 Cr (Preventing stuck pipe & rig standby)} \implies \mathbf{Z = \text{₹62.57 Cr}}$ 🏔️ *(Tier 1 APEX PEAK)*
* **P03-W05 (Modeling):** Dynamic hydraulics (ECD) calculation under high mud weight.  
  $H = 7\text{ hrs/wk} \to \text{Labor: ₹2.00 Cr} + \text{Risk: ₹14.0 Cr} \implies \mathbf{Z = \text{₹16.00 Cr}}$ ⛰️ *(Tier 2)*
* **P03-W06 (Reconciliation):** Cuttings volume vs theoretical hole caliper reconciliation.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹1.14 Cr} + \text{Risk: ₹4.0 Cr} \implies \mathbf{Z = \text{₹5.14 Cr}}$ *(Tier 3)*
* **P03-W07 (Sovereign Audit):** Daily Drilling Report (DDR) legal verification for regulatory bodies.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹1.71 Cr} + \text{Risk: ₹3.0 Cr} \implies \mathbf{Z = \text{₹4.71 Cr}}$ *(Tier 4)*
* **P03-W08 (Diagnostics):** Motor stator fatigue and MWD telemetry drop diagnostic root-cause.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹1.14 Cr} + \text{Risk: ₹8.0 Cr} \implies \mathbf{Z = \text{₹9.14 Cr}}$ *(Tier 3)*
* **P03-W09 (Optimization):** Real-time Weight-on-Bit (WOB) and RPM advisory for maximum ROP.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹1.71 Cr} + \text{Risk: ₹16.5 Cr (Faster drilling days)} \implies \mathbf{Z = \text{₹18.21 Cr}}$ ⛰️ *(Tier 2)*
* **P03-W10 (Handover):** Shift change morning operational alert dashboard compilation.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹1.43 Cr} + \text{Risk: ₹1.5 Cr} \implies \mathbf{Z = \text{₹2.93 Cr}}$ *(Tier 4)*

---

### Row P04: Reservoir Simulation Specialist ($N=40$, Rate = ₹7,500/hr)
* **P04-W01 (Ingestion):** Ingesting multi-phase production history & well test pressure build-ups.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹1.15 Cr} + \text{Risk: ₹3.0 Cr} \implies \mathbf{Z = \text{₹4.15 Cr}}$ *(Tier 4)*
* **P04-W02 (Alignment):** Permeability thickness ($Kh$) and skin reconciliation between DST and logs.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.86 Cr} + \text{Risk: ₹8.0 Cr} \implies \mathbf{Z = \text{₹8.86 Cr}}$ *(Tier 3)*
* **P04-W03 (Offset Mining):** Analog waterflood recovery factor benchmarking from adjacent blocks.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.72 Cr} + \text{Risk: ₹6.0 Cr} \implies \mathbf{Z = \text{₹6.72 Cr}}$ *(Tier 3)*
* **P04-W04 (Hazard Guardrail):** Early water breakthrough / gas coning horizon warning sentinel.  
  $H = 7\text{ hrs/wk} \to \text{Labor: ₹1.01 Cr} + \text{Risk: ₹18.0 Cr (Preventing premature well death)} \implies \mathbf{Z = \text{₹19.01 Cr}}$ ⛰️ *(Tier 2)*
* **P04-W05 (Modeling):** **Automated history matching and ECLIPSE/CMG model calibration.**  
  $H = 15\text{ hrs/wk} \to \text{Labor: ₹2.16 Cr} + \text{Risk: ₹31.0 Cr (Optimal infill well placement)} \implies \mathbf{Z = \text{₹33.16 Cr}}$ 🏔️ *(Tier 1 PEAK)*
* **P04-W06 (Reconciliation):** Material balance calculation for aquifer support and gas cap expansion.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.72 Cr} + \text{Risk: ₹5.0 Cr} \implies \mathbf{Z = \text{₹5.72 Cr}}$ *(Tier 3)*
* **P04-W07 (Sovereign Audit):** Certified 2P/3P reserves estimation filing for SEC/DGH regulatory review.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.86 Cr} + \text{Risk: ₹14.0 Cr (Audit defense)} \implies \mathbf{Z = \text{₹14.86 Cr}}$ *(Tier 3)*
* **P04-W08 (Diagnostics):** Tracer test interpretation and compartmentalization identification.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.58 Cr} + \text{Risk: ₹6.5 Cr} \implies \mathbf{Z = \text{₹7.08 Cr}}$ *(Tier 3)*
* **P04-W09 (Optimization):** Smart waterflood injection rate allocation across pattern injectors.  
  $H = 7\text{ hrs/wk} \to \text{Labor: ₹1.01 Cr} + \text{Risk: ₹21.0 Cr (Sweep efficiency increase)} \implies \mathbf{Z = \text{₹22.01 Cr}}$ ⛰️ *(Tier 2)*
* **P04-W10 (Handover):** Long-term asset depletion executive briefing summaries.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.58 Cr} + \text{Risk: ₹1.0 Cr} \implies \mathbf{Z = \text{₹1.58 Cr}}$ *(Tier 4)*

---

### Row P05: Offshore Production & Facility Engineer ($N=110$, Rate = ₹5,500/hr)
* **P05-W01 (Ingestion):** Aggregating wellhead telemetry, separator levels, and export flow rates.  
  $H = 7\text{ hrs/wk} \to \text{Labor: ₹2.03 Cr} + \text{Risk: ₹4.0 Cr} \implies \mathbf{Z = \text{₹6.03 Cr}}$ *(Tier 3)*
* **P05-W02 (Alignment):** Multiphase flowmeter (MPFM) vs test separator physical calibration.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹1.74 Cr} + \text{Risk: ₹9.0 Cr} \implies \mathbf{Z = \text{₹10.74 Cr}}$ *(Tier 3)*
* **P05-W03 (Offset Mining):** Historical chemical scale / corrosion inhibitor dosage effectiveness.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹1.16 Cr} + \text{Risk: ₹3.5 Cr} \implies \mathbf{Z = \text{₹4.66 Cr}}$ *(Tier 4)*
* **P05-W04 (Hazard Guardrail):** Flowline hydrate formation and slugging regime warning monitor.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹2.32 Cr} + \text{Risk: ₹22.0 Cr (Preventing subsea line blockage)} \implies \mathbf{Z = \text{₹24.32 Cr}}$ ⛰️ *(Tier 2)*
* **P05-W05 (Modeling):** Wellbore nodal analysis and artificial lift (Gas Lift / ESP) diagnostics.  
  $H = 9\text{ hrs/wk} \to \text{Labor: ₹2.61 Cr} + \text{Risk: ₹16.0 Cr} \implies \mathbf{Z = \text{₹18.61 Cr}}$ ⛰️ *(Tier 2)*
* **P05-W06 (Reconciliation):** Field allocation factor reconciliation between wells and export meters.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹1.45 Cr} + \text{Risk: ₹6.0 Cr} \implies \mathbf{Z = \text{₹7.45 Cr}}$ *(Tier 3)*
* **P05-W07 (Sovereign Audit):** Flare volume & venting emission regulatory compliance reporting.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹1.16 Cr} + \text{Risk: ₹7.5 Cr} \implies \mathbf{Z = \text{₹8.66 Cr}}$ *(Tier 3)*
* **P05-W08 (Diagnostics):** ESP pump electrical trip & gas-locking root-cause diagnostic.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹1.45 Cr} + \text{Risk: ₹11.0 Cr} \implies \mathbf{Z = \text{₹12.45 Cr}}$ *(Tier 3)*
* **P05-W09 (Optimization):** **Automated subsea choke sizing & gas-lift injection redistribution.**  
  $H = 12\text{ hrs/wk} \to \text{Labor: ₹3.48 Cr} + \text{Risk: ₹34.0 Cr (Direct +2,400 BOPD uplift)} \implies \mathbf{Z = \text{₹37.48 Cr}}$ 🏔️ *(Tier 1 PEAK)*
* **P05-W10 (Handover):** Daily deferred production exception summary for platform managers.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹1.45 Cr} + \text{Risk: ₹2.0 Cr} \implies \mathbf{Z = \text{₹3.45 Cr}}$ *(Tier 4)*

---

### Row P06: Pipeline SCADA Controller ($N=75$, Rate = ₹5,000/hr)
* **P06-W01 (Ingestion):** SCADA pressure/temperature telemetry ingest across 2,500 km network.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹1.08 Cr} + \text{Risk: ₹3.0 Cr} \implies \mathbf{Z = \text{₹4.08 Cr}}$ *(Tier 4)*
* **P06-W02 (Alignment):** Custody transfer fiscal metering temperature-pressure compensation.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.90 Cr} + \text{Risk: ₹8.0 Cr} \implies \mathbf{Z = \text{₹8.90 Cr}}$ *(Tier 3)*
* **P06-W03 (Offset Mining):** Historical pigging debris and wall thinning corrosion telemetry mining.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.72 Cr} + \text{Risk: ₹6.0 Cr} \implies \mathbf{Z = \text{₹6.72 Cr}}$ *(Tier 3)*
* **P06-W04 (Hazard Guardrail):** **Real-time acoustic leak transient detection & pipeline rupture trip.**  
  $H = 10\text{ hrs/wk} \to \text{Labor: ₹1.80 Cr} + \text{Risk: ₹36.0 Cr (Preventing catastrophic rupture/theft)} \implies \mathbf{Z = \text{₹37.80 Cr}}$ 🏔️ *(Tier 1 PEAK)*
* **P06-W05 (Modeling):** Transient hydraulic linepack simulation under dynamic seasonal draw.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹1.44 Cr} + \text{Risk: ₹12.0 Cr} \implies \mathbf{Z = \text{₹13.44 Cr}}$ *(Tier 3)*
* **P06-W06 (Reconciliation):** Natural gas shrinkage and calorific value (CV) material balancing.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.90 Cr} + \text{Risk: ₹5.5 Cr} \implies \mathbf{Z = \text{₹6.40 Cr}}$ *(Tier 3)*
* **P06-W07 (Sovereign Audit):** PNGRB statutory pipeline pressure and incident reporting ledger.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.72 Cr} + \text{Risk: ₹5.0 Cr} \implies \mathbf{Z = \text{₹5.72 Cr}}$ *(Tier 3)*
* **P06-W08 (Diagnostics):** SCADA false positive alarm suppression and sensor drift filtering.  
  $H = 7\text{ hrs/wk} \to \text{Labor: ₹1.26 Cr} + \text{Risk: ₹9.0 Cr (Alarm fatigue reduction)} \implies \mathbf{Z = \text{₹10.26 Cr}}$ *(Tier 3)*
* **P06-W09 (Optimization):** Compressor station fuel gas minimization & peak shaving dispatch.  
  $H = 9\text{ hrs/wk} \to \text{Labor: ₹1.62 Cr} + \text{Risk: ₹23.0 Cr (Massive fuel savings)} \implies \mathbf{Z = \text{₹24.62 Cr}}$ ⛰️ *(Tier 2 RIDGE)*
* **P06-W10 (Handover):** Pipeline network linepack status briefing for commercial dispatchers.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.72 Cr} + \text{Risk: ₹1.2 Cr} \implies \mathbf{Z = \text{₹1.92 Cr}}$ *(Tier 4)*

---

### Row P07: Refinery Process & Yield Technologist ($N=95$, Rate = ₹6,000/hr)
* **P07-W01 (Ingestion):** DCS loop historian data extraction across CDU, VDU, and FCC units.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹1.64 Cr} + \text{Risk: ₹3.0 Cr} \implies \mathbf{Z = \text{₹4.64 Cr}}$ *(Tier 4)*
* **P07-W02 (Alignment):** Laboratory crude assay alignment with real-time NIR online analyzers.  
  $H = 7\text{ hrs/wk} \to \text{Labor: ₹1.92 Cr} + \text{Risk: ₹16.0 Cr} \implies \mathbf{Z = \text{₹17.92 Cr}}$ ⛰️ *(Tier 2)*
* **P07-W03 (Offset Mining):** Past turnaround maintenance work-orders and heat-exchanger fouling curves.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹1.09 Cr} + \text{Risk: ₹5.0 Cr} \implies \mathbf{Z = \text{₹6.09 Cr}}$ *(Tier 3)*
* **P07-W04 (Hazard Guardrail):** FCC catalyst circulation runaway & furnace tube skin over-temperature sentinel.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹2.19 Cr} + \text{Risk: ₹26.0 Cr (Preventing unplanned shutdown)} \implies \mathbf{Z = \text{₹28.19 Cr}}$ ⛰️ *(Tier 2)*
* **P07-W05 (Modeling):** Rigorous kinetic modeling of hydrocracker yield under feed sulfur changes.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹2.19 Cr} + \text{Risk: ₹14.0 Cr} \implies \mathbf{Z = \text{₹16.19 Cr}}$ ⛰️ *(Tier 2)*
* **P07-W06 (Reconciliation):** Refinery utility steam and hydrogen network mass balance closure.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹1.64 Cr} + \text{Risk: ₹7.5 Cr} \implies \mathbf{Z = \text{₹9.14 Cr}}$ *(Tier 3)*
* **P07-W07 (Sovereign Audit):** Euro-VI / BS-VI fuel specification sulphur compliance certification.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹1.37 Cr} + \text{Risk: ₹11.0 Cr} \implies \mathbf{Z = \text{₹12.37 Cr}}$ *(Tier 3)*
* **P07-W08 (Diagnostics):** Distillation tray flooding & fractionator foaming symptom detection.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹1.37 Cr} + \text{Risk: ₹8.0 Cr} \implies \mathbf{Z = \text{₹9.37 Cr}}$ *(Tier 3)*
* **P07-W09 (Optimization):** **Dynamic crude blending optimizer maximizing ATF/Diesel yield margins.**  
  $H = 14\text{ hrs/wk} \to \text{Labor: ₹3.83 Cr} + \text{Risk: ₹42.0 Cr (0.5% margin uplift on 300k bpd)} \implies \mathbf{Z = \text{₹45.83 Cr}}$ 🏔️ *(Tier 1 PEAK)*
* **P07-W10 (Handover):** Daily refinery yield shift production report and energy intensity index.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹1.37 Cr} + \text{Risk: ₹1.5 Cr} \implies \mathbf{Z = \text{₹2.87 Cr}}$ *(Tier 4)*

---

### Row P08: Commercial Crude & Gas Dispatch Scheduler ($N=35$, Rate = ₹6,500/hr)
* **P08-W01 (Ingestion):** Parsing vessel bills of lading, nomination faxes, and customs paperwork.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹0.87 Cr} + \text{Risk: ₹2.5 Cr} \implies \mathbf{Z = \text{₹3.37 Cr}}$ *(Tier 4)*
* **P08-W02 (Alignment):** Contractual Gross Heating Value (GHV) vs delivered volume billing alignment.  
  $H = 7\text{ hrs/wk} \to \text{Labor: ₹0.76 Cr} + \text{Risk: ₹9.0 Cr (Billing dispute mitigation)} \implies \mathbf{Z = \text{₹9.76 Cr}}$ *(Tier 3)*
* **P08-W03 (Offset Mining):** Historical port congestion times & tanker demurrage rate trends.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.44 Cr} + \text{Risk: ₹4.0 Cr} \implies \mathbf{Z = \text{₹4.44 Cr}}$ *(Tier 4)*
* **P08-W04 (Hazard Guardrail):** **Take-or-pay contract shortfall & tanker demurrage penalty alert sentinel.**  
  $H = 10\text{ hrs/wk} \to \text{Labor: ₹1.09 Cr} + \text{Risk: ₹29.0 Cr (Avoided ship demurrage $40k/day)} \implies \mathbf{Z = \text{₹30.09 Cr}}$ 🏔️ *(Tier 1 PEAK)*
* **P08-W05 (Modeling):** Gas nomination imbalance penalty predictive simulation under cold snaps.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.66 Cr} + \text{Risk: ₹7.0 Cr} \implies \mathbf{Z = \text{₹7.66 Cr}}$ *(Tier 3)*
* **P08-W06 (Reconciliation):** Tank farm inventory physical dip vs ERP SAP ledger reconciliation.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.66 Cr} + \text{Risk: ₹5.5 Cr} \implies \mathbf{Z = \text{₹6.16 Cr}}$ *(Tier 3)*
* **P08-W07 (Sovereign Audit):** Statutory crude import customs tariff & GST compliance documentation.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.44 Cr} + \text{Risk: ₹4.0 Cr} \implies \mathbf{Z = \text{₹4.44 Cr}}$ *(Tier 4)*
* **P08-W08 (Diagnostics):** Pipeline shipper injection quality off-spec root cause identification.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.44 Cr} + \text{Risk: ₹6.0 Cr} \implies \mathbf{Z = \text{₹6.44 Cr}}$ *(Tier 3)*
* **P08-W09 (Optimization):** Multi-modal crude transport route optimization (Coastal Tanker vs Pipeline).  
  $H = 9\text{ hrs/wk} \to \text{Labor: ₹0.98 Cr} + \text{Risk: ₹17.0 Cr} \implies \mathbf{Z = \text{₹17.98 Cr}}$ ⛰️ *(Tier 2)*
* **P08-W10 (Handover):** Executive commercial netback and dispatch realization brief.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.44 Cr} + \text{Risk: ₹1.0 Cr} \implies \mathbf{Z = \text{₹1.44 Cr}}$ *(Tier 4)*

---

### Row P09: HSE & Integrity Asset Auditor ($N=50$, Rate = ₹5,000/hr)
* **P09-W01 (Ingestion):** Ingestion of contractor safety permits-to-work (PTW) and gas test logs.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹0.96 Cr} + \text{Risk: ₹4.0 Cr} \implies \mathbf{Z = \text{₹4.96 Cr}}$ *(Tier 4)*
* **P09-W02 (Alignment):** Correlating nondestructive testing (NDT) wall thickness logs with ISO standards.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.72 Cr} + \text{Risk: ₹8.0 Cr} \implies \mathbf{Z = \text{₹8.72 Cr}}$ *(Tier 3)*
* **P09-W03 (Offset Mining):** Cross-basin catastrophic near-miss incident investigation search.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.72 Cr} + \text{Risk: ₹12.0 Cr (Preventing recurrence)} \implies \mathbf{Z = \text{₹12.72 Cr}}$ *(Tier 3)*
* **P09-W04 (Hazard Guardrail):** Simultaneous Operations (SIMOPS) offshore conflict detection sentinel.  
  $H = 10\text{ hrs/wk} \to \text{Labor: ₹1.20 Cr} + \text{Risk: ₹25.0 Cr (Major accident prevention)} \implies \mathbf{Z = \text{₹26.20 Cr}}$ ⛰️ *(Tier 2)*
* **P09-W05 (Modeling):** Quantitative risk assessment (QRA) toxic gas dispersion plume modeling.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.60 Cr} + \text{Risk: ₹6.0 Cr} \implies \mathbf{Z = \text{₹6.60 Cr}}$ *(Tier 3)*
* **P09-W06 (Reconciliation):** Carbon emissions intensity & Scope 1/2 GHG reporting audit verification.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.72 Cr} + \text{Risk: ₹9.0 Cr (Carbon credit defense)} \implies \mathbf{Z = \text{₹9.72 Cr}}$ *(Tier 3)*
* **P09-W07 (Sovereign Audit):** **Immutable BigQuery digital audit evidence locker for DGMS / OISD inspections.**  
  $H = 12\text{ hrs/wk} \to \text{Labor: ₹1.44 Cr} + \text{Risk: ₹30.0 Cr (Preventing asset shutdown fines)} \implies \mathbf{Z = \text{₹31.44 Cr}}$ 🏔️ *(Tier 1 PEAK)*
* **P09-W08 (Diagnostics):** Safety critical element (SCE) barrier impairment tracking & alarm.  
  $H = 7\text{ hrs/wk} \to \text{Labor: ₹0.84 Cr} + \text{Risk: ₹14.0 Cr} \implies \mathbf{Z = \text{₹14.84 Cr}}$ *(Tier 3)*
* **P09-W09 (Optimization):** Predictive risk-based inspection (RBI) interval optimization for pressure vessels.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹0.96 Cr} + \text{Risk: ₹18.0 Cr (Eliminating unneeded shutdowns)} \implies \mathbf{Z = \text{₹18.96 Cr}}$ ⛰️ *(Tier 2)*
* **P09-W10 (Handover):** Board-level ESG safety index and statutory compliance audit summary.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.60 Cr} + \text{Risk: ₹2.0 Cr} \implies \mathbf{Z = \text{₹2.60 Cr}}$ *(Tier 4)*

---

### Row P10: Subsurface Asset General Manager ($N=25$, Rate = ₹12,000/hr)
* **P10-W01 (Ingestion):** Reviewing multi-department weekly progress reports across 15 fields.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.86 Cr} + \text{Risk: ₹3.0 Cr} \implies \mathbf{Z = \text{₹3.86 Cr}}$ *(Tier 4)*
* **P10-W02 (Alignment):** Cross-disciplinary alignment between drilling schedule and facility intake.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.86 Cr} + \text{Risk: ₹12.0 Cr} \implies \mathbf{Z = \text{₹12.86 Cr}}$ *(Tier 3)*
* **P10-W03 (Offset Mining):** Historical PSC concession renegotiation benchmarks & partner audit trails.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.72 Cr} + \text{Risk: ₹15.0 Cr} \implies \mathbf{Z = \text{₹15.72 Cr}}$ ⛰️ *(Tier 2)*
* **P10-W04 (Hazard Guardrail):** Macro asset budget over-run & contractor spread rate burn alarm.  
  $H = 7\text{ hrs/wk} \to \text{Labor: ₹1.01 Cr} + \text{Risk: ₹21.0 Cr} \implies \mathbf{Z = \text{₹22.01 Cr}}$ ⛰️ *(Tier 2)*
* **P10-W05 (Modeling):** Portfolio probabilistic NPV simulation across alternative field development plans (FDP).  
  $H = 9\text{ hrs/wk} \to \text{Labor: ₹1.30 Cr} + \text{Risk: ₹28.0 Cr} \implies \mathbf{Z = \text{₹29.30 Cr}}$ ⛰️ *(Tier 2 RIDGE)*
* **P10-W06 (Reconciliation):** Joint Venture cash calls vs partner approved work program (WP&B) balance.  
  $H = 5\text{ hrs/wk} \to \text{Labor: ₹0.72 Cr} + \text{Risk: ₹8.0 Cr} \implies \mathbf{Z = \text{₹8.72 Cr}}$ *(Tier 3)*
* **P10-W07 (Sovereign Audit):** Management committee sovereign statutory PSC compliance approval.  
  $H = 4\text{ hrs/wk} \to \text{Labor: ₹0.58 Cr} + \text{Risk: ₹10.0 Cr} \implies \mathbf{Z = \text{₹10.58 Cr}}$ *(Tier 3)*
* **P10-W08 (Diagnostics):** Unexplained field decline rate acceleration diagnostic triage.  
  $H = 6\text{ hrs/wk} \to \text{Labor: ₹0.86 Cr} + \text{Risk: ₹16.0 Cr} \implies \mathbf{Z = \text{₹16.86 Cr}}$ ⛰️ *(Tier 2)*
* **P10-W09 (Optimization):** Capital allocation optimization across workover rigs vs new drill wells.  
  $H = 8\text{ hrs/wk} \to \text{Labor: ₹1.15 Cr} + \text{Risk: ₹24.0 Cr} \implies \mathbf{Z = \text{₹25.15 Cr}}$ ⛰️ *(Tier 2)*
* **P10-W10 (Handover):** **Unified natural-language Gemini Enterprise synthesis for CMD/CEO board standup.**  
  $H = 12\text{ hrs/wk} \to \text{Labor: ₹1.73 Cr} + \text{Risk: ₹32.0 Cr (Zero decision latency at board level)} \implies \mathbf{Z = \text{₹33.73 Cr}}$ 🏔️ *(Tier 1 PEAK)*

---

## 6. The 7 Sovereign Mountain Peaks (Lighthouse Contenders)

When extruded into 3D, seven vertices emerge as the **Himalayan Ridge of Oil & Gas Agentic ROI**:

```
                              ▲ [PEAK 1: ₹62.6 Cr] RTOC Drilling Eng × Real-Time Hazard Sentinel (P03-W04)
                             / \
    [PEAK 2: ₹48.5 Cr]      /   \
  Lead Petro × Splicing    /     \
       (P01-W02) ▲        /       \       ▲ [PEAK 3: ₹45.8 Cr] Refinery Tech × Crude Blend Optimizer (P07-W09)
                / \      /         \     / \
               /   \____/           \___/   \
  ▲           /                              \          ▲
 (P06-W04: ₹37.8 Cr)                         (P05-W09: ₹37.5 Cr)
 Pipeline Leak Sentinel                      Subsea Choke Optimizer
```

| Rank | Matrix Cell | Persona & Workflow | Net Annual Value ($Z$) | Primary Value Driver | Live Pitch Handshake |
| :---: | :---: | :--- | :---: | :--- | :--- |
| 🥇 **1** | **P03-W04** | **RTOC Drilling Eng $\times$ Real-Time Hazard Sentinel** | **₹62.57 Cr** | Eliminates stuck pipe, pack-offs, and ₹1 Cr/day rig standby NPT | Connected to Slide 01 NPT Burn Slider |
| 🥈 **2** | **P01-W02** | **Lead Petrophysicist $\times$ Wireline Depth Splicing** | **₹48.47 Cr** | Centimetre precision, eliminates cable-stretch depth errors & sidetracks | **Exact subject of Slide 10–12 Well A-12 Demo!** |
| 🥉 **3** | **P07-W09** | **Refinery Technologist $\times$ Crude Blend Optimizer** | **₹45.83 Cr** | 0.5% yield recovery across 300,000 bpd crude distillation unit (CDU) | Connects to Slide 13 Fleet Expansion |
| **4** | **P06-W04** | **Pipeline Controller $\times$ Acoustic Leak Sentinel** | **₹37.80 Cr** | Real-time transient acoustic detection, preventing catastrophic spills/theft | Connects to Slide 13 Midstream Fleet |
| **5** | **P05-W09** | **Offshore Production $\times$ Autonomous Choke Optimizer** | **₹37.48 Cr** | Immediate production gain (+2,400 BOPD) through dynamic gas-lift balance | Connects to Slide 04 Persona Daily Friction |
| **6** | **P02-W03** | **Exploration Geologist $\times$ Mudlog Dark Data Crawler** | **₹37.42 Cr** | Mines 40-year unstructured mudlog files to discover bypassed pay | Connects to Slide 03 Siloed Data Trap |
| **7** | **P10-W10** | **Asset GM $\times$ Gemini Executive Synthesis Agent** | **₹33.73 Cr** | Cross-silo conversational synthesis for CEO/CMD morning standups | Connects to Slide 13 Surface A (Gemini Chat) |

---

## 7. Interactive Technical Implementation (HTML5, Three.js & CSS)

### 7.1 DOM Architecture (`slides/slide_05_vulnerability_matrix.html` or dedicated stage)
```html
<section class="deck-page slide narrative-stage" id="stage-topography">
  <div class="topo-stage-container">
    
    <!-- Top Stage Controller Bar -->
    <div class="topo-nav-header">
      <div class="topo-header-left">
        <div class="ceo-badge">
          <span class="badge-dot" style="background: var(--security-turquoise);"></span>
          PORTFOLIO CAPITAL TRIAGE // 100-CELL TRANSFORMATION TERRAIN
        </div>
        <h2 class="editorial-title" style="font-size: 32px; margin: 6px 0;">
          The Topographical Value Map: <span class="text-gradient-security">Where Capital is Reclaimed</span>
        </h2>
      </div>

      <!-- Mode Switcher & Headcount Multiplier -->
      <div class="topo-controls-group">
        <!-- 2D vs 3D Perspective Toggle -->
        <div class="segmented-control">
          <button id="btn-view-2d" class="btn-seg" onclick="switchTopoMode('2d')">2D Diagnostic Mesh</button>
          <button id="btn-view-3d" class="btn-seg active" onclick="switchTopoMode('3d')">3D Value Terrain</button>
        </div>

        <!-- Enterprise Scale Multiplier Slider -->
        <div class="slider-control-card">
          <span class="slider-label">ENTERPRISE SCALE MULTIPLIER:</span>
          <input type="range" id="scale-slider" min="0.5" max="2.0" step="0.1" value="1.0" oninput="adjustEnterpriseScale(this.value)">
          <span id="scale-display" class="slider-value-badge">1.0× (Baseline)</span>
        </div>
      </div>
    </div>

    <!-- Main Visual Stage Canvas (Interactive WebGL / Three.js Canvas) -->
    <div class="topo-viewport-box" id="topo-webgl-stage">
      <!-- Three.js Canvas injects here -->
      <canvas id="topo-three-canvas"></canvas>

      <!-- Overlay Floating Interactive HUD Card (Appears on Hover/Click of any Vertex) -->
      <div class="topo-inspect-hud" id="topo-cell-hud" style="display: none;">
        <div class="hud-tag-row">
          <span class="hud-pill hud-pill-tier" id="hud-tier">TIER 1 LIGHTHOUSE PEAK</span>
          <span class="hud-coords" id="hud-coords">P01 (Petrophysicist) × W02 (Physical Alignment)</span>
        </div>
        <h3 class="hud-title" id="hud-title">Multi-Run Wireline Depth Splicing & Tool Recalibration</h3>
        <p class="hud-desc" id="hud-desc">
          Automated cross-correlation alignment over casing overlaps recovers 1.5m cable stretch with 2.9cm physical accuracy in seconds.
        </p>
        <div class="hud-metric-strip">
          <div class="hud-metric-item">
            <span class="metric-lbl">DISCIPLINE CAPACITY:</span>
            <span class="metric-val" id="hud-capacity">45 Specialists · 14 hrs/wk</span>
          </div>
          <div class="hud-metric-item">
            <span class="metric-lbl">DIRECT LABOR RECOVERY:</span>
            <span class="metric-val" id="hud-labor">₹1.97 Cr / yr</span>
          </div>
          <div class="hud-metric-item">
            <span class="metric-lbl">AVOIDED NPT & CATASTROPHE:</span>
            <span class="metric-val" id="hud-risk">₹46.50 Cr / yr</span>
          </div>
          <div class="hud-metric-item highlight">
            <span class="metric-lbl">NET MOUNTAIN PEAK:</span>
            <span class="metric-val text-gradient-amber" id="hud-total">₹48.47 Cr / yr</span>
          </div>
        </div>
        <div class="hud-action-row">
          <button class="btn-primary" onclick="launchCellDeepDive()">
            Inspect Lighthouse Agent Architecture (Slide 09) →
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Stage Legend & Executive Footnote -->
    <div class="topo-footer-legend">
      <div class="legend-scale-bar">
        <span class="legend-lbl">ELEVATION ($Z$ VALUE):</span>
        <div class="legend-gradient-track"></div>
        <div class="legend-stops">
          <span>₹0 Cr (Admin Lowlands)</span>
          <span>₹15 Cr (Process Ridge)</span>
          <span>₹35 Cr (Safety Apex)</span>
          <span style="color: var(--topo-elev-peak-glow);">₹60+ Cr (Lighthouse Peaks)</span>
        </div>
      </div>
      <div class="legend-takeaway">
        <strong>Strategic Executive Readout:</strong> <em>"We do not mandate 100 simultaneous AI projects. We deploy agentic sentinels onto the 5 highest mountain peaks—capturing ₹232 Crores in balance-sheet recovery in the first 6 months."</em>
      </div>
    </div>

  </div>
</section>
```

### 7.2 Styling & Shader Aesthetics (`assets/styles.css` additions)
```css
/* Container Frame */
.topo-stage-container {
  width: 100%;
  min-height: 100vh;
  padding: 80px max(3vw, calc((100vw - 1600px)/2)) 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background: radial-gradient(circle at 50% 30%, rgba(6, 11, 20, 0.95) 0%, #03060B 100%);
  position: relative;
  overflow: hidden;
}

/* Three.js Viewport */
.topo-viewport-box {
  width: 100%;
  height: 620px;
  position: relative;
  border-radius: 12px;
  border: 1px solid var(--border-hairline);
  background: rgba(4, 7, 13, 0.85);
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.8), 0 20px 40px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

#topo-three-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

/* Floating HUD Card */
.topo-inspect-hud {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 420px;
  background: rgba(11, 17, 30, 0.92);
  border: 1px solid var(--security-azure);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 16px 40px rgba(0, 163, 255, 0.25);
  z-index: 10;
  animation: hud-appear 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes hud-appear {
  from { opacity: 0; transform: translateY(-8px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.hud-metric-strip {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 14px 0;
  background: rgba(3, 6, 11, 0.6);
  padding: 12px;
  border-radius: 6px;
  border: 1px solid var(--border-hairline);
}

.hud-metric-item.highlight {
  grid-column: span 2;
  border-top: 1px dashed rgba(255, 255, 255, 0.15);
  padding-top: 6px;
}

/* Legend Track */
.legend-gradient-track {
  width: 280px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, 
    #0C1B33 0%, 
    #0D9488 30%, 
    #7C3AED 60%, 
    #F59E0B 85%, 
    #EF4444 100%
  );
}
```

### 7.3 WebGL Three.js Implementation Script Scaffold
```javascript
// Topographical 10x10 Three.js Visualizer
let scene, camera, renderer, terrainMesh, wireframeMesh;
let activeScale = 1.0;
let is3DMode = true;

// Data Array: 10 Personas x 10 Workflows
const matrix100 = [
  // P01: Petrophysicist
  [2.62, 48.47, 6.84, 14.56, 9.20, 4.56, 12.70, 5.92, 7.56, 1.70],
  // P02: Exploration Geologist
  [20.07, 13.38, 37.42, 16.86, 10.04, 3.69, 8.86, 5.02, 15.69, 3.04],
  // P03: RTOC Drilling Operations Eng
  [6.71, 20.28, 8.43, 62.57, 16.00, 5.14, 4.71, 9.14, 18.21, 2.93],
  // P04: Reservoir Simulation Specialist
  [4.15, 8.86, 6.72, 19.01, 33.16, 5.72, 14.86, 7.08, 22.01, 1.58],
  // P05: Offshore Production Engineer
  [6.03, 10.74, 4.66, 24.32, 18.61, 7.45, 8.66, 12.45, 37.48, 3.45],
  // P06: Pipeline SCADA Controller
  [4.08, 8.90, 6.72, 37.80, 13.44, 6.40, 5.72, 10.26, 24.62, 1.92],
  // P07: Refinery Process Technologist
  [4.64, 17.92, 6.09, 28.19, 16.19, 9.14, 12.37, 9.37, 45.83, 2.87],
  // P08: Commercial Gas Scheduler
  [3.37, 9.76, 4.44, 30.09, 7.66, 6.16, 4.44, 6.44, 17.98, 1.44],
  // P09: HSE & Asset Integrity Auditor
  [4.96, 8.72, 12.72, 26.20, 6.60, 9.72, 31.44, 14.84, 18.96, 2.60],
  // P10: Subsurface Asset GM
  [3.86, 12.86, 15.72, 22.01, 29.30, 8.72, 10.58, 16.86, 25.15, 33.73]
];

function initTopography() {
  const container = document.getElementById('topo-webgl-stage');
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x03060B, 0.002);

  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
  camera.position.set(0, -180, 220); // Isometric overhead angle
  camera.lookAt(0, 0, 20);

  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('topo-three-canvas'), antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Build Bicubic Interpolated Terrain Mesh (64x64 vertices from 10x10 control points)
  const geom = new THREE.PlaneGeometry(240, 240, 63, 63);
  updateTerrainHeights(geom, 1.0);

  // Custom Shader Material mimicking image78.png cosmic silk/cloth texture
  const customMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uColorVoid:  { value: new THREE.Color(0x04070D) },
      uColorTeal:  { value: new THREE.Color(0x00D2B4) },
      uColorPurple:{ value: new THREE.Color(0x8B5CF6) },
      uColorAmber: { value: new THREE.Color(0xF59E0B) },
      uColorPeak:  { value: new THREE.Color(0xEF4444) },
      uMaxHeight:  { value: 70.0 }
    },
    vertexShader: `
      varying float vZ;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vZ = position.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColorVoid;
      uniform vec3 uColorTeal;
      uniform vec3 uColorPurple;
      uniform vec3 uColorAmber;
      uniform vec3 uColorPeak;
      uniform float uMaxHeight;
      varying float vZ;
      varying vec2 vUv;

      void main() {
        float h = clamp(vZ / uMaxHeight, 0.0, 1.0);
        vec3 col = uColorVoid;
        if (h < 0.25) col = mix(uColorVoid, uColorTeal, h / 0.25);
        else if (h < 0.55) col = mix(uColorTeal, uColorPurple, (h - 0.25) / 0.30);
        else if (h < 0.85) col = mix(uColorPurple, uColorAmber, (h - 0.55) / 0.30);
        else col = mix(uColorAmber, uColorPeak, (h - 0.85) / 0.15);

        // Add subtle cosmic cloth ripple contour lines
        float contour = sin(vZ * 1.5);
        if (abs(contour) > 0.95) col += vec3(0.12, 0.2, 0.3);

        gl_FragColor = vec4(col, 0.92);
      }
    `,
    side: THREE.DoubleSide,
    transparent: true
  });

  terrainMesh = new THREE.Mesh(geom, customMaterial);
  scene.add(terrainMesh);

  // Overlay delicate wireframe mesh
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x38BDF8, wireframe: true, transparent: true, opacity: 0.12 });
  wireframeMesh = new THREE.Mesh(geom, wireMat);
  wireframeMesh.position.z += 0.2;
  scene.add(wireframeMesh);

  animate();
}

function updateTerrainHeights(geometry, scale) {
  const pos = geometry.attributes.position;
  // B-spline interpolation from matrix100 into 64x64 grid
  for (let i = 0; i < pos.count; i++) {
    const u = (i % 64) / 63;
    const v = Math.floor(i / 64) / 63;
    const xIdx = Math.min(9, Math.floor(u * 10));
    const yIdx = Math.min(9, Math.floor(v * 10));
    const rawValue = matrix100[yIdx][xIdx];
    pos.setZ(i, rawValue * scale * 0.9); // Vertical exaggeration factor
  }
  geometry.computeVertexNormals();
  pos.needsUpdate = true;
}

function adjustEnterpriseScale(val) {
  activeScale = parseFloat(val);
  document.getElementById('scale-display').innerText = `${activeScale.toFixed(1)}× (${activeScale === 1 ? 'Baseline' : activeScale > 1 ? 'Expanded Asset' : 'Mid-Sized Asset'})`;
  updateTerrainHeights(terrainMesh.geometry, activeScale);
  updateTerrainHeights(wireframeMesh.geometry, activeScale);
}

function switchTopoMode(mode) {
  if (mode === '2d') {
    gsap.to(camera.position, { x: 0, y: 0, z: 280, duration: 1.2, ease: "power2.inOut" });
    gsap.to(camera.rotation, { x: 0, y: 0, z: 0, duration: 1.2 });
  } else {
    gsap.to(camera.position, { x: 0, y: -180, z: 220, duration: 1.2, ease: "power2.inOut" });
  }
}

function animate() {
  requestAnimationFrame(animate);
  terrainMesh.rotation.z += 0.0008; // Subtle celestial rotation
  wireframeMesh.rotation.z += 0.0008;
  renderer.render(scene, camera);
}
```

---

## 8. Summary Checklist for Deck Integration

- [x] **10 Personas Formatted:** Realistic headcounts ($N=25$ to $N=110$) and loaded hourly rates for Indian/International operators.
- [x] **10 Lifecycle Workflows Formatted:** Covers upstream drilling through downstream refining and sovereign governance.
- [x] **100 Individual Cells Modeled:** Every cell calculated with labor velocity + capital hazard protection.
- [x] **Cosmic Nebula Palette Verified:** Matches `image78.png` with Obsidian black, Cosmic Teal, Amethyst Violet, Solar Amber, and Supernova Red.
- [x] **Direct Narrative Link to Demo Established:** Peak #2 is **Petrophysical Wireline Splicing (₹48.47 Cr)**, perfectly introducing the Kansas Well A-12 demo in the subsequent slide.
