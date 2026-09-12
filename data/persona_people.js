/* =====================================================================
   PERSONA PEOPLE  --  name + mandate for the 20 workforce personas
   =====================================================================

   SHAPE COPIED FROM THE MINING DECK
   apps/frontend/server/static/data-static.js renders each persona as:

       code:    "P5 • PIT DISPATCH & HAULAGE"
       title:   "Dave Miller, Mine Dispatch & Fleet Superintendent"
       mandate: "Mandate: Real-Time Shovel-Truck Fleet Queue Optimization
                 & Payload Compliance"

   This file supplies the same two pieces for our 20 roles. The code
   equivalent ("A • SUBSURFACE GEOSCIENCES") is already assembled on the
   page from the row letter and the sector, so it is not repeated here.

   WHY THIS FILE EXISTS SEPARATELY
   Names are the only invented identity content in the deck. They are
   deliberately NOT added to data/enterprise_matrix_300.js, because that
   file is shared with the Slide 08 chessboard and is otherwise a record
   of roles, touchpoints and figures -- not of people. Keeping the
   invented layer in its own file means it can be audited, edited or
   deleted in one place without touching the matrix.

   THESE ARE COMPOSITE PERSONAS, NOT EMPLOYEES.
   No name here refers to a real person. The portraits are purpose-
   generated. If anyone in the room asks, that is the answer.

   NAMING RULE
   Each name is matched to the apparent ethnicity of the corresponding
   portrait in personas/avatars/pNN_persona.jpg. The cast is deliberately
   international. The reading of each portrait is recorded beside it so a
   future editor can check the pairing rather than guess at it.

   MANDATE RULE
   Each mandate is a scope statement, not a claim: what the role is on the
   hook for. They are derived from the role and from the accountability
   paragraph in data/persona_narratives.js. They carry no figures, because
   an unsourced number in a one-line mandate is indefensible and the
   quantified record already sits in the touchpoint table below it.

   Keyed by persona id (p01..p20), the same key the matrix uses.
   ===================================================================== */

window.PERSONA_PEOPLE = {
  /* A */ p01: { // Latina / Mediterranean woman, 40s
    name: "Camila Duarte",
    mandate: "Prospect Depth Confidence, Pre-Stack Inversion Integrity & Top-Hole Hazard Screening"
  },
  /* B */ p02: { // South Asian man, 40s, glasses
    name: "Rohan Deshpande",
    mandate: "Trap Definition, Fault Seal Risk & Basin Charge Modelling"
  },
  /* C */ p03: { // East Asian woman, 40s
    name: "Mei Chen",
    mandate: "Static Model Fidelity, Well Placement & Reservoir Connectivity Assurance"
  },
  /* D */ p04: { // Black man, 30s-40s
    name: "Marcus Adeyemi",
    mandate: "Non-Productive Time Elimination, Well Delivery Cost & Rig Programme Compliance"
  },
  /* E */ p05: { // South Asian woman, 40s
    name: "Priya Nair",
    mandate: "Mud Weight Window Control, Hole Stability & Fluid Loss Prevention"
  },
  /* F */ p06: { // White / N. European man, 40s
    name: "Daniel Whitfield",
    mandate: "Wellbore Trajectory Accuracy, Anti-Collision Clearance & Survey Integrity"
  },
  /* G */ p07: { // South Asian woman, 40s
    name: "Ananya Iyer",
    mandate: "Barrier Envelope Verification, Casing Load Case Design & Annulus Pressure Assurance"
  },
  /* H */ p08: { // East Asian man, 40s-50s, glasses
    name: "Kenji Watanabe",
    mandate: "History Match Credibility, Recovery Factor Forecasting & Depletion Strategy"
  },
  /* I */ p09: { // Black woman, 30s-40s
    name: "Amara Nwosu",
    mandate: "Lift Efficiency, Production Deferment Reduction & Well Uptime Optimization"
  },
  /* J */ p10: { // Mediterranean man, 50s, grey beard
    name: "Rafael Moreno",
    mandate: "Log Interpretation Fidelity, Depth Registration & Volumetric Certainty"
  },
  /* K */ p11: { // Southeast Asian woman, 40s
    name: "Liza Mendoza",
    mandate: "Separation Train Efficiency, Product Specification Compliance & Facility Uptime"
  },
  /* L */ p12: { // White / European woman, 50s
    name: "Claire Donnelly",
    mandate: "Hydrate Prevention, Wax Management & Multiphase Flow Continuity"
  },
  /* M */ p13: { // Black man, 40s-50s
    name: "Samuel Mensah",
    mandate: "Grid Line-Pack Balance, Nomination Compliance & Compressor Scheduling"
  },
  /* N */ p14: { // Middle Eastern man, 50s, grey beard
    name: "Karim Haddad",
    mandate: "Berth Utilization, Demurrage Elimination & Custody Transfer Accuracy"
  },
  /* O */ p15: { // South Asian man, 30s
    name: "Arjun Menon",
    mandate: "Crude Cut-Point Optimization, Furnace Efficiency & Distillation Yield"
  },
  /* P */ p16: { // Latina / Mediterranean woman, 40s
    name: "Sofia Reyes",
    mandate: "Catalyst Circulation Stability, Conversion Yield & Regenerator Control"
  },
  /* Q */ p17: { // East Asian / Korean man, 40s
    name: "Jun-ho Park",
    mandate: "Reactor Temperature Control, Runaway Prevention & Conversion Severity"
  },
  /* R */ p18: { // White / Nordic woman, 40s
    name: "Hanna Lindgren",
    mandate: "Reformer Severity, Aromatics Yield & Catalyst Cycle Life"
  },
  /* S */ p19: { // Black woman, 50s
    name: "Yvonne Boateng",
    mandate: "Blend Giveaway Elimination, Specification Compliance & Tank Farm Scheduling"
  },
  /* T */ p20: { // White / European man, 50s-60s
    name: "Peter Voss",
    mandate: "Process Safety Barrier Assurance, PSM Compliance & Loss of Containment Prevention"
  }
};
