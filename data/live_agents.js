/* Live agents: agents actually built and running, mapped to the personas they serve.
   Single source for the green "Live agent" marker on working_deck/persona_map.html and the
   "Live agents" block on personas/dossier.html.
   To add one, append an entry: personas = deck persona IDs (data/personas/index.json),
   links = any of { agent (Gemini Enterprise), app (Cloud Run), repo }.
   Source: "Oil & Gas Agent Portfolio" (FLEET_REGISTRY.yaml, cloud_run_apps/, agents/). */
window.LIVE_AGENTS = [
  {
    name: "Sagar Drishti",
    oneLine: "Drilling intelligence cockpit: reads real-time drilling data and warns the driller early.",
    personas: ["P07", "P01"],
    links: {
      app:  "https://sagar-drishti-248430093579.us-central1.run.app",
      repo: "https://github.com/amandeepsinghs-cyber/drilling-intelligence-2.0"
    }
  },
  {
    name: "Well Log Digitisation Agent",
    oneLine: "Turns scanned well logs into calibrated LAS curves with an interactive log chart.",
    personas: ["P04"],
    links: {
      agent: "https://vertexaisearch.cloud.google.com/home/cid/7dab71a6-8f69-48ba-841f-492144d75c05/r/agent/10364749965176844252/session/-?mods=&authuser=admin@amandeepsinghs.altostrat.com"
    }
  },
  {
    name: "Workover & Well Intervention Agent",
    oneLine: "Ranks workover candidates using lift-failure risk, water-cut diagnostics and decline curves.",
    personas: ["P09"],
    links: {
      agent: "https://vertexaisearch.cloud.google.com/home/cid/7dab71a6-8f69-48ba-841f-492144d75c05/r/agent/9133818840672638712/session/-?mods=&authuser=admin@amandeepsinghs.altostrat.com",
      repo:  "https://github.com/amandeepsinghs-cyber/well-workover-intervention"
    }
  },
  {
    name: "WellPulse · Urvi AI Agent",
    oneLine: "Voice-first well operations assistant for field and control-room teams.",
    personas: ["P10", "P11"],
    links: {
      app:  "https://wellpulse-app-806277846965.us-central1.run.app",
      repo: "https://github.com/amandeepsinghs-cyber/workover-operations-ai-agent-cloudrun"
    }
  },
  {
    name: "Rig Fleet Management Agent",
    oneLine: "Schedules the rig fleet against availability, weather and non-productive-time risk.",
    personas: ["P07"],
    links: {
      repo: "https://github.com/amandeepsinghs-cyber/rig-management"
    }
  },
  {
    name: "Gas Supply Decision Agent",
    oneLine: "Gemini Enterprise agent that joins company data with live market data for the winter supply call.",
    personas: ["P42", "P14"],
    links: {
      agent: "https://vertexaisearch.cloud.google.com/home/cid/7dab71a6-8f69-48ba-841f-492144d75c05/r/agent/13029231145782247335/session/-?mods=&authuser=admin@amandeepsinghs.altostrat.com",
      repo:  "https://github.com/amandeepsinghs-cyber/gail-midstream-ge-demo"
    }
  },
  {
    name: "Petrophysical Log Splicing Agent",
    oneLine: "Splices and depth-matches log runs into one continuous, QC'd petrophysical curve set.",
    personas: ["P04", "P24"],
    links: {
      agent: "https://vertexaisearch.cloud.google.com/home/cid/7dab71a6-8f69-48ba-841f-492144d75c05/r/agent/16397021713347413121/session/-?mods=&authuser=admin@amandeepsinghs.altostrat.com"
    }
  },
  {
    name: "PPAC Energy Intelligence Agent",
    oneLine: "Gemini Enterprise agent: aggregates monthly hydrocarbon data, forecasts demand and drafts the Ready Reckoner and Flash Report, with an audit checklist on top.",
    personas: ["P42", "P17"],
    links: {
      agent: "https://vertexaisearch.cloud.google.com/home/cid/7dab71a6-8f69-48ba-841f-492144d75c05/r/agent/5546604378236005227/session/-?mods=&authuser=admin@amandeepsinghs.altostrat.com"
    }
  },
  {
    name: "FCC Agentic Optimisation",
    oneLine: "FCC decision cockpit on a refinery digital twin: recommends cut-point and severity moves.",
    personas: ["P16", "P03"],
    links: {
      app:  "https://fcc-cockpit-1099437687941.us-central1.run.app",
      repo: "https://github.com/amandeepsinghs-cyber/refinery-yield-optimisation-agentic-transformation"
    }
  }
];

window.liveAgentsFor = function (personaId) {
  return (window.LIVE_AGENTS || []).filter(function (a) { return a.personas.indexOf(personaId) !== -1; });
};
