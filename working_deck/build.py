#!/usr/bin/env python3
"""
working_deck/build.py — Assembles modular slides into working_deck/index.html
and generates standalone pages in working_deck/pages/ with 100% visual fidelity
to the finalized executive deck design.

Usage:
  python3 working_deck/build.py          # Re-compiles index.html from slides/
  python3 working_deck/build.py --pages  # Also re-syncs standalone preview pages/
"""

import os
import sys
import glob
import re

WORKING_DIR = os.path.dirname(os.path.abspath(__file__))
SLIDES_DIR = os.path.join(WORKING_DIR, "slides")
PAGES_DIR = os.path.join(WORKING_DIR, "pages")
HEADER_FILE = os.path.join(WORKING_DIR, "header_template.html")
FOOTER_FILE = os.path.join(WORKING_DIR, "footer_template.html")
INDEX_HTML = os.path.join(WORKING_DIR, "index.html")

STAGE_TITLES = [
    "EXECUTIVE OVERVIEW",
    "CAPITAL REALITY",
    "SWISS CHEESE MODEL",
    "THE 3 MECE TRAPS",
    "WORKFORCE PERSONAS",
    "2D VULNERABILITY MATRIX",
    "THE 5 CRITERIA",
    "DUAL-ENGINE AI",
    "JENGA ARCHITECTURE",
    "PROOF BLUEPRINT",
    "DISCOVERY & A2UI",
    "DETERMINISTIC MATH",
    "BIGQUERY GOVERNANCE",
    "ENTERPRISE FLEET",
    "DISCOVERY WORKSHOP",
    "STRATEGIC MANDATE"
]

def build():
    if not os.path.exists(HEADER_FILE) or not os.path.exists(FOOTER_FILE):
        print(f"[ERROR] Missing header_template.html or footer_template.html in {WORKING_DIR}")
        print("Please run python3 working_deck/modularize.py first.")
        sys.exit(1)

    with open(HEADER_FILE, "r", encoding="utf-8") as f:
        header = f.read()

    with open(FOOTER_FILE, "r", encoding="utf-8") as f:
        footer = f.read()

    slide_files = sorted(glob.glob(os.path.join(SLIDES_DIR, "slide_*.html")))
    if not slide_files:
        print(f"[ERROR] No slide files found in {SLIDES_DIR}")
        sys.exit(1)

    slides_content = []
    for sf in slide_files:
        with open(sf, "r", encoding="utf-8") as f:
            slides_content.append(f.read().strip())

    full_html = header.rstrip() + "\n\n" + "\n\n".join(slides_content) + "\n\n" + footer.lstrip()

    with open(INDEX_HTML, "w", encoding="utf-8") as f:
        f.write(full_html)

    print(f"[SUCCESS] Re-compiled {len(slide_files)} slides into: working_deck/index.html ({len(full_html)} bytes)")

    if "--pages" in sys.argv:
        build_pages(slides_content)

def build_pages(slides_content):
    os.makedirs(PAGES_DIR, exist_ok=True)
    with open(FOOTER_FILE, "r", encoding="utf-8") as f:
        footer = f.read()
    script_match = re.search(r'(<script>.*?</script>)', footer, re.DOTALL)
    scripts_html = script_match.group(1) if script_match else ""

    num_stages = len(slides_content)
    for i, sec_html in enumerate(slides_content):
        prev_page = f"page_{i-1:02d}.html" if i > 0 else f"page_{num_stages-1:02d}.html"
        next_page = f"page_{i+1:02d}.html" if i < num_stages-1 else "page_00.html"
        stage_name = STAGE_TITLES[i] if i < len(STAGE_TITLES) else f"STAGE {i:02d}"

        # Adjust asset paths for pages directory
        sec_adjusted = sec_html.replace('src="../assets/', 'src="../../assets/')
        sec_adjusted = sec_adjusted.replace('url(\'../assets/', 'url(\'../../assets/')
        sec_adjusted = sec_adjusted.replace('url("../assets/', 'url("../../assets/')
        sec_adjusted = re.sub(r'href="#stage-(\d{2})"', r'href="page_\1.html"', sec_adjusted)

        # For Stage 00 (Overview), strictly preserve the pure standalone visual from final_slides/slide_00_overview.html
        if i == 0:
            page_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{stage_name} | Sovereign Agentic Transformation</title>
  <link rel="stylesheet" href="../../assets/styles.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
</head>
<body style="margin: 0; padding: 0; background-color: #06090E; overflow-x: hidden;">

  <!-- Main Fluid Web Viewport Container -->
  <main id="viewport-scaler">
{sec_adjusted}
  </main>

  <!-- Interactive Scripts -->
{scripts_html}
</body>
</html>
"""
        else:
            # Build Apple Editorial header and dock for subsequent stages
            page_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{stage_name} | Sovereign Agentic Transformation</title>
  <link rel="stylesheet" href="../../assets/styles.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
</head>
<body style="margin: 0; padding: 0; background-color: #06090E; overflow-x: hidden;">

  <!-- Apple Editorial Navigation Bar -->
  <header class="executive-top-nav" style="backdrop-filter: blur(20px); background: rgba(6, 9, 14, 0.82); border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding: 14px max(24px, 4vw); position: fixed; top: 0; left: 0; right: 0; z-index: 1000; display: flex; justify-content: space-between; align-items: center;">
    <a href="../index.html#stage-{i:02d}" style="display: flex; align-items: center; gap: 14px; text-decoration: none;">
      <img src="../../assets/media/wip/image25.png" alt="Google Cloud" style="height: 32px; width: auto;">
      <div style="width: 1px; height: 20px; background: rgba(255, 255, 255, 0.2);"></div>
      <span style="font-family: var(--font-mono); font-size: 11.5px; font-weight: 700; color: #FFFFFF; letter-spacing: 1.5px; text-transform: uppercase;">SOVEREIGN AGENTIC SYSTEMS</span>
    </a>
    <nav style="display: flex; align-items: center; gap: 24px;">
      <a href="page_00.html" style="font-family: var(--font-display); font-size: 13.5px; font-weight: 600; color: #94A3B8; text-decoration: none; transition: color 0.2s;">Overview</a>
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
        <span style="font-family: var(--font-mono); font-size: 11.5px; color: var(--security-turquoise); font-weight: 700;">{i+1:02d}/{num_stages:02d}</span>
        <a href="{next_page}" style="color: var(--security-azure); text-decoration: none; font-size: 12px; font-weight: 700; padding: 2px 6px;">→</a>
      </div>
      <a href="page_14.html" style="font-family: var(--font-display); font-size: 12.5px; font-weight: 700; color: #000; background: #FFF; padding: 6px 14px; border-radius: 20px; text-decoration: none; transition: opacity 0.2s;">
        Schedule Discovery
      </a>
    </div>
  </header>

  <!-- Main Fluid Web Viewport Container -->
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

    print(f"[SUCCESS] Updated {num_stages} standalone pages in: working_deck/pages/")

if __name__ == "__main__":
    build()
