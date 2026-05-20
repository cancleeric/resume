# Changelog

接案工作室落地頁版本紀錄。

---

## v5.6 — 2026-05-20

- 設計版修服務卡標題參差：`.service-header` 的 `margin-bottom:auto` 把卡片內容推到底部對齊，各卡內容高度不同導致同列標題高低不一。移除後內容改頂部對齊（num↔內容間距由 service-body margin-top 保留），標題整齊（深/亮共用 jsx）

---

## v5.5 — 2026-05-20

- 標準版修服務卡對齊：`.service-card h3` 標題 1~3 行不等（「多租戶 SaaS 從 0 到上線」窄卡換 3 行），同列描述文字起始參差。加 line-height + min-height:4.4em 預留統一標題區，親測同列描述 y 對齊

---

## v5.4 — 2026-05-20

- 設計版·深(index.html) 加 FAQPage JSON-LD — 三版 FAQPage 結構化資料現已全數補齊

---

## v5.3 — 2026-05-20

- 設計版·亮(index-light.html) 加 FAQPage JSON-LD（6 組問答，文字對齊 faq-cta.jsx），對齊標準版 v5.2

---

## v5.2 — 2026-05-20

- 標準版加 FAQPage JSON-LD（6 組問答結構化），搜尋引擎可理解 FAQ 內容、潛在 FAQ rich result — 內容對齊頁面 6 個 details

---

## v5.1 — 2026-05-20

- 設計版·深(index.html) 加 self-referencing canonical — 三版 canonical 現已全數補齊

---

## v5.0 — 2026-05-20

- 設計版·亮(index-light.html) 加 self-referencing canonical，對齊標準版 v4.9

---

## v4.9 — 2026-05-20

- 標準版加 `<link rel="canonical">`（self-referencing）— 三版內容相似易被當重複內容，canonical 明確宣告 resume.html 為自身正規 URL，避免帶參數時排名訊號分散

---

## v4.8 — 2026-05-20

- 設計版·深(index.html) `<title>` 補價值主張：原「HurricaneSoft Ltd. · 颶風軟體有限公司」只有公司名零關鍵字 → 改為「颶風軟體有限公司 · HurricaneSoft Ltd. — 開發流程自動化接案 · 20× 產出」對齊標準版

---

## v4.7 — 2026-05-20

- 設計版·亮(index-light.html) 加 `<meta name="theme-color">`（#064e3b）— 三版 theme-color 現已全數補齊一致

---

## v4.6 — 2026-05-20

- 設計版·深(index.html) 加 `<meta name="theme-color">`（#064e3b），對齊標準版 v4.4 — 行動瀏覽器 UI 列跟頁面配色

---

## v4.5 — 2026-05-20

- 設計版·亮(index-light.html) OG 補完 `og:image:width/height/alt`，對齊深版 v4.3 — 三版 OG image 標籤現已一致

---

## v4.4 — 2026-05-20

- 標準版加 `<meta name="theme-color">`（#064e3b，對齊頂部 meta-live 深綠橫幅）— 行動瀏覽器 UI 列跟著頁面配色，更有完成度

---

## v4.3 — 2026-05-20

- 設計版·深(index.html) OG 補完：補上 `og:image:width/height/alt`（原只有 og:image），與標準版對齊，社群預覽卡渲染更可靠

---

## v4.2 — 2026-05-20

- 設計版移除 PreviewHint 殘留 dev scaffolding：頂部「💡 Present 模式可拖拉視窗試 RWD」橫幅是 claude.ai/design 的開發工具提示，對真實接案訪客無意義，從 app.jsx 移除（深/亮兩版同時生效）

---

## v4.1 — 2026-05-20

- 標準版修 h1 SEO：`.main h1`（主標題）原為 `display:none`，會被搜尋引擎降權、螢幕報讀器略過 → 改 visually-hidden（clip）成為有效 h1；print 版同步加 un-hide 讓 PDF 顯示標題

---

## v4.0 — 2026-05-20

- 設計版修錨點：`.trust-section` 只有 56px padding-top（其他 section 都 140px），點 TOC「TRUST」標題被 sticky-header 蓋住。加 scroll-margin-top:84px 對齊其他 section

