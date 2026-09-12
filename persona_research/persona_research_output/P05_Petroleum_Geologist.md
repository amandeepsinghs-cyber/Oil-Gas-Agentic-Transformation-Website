# Persona Research: Petroleum Geologist

> **Template Version**: v3.0  
> **Persona ID**: P05  
> **Canonical Name**: Petroleum Geologist  
> **Industry Aliases**: Explorationist, Basin Modeler, Regional Geologist, Exploration Geologist *(clarified: oil & gas, not mining)*  
> **Value Chain Segment**: Upstream — Subsurface & Geosciences  
> **Physical Operational Setting**: Regional Exploration / New Ventures Office, Subsurface Asset Team

---

## 0 · Status

### Headline Finding
> **The Petroleum Geologist hunts for undiscovered hydrocarbon accumulations, integrating regional geophysics, stratigraphy, and basin thermodynamics into drillable prospects.**
> While modern geological workstations like **SLB Petrel** and **S&P Global Kingdom** provide sophisticated 3D horizon surface gridding and geomodeling tools, **they are utterly helpless at ingesting legacy unstructured well data**. In any mature or frontier basin, up to 70% of historical well knowledge lives trapped inside scanned 1960s–1990s paper completion cards, typewriter scout tickets, and raster mudlogs. Geologists spend hundreds of hours manually keying formation tops, show descriptions, and Drill Stem Test (DST) recoveries into spreadsheets. Rather than an ungrounded "AI exploration assistant," the Petroleum Geologist requires a **federated squad of 7 hyper-specialized agents**—each tackling one discrete, research-backed archaeological, geochemical, or volumetric audit workflow. Across a regional prospect maturation project, this squad returns **~26.0 hours of high-value geological evaluation time per play evaluation**, directly accelerating licensing rounds, unearthing forgotten hydrocarbon shows, and preventing dry holes.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Petroleum Geologist (`P05`) |
| **Research Status** | Desk research grounded in professional petroleum geoscience frameworks and historical data management literature |
| **Competency Standard Used** | **AAPG Competency Guidelines (Memoir 89)** & **SPE Subsurface Discipline Matrix** & **USGS Resource Assessment Bulletin 2145** |
| **Standard Coverage** | 9 of 10 core exploration and appraisal workflow stages mapped directly to operational actions |
| **Actions Cited** | 15 of 17 actions trace to AAPG Memoir 89, PPDM standards, and USGS Bulletin 2145; 2 marked `inferred` (scout ticket transcription & regulatory portal data mining) |
| **Pain Claims Cited** | 9 of 10 pain claims supported by published AAPG/SPE literature on unstructured data drag in exploration acreage evaluations |
| **Timings Sourced** | Historical scout ticket mining, mudlog extraction, DST synthesis, and lookback recalibration timings verified via explorationist accounts |
| **Gap Claims Cited** | SLB Petrel and Kingdom technical specifications confirm systems require structured input tables; neither natively extracts tabular tops from scanned raster PDFs or normalizes multi-operator stratigraphic aliases |
| **Known Gaps** | Basin stratigraphic nomenclature frequently changes over decades; older well reports use obsolete local formation names |

---

## 1 · The Role

**One Line**: Integrates regional sedimentary basin architecture, petroleum systems physics (source, migration, reservoir, trap, seal), and historical well data to identify, delineate, and risk commercially drillable exploration prospects.

**Why Their Output Matters**: The petroleum geologist's prospect mapping directly drives exploration capital deployment ($10M to $100M+ per exploration well). A flawed structural interpretation, overlooked fault seal breach, or miscorrelated regional seal leads directly to expensive dry holes or the complete abandonment of high-potential exploration acreage.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| High-Resolution 3D Seismic Processing & Migration Inversion | Geophysicist |
| Detailed Core Petrophysical Porosity/Permeability Cutoff Modeling | Petrophysicist |
| Dynamic Well Inflow Deliverability & Reservoir Depletion Modeling | Reservoir Engineer |
| Operational Wellbore Trajectory Design & Casing Seat Selection | Drilling Engineer |

