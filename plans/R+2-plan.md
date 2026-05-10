# Resume R+2 優化計劃

> 撰寫人：CPO（颶風集團虛擬高管）
> 提交日：2026-05-10
> 上一輪 commit：`683a575`（R-NEXT 完成 P0-1 三檔 / P0-2 / P1-2 / P2-2）
> 預計合入分支：`main`

---

## 🎯 R+2 目標

**補齊剩餘 3 特化版內容同步、修正文檔自我矛盾、加 sidebar TOC 章節跳轉，讓履歷網頁從「主力版本完整」進化到「全套同步、互動完整」。**

---

## 📋 優先級任務清單（共 6 項）

### 🔴 P0（本輪必做）

#### P0-1：剩 3 特化版 .md 內容同步 2026 集團規模
- **動機**：R-NEXT 完成 dotnet / python_ai / security 同步，剩 fullstack / java / ios 仍是 2 月舊版（12 systems / 11 人團隊敘事）。投這 3 條職位的招募方會看到嚴重落差。
- **檔案**：
  - `resume_fullstack.md`：摘要 + 統計表更新；補 Next.js / Gyre / Manta React Canvas / antique frontend / dagongzai-web / Tentacle Frontend / 集團 30+ systems
  - `resume_java.md`：摘要 + 統計表更新；維持 Java OOP 跨語言敘事，補集團多語言架構決策（Java ↔ C# ↔ Python ↔ TypeScript），強調為何選 .NET 取代 Java、為何選 Python 取代 Java
  - `resume_ios.md`：摘要 + 統計表更新；維持 LifeSnap，補 dagongzai-ios（如有）、antique-master 行動端（如有）、HurricaneDigital 子公司行動產品線
- **做法**：每個檔的「專業摘要」「核心成就統計」「重點專案」三節必改；不全篇重寫
- **驗收**：6 特化版內容均提到 30+ systems / 6 子公司 / Cloud Run 19 services；年資 25/24 一致
- **工時**：3 檔 × ~25 分 = ~1.5 小時

#### P0-2：3 特化版的 sidebar preset yaml
- **動機**：R-NEXT 只建了 dotnet / python_ai / security 的 preset，剩 3 檔仍走主版預設數據，與內容不對應
- **檔案**：
  - `presets/fullstack.yaml`（25 / Next.js / React 18 / SwiftUI / 全棧 SaaS / 100+）+ React/Vue/Next/Fastify/SwiftUI/iOS/Tailwind/Webpack/Vite/PostgreSQL/Cloud Run 等標籤
  - `presets/java.yaml`（25 / Java→C# 跨語言 / OOP / 多語言架構決策 / 18年/100+）+ Java/Spring 概念/JVM/Maven/Gradle/OOP/Design Pattern/UML/Microservices 等標籤
  - `presets/ios.yaml`（25 / Swift / SwiftUI / SpriteKit / Firebase / App Store 上架 / iOS 12+ / 跨平台行動）
  - 同步更新 `build.sh` 的 `preset_for()` case
- **驗收**：6 特化版各有獨立 sidebar 數據與標籤；build.sh 跑完印「(preset)」標記 6 行
- **工時**：~45 分

