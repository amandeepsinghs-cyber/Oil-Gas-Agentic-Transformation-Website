#!/usr/bin/env python3
"""
working_deck/modularize.py — Slices working_deck/index.html into a modular architecture:
1. Copies temporary generated renders into permanent local assets (assets/media/photos/)
2. Extracts working_deck/header_template.html & footer_template.html
3. Slices working_deck/slides/slide_00_hero.html through slide_15_strategic_mandate.html
4. Creates working_deck/pages/page_00.html through page_15.html with 100% visual fidelity to final_deck
"""

import os
import re
import shutil

WORKING_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_DIR = os.path.dirname(WORKING_DIR)
INDEX_HTML = os.path.join(WORKING_DIR, "index.html")
SLIDES_DIR = os.path.join(WORKING_DIR, "slides")
PAGES_DIR = os.path.join(WORKING_DIR, "pages")
ASSETS_PHOTOS_DIR = os.path.join(REPO_DIR, "assets", "media", "photos")

os.makedirs(SLIDES_DIR, exist_ok=True)
os.makedirs(PAGES_DIR, exist_ok=True)
os.makedirs(ASSETS_PHOTOS_DIR, exist_ok=True)

# 1. Permanently preserve generated 3D renders in assets/media/photos/
BRAIN_DIR = "/usr/local/google/home/amandeepsinghs/.gemini/jetski/brain/7764e12e-724c-430e-a07f-08055932c4b0"
cheese_baseline_src = os.path.join(BRAIN_DIR, "swiss_cheese_nebula_1788788944795.jpg")
cheese_fortified_src = os.path.join(BRAIN_DIR, "swiss_cheese_fortified_1788788981952.jpg")
cheese_baseline_dst = os.path.join(ASSETS_PHOTOS_DIR, "swiss_cheese_nebula.jpg")
cheese_fortified_dst = os.path.join(ASSETS_PHOTOS_DIR, "swiss_cheese_fortified.jpg")

if os.path.exists(cheese_baseline_src):
    shutil.copy2(cheese_baseline_src, cheese_baseline_dst)
    print(f"  [+] Preserved render: assets/media/photos/swiss_cheese_nebula.jpg")

if os.path.exists(cheese_fortified_src):
    shutil.copy2(cheese_fortified_src, cheese_fortified_dst)
    print(f"  [+] Preserved render: assets/media/photos/swiss_cheese_fortified.jpg")

