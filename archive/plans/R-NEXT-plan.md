# Resume R-NEXT 優化計劃

> 撰寫人：CPO（颶風集團虛擬高管）
> 提交日：2026-05-10
> 上一輪 commit：`cb7a5f1`（h1 隱藏 / h2 圓點 + 光暈 / h3 漸層 bar / h4 ▸ / 日期 pill / fadeUp 動畫）
> 預計合入分支：`main`（resume 為非生產文檔倉，無 CI gate，可直接合）

---

## 🎯 R-NEXT 目標

**讓 6 個特化版（dotnet/fullstack/ios/java/python_ai/security）的內容與排版同步到 2026 集團規模，並補齊 sidebar 互動性（TOC + 下載 PDF + 暗色模式）讓履歷網頁從「看得舒服」進化到「招募方主動操作」。**

---

## 📋 優先級任務清單（共 7 項）

### 🔴 P0（本輪必做）

#### P0-1：6 特化版 .md 內容同步 2026 集團規模
- **動機**：主版 resume.md 已升到 30+ systems / 6 子公司 / Cloud Run 19 services，特化版仍停在 2 月版（12 systems / 11 人）。投遞特化版的招募方會看到嚴重數字落差。
- **檔案**：
  - `resume_dotnet.md`：強化 .NET 8 / Blazor / Hurricane Vault (Go 部分淡化) / Hurricane Pay / pxmart-warehouse / antique-master-web (.NET 後端)
  - `resume_python_ai.md`：強化 FastAPI / Brain LLM Gateway / Anemone / Modelhub / Manta / Tianji / Fiona Pipeline / Aegis ML
  - `resume_fullstack.md`：強化 Next.js / Gyre / Manta React Canvas / antique frontend / Tentacle
  - `resume_java.md`：保持 OOP 跨語言敘事，補 Java ↔ C# ↔ Python 跨平台架構決策
  - `resume_ios.md`：保持 LifeSnap，補 dagongzai-ios（如有 iOS 部分）
  - `resume_security.md`：強化 LIDS PKCE 客製 / Hurricane Vault / Aegis Scanner / Headscale ACL / 6 步 DB 異動流程
- **做法**：每個檔的「專業摘要」「核心成就統計」「技術棧」「重點專案」四節必改；維持各檔原本的差異化定位（dotnet 強 .NET、python_ai 強 AI 等）。
- **驗收**：六檔均更新，年資 25/24 一致，提到 30+ systems / 6 子公司 / Cloud Run / 集團統一基礎設施。
- **工時**：6 檔 × ~25 分鐘 = 約 2.5 小時

#### P0-2：各特化版 sidebar 數據差異化
- **動機**：目前 template.html5 寫死同一組數據（25/24/30+/6/19/100+），特化版招募方看不到對應領域亮點。
- **檔案**：`template.html5` + `resume-style.css`（如需新 css class）
- **做法**：模板加 `$if(stats)$ ... $endif$` 條件，讓各 .md 在 YAML front matter 帶 `stats:` 自訂；未填則用主版預設。同時補 `sidebar_tags:` 自訂技術標籤，`sidebar_summary:` 自訂副標。實作時建議 YAML 寫死六組 preset，build 腳本選帶 `--metadata-file <preset>.yaml`。
  - .NET 版示例：`24 年 .NET / 12 .NET 系統 / 5 客戶上線 / EF Core Migration / ...`
  - Python_AI 版示例：`8 年 Python / 5 LLM 整合系統 / Brain Gateway / Modelhub`
  - Security 版示例：`OAuth2 自建 / LIDS PKCE / Hurricane Vault / Aegis Scanner / 6 步 DB 流程`
- **驗收**：開 6 特化版 .html 時 sidebar 數據 / 標籤 / 副標各不同。
- **工時**：模板 + 6 preset = 約 2 小時

### 🟡 P1（本輪盡量做）

#### P1-1：Sidebar 加 TOC（章節錨點 sticky 跳轉）
- **動機**：主版 resume 內容長，招募方拉到底找「工作經歷」要捲很久。
- **檔案**：`template.html5` + `resume-style.css` + 需要 build 腳本掃 .md 的 `## ` 行生成 TOC（或用 pandoc `--toc` 但要塞進 sidebar）
- **做法**：用 pandoc `--toc --toc-depth=2`，於模板 `$toc$` 插入 sidebar 區塊；CSS 加 `.toc` 樣式（編號、active 狀態 highlight、scroll-spy by IntersectionObserver in tiny inline JS）。
- **驗收**：sidebar 出現「目錄」卡，點擊跳到對應章節，scroll 時當前章節 highlight。
- **工時**：1.5 小時

#### P1-2：下載 PDF 按鈕
- **動機**：招募方常想要 PDF 而非網頁，目前要自己 Cmd+P 不直觀。
- **檔案**：`template.html5`（topbar 加按鈕）+ `resume-style.css`（按鈕樣式）+ inline JS 一行 `window.print()`
- **做法**：topbar 右側加 `📥 下載 PDF`，onclick `window.print()`。Print CSS 已 ATS-friendly，會直接觸發 Chrome 列印對話框，「儲存為 PDF」即可。
- **驗收**：點按鈕跳出列印視窗，預覽是 A4 ATS 版面。
- **工時**：30 分鐘

