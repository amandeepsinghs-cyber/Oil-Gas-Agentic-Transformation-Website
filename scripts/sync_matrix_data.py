#!/usr/bin/env python3
"""
sync_matrix_data.py
Synchronizes data/enterprise_matrix_300.csv with data/enterprise_matrix_300.js
Allows domain engineers, executives, or analysts to edit the 300-node matrix in
Excel / Google Sheets / Numbers, save as CSV, and instantly recompile the web assets.
"""

import csv
import json
import os
import sys

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CSV_PATH = os.path.join(BASE_DIR, "data", "enterprise_matrix_300.csv")
JS_PATH = os.path.join(BASE_DIR, "data", "enterprise_matrix_300.js")

ROW_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"]

SECTOR_CLASS_MAP = {
    "SUBSURFACE GEOSCIENCES": "sector-geosciences",
    "DRILLING & WELLS": "sector-drilling",
    "RESERVOIR & PRODUCTION": "sector-reservoir",
    "MIDSTREAM TRANSMISSION": "sector-midstream",
    "DOWNSTREAM REFINING": "sector-downstream",
    "SAFETY & INTEGRITY": "sector-safety",
}

def sync():
    if not os.path.exists(CSV_PATH):
        print(f"Error: CSV file not found at {CSV_PATH}")
        sys.exit(1)

    print(f"Reading {CSV_PATH}...")
    personas_dict = {}
    physical_assets = []
    seen_assets = set()

    with open(CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            p_id = row["persona_id"].strip()
            row_letter = row["row_letter"].strip()
            p_name = row["persona_name"].strip()
            sector = row["sector"].strip()
            monolith = row["monolith_platform"].strip()
            phys_asset = row.get("physical_asset", "").strip()

            if p_id not in personas_dict:
                personas_dict[p_id] = {
                    "id": p_id,
                    "num": row_letter,
                    "name": p_name,
                    "sector": sector,
                    "sectorClass": SECTOR_CLASS_MAP.get(sector, "sector-geosciences"),
                    "monolith": monolith,
                    "actions": []
                }

            if row_letter not in seen_assets and phys_asset:
                seen_assets.add(row_letter)
                physical_assets.append({
                    "num": row_letter,
                    "name": phys_asset,
                    "sector": sector + " INFRASTRUCTURE" if "DRILLING" in sector or "PRODUCTION" in sector or "SUBSURFACE" in sector else sector
                })

            step_num = int(row["step_number"].strip())
            step_str = f"{step_num:02d}"
            cap_val = float(row["capital_at_risk_cr"].strip()) if row["capital_at_risk_cr"].strip() else 0.0

            coord_str = row["coord"].strip()
            act_name = row["action_name"].strip()
            status_val = row["status"].strip()

            kicker_val = row.get("hud_kicker", "").strip()
            if not kicker_val:
                if status_val == "plugged": kicker_val = "★ DEPLOYED PROOF // KANSAS WELL A-12"
                else: kicker_val = ""

            badge_val = row.get("hud_status_badge", "").strip()
            if not badge_val:
                if status_val == "plugged": badge_val = "READY (SLIDE 06)"
                elif status_val == "critical": badge_val = "CRITICAL"
                elif status_val == "friction": badge_val = "FRICTION"
                else: badge_val = "BASELINE MONOLITH"
            else:
                badge_val = badge_val.lstrip("🔴🟡⚪★ ").strip()
                if badge_val == "CRITICAL SEAM": badge_val = "CRITICAL"
                if badge_val == "FRICTION GAP": badge_val = "FRICTION"

            action_title_val = row.get("action_full_title", "").strip()
            if not action_title_val:
                action_title_val = f"{coord_str} • Step {step_num}: {act_name}"

            vuln_label_val = row.get("vuln_label", "").strip()
            if not vuln_label_val:
                vuln_label_val = "🔴 THE LATENT VULNERABILITY (VALUE BLEED)"

            plug_label_val = row.get("plug_label", "").strip()
            if not plug_label_val:
                plug_label_val = "⚡ AI AGENT (THE OPPORTUNITY)"

            action_obj = {
                "num": step_str,
                "coord": coord_str,
                "name": act_name,
                "actionTitle": action_title_val,
                "status": status_val,
                "statusBadge": badge_val,
                "kicker": kicker_val,
                "vulnLabel": vuln_label_val,
                "vuln": row["vulnerability"].strip(),
                "plugLabel": plug_label_val,
                "plug": row["agentic_plug"].strip(),
                "impact": row["impact_display"].strip(),
                "speed": row["speed_display"].strip(),
                "capitalCr": cap_val,
                "agentRegistryId": row.get("agent_registry_id", "").strip(),
                "agentRegistryUri": row.get("agent_registry_uri", "").strip(),
                "agentDeploymentStatus": row.get("agent_deployment_status", "Backlog / Opportunity").strip(),
                "agentIamIdentity": row.get("agent_iam_identity", "").strip(),
                "agentFramework": row.get("agent_framework", "").strip()
            }
            personas_dict[p_id]["actions"].append(action_obj)

    personas_list = list(personas_dict.values())

    # Calculate statistics
    total_cells = sum(len(p["actions"]) for p in personas_list)
    plugged_cells = sum(1 for p in personas_list for a in p["actions"] if a["status"] == "plugged")
    wave1_cells = sum(1 for p in personas_list for a in p["actions"] if "Wave 1" in a["agentDeploymentStatus"] and a["status"] != "plugged")
    critical_cells = sum(1 for p in personas_list for a in p["actions"] if a["status"] == "critical")
    friction_cells = sum(1 for p in personas_list for a in p["actions"] if a["status"] == "friction")
    baseline_cells = sum(1 for p in personas_list for a in p["actions"] if a["status"] == "baseline")
    total_capital = sum(a["capitalCr"] for p in personas_list for a in p["actions"])

    # Format JS output
    js_output = "/**\n * Enterprise Matrix 300 Master Dataset\n * Auto-generated from data/enterprise_matrix_300.csv\n * Zero-CORS offline execution via file:/// protocol.\n */\n\n"
    js_output += f"window.PHYSICAL_ASSETS_DATA = {json.dumps(physical_assets, indent=2)};\n\n"
    js_output += f"window.ENTERPRISE_MATRIX_DATA = {json.dumps(personas_list, indent=2)};\n"

    with open(JS_PATH, "w", encoding="utf-8") as f:
        f.write(js_output)

    print(f"✅ Successfully compiled {JS_PATH}")
    print(f"   - Total Operational Seams: {total_cells}")
    print(f"   - Plugged Autonomous Agents: {plugged_cells}")
    print(f"   - Planned Wave 1 Target Agents: {wave1_cells}")
    print(f"   - Critical Risk Seams: {critical_cells}")
    print(f"   - Friction Bottlenecks: {friction_cells}")
    print(f"   - Baseline Monoliths: {baseline_cells}")
    print(f"   - Quantified Capital Exposure: ₹{int(total_capital):,} Cr / yr")

if __name__ == "__main__":
    sync()