with open(INDEX_HTML, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern to find all section.slide blocks
section_pattern = re.compile(r'(<section class="slide[^"]*" id="(stage-\d{2})"[^>]*>.*?</section>)', re.DOTALL)
matches = list(section_pattern.finditer(content))

print(f"Found {len(matches)} stages in index.html")

SLIDE_NAMES = [
    ("stage-00", "slide_00_hero.html", "EXECUTIVE OVERVIEW"),
    ("stage-01", "slide_01_capital_reality.html", "CAPITAL REALITY"),
    ("stage-02", "slide_02_swiss_cheese.html", "SWISS CHEESE MODEL"),
    ("stage-03", "slide_03_mece_traps.html", "THE 3 MECE TRAPS"),
    ("stage-04", "slide_04_workforce_personas.html", "WORKFORCE PERSONAS"),
    ("stage-05", "slide_05_vulnerability_matrix.html", "2D VULNERABILITY MATRIX"),
    ("stage-06", "slide_06_solution_criteria.html", "THE 5 CRITERIA"),
    ("stage-07", "slide_07_dual_engine.html", "DUAL-ENGINE AI"),
    ("stage-08", "slide_08_jenga_comparison.html", "JENGA ARCHITECTURE"),
    ("stage-09", "slide_09_splicing_blueprint.html", "PROOF BLUEPRINT"),
    ("stage-10", "slide_10_gcs_and_a2ui.html", "DISCOVERY & A2UI"),
    ("stage-11", "slide_11_deterministic_math.html", "DETERMINISTIC MATH"),
    ("stage-12", "slide_12_bigquery_governance.html", "BIGQUERY GOVERNANCE"),
    ("stage-13", "slide_13_enterprise_fleet.html", "ENTERPRISE FLEET"),
    ("stage-14", "slide_14_discovery_workshop.html", "DISCOVERY WORKSHOP"),
    ("stage-15", "slide_15_strategic_mandate.html", "STRATEGIC MANDATE"),
]

# Extract header (up to before stage-00)
header_end = matches[0].start()
header_html = content[:header_end].rstrip()

# Extract footer (from after stage-15)
footer_start = matches[-1].end()
footer_html = content[footer_start:].lstrip()

# Extract script blocks specifically for standalone pages
script_match = re.search(r'(<script>.*?</script>)', content, re.DOTALL)
scripts_html = script_match.group(1) if script_match else ""

# 2. Save header and footer templates
with open(os.path.join(WORKING_DIR, "header_template.html"), "w", encoding="utf-8") as hf:
    hf.write(header_html + "\n")

with open(os.path.join(WORKING_DIR, "footer_template.html"), "w", encoding="utf-8") as ff:
    ff.write(footer_html + "\n")

# 3. Save modular slide snippets
for i, match in enumerate(matches):
    sec_html = match.group(1)
    stage_id = match.group(2)
    filename = SLIDE_NAMES[i][1] if i < len(SLIDE_NAMES) else f"{stage_id}.html"
    out_path = os.path.join(SLIDES_DIR, filename)
    with open(out_path, "w", encoding="utf-8") as sf:
        sf.write(sec_html + "\n")
    print(f"  [+] Wrote modular snippet: slides/{filename} ({len(sec_html)} bytes)")

# 4. Create standalone independent pages in working_deck/pages/ matching final_deck visual standard
for i, match in enumerate(matches):
    sec_html = match.group(1)
    prev_page = f"page_{i-1:02d}.html" if i > 0 else f"page_{len(matches)-1:02d}.html"
    next_page = f"page_{i+1:02d}.html" if i < len(matches)-1 else "page_00.html"
    stage_name = SLIDE_NAMES[i][2] if i < len(SLIDE_NAMES) else f"STAGE {i:02d}"

    # For pages located in pages/, adjust asset paths from ../assets to ../../assets
    sec_adjusted = sec_html.replace('src="../assets/', 'src="../../assets/')
    sec_adjusted = sec_adjusted.replace('url(\'../assets/', 'url(\'../../assets/')
    sec_adjusted = sec_adjusted.replace('url("../assets/', 'url("../../assets/')
    sec_adjusted = re.sub(r'href="#stage-(\d{2})"', r'href="page_\1.html"', sec_adjusted)

    page_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{stage_name} | Sovereign Agentic Transformation</title>
  <link rel="stylesheet" href="../../assets/styles.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
</head>
<body>

  <!-- Apple Editorial Navigation Bar (Preserved Visual Fidelity from Final Deck) -->
  <header class="executive-top-nav" style="backdrop-filter: blur(20px); background: rgba(6, 9, 14, 0.82); border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding: 14px max(24px, 4vw); position: fixed; top: 0; left: 0; right: 0; z-index: 1000; display: flex; justify-content: space-between; align-items: center;">
    <a href="../index.html#stage-{i:02d}" style="display: flex; align-items: center; gap: 14px; text-decoration: none;">
      <img src="../../assets/media/wip/image25.png" alt="Google Cloud" style="height: 32px; width: auto;">
      <div style="width: 1px; height: 20px; background: rgba(255, 255, 255, 0.2);"></div>
      <span style="font-family: var(--font-mono); font-size: 11.5px; font-weight: 700; color: #FFFFFF; letter-spacing: 1.5px; text-transform: uppercase;">SOVEREIGN AGENTIC SYSTEMS</span>
    </a>
    <nav style="display: flex; align-items: center; gap: 24px;">
      <a href="page_00.html" style="font-family: var(--font-display); font-size: 13.5px; font-weight: 600; color: {'#FFFFFF' if i==0 else '#94A3B8'}; text-decoration: none; transition: color 0.2s;">Overview</a>
      <a href="page_01.html" style="font-family: var(--font-display); font-size: 13.5px; font-weight: 600; color: {'#FFFFFF' if i==1 else '#94A3B8'}; text-decoration: none; transition: color 0.2s;">Capital Stakes</a>
      <a href="page_02.html" style="font-family: var(--font-display); font-size: 13.5px; font-weight: 600; color: {'#FFFFFF' if i==2 else '#94A3B8'}; text-decoration: none; transition: color 0.2s;">Swiss Cheese Model</a>
      <a href="page_03.html" style="font-family: var(--font-display); font-size: 13.5px; font-weight: 600; color: {'#FFFFFF' if i==3 else '#94A3B8'}; text-decoration: none; transition: color 0.2s;">The 3 Traps</a>
      <a href="page_07.html" style="font-family: var(--font-display); font-size: 13.5px; font-weight: 600; color: {'#FFFFFF' if i==7 else '#94A3B8'}; text-decoration: none; transition: color 0.2s;">Dual-Engine AI</a>
      <a href="page_09.html" style="font-family: var(--font-display); font-size: 13.5px; font-weight: 600; color: {'#FFFFFF' if i==9 else '#94A3B8'}; text-decoration: none; transition: color 0.2s;">Proof Studio</a>
    </nav>
    <div style="display: flex; align-items: center; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 6px; padding: 5px 12px; background: rgba(0, 210, 180, 0.08); border: 1px solid rgba(0, 210, 180, 0.25); border-radius: 20px; font-family: var(--font-mono); font-size: 11.5px; font-weight: 700; color: var(--security-mint);">
        <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--security-mint); box-shadow: 0 0 8px var(--security-mint);"></span>
        <span>MEITY SOVEREIGN</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.05); padding: 3px 8px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
        <a href="{prev_page}" style="color: #94A3B8; text-decoration: none; font-size: 12px; font-weight: 700; padding: 2px 6px;">←</a>
        <span style="font-family: var(--font-mono); font-size: 11.5px; color: var(--security-turquoise); font-weight: 700;">{i+1:02d}/{len(matches):02d}</span>
        <a href="{next_page}" style="color: var(--security-azure); text-decoration: none; font-size: 12px; font-weight: 700; padding: 2px 6px;">→</a>
      </div>
      <a href="page_14.html" style="font-family: var(--font-display); font-size: 12.5px; font-weight: 700; color: #000; background: #FFF; padding: 6px 14px; border-radius: 20px; text-decoration: none; transition: opacity 0.2s;">
        Schedule Discovery
      </a>
    </div>
  </header>

  <!-- Main Fluid Web Viewport Container (Zero Extra Padding · Pure 100vh Framing) -->
  <main id="viewport-scaler">
{sec_adjusted}
  </main>

  <!-- Smart Floating Action Pill (Bottom Navigation) -->
  <aside class="floating-dock" style="display: flex; align-items: center; gap: 12px; padding: 10px 18px; background: rgba(13, 17, 23, 0.88); border: 1px solid var(--border-hairline); border-radius: 30px; backdrop-filter: blur(12px); box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 1000;">
    <a href="{prev_page}" style="background: rgba(255,255,255,0.08); border: none; color: #FFF; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; text-decoration: none;">
      ◀
    </a>
    <div style="font-family: var(--font-mono); font-size: 14.5px; font-weight: 700; color: var(--security-turquoise); white-space: nowrap;">
      STAGE {i:02d} // {stage_name}
    </div>
    <a href="{next_page}" style="background: var(--security-azure); border: none; color: #FFF; padding: 7px 16px; border-radius: 20px; font-family: var(--font-display); font-size: 15px; font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 6px;">
      <span>Next Stage</span>
      <span>▶</span>
    </a>
  </aside>

  <!-- Interactive Scripts -->
{scripts_html}
</body>
</html>
"""
    page_file = os.path.join(PAGES_DIR, f"page_{i:02d}.html")
    with open(page_file, "w", encoding="utf-8") as pf:
        pf.write(page_html)

print("\n[SUCCESS] Modularization complete: 16 modular snippets in slides/ and 16 standalone pages in pages/!")
