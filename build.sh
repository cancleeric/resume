#!/usr/bin/env bash
# Resume HTML build script
# Usage: ./build.sh [filename.md]   # 不帶參數則 build 全部
set -e

cd "$(dirname "$0")"

preset_for() {
  case "$1" in
    resume_dotnet.md)    echo "presets/dotnet.yaml" ;;
    resume_python_ai.md) echo "presets/python_ai.yaml" ;;
    resume_security.md)  echo "presets/security.yaml" ;;
    *) echo "" ;;
  esac
}

build_one() {
  local f="$1"
  local out="${f%.md}.html"
  local title
  title=$(head -1 "$f" | sed 's/^# *//')
  local preset
  preset=$(preset_for "$f")
  local meta_arg=""
  if [ -n "$preset" ] && [ -f "$preset" ]; then
    meta_arg="--metadata-file=$preset"
  fi

  pandoc "$f" -f gfm -t html5 \
    --template=template.html5 \
    --metadata title="$title" \
    $meta_arg \
    -o "$out"
  printf "  ✓ %-30s → %s%s\n" "$f" "$out" "${meta_arg:+ (preset)}"
}

if [ -n "${1:-}" ]; then
  build_one "$1"
else
  echo "🔨 Building all resume HTMLs…"
  for f in resume.md resume_dotnet.md resume_fullstack.md resume_ios.md \
           resume_java.md resume_python_ai.md resume_security.md \
           PROJECTS.md PROJECTS_PUBLIC.md INSTRUCTIONS.md Vue_Interview_Notes.md; do
    [ -f "$f" ] && build_one "$f"
  done
  echo "✅ Done."
fi
