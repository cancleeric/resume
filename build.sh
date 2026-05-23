#!/usr/bin/env bash
# HurricaneSoft 工作室 — Resume HTML build
# Usage: ./build.sh [filename.md]   # 不帶參數則 build 主版 resume.md
set -e

cd "$(dirname "$0")"

build_one() {
  local f="$1"
  local out="${f%.md}.html"
  local title
  title=$(head -1 "$f" | sed 's/^# *//')

  pandoc "$f" -f gfm -t html5 \
    --template=template.html5 \
    --toc --toc-depth=2 \
    --metadata title="$title" \
    -o "$out"
  printf "  ✓ %-30s → %s\n" "$f" "$out"
}

if [ -n "${1:-}" ]; then
  build_one "$1"
else
  echo "🔨 Building resume.md → resume.html…"
  build_one resume.md
  echo "✅ Done."
fi

# 舊版多版本 / PROJECTS / INSTRUCTIONS 已封存於 archive/，
# 需重建 archive 內檔案：cd archive && pandoc <file>.md ...