#### P1-3：大頭照接圖
- **動機**：「王」字稍嫌陽春，正式履歷應放大頭照。
- **檔案**：`template.html5`（avatar 區塊邏輯）+ `assets/avatar.jpg`（待老闆提供）
- **做法**：模板改 `<div class="avatar"><img src="assets/avatar.jpg" alt="王英豪" onerror="this.parentNode.textContent='王'"></div>`；無圖時 fallback「王」字。
- **驗收**：放圖時顯示圖，沒圖時 fallback。
- **工時**：20 分鐘（不含老闆找照片時間）
- **依賴**：老闆提供 `assets/avatar.jpg`（建議 400×400, square, head shot）

### 🟢 P2（行有餘力）

#### P2-1：暗色模式切換按鈕
- **動機**：晚上看履歷的招募方會喜歡。
- **檔案**：`template.html5`（topbar 加 toggle button）+ `resume-style.css`（`@media (prefers-color-scheme: dark)` + `[data-theme="dark"]` 雙路徑）+ inline JS 一段（toggle + localStorage 記憶）
- **做法**：用 CSS variables，dark 模式時改 `--bg / --surface / --ink / ...`；按鈕 toggle `document.documentElement.dataset.theme`。
- **驗收**：點 🌙 按鈕切換深色，色階合理對比達 WCAG AA。
- **工時**：1.5 小時

#### P2-2：build.sh 自動化腳本
- **動機**：每次手動敲 11 行 pandoc 指令重複，且未來 P0-2 加 metadata-file 後更繁瑣。
- **檔案**：`build.sh`（新建）+ `Makefile`（可選）
- **做法**：bash for loop 跑 11 個檔，自動掛對應 preset metadata-file，最後 echo 完成清單。
- **驗收**：`./build.sh` 跑完，11 個 .html 全部最新。
- **工時**：30 分鐘

---

## 🚦 派工建議（並行 vs 序列）

### 並行可上的 sub-branch
- **Branch A：`feat/specialize-content`** — P0-1（6 特化版內容同步）— 純改 .md
- **Branch B：`feat/sidebar-stats`** — P0-2（sidebar preset 差異化）— 改 template + 加 metadata yaml
- **Branch C：`feat/topbar-buttons`** — P1-2 + P2-1（PDF 下載 + 暗色模式按鈕）— 都動 topbar
- **Branch D：`feat/sidebar-toc`** — P1-1（TOC + scroll-spy）— 動 template + css

### 必須序列
- **P0-2 完成 → build.sh（P2-2）才好寫**：build.sh 要能呼叫各 preset metadata-file，P0-2 訂出 yaml 結構後 build.sh 才能定型。
- **P1-3 大頭照**：等老闆給 jpg；無圖則 fallback 邏輯先合。

### 合併順序建議
1. Branch A merge（內容更新優先，立即可投履歷）
2. Branch B merge（差異化）
3. Branch C merge（互動按鈕）
4. Branch D merge（TOC，最費工但最有感）
5. P2-2 build.sh（最後收尾）

---

## ✅ CEO 親驗清單（user-facing）

CEO 親手在瀏覽器點以下確認：
1. 開 `resume.html`、`resume_dotnet.html`、`resume_python_ai.html`、`resume_security.html` 各 1 個，看 sidebar 數據是否各不同（P0-2 驗收）
2. 6 特化版各看「核心成就統計表」是否反映 30+ systems / 6 子公司（P0-1 驗收）
3. 點 topbar「📥 下載 PDF」應跳出列印對話框，預覽是 A4 ATS 版面（P1-2）
4. 點 topbar「🌙」應切換暗色，再點切回；F5 重整後狀態保留（P2-1）
5. 拖瀏覽器寬度到 ≤980px，sidebar 應收合到上方；TOC 不擋內容（P1-1 + 響應式 regression）
6. Sidebar TOC 點任一章節，視窗應平滑滾到對應位置；當前章節在 TOC 上要 highlight（P1-1）
7. 印刷模式（Cmd+P）— sidebar/topbar 應隱藏，主內容轉純文字 ATS（regression check）

---

## ⚠️ 風險與依賴

| 風險 | 影響 | 緩解 |
|------|------|------|
| 6 特化版內容同步耗時最多，可能跑超預期 | P0-1 拖到下一輪 | 可拆兩半：先做 dotnet/python_ai/security（最常投）3 檔，java/fullstack/ios 下輪補 |
| pandoc `--toc` 預設樣式可能不符 sidebar 風格 | TOC 醜需重套 css | 寧可手寫 TOC inject 腳本，也別用 pandoc 預設 |
| inline JS（toggle/scroll-spy）讓單純 html 多帶腳本 | 部分招募方平台會 strip JS | JS 全部 progressive enhancement，移除後不影響核心可讀性 |
| 6 特化版 yaml metadata 結構若早期沒定型，後面要重 render | 重工 | P0-2 先定 schema 並交 CEO 審 |
| 老闆大頭照沒給 | P1-3 滑出本輪 | fallback「王」字邏輯先合，圖隨後補 |

---

## ⏱️ 工時總覽

| 優先級 | 任務數 | 估時 |
|-------|-------|------|
| P0 | 2 | ~4.5 小時 |
| P1 | 3 | ~3.5 小時（含大頭照不含老闆找圖時間）|
| P2 | 2 | ~2 小時 |
| **R-NEXT 合計** | **7** | **~10 小時** |

建議本輪只啃 P0 + P1（~8 小時），P2 留下輪。

---

## 📊 提交給 CEO 審查欄

- [ ] CEO 同意 R-NEXT 範圍
- [ ] CEO 拍板 P0/P1/P2 項目去留
- [ ] CEO 同意派工順序與並行策略
- [ ] CEO 確認大頭照交付（或 fallback 先上）
- [ ] CEO 同意親驗清單