---

## v3.9 — 2026-05-20

- 設計版·亮修對比：why-studio 的 `.tone-icon.bad` 用硬編碼淺橘 #FF9E7E（深色主題色），亮版近白底上糊掉。亮版 override 改用 var(--orange) 正色橘

---

## v3.8 — 2026-05-20

- 標準版修錨點偏移：section `<h2>` 原本沒有 scroll-margin-top，點 topbar/TOC 導覽時標題被 sticky-header（meta-live+topbar ~135px）整個蓋住。加 scroll-margin-top 150px（手機 196px）

---

## v3.7 — 2026-05-20

- 設計版修 LF Pipeline 死連結：app.jsx 三處（Nav / BottomDock / MobileMenu）的 LF Pipeline 連結原為 `href="#"`，改指向官方作品展示頁 hurricanesoft.com.tw/pipeline（深/亮兩版同時生效）

---

## v3.6 — 2026-05-20

- 設計版報價 CTA 修死按鈕：pricing.jsx 三張卡的 CTA 原為無動作 `<button>`，改成錨到聯絡區的 `<a href="#cta">`（深/亮兩版同時生效）

---

## v3.5 — 2026-05-20

- 標準版報價區「專案制 / 顧問諮詢」兩張卡補 ghost 樣式 CTA（討論專案範圍 / 預約諮詢時段）— 補齊三張方案卡的行動入口，主力卡實心 CTA 仍最突出

---

## v3.4 — 2026-05-20

- 設計版·深(index.html) 加 JSON-LD 結構化資料 — 三版 favicon + SEO meta + JSON-LD 現已全數補齊一致

---

## v3.3 — 2026-05-20

- 設計版·亮(index-light.html) 加 JSON-LD 結構化資料（ProfessionalService schema）— 對齊標準版 v3.2

---

## v3.2 — 2026-05-20

- 標準版加 JSON-LD 結構化資料（ProfessionalService schema：公司名/統編/成立年/負責人/地址/報價/聯絡）— 讓搜尋引擎可產生 rich result

---

## v3.1 — 2026-05-20

- 設計版·深(index.html) 加 inline SVG favicon — 三版 favicon 現已全數補齊一致

---

## v3.0 — 2026-05-20

- 設計版·亮(index-light.html) 加 inline SVG favicon（公司 cyan 雙橢圓 logo，data URI）— 對齊標準版 v2.9

---

## v2.9 — 2026-05-20

- 標準版加 inline SVG favicon（公司 cyan 雙橢圓 logo，data URI 免新增檔案）— 原本分頁/書籤顯示空白預設圖示

---

## v2.8 — 2026-05-20

- 設計版·深(index.html) 補上 SEO / 社群 meta（description / keywords / OG / Twitter card），與亮版 v2.7 對齊 — 三版 head meta 現已一致完整

---

## v2.7 — 2026-05-20

- 設計版·亮（index-light.html）補上 SEO / 社群 meta（description / keywords / OG / Twitter card）— 原本 head 只有 title，分享到社群無預覽卡、搜尋無描述

---

## v2.6 — 2026-05-20

- 移除所有客戶 / 受僱單位名稱（信保基金 / 游泳救生協會 / d-media / 東岸互動 / 日商分公司等），改以產業類別匿名描述（政府信用保證機構 / 全國性協會 / 數位媒體 等）— 三版同步

---

## v2.5 — 2026-05-20

- 標準版報價區主力卡（月費 Retainer）加 CTA 按鈕「預約這個方案 — 免費 30 分諮詢 →」，補上方案決策點到行動的斷層

---

## v2.4 — 2026-05-20

- 比對颶風官網（hurricanesoft.com.tw）後補上缺漏業務線：新增「政府 AI 補助計畫輔導」服務（SBIR / AI 躍昇 / 數位轉型 / 智慧製造，計畫書到系統落地全程）
- 標準版以全寬虛線卡呈現（區隔開發接案與補助諮詢）；設計版補成第 8 項服務，剛好補滿 grid（2 featured + 6 small）

---

## v2.3 — 2026-05-20