#### P0-3：INSTRUCTIONS.md 修正 + 補新 SOP
- **動機**：INSTRUCTIONS 寫「1 主版 + 5 特化版」，實際 6 特化版（多了 ios）；數字一致性表寫「12+ 生產系統 / 11 人團隊」與 R-NEXT 後不符；缺 build.sh / presets / template.html5 流程說明
- **檔案**：`INSTRUCTIONS.md`
- **做法**：
  - 修「1 主版 + 5 特化版」→「1 主版 + 6 特化版」（dotnet/python_ai/fullstack/java/ios/security）
  - 重要數據表升 12+ → 30+ systems / 11 人 → 集團 6 子公司
  - 新增「HTML 產製流程」區段：build.sh + template.html5 + presets/*.yaml + resume-style.css 的關係圖
  - 新增「新增特化版 SOP」步驟（建 .md → 建 preset.yaml → 加進 build.sh case → 加進 template topbar nav）
- **驗收**：INSTRUCTIONS.html 規範與實際一致，新接手的副手照著做能成功增版
- **工時**：~30 分

#### P0-4：README.md 升級到 2026 集團
- **動機**：README 是 GitHub/Gitea 進到 repo 第一眼看到的，仍寫「12+ systems / 11 人 / Squid 12 系統生態」嚴重過期
- **檔案**：`README.md`
- **做法**：
  - 副標題 12+ → 30+ Production Systems / 6 Subsidiary Companies
  - 6 個導覽表「核心亮點」欄全部對齊各 .md 摘要
  - 「核心成就」表升 30+ / 6 子公司 / 19 Cloud Run / 集團 LLM Gateway 等
  - 加「使用本 repo」區段：clone → ./build.sh → 開 *.html
- **驗收**：README.html 第一螢幕內看到 30+/6/19 集團規模
- **工時**：~30 分

### 🟡 P1（本輪盡量做）

#### P1-1：Sidebar TOC（章節錨點 + scroll-spy）
- **動機**：主版 / PROJECTS 內容長，招募方拉到底找「工作經歷」要捲很久。加 TOC 大幅提升閱讀體驗
- **檔案**：`template.html5`（塞 $toc$ 進 sidebar） + `resume-style.css`（.toc 樣式 + active 高亮） + `template.html5` 底部塞極簡 inline JS（IntersectionObserver scroll-spy）
- **做法**：
  - pandoc 加 `--toc --toc-depth=2` 旗標到 build.sh
  - template 加 `<section class="card toc-card"><h3>目錄</h3>$toc$</section>`，置於「核心數據」之後
  - CSS `.toc-card ul { list-style:none; padding:0 } .toc-card li { padding: 4px 0; font-size: 13px } .toc-card a { color: var(--ink-2); display: block; padding: 4px 8px; border-radius: 4px } .toc-card a:hover { background: var(--brand-soft); color: var(--brand) } .toc-card a.active { background: var(--brand-soft); color: var(--brand); font-weight: 600; border-left: 3px solid var(--brand-2); padding-left: 5px }`
  - inline JS：用 IntersectionObserver 觀察 main h2，當前章節對應 toc 鏈結加 .active class
- **驗收**：sidebar 出現「目錄」卡，點 link 平滑跳轉，scroll 時當前章節在 toc 上高亮
- **工時**：~1.5 小時

### 🟢 P2（行有餘力或下輪）

#### P2-1：暗色模式切換按鈕
- **動機**：晚上看履歷的招募方喜歡（次要）
- **檔案**：`template.html5` topbar 加 🌙 button + inline JS 一段、`resume-style.css` 加 `[data-theme="dark"]` 變數覆蓋
- **做法**：用 CSS variables；按鈕 toggle `document.documentElement.dataset.theme`，`localStorage.theme = ...` 記憶。dark 模式調 `--bg/--surface/--ink/--ink-2/--line/--code-bg`，accent 色不變
- **驗收**：點 🌙 切換深色，重整保留；對比度達 WCAG AA
- **工時**：~1.5 小時

#### P2-2：大頭照（等老闆給圖）
- **動機**：圖比文字字符更專業
- **檔案**：`assets/avatar.jpg`（老闆給）
- **做法**：丟進去即可，template 已有 `<img>` + onerror fallback
- **驗收**：開頁自動顯示圖
- **工時**：5 分（不含老闆找圖時間）
- **依賴**：老闆提供 jpg

---

## 🚦 派工建議

### 並行可上的 sub-branch
- **Branch A：`feat/specialize-3-more`** — P0-1（3 .md 內容） + P0-2（3 .yaml）
- **Branch B：`feat/docs-sync`** — P0-3（INSTRUCTIONS）+ P0-4（README）
- **Branch C：`feat/sidebar-toc`** — P1-1（TOC + scroll-spy）

### 必須序列
- P0-3 INSTRUCTIONS 必須在 P0-2 完成「新增 preset」步驟後寫，才能反映實際 SOP
- P1-1 必須在 P0-1/P0-2 都完成後做（避免改 template 與 .md 內容修改互相衝突）
- 因為 resume repo 沒有 CI，三 branch 都可直接 merge main，老闆不要求 PR review

### 合併順序建議
1. Branch A merge（內容 + preset 一次到位）
2. Branch B merge（文檔同步）
3. Branch C merge（TOC 大特性）

---

## ✅ CEO 親驗清單（user-facing）

CEO 親手在瀏覽器點以下確認：
1. 開 `resume_fullstack.html` / `resume_java.html` / `resume_ios.html`，看 sidebar 是否各自獨立 + 內容對齊主題（P0-1 + P0-2）
2. 開 6 特化版輪流檢查 sidebar 數據確實 6 種（P0-2 整體）
3. 開 `INSTRUCTIONS.html` 看是否「6 特化版」+「HTML 產製流程」章節（P0-3）
4. 開 `README.html` 第一螢幕看到 30+/6/19（P0-4）
5. 主版 + dotnet 版 sidebar 應出現「目錄」卡，點 link 跳到對應章節，scroll 時 active 高亮（P1-1）
6. 印刷模式（Cmd+P）— TOC 應隱藏不上 PDF（regression check）
7. 響應式 ≤980px sidebar 收合，TOC 折疊不擋內容

---

## ⚠️ 風險與依賴

| 風險 | 影響 | 緩解 |
|------|------|------|
| Java 版定位最弱（無大型 Java 在用），改寫摘要難 | resume_java 內容空泛 | 強調「跨語言設計模式 + Java→C# 遷移」差異化敘事 |
| TOC inline JS 在 ATS PDF 模式可能殘留可見元素 | print 出現多餘 TOC | print CSS 加 `.toc-card { display: none }` |
| pandoc `--toc-depth=2` 套到 PROJECTS / Vue_Interview 會超長 | TOC 上百項變廢 | 對 PROJECTS / Vue 限 toc-depth=1 或關掉 toc |
| INSTRUCTIONS / README 改完忘了 sync HTML | html 版顯示舊文 | build.sh 一定要重跑，commit 含 .html |

---

## ⏱️ 工時總覽

| 優先級 | 任務數 | 估時 |
|-------|-------|------|
| P0 | 4 | ~3.5 小時 |
| P1 | 1 | ~1.5 小時 |
| P2 | 2 | ~1.5 小時（含等老闆給圖）|
| **R+2 合計** | **6** | **~5-6 小時** |

建議本輪做 P0 全部 + P1（TOC），P2 留下輪。

---

## 📊 提交給 CEO 審查欄

- [ ] CEO 同意 R+2 範圍
- [ ] CEO 拍板 P0/P1/P2 項目去留
- [ ] CEO 同意派工順序
- [ ] CEO 同意親驗清單