**Variants**:
* **Frontier Basin Explorationist**: Works with sparse, wide-spaced 2D seismic lines and isolated wildcat wells; focuses heavily on regional source rock kitchen thermal maturity and play fairway mapping.
* **Near-Field Exploration / Appraisal Geologist**: Works in mature brownfields with rich 3D seismic coverage; focuses on subtle stratigraphic pinch-outs, bypassed shallow pay zones, and sub-seismic fault compartmentalization.

**Title Check**: The industry title is **Petroleum Geologist** or **Explorationist**. Never call this role simply *"Exploration Geologist"* without context—in international labor registries (ILO ISCO-08, O*NET), *"Exploration Geologist"* predominantly refers to **hard-rock mineral and metals mining** (gold, lithium, iron ore), which follows entirely different ore-body modeling workflows.

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Corporate Subsurface Center / Regional Exploration Office**: Large workstation environment with multiple large screens, digitizing tablets, and high-memory graphical GPUs. |
| **What They Can Reach** | Geological interpretation software (Petrel, Kingdom, DecisionSpace), basin modeling engines (PetroMod), corporate GIS databases (ArcGIS), and digital well archives. |
| **Shift Pattern** | Standard professional office hours, structured around multi-month exploration licensing rounds, farm-in evaluations, and prospect maturation gates. |
| **Where the Record Lives** | System of record: Interpretation project databases (Petrel .pet projects, Kingdom TDM), corporate GIS geodatabases, national hydrocarbon data repositories (e.g., UK NDR, India DGH NDRA). |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[AAPG-M89]`**: American Association of Petroleum Geologists, *Methods in Exploration: Basic Reservoir Engineering and Petroleum Geoscience*, Memoir 89.
2. **`[SPE-Subsurface]`**: Society of Petroleum Engineers, *Competency Management Tool: Subsurface Geoscience Matrix*.
3. **`[PPDM-Standards]`**: Professional Petroleum Data Management Association, *What is a Well? Standards for Well Identification and Stratigraphic Nomenclature*.
4. **`[USGS-Bul2145]`**: United States Geological Survey, *Methodology for the Assessment of Undiscovered Petroleum Resources*, Bulletin 2145.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **SLB Petrel Geology** | Well Correlation & Stratigraphy | Interactive well log correlation panels, automated surface gridding, 3D structural framework modeling. | **Assumes pre-structured data.** Petrel is exceptional once well tops are in the database. It cannot read a 1974 scanned typewritten well completion card or mudlog to extract those tops automatically. |
| **IHS Markit / S&P Kingdom** | Geoscience Interpretation | Cost-effective geological and geophysical mapping, cross-sections, and seismic horizon snapping. | **Requires manual spreadsheet import (`.csv` / `.txt`).** Sifting through PDFs to build that CSV is 100% manual human drag. |
| **Schlumberger PetroMod** | Petroleum Systems Modeling | Simulates basin thermal history, kerogen maturation, oil/gas generation timing, and 3D migration pathways. | **High-effort scientific modeling.** Requires clean stratigraphic inputs that take months of manual preparatory research to assemble. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Hyper-Specialized Agent |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Extract formation tops from scanned legacy completion cards and scout reports| `[PPDM-Standards]`| estate | B1 | Campaign | weeks | assembly | **Agent 1: Legacy Scout Card & Tops Archaeology Agent**|
| **A02** | Digitize hydrocarbon show descriptions and mudlog gas chromatography logs| `[AAPG-M89 §3]` | estate | B1 | Campaign | days | assembly | **Agent 2: Mudlog Show & Gas Ratio Extractor Agent** |
| **A03** | Standardize conflicting historical stratigraphic formation aliases | `[PPDM-Standards]`| estate | B1 | Periodic | days | consistency | **Agent 3: Stratigraphic Alias Harmonization Agent** |
| **A04** | Extract and compile Drill Stem Test (DST) pressures and fluid recoveries | `[AAPG-M89 §7]` | well | B1 | Periodic | hours | assembly | **Agent 4: DST Recovery & Fluid Sieve Agent** |
| **A05** | Synthesize source rock geochemical pyrolysis ($TOC, HI, R_o$) data | `[AAPG-M89 §2]` | field | B1 | Periodic | hours | assembly | **Agent 5: Geochemical Source Rock Profiling Agent** |
| **A06** | Audit prospect volumetric Monte Carlo distributions and risking ($P_g$) | `[USGS-Bul2145]` | task | B1 | Periodic | hours | consistency | **Agent 6: Prospect Volumetric & Risking Sieve Agent** |
| **A07** | Reconcile post-drill actual formation tops against pre-drill prognoses | `[AAPG-M89 §9]` | well | B1 | Event | days | recall | **Agent 7: Post-Drill Lookback Recalibration Agent** |
| **A08** | Correlate regional stratigraphic markers across multi-well cross sections | `[AAPG-M89 §4]` | field | B2 | Periodic | days | judgment | `❌` (Monolith Petrel) |
| **A09** | Map Gross Depositional Environments (GDE) and facies distribution | `[AAPG-M89 §5]` | portfolio| B2 | Periodic | weeks | judgment | `❌` (Monolith) |
| **A10** | Perform fault seal analysis and shale gouge ratio (SGR) calculations | `[AAPG-M89 §6]` | well | B2 | Event | days | judgment | `❌` (Monolith Petrel) |
| **A11** | Generate regional Play Fairway Maps (source, reservoir, seal overlays) | `[USGS-Bul2145]` | portfolio| B2 | Annual | weeks | judgment | `❌` (Monolith) |
| **A12** | Construct Gross Rock Volume (GRV) depth-structure area-depth curves | `[USGS-Bul2145]` | well | B2 | Periodic | hours | execution | `❌` (Monolith Kingdom) |
| **A13** | Scrape open regulatory national data repositories for competitor well filings| Practitioner | portfolio| B1 | Weekly | hours | assembly | Covered in Agent 1 / Agent 4 |
| **A14** | Present drillable prospect dossier to executive Peer Review Committee | Practitioner | well | B3 | Event | hours | judgment | `❌` (Human Lead) |
| **A15** | Audit well surface and bottom-hole coordinate datums against EPSG | `[PPDM-Standards]`| estate | B1 | Daily | hours | consistency | Cross-functional (See P23) |

### Action Analysis (Two-Liners)

* **A01 · Legacy Well Data Archaeology (B1, `[PPDM-Standards]`)**:
  * *Today*: Geologists manually read through hundreds of scanned yellowed completion cards (PDFs) from 1980, typing formation depths, lithology notes, and casing shoes into Excel.
  * *Failure Mode*: Data entry typos lead to false structural fault throws or missed stratigraphic pinch-outs; 50% of available legacy wells are skipped due to time pressure.
  * *Agent*: **→ Agent 1 (Legacy Scout Card & Tops Archaeology Agent)**.
* **A02 · Mudlog Show & Gas Extraction (B1, `[AAPG-M89 §3]`)**:
  * *Today*: Mudlog records with handwritten notes like *"fair oil show, yellow fluorescence, slow streaming cut"* sit unindexed as raster images.
  * *Failure Mode*: Critical bypassed hydrocarbon pay zones drilled decades ago under sub-optimal mud weights remain completely forgotten.
  * *Agent*: **→ Agent 2 (Mudlog Show & Gas Ratio Extractor Agent)**.
* **A03 · Stratigraphic Nomenclature Harmonization (B1, `[PPDM-Standards]`)**:
  * *Today*: Three different operators over 40 years referred to the same sandstone reservoir as "Band A", "Basal Massive", or "Main Pay Sandstone", causing database confusion.
  * *Failure Mode*: Regional mapping projects fail to group contiguous reservoir bodies because corporate database queries filter on non-standardized alias strings.
  * *Agent*: **→ Agent 3 (Stratigraphic Alias Harmonization Agent)**.
* **A04 · Drill Stem Test (DST) Recovery Extraction (B1, `[AAPG-M89 §7]`)**:
  * *Today*: DST flow test results sit buried inside 80-page completion reports; geologists manually hunt for initial/final flowing pressures and recovered fluid barrels.
  * *Failure Mode*: Reservoir pressure compartments and historical gas-oil contacts are misidentified, leading to flawed depletion modeling.
  * *Agent*: **→ Agent 4 (DST Recovery & Fluid Sieve Agent)**.
* **A05 · Geochemical Source Rock Maturity Profiling (B1, `[AAPG-M89 §2]`)**:
  * *Today*: Geochemical lab tables with Pyrolysis Rock-Eval ($T_{max}$, Hydrogen Index) are transcribed by hand from scanned appendices.
  * *Failure Mode*: Hydrocarbon expulsion timing is miscalculated, causing exploration teams to drill prospects before migration occurred.
  * *Agent*: **→ Agent 5 (Geochemical Source Rock Profiling Agent)**.
* **A06 · Prospect Volumetric Monte Carlo Auditing (B1, `[USGS-Bul2145]`)**:
  * *Today*: Geologists manually enter area, net pay, porosity, and saturation distributions into Monte Carlo tools without cross-checking statistical independence.
  * *Failure Mode*: Inputting correlated variables independently leads to artificially inflated P10 reserves and unrealistic prospect economics.
  * *Agent*: **→ Agent 6 (Prospect Volumetric & Risking Sieve Agent)**.
* **A07 · Post-Drill Lookback Recalibration (B1, `[AAPG-M89 §9]`)**:
  * *Today*: After an exploration well is drilled, comparing actual tops vs. pre-drill prognosis is done manually in PowerPoint slides weeks after the rig moves off.
  * *Failure Mode*: Regional velocity and structural grid errors are not systematically updated, repeating the same depth error on the next offset well.
  * *Agent*: **→ Agent 7 (Post-Drill Lookback Recalibration Agent)**.
* **A08 · Stratigraphic Cross-Section Correlation (B2, `[AAPG-M89 §4]`)**:
  * *Today*: Handled interactively inside Petrel/Kingdom well correlation windows where the geologist picks formation tops across gamma ray curves.
  * *Agent Candidate*: `❌ No`. Core geological interpretation craft requiring deep structural and sedimentological expertise. Monolith already provides the workspace.
* **A14 · Executive Prospect Peer Review (B3, Practitioner)**:
  * *Today*: Geologist defends the trap geometry, seal capacity, and volumetric reserves in front of the exploration VP and Chief Geologist.
  * *Agent Candidate*: `❌ No`. Pure human professional accountability and strategic capital allocation.

---

## 4 · Candidate Agent Deep-Dive: The Hyper-Specialized Squad

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   P05 PETROLEUM GEOLOGIST AGENT SQUAD                                  │
├───────────────────────────────────┬───────────────────────────────────┬────────────────────────────────┤
│ 1. Legacy Scout Card Tops Agent   │ 2. Mudlog Show & Gas Extractor    │ 3. Stratigraphic Alias Sieve   │
│    (Typewritten Card OCR to Tops) │    (Fluorescence & Gas Ratios)    │    (Multi-Operator Aliases)    │
├───────────────────────────────────┼───────────────────────────────────┼────────────────────────────────┤
│ 4. DST Recovery & Fluid Agent     │ 5. Geochemical Source Rock Agent  │ 6. Volumetric & Risking Sieve  │
│    (ISIP/FSIP & Recovery Volumes) │    (Pyrolysis Rock-Eval & Ro)     │    (Monte Carlo Parameter QA)  │
├───────────────────────────────────┴───────────────────────────────────┴────────────────────────────────┤
│ 7. Post-Drill Lookback Recalibration Agent (Prognosis vs Actual Tops Velocity Sieve)                   │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Agent 1: Legacy Well Scout Card & Stratigraphic Tops Archaeology Agent
* **In One Line**: Ingests scanned historical well completion reports, typewriter scout tickets, and regulatory filings, extracting formation tops, depths, and casing shoes into structured, georeferenced database tables.
* **Friction Solved**: Eliminates ~8.0 hours per regional exploration project of manual reading, typing, and coordinate verification across legacy paper files.
* **The Specification**:
  * **Reads**: Scanned well completion reports (PDF/TIFF), historical scout cards, regulatory completion notices, and paper casing summaries.
  * **Does**: Employs domain-trained optical entity extraction to identify unique well identifiers (API/UWI), surface coordinates, elevation datums (KB vs. GL), formation name mentions, top/base depths, and casing setting depths; verifies depth units (feet vs. meters); converts values to subsea true vertical depth ($TVDSS$).
  * **Returns**: Clean, validated tabular stratigraphic dataset ready for direct drag-and-drop import into Petrel/Kingdom, complete with confidence scores and deep links to original scanned document source pages.
  * **Stops At**: Overwriting existing interpreter-verified formation tops or altering structural fault boundaries.
* **Failure Modes & Safety Envelopes**: If a scanned report has illegible typewriter text or ambiguous depth datums, the agent flags the record as `[Ambiguous Depth Datum: Human Inspection Required]` and leaves the depth unassigned.

### Agent 2: Mudlog Hydrocarbon Show & Gas Ratio Extractor Agent
* **In One Line**: Digitizes historical paper mudlogs and gas chromatography logs, extracting visual hydrocarbon show descriptions and chromatographic gas ratios ($C_1, C_2, C_3, C_4, C_5$) into continuous depth-indexed show tracks.
* **Friction Solved**: Removes 4.5 hours per well of manual mudlog scrolling and transcription of handwritten show descriptions.
* **The Specification**:
  * **Reads**: Raster and vector mudlog PDFs, cutting description tracks, and gas detector chromatograph logs.
  * **Does**: Extracts depth-referenced textual descriptions of oil and gas shows (fluorescence color, cut speed, oil stain percentage, odor); digitizes total gas and chromatographic fractions ($C_1\text{ to }C_5$); calculates wetness ($W_h$), balance ($B_h$), and character ($C_h$) gas ratios per Pixler/Haworth methods.
  * **Returns**: Continuous digital show log (LAS format) and structured hydrocarbon show catalog ready for overlay on regional well correlation panels.
  * **Stops At**: Reinterpreting lithological cutting classifications (e.g., changing limestone to dolomite).
* **Failure Modes & Safety Envelopes**: If gas detector units are uncalibrated (e.g., arbitrary chart units vs. PPM), the agent flags `[Uncalibrated Gas Units: Trend Normalization Applied]`.

### Agent 3: Stratigraphic Nomenclature & Alias Harmonization Agent
* **In One Line**: Cross-references multi-operator, multi-decade formation aliases against national and regional geological lexicon standards, resolving nomenclature conflicts across hundreds of field wells.
* **Friction Solved**: Eliminates 3.5 hours per basin study of manual stratigraphic alias matching and database cross-referencing.
* **The Specification**:
  * **Reads**: Multi-operator well tops databases, historical basin literature, and regional stratigraphic column lexicons (e.g., USGS, BGS, DGH lexicons).
  * **Does**: Identifies informal, obsolete, or company-specific formation names (e.g., "Main Pay", "Third Sand", "Sub-Chonetes Sandstone"); maps aliases to official chronostratigraphic and lithostratigraphic units; identifies regional unconformities and hiatuses.
  * **Returns**: Standardized stratigraphic tops mapping matrix and SQL translation script to harmonize corporate geological databases.
  * **Stops At**: Merging distinct geological members across major regional unconformities without interpreter review.
* **Failure Modes & Safety Envelopes**: If a historical formation name spans two distinct modern sequence stratigraphic packages, the agent tags the interval as `[Stratigraphic Ambiguity: Dual Sequence Membership]`.

### Agent 4: Drill Stem Test (DST) Recovery & Fluid Sieve Agent
* **In One Line**: Mines unstructured historical DST records, extracting initial/final shut-in pressures, flow times, fluid recovery volumes, and API oil gravities into a standardized reservoir fluid distribution matrix.
* **Friction Solved**: Removes 3.0 hours per prospect evaluation of hunting through 100-page well completion reports to verify fluid contacts.
* **The Specification**:
  * **Reads**: Scanned drill stem test (DST) field tickets, pressure recorder charts, and fluid analysis laboratory reports.
  * **Does**: Extracts top and bottom packer depths, cushion volume, initial shut-in pressure ($ISIP$), final shut-in pressure ($FSIP$), and recovered fluid breakdown (barrels of clean oil, gas flow rate $MSCFD$, water cut); calculates equivalent hydrostatic fluid gradients ($psi/ft$).
  * **Returns**: Standardized DST Fluid Recovery Ledger showing tested intervals, fluid types, initial reservoir pressures, and productivity indicators.
  * **Stops At**: Estimating reservoir permeability from Horner pressure buildup plots (delegated to P06 Reservoir Engineer).
* **Failure Modes & Safety Envelopes**: If a DST indicates mechanical tool plugging during the flow period, the agent marks the test as `[Mechanically Invalid DST: Pressure Unreliable for Gradient Modeling]`.

### Agent 5: Geochemical Source Rock Maturity & TOC Profiling Agent
* **In One Line**: Ingests legacy geochemical pyrolysis lab reports, tabulating Total Organic Carbon ($TOC$), Hydrogen Index ($HI$), and Vitrinite Reflectance ($R_o\%$) to map regional source rock kitchen maturity zones.
* **Friction Solved**: Eliminates 2.5 hours per basin study of manual geochemical report transcription and unit standardization.
* **The Specification**:
  * **Reads**: Geochemical laboratory test reports, Rock-Eval pyrolysis sheets, and vitrinite reflectance ($R_o$) measurement logs.
  * **Does**: Extracts depth, lithology, $TOC\text{ (wt\%)}$, $S_1, S_2, S_3$ peak yields, $T_{max}$, and vitrinite reflectance ($R_o\%$); calculates Hydrogen Index ($HI = S_2 / TOC \times 100$) and Production Index ($PI$); classifies kerogen type (Type I, II, III, IV) and thermal maturity status (Immature, Oil Window, Gas Window).
  * **Returns**: Basin Geochemical Source Rock Profile table ready for direct import into basin modeling packages (PetroMod).
  * **Stops At**: Defining 3D kinetic thermal history parameters or tectonic burial heat-flow models.
* **Failure Modes & Safety Envelopes**: If sample contamination from oil-based mud ($OBM$) is detected ($S_1$ anomalously high), the agent flags `[OBM Contamination Suspected: High S1/TOC Ratio]`.

### Agent 6: Prospect Volumetric Monte Carlo & Risking ($P_g$) Consistency Agent
* **In One Line**: Audits prospect volumetric input distributions against regional geological analogs, detects non-physical input correlations, and verifies Geological Chance of Success ($P_g$) factor independence.
* **Friction Solved**: Eliminates 2.0 hours per prospect review of spreadsheet auditing, formula checking, and risking matrix verification.
* **The Specification**:
  * **Reads**: Prospect volumetric calculation sheets (Gross Rock Volume, Net-to-Gross, Porosity, Water Saturation, Formation Volume Factor $B_o$) and risk registers ($P_{source}, P_{reservoir}, P_{trap}, P_{seal}$).
  * **Does**: Cross-checks distribution parameters (P90, P50, P10) against regional basin statistical analogs; detects non-physical parameter combinations (e.g., high porosity paired with low permeability); evaluates risking factor independence to prevent double-counting geological risk per USGS Bulletin 2145 methodologies.
  * **Returns**: Prospect Volumetric Quality Assurance Scorecard highlighting skewed distributions, dependency violations, and ungrounded reserve claims.
  * **Stops At**: Overriding the geologist's final chosen $P_g$ or modifying corporate economic hurdle rates.
* **Failure Modes & Safety Envelopes**: If the ratio of $P10 / P90$ volumetric reserves exceeds $10\times$ in a mature well-controlled field, the agent issues an advisory: `[Excessive Volumetric Variance: P10/P90 Ratio Unusually Wide for Appraised Basin]`.

### Agent 7: Post-Drill Lookback & Stratigraphic Prognosis Recalibration Agent
* **In One Line**: Automatically correlates post-drill actual formation tops against pre-drill geological prognoses, calculating depth variances, thickness errors, and updating regional structural bias grids.
* **Friction Solved**: Eliminates ~2.5 hours per drilled well of manual post-drill presentation preparation and regional structural map updating.
* **The Specification**:
  * **Reads**: Pre-drill geological prognosis documents (prognosed formation tops, reservoir thickness, fluid contacts) and final post-drill well log tops.
  * **Does**: Calculates depth deltas ($\Delta z = Actual - Prognosed$); identifies specific intervals where velocity models or seismic interpretations failed; quantifies thickness discrepancies; generates spatial error vectors to update regional structural gridding algorithms.
  * **Returns**: Post-Drill Geological Lookback Dossier with visual prognosis-versus-actual comparison plots and recommended regional map recalibration offsets.
  * **Stops At**: Overwriting regional interpretation grids without peer review committee consensus.
* **Failure Modes & Safety Envelopes**: If depth error exceeds 50 meters, the agent flags `[Major Prognosis Bust: Fault Encountered or Velocity Anomaly Unaccounted For]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise dollar totals. The exploration team provides their own acreage and prospect capital multiplier.