- 設計版（深 / 亮）meta live banner 改 sticky 常駐頂部，nav 用 CSS var 動態接在其下方（對齊標準版 sticky-header）

---

## v2.2 — 2026-05-20

三版面架構 + meta live banner。

### 三版面
- 新增「設計版」（claude.ai/design v2 升級稿）— 深色 `design/index.html` + 亮色 `design/index-light.html`
- 三版線上切換器 `.vs-switcher`（標準 / 設計深 / 設計亮）
- 設計版內容全面對齊標準版（公司 / 統編 / 14+ 產品 / 報價 / stats）

### Meta Live Banner
- 頂部加「100% LLM 自主開發 + 每半小時自動跑一輪」綠色 banner
- 展開 7 步 pipeline（載入 → 審查 → Chrome MCP 親測 → 修改 → commit → push → 部署）
- meta banner + topbar 包成 `.sticky-header` 常駐頂部

### 修正
- 設計版 logo 換官方 cyan 雙橢圓 SVG（原為 design AI 編的橘色方塊）
- 設計版 grid-bg 格線穿透 banner → z-index 修正
- 設計版 bottom-dock 捲動自動隱藏（修浮動 dock 蓋住內容）
- CountUp KPI 顯示 -1 負數 bug（clamp val ≥ 0）
- service / rate / diff grid minmax 調整（修中等 viewport 2+N fallback）
- contact-cta__item 內容溢出
- 集團架構 ASCII tree → 設計化 group-tree 元件
- 技術棧補 GitHub 119 repos 掃出的漏項（Kotlin / Solidity / Redis / ClickHouse / AutoGen 等）

---

## v2.1 — 2026-05-20

`/loop 15m` 自動迭代 30+ 輪後的收斂版本。

### Highlights
- AI Hero 重新錨定為「開發流程自動化實證」，stats 4 格全 quantitative
- 14+ AI/SaaS 產品上資源（Squid / Manta / Conch / 打工仔 / Abacus / Tianji / AICAD / fiona-radar / fiona-pipeline / gyre / Brain / Modelhub / claude-agents / Anemone）
- 公司全名與統編強化（颶風軟體有限公司 · 80289779）
- 「主理人」→「負責人」全文一致（台灣 B2B 正式用語）
- profile sidebar 改 horizontal business card 排版 + 96px avatar face-centered

### CSS Bugs Fixed
- `.sidebar` flex-shrink:1 把 children 壓擠成 padding-only（profile 32→145px）
- `.main strong` 同 specificity 蓋掉 ai-hero / availability 的 brand color
- topbar `.topbar__nav--ext` hover 被一般 a:hover 染白
- avatar 從幾何中心 crop 改 PIL face-centered

### Conversion
- 5 個 CTA 入口（topbar 預約諮詢 / AI Hero / availability / contact-cta primary email / footer secondary）
- 預填 mailto 表單（6 欄填 2 分鐘）
- 信任要件 stats 重排（100+ 企業客戶上前）
- vs Freelancer / Agency / In-house 3 卡同行齊高 + featured 居中
- footer secondary CTA 行（📧 諮詢 / 📞 / 🌪️ LF Pipeline ↗）

---

## v2.0 — 2026-05-19

接案版啟動 pivot。

### Big restructure
- 員工求職履歷 → 工作室接案 landing page
- 6 個求職特化版（dotnet / java / ios / python_ai / fullstack / security）移入 `archive/`
- 主軸轉為「開發流程自動化 · 20× 產出」
- 治理細節全面模糊化（兩層 CI/CD / 6 步 DB / 140 分 / C-suite 角色 / squid_dev_network / Aegis / Auth0 對比 / Kaggle 等不再具體露出）
- 期望年薪 NT$ 2.4M → 接案報價 US$ 10K/月
- 服務項目 / 接案模式 / 為什麼選工作室 / FAQ / 預約諮詢 5 大新 sections
- SEO + OG + Twitter Card meta tags

---

## v1.x — 2026-04 之前

員工求職版，6 個特化 variant（已封存於 `archive/`）。

---

**版號規則**：v<major>.<minor> · major = positioning shift / minor = polish iteration batch
