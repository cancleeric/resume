# archive/ — 封存資料

> 2026-05-19 從 root 移入，**接案版面已不再使用**。

歷史脈絡保存用。當時為求職應徵階段（CTO / 各語言職位）製作的多版本特化履歷與專案清單。

## 內容

| 檔案 | 用途 | 階段 |
|---|---|---|
| `resume_dotnet.{md,html}` | C# / .NET 8 / Blazor 特化版 | 求職 |
| `resume_python_ai.{md,html}` | Python / FastAPI / AI / LLM 特化版 | 求職 |
| `resume_java.{md,html}` | Java / OOP 跨語言特化版 | 求職 |
| `resume_fullstack.{md,html}` | Next.js / React / 全端特化版 | 求職 |
| `resume_ios.{md,html}` | iOS / SwiftUI / SpriteKit 特化版 | 求職 |
| `resume_security.{md,html}` | 資安 / IAM / Vault 特化版 | 求職 |
| `PROJECTS.{md,html}` | 內部專案技術詳細清單 | 履歷補件 |
| `PROJECTS_PUBLIC.{md,html}` | 公開版專案清單 | 履歷補件 |
| `INSTRUCTIONS.html` | HTML 產製 SOP | build 工具文 |
| `Vue_Interview_Notes.{md,html}` | Vue.js 面試筆記 | 求職準備 |
| `plans/R-NEXT-plan.md` | R-NEXT 輪次優化計劃 | 過往 sprint |
| `plans/R+2-plan.md` | R+2 輪次優化計劃 | 過往 sprint |
| `presets/*.yaml` | 6 特化版的 sidebar metadata | build 用 |

## 重建

若需重建 archive 內的 HTML：

```bash
cd archive
pandoc <file>.md -f gfm -t html5 --template=../template.html5 \
  --toc --toc-depth=2 \
  --metadata-file=presets/<variant>.yaml \
  -o <file>.html
```

注意：archive 內 `.html` 的 topbar 仍指向 root `resume.html`，跨 archive 邊界連結可能失效；若要把這些變體版重新上線，需先修 nav 相對路徑。
