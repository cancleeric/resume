#!/usr/bin/env python3
"""
build_spa.py
把 7 個獨立 HTML 組合成 SPA index.html
"""

import re
import os

BASE = os.path.dirname(os.path.abspath(__file__))

TABS = [
    ("main",        "主版",       "resume.html"),
    ("dotnet",      ".NET",       "resume_dotnet.html"),
    ("python",      "Python/AI",  "resume_python_ai.html"),
    ("ai_platform", "AI 平台",    "resume_ai_platform.html"),
    ("fullstack",   "Full-stack", "resume_fullstack.html"),
    ("ios",         "iOS",        "resume_ios.html"),
    ("security",    "Security",   "resume_security.html"),
]


def read_file(fname):
    with open(os.path.join(BASE, fname), encoding="utf-8") as f:
        return f.read()


def extract_between(html, start_tag, end_tag):
    """提取兩個 tag 之間的 HTML（不含 tag 本身）"""
    start = html.find(start_tag)
    end = html.find(end_tag, start)
    if start == -1 or end == -1:
        return ""
    return html[start + len(start_tag):end]


def extract_sidebar_inner(html):
    """提取 <aside class="sidebar"> ... </aside> 之間的內容"""
    return extract_between(html, '  <aside class="sidebar">', '  </aside>')


def extract_main_inner(html):
    """提取 <main class="main"> ... </main> 之間的內容"""
    return extract_between(html, '  <main class="main">', '  </main>')


# ── 讀所有 HTML ──
tabs_data = []
for tab_id, label, fname in TABS:
    html = read_file(fname)
    sidebar = extract_sidebar_inner(html)
    main = extract_main_inner(html)
    tabs_data.append((tab_id, label, sidebar, main))

# ── navbar ──
nav_links = []
for i, (tab_id, label, _, _) in enumerate(tabs_data):
    active = ' class="active"' if i == 0 else ""
    nav_links.append(
        f'      <a href="#{tab_id}" data-tab="{tab_id}"{active} '
        f'onclick="switchTab(\'{tab_id}\'); return false;">{label}</a>'
    )
nav_links.append(
    '      <a href="PROJECTS.html">專案清單</a>'
)
nav_links.append(
    '      <button class="topbar__btn" onclick="window.print()" title="存為 PDF / 列印">PDF</button>'
)
navbar_html = "\n".join(nav_links)

# ── sidebar sections ──
sidebar_sections = []
for i, (tab_id, label, sidebar, _) in enumerate(tabs_data):
    display = "block" if i == 0 else "none"
    sidebar_sections.append(
        f'  <div class="sidebar-content" id="sidebar-{tab_id}" style="display:{display};">\n'
        f'{sidebar}\n'
        f'  </div>'
    )
sidebars_html = "\n".join(sidebar_sections)

# ── main sections ──
main_sections = []
for i, (tab_id, label, _, main) in enumerate(tabs_data):
    display = "block" if i == 0 else "none"
    main_sections.append(
        f'  <section class="resume-section" id="tab-{tab_id}" style="display:{display};">\n'
        f'{main}\n'
        f'  </section>'
    )
mains_html = "\n".join(main_sections)

# ── JS ──
js = """
function switchTab(tabId) {
  document.querySelectorAll('.resume-section').forEach(function(s) {
    s.style.display = 'none';
  });
  var section = document.getElementById('tab-' + tabId);
  if (section) section.style.display = 'block';

  document.querySelectorAll('.topbar__nav a[data-tab]').forEach(function(a) {
    a.classList.remove('active');
  });
  var link = document.querySelector('[data-tab="' + tabId + '"]');
  if (link) link.classList.add('active');

  document.querySelectorAll('.sidebar-content').forEach(function(s) {
    s.style.display = 'none';
  });
  var sidebar = document.getElementById('sidebar-' + tabId);
  if (sidebar) sidebar.style.display = 'block';

  history.replaceState(null, '', '#' + tabId);
}

(function() {
  var hash = location.hash.replace('#', '');
  var validTabs = """ + str([t[0] for t in tabs_data]) + """;
  if (hash && validTabs.indexOf(hash) !== -1) {
    switchTab(hash);
  }
})();
"""

# ── 組合完整 HTML ──
output = f"""<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>王英豪 - 技術履歷</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+TC:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="resume-style.css" />
  <style>
    .topbar__nav a.active {{
      background: rgba(255,255,255,0.25);
      font-weight: 700;
    }}
    @media print {{
      .resume-section {{ display: block !important; }}
      .resume-section:not(.print-active) {{ display: none !important; }}
      .topbar {{ display: none !important; }}
    }}
  </style>
</head>
<body>

<header class="topbar">
  <div class="topbar__inner">
    <span class="topbar__brand">HurricaneGroup</span>
    <nav class="topbar__nav">
{navbar_html}
    </nav>
  </div>
</header>

<div class="layout">

  <aside class="sidebar" id="sidebar-container">
{sidebars_html}
  </aside>

  <div class="main" id="main-container">
{mains_html}
  </div>

</div>

<script>
{js}

// 列印前標記當前顯示的 section
window.addEventListener('beforeprint', function() {{
  document.querySelectorAll('.resume-section').forEach(function(s) {{
    s.classList.remove('print-active');
  }});
  var visible = document.querySelector('.resume-section[style*="display: block"], .resume-section[style*="display:block"]');
  if (visible) visible.classList.add('print-active');
}});
</script>
</body>
</html>
"""

out_path = os.path.join(BASE, "index.html")
with open(out_path, "w", encoding="utf-8") as f:
    f.write(output)

print(f"Done: {out_path}")
print(f"Tabs: {[t[0] for t in tabs_data]}")
