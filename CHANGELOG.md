# Changelog

接案工作室落地頁版本紀錄。

---

## v7.2 — 2026-05-21

- 標準版手機 RWD：修 `@media (max-width:600px)` grid 兩欄水平溢出。`.sidebar`/`.main` 預設 `min-width:auto` 卡在 min-content（sidebar 被固定頭像＋不換行英文名撐住 ~342px、main 被 diff-card 撐住），360px 級手機水平溢出。改 `.sidebar`/`.main` 加 `min-width:0`、`.profile` 加 `flex-wrap:wrap` 放行縮放（sidebar/main 342→222px，docW 354→263px）

---

## v7.1 — 2026-05-21

- 設計版（深/亮）FAQ 補第 7 題「工作室規模這麼小，萬一你檔期滿了或臨時有狀況？」，與標準版 v7.0 對齊（faq-cta.jsx + 兩 html 的 FAQPage JSON-LD，皆 7 題）。三版 FAQ 一致

---

## v7.0 — 2026-05-21

- 標準版 FAQ 加第 7 題：「工作室規模這麼小，萬一你檔期滿了或臨時有狀況？」—— 補上接案決策最大的未解疑慮（單人工作室的 bus-factor）。答案用頁面既有事實（同時段限 2 案 / 交付即文件化可轉手 / 書面決策紀錄）。同步進 FAQPage JSON-LD 與中英 i18n

---

## v6.9 — 2026-05-21

- hero / hire-lede 收尾句 reframe：「把這套帶進您的團隊」→「這套交付速度，現在就能接上您的專案」。原句像方法論移植（顧問/培訓），與接案 offer（我們幫你交付）錯位；改成把好處收束到「客戶的專案」。設計版 hero.jsx + 標準版 hire-lede 同步（英文版本已是 to your project）

---

## v6.8 — 2026-05-21

- 設計版修底部 CTA 死按鈕：faq-cta.jsx 收尾 CTA「預約諮詢 · 30 min free」「寄信先聊聊」原為無動作 `<button>`，改 `<a href=mailto>`（主 CTA 帶預填諮詢信、ghost 純 email）。深/亮共用，同時生效

---

## v6.7 — 2026-05-21

- 標準版開場 pitch（hire-lede）後加主 CTA「預約免費 30 分鐘諮詢 →」+ 風險反轉微文案。原本主欄第一個出現的不是預約入口、而是把訪客導去站外（LF Pipeline）；現在趁興趣峰值就地給轉換路徑

---

## v6.6 — 2026-05-21

- 設計版修 hero 主 CTA 死按鈕：「預約諮詢」「進 LF Pipeline 看現場」原為無 onClick/無連結的 `<button>`，點了沒反應 —— 整頁最重要的轉換元件卻是壞的。改成 `<a>`（預約諮詢→#cta、LF Pipeline→官網 pipeline 頁）
- hero CTA 下方加風險反轉微文案「免費 30 分鐘 · 不綁約 · 不 fit 直接說」—— 降低主 CTA 摩擦（原本只有頁尾才有此訊息）

---

## v6.5 — 2026-05-20

- 標準版加 i18n 中/英同頁切換：vs-switcher bar 右側加「中文 | EN」鈕，190 個 data-i18n 元素 + EN 字典，localStorage 記偏好、同步 `<html lang>`；meta/版號/專有名詞不切
- 設計版（深/亮）移除「Design tokens 說明書」區塊 —— claude.ai/design 殘留的設計稿，對接案訪客無意義（app.jsx 移除 render + StickyTOC/MobileMenu 項 + 兩 html 的 script tag）

---

## v6.4 — 2026-05-20

- 三版 meta-live 橫幅修正自動化頻率：loop 排程改為「resume 每 30 分鐘」（cron `8,38`），橫幅卻仍寫「每 15 分鐘」。改為「每 30 分鐘自動跑一輪」與實際排程一致

---

## v6.3 — 2026-05-20

- 設計版·亮(index-light.html) OG 補 `og:locale` content="zh_TW"，對齊標準版 v6.2

---

## v6.2 — 2026-05-20

- 標準版 OG 補 `og:locale` content="zh_TW" — 社群平台（Facebook 等）依此判定內容語系/地區，原 OG 標籤齊全僅缺此項

---

## v6.1 — 2026-05-20

- 設計版 WHY 對照表第三欄表頭「HurricaneSoft Ltd.」（英文、會換 2 行）改「颶風軟體」，與前兩欄「個人接案 / 外包公司」平行（同為中文短名、單行、表頭對齊）

---

## v6.0 — 2026-05-20

- 標準版行動裝置：單欄堆疊（≤980px）時隱藏側欄目錄卡 `.toc-card`。TOC 是桌機 sticky 側欄導覽用，堆疊在內文上方只是把主打 pitch 往下推（平板實測 sidebar 1204px、主內容被擠到 1228px 處）

---

## v5.9 — 2026-05-20

- 設計版 footer 補「最後更新」時間戳（2026/05/20 20:23），對齊標準版 — meta-live 橫幅宣稱「每 15 分鐘自動跑一輪」，footer 顯示實際更新時間作佐證

---

## v5.8 — 2026-05-20

- 設計版·亮修信任數字對比：`.trust-cell .count`（25/100+/30+…）原用 var(--cyan) #0EA5E9，11px 小字在白底對比僅約 3:1（未達 AA）。亮版 override 改 #0369A1 + font-weight:600，可讀且更醒目

---

## v5.7 — 2026-05-20

- 三版 meta-live 橫幅修正自動化頻率：實際 cron 為 `7-59/15`（每 15 分鐘），橫幅卻寫「每半小時」。改為「每 15 分鐘自動跑一輪」— 頁面核心賣點橫幅須與實際排程一致（且 15 分鐘更有力）

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