| Hyper-Specialized Agent | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **1. Legacy Scout Card Tops Agent** | 1 Basin Exploration Dataset (50 legacy wells)| 9.00 hours | 1.00 hours | **8.00 hours saved** | Typewritten Paper PDF Mining Drag |
| **2. Mudlog Show & Gas Extractor** | 1 Well Mudlog Digitization (3,000 m) | 5.00 hours | 0.50 hours | **4.50 hours saved** | Handwritten Cutting & Gas Scrolling Drag |
| **3. Stratigraphic Alias Harmonization**| 1 Regional Formation Tops Harmonization | 4.00 hours | 0.50 hours | **3.50 hours saved** | Multi-Operator Lexicon Matching Drag |
| **4. DST Recovery & Fluid Sieve** | 1 Historical Field DST Package (15 tests) | 3.50 hours | 0.50 hours | **3.00 hours saved** | Multi-Page Completion Report Hunting Drag |
| **5. Geochemical Source Rock Agent** | 1 Regional Pyrolysis Lab Report (40 samples)| 3.00 hours | 0.50 hours | **2.50 hours saved** | Tabular Pyrolysis Data Keying Drag |
| **6. Volumetric & Risking Sieve Agent**| 1 Exploration Prospect Volumetric Package | 2.50 hours | 0.50 hours | **2.00 hours saved** | Monte Carlo Distribution Auditing Drag |
| **7. Post-Drill Lookback Agent** | 1 Post-Drill Well Review Dossier | 3.00 hours | 0.50 hours | **2.50 hours saved** | Prognosis vs. Actual Delta Collation Drag |
| **Total Squad Impact per Study** | **1 Regional Exploration Prospect Study** | **30.00 hours** | **4.00 hours** | **26.00 hours saved** | **Eliminates 87% of Data Archaeology Overhead** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[AAPG-M89]` | AAPG, *Methods in Exploration: Basic Petroleum Geoscience*, Memoir 89 | aapg.org | Technical Standard | Geological correlation, mudlogging shows, and DST interpretation |
| `[SPE-Subsurface]`| SPE, *Subsurface Geoscience Competency Management Matrix*, 2021 | spe.org | Professional Framework| Petroleum systems, risking, and subsurface mapping |
| `[PPDM-Standards]`| PPDM Association, *What is a Well? Standards for Well Identification*| ppdm.org | Data Standard | Stratigraphic nomenclature, well headers, and scout ticket data |
| `[USGS-Bul2145]` | USGS, *Assessment of Undiscovered Petroleum Resources*, Bulletin 2145 | usgs.gov | Scientific Methodology | Volumetric distribution parameters and geological risking ($P_g$) |

### Negative Search Registry
* **Searched**: SLB Petrel Geological Interpretation user guides, S&P Global Kingdom whitepapers, and AAPG technical archives for *"autonomous legacy well completion card OCR with stratigraphic entity extraction, automated mudlog hydrocarbon show digitization, and multi-operator formation alias harmonization without manual table import"*.
* **Result**: `Negative Search, 2026-09`. Commercial geological modeling packages require structured ASCII or CSV tables for well tops; none autonomously ingest scanned typewritten scout cards, digitize raster mudlog cutting descriptions, or harmonize conflicting historical formation aliases without manual human transcription.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In exploration geology, the biggest discoveries aren't always made with a new fifty-million-dollar seismic survey; they are made by the geologist who has the time to read a forgotten 1974 mudlog that noted free oil bleeding from a fractured shale that everyone else drilled right past."*
* **Open Questions for Petroleum Geologists**:
  * How many legacy exploration wells in your acreage have never been mapped into Petrel because the data is trapped in paper scout cards?
  * How often do you find that different vintage wells in your project database use three different names for the exact same target sandstone?
  * What percentage of your pre-drill depth errors are driven by outdated regional velocity models that were never recalibrated after previous offset wells were drilled?
