# Changelog

接案工作室落地頁版本紀錄。

---

## v7.40 — 2026-05-21

- 設計版·深 SEO：`index.html` 缺 `og:locale`（亮版 index-light.html 有）。補上 `<meta property="og:locale" content="zh_TW">`，深/亮兩版 OG 標籤一致

---

## v7.39 — 2026-05-21

- 三版修事實錯誤：可交付清單的「Brain — 多代理 AI 協作框架」描述過時錯誤。經查 Wiki（颶核智腦平台架構 v1.5）與 Gitea repo，更正為「颶核智腦平台 — 集團 AI 智腦平台」（Anemone 電話總機＋Brain Cloud 多租戶管理＋Brain LLM Gateway 四層架構）。standard `item-brain` zh/en + 設計版 `sys.brain.tagline` + systems.jsx 卡同步

---

## v7.38 — 2026-05-21

- 設計版·亮 SEO：`index-light.html` 的 `<title>` 原為半成品「HurricaneSoft Ltd. · 颶風軟體有限公司 · Light」（公司名重複＋開發標記、無賣點）。改為與深版一致的完整標題「颶風軟體有限公司 · HurricaneSoft Ltd. — 開發流程自動化接案 · 20× 產出」

---

## v7.37 — 2026-05-21

- 設計版（深/亮）修對比：服務項目編號 `.service-num`（12px mono）原用 `--text-low`，兩版對比未達 AA。改用 `--text-mid`

---

## v7.36 — 2026-05-21

- 設計版（深/亮）修對比：hero pipeline 階段列英文小標 `.stage-row .label .en`（10px mono）原用 `--text-low`，兩版對比僅 ~3.3-3.6:1 未達 AA。改用 `--text-mid`

---

## v7.35 — 2026-05-21

- 設計版（深/亮）修對比：FAQ 題號 `.faq-num`（Q.01 等，11px mono）原用 `--text-low`，兩版對比僅 ~3.3-3.6:1 未達 AA。改用 `--text-mid`

---

## v7.34 — 2026-05-21

- 設計版（深/亮）修對比：系統卡技術棧標籤 `.sys-card .stack span`（10.5px mono chip）原用 `--text-low`，深版在 surface-2 上對比僅 ~3.5:1 未達 AA。改用 `--text-mid`

---

## v7.33 — 2026-05-21

- 設計版（深/亮）修對比：hero 英文副標題 `.hero-title-en`（h1 下方，clamp 20–28px）原用 `--text-low`，亮版白底對比僅 ~3.3:1，窄螢幕降至 ~20px 屬一般文字未達 AA。改用 `--text-mid`

---

## v7.32 — 2026-05-21

- 設計版（深/亮）修對比：信任要件區指標英文副標 `.trust-cell .en`（YEARS / PROD SYS 等，10px mono）原用 `--text-low`，深版對比僅 ~3.6:1 未達 AA。改用 `--text-mid`

---

## v7.31 — 2026-05-21

- 設計版（深/亮）修對比：CTA 區聯絡資訊標籤 `.cta-meta-row .k`（PHONE / EMAIL / LIVE PIPELINE，10px mono）原用 `--text-low`，兩版對比僅 ~3:1 未達 AA。改用 `--text-mid`

---

## v7.30 — 2026-05-21

- 設計版（深/亮）修對比：定價卡方案標籤 `.price-label`（PROJECT / ADVISORY，11px mono）原用 `--text-low`，深版卡底對比僅 ~3.6:1 未達 AA。改用 `--text-mid`（深版 ~7.7:1，亮版亦達標）

---

## v7.29 — 2026-05-21

- 設計版（深/亮）修對比：hero 主 CTA 下方信任微文案 `.hero-cta-note`（13px）原用 `--text-low`，亮版白底對比僅 ~3.3:1 未達 AA。改用 `--text-mid`（亮版 ~7.5:1，深版亦達標）

---

## v7.28 — 2026-05-21

- 標準版 SEO：`<meta name="description">` 原 ~95+ CJK 字過長，搜尋結果會截斷尾段、把轉換關鍵資訊「月費 US$ 10,000、可開發票」切掉。重寫為精簡版（~65 字），把「自動化接案／一人扛團隊／月費／可開發票」鉤子前置確保不被截斷

---

## v7.27 — 2026-05-21

- 設計版·深修 CSS bug：`index.html` 的 `.meta-live` banner 有與亮版相同的舊版殘留 CSS（含 dead `.meta-live__text` 選擇器），把容器從 block 強制成 `display:flex`，將兩段式 banner 擠成並排一列。移除殘留規則，恢復兩段式堆疊（深/亮兩版至此一致）

---

## v7.26 — 2026-05-21

- 設計版·亮修 CSS bug：`.meta-live` banner 有一組舊版殘留 CSS（含已不存在的 `.meta-live__text` 選擇器）把容器從 block 強制成 `display:flex`，將「標題列＋分隔線＋七步流程列」兩段式 banner 擠成並排一列。移除殘留規則，恢復兩段式堆疊（深版 index.html 有相同殘留，留待後續 B 輪處理）

---

## v7.25 — 2026-05-21

- 標準版修對比：預約諮詢區主 CTA 下方信任微文案 `.contact-cta__note`（「免費 30 分鐘諮詢 · 回信 24 小時內 · 無壓力」，13px）原有 `opacity: 0.88`，白字在藍色漸層底上對比僅 ~4.4:1 未達 AA。移除 opacity，純白 #fff 達 ~5.2:1

---

## v7.24 — 2026-05-21

- 設計版（深/亮）修對比：why-studio 對照欄徽章 `.badge-pill`（vs Freelancer 等，10px）原用 `--text-low`，深版對比僅 ~3.4:1 未達 AA。改用 `--text-mid`（深/亮兩主題皆 ~7:1）

---

## v7.23 — 2026-05-21

- 設計版·亮 修對比：hero-sub 的 pipeline 字 `.stage`（SPEC/DESIGN/…6 個，13px）用 `var(--orange)` #FF6B35，亮底對比僅 ~2.8:1。亮版加深橘覆寫 `#B14A0E !important`（~5.45:1，達 AA）

---

## v7.22 — 2026-05-21

- 標準版修對比：弱文字 `--muted` #64748b 在 sidebar 帶色卡背景上對比僅 4.2–4.4（信任要件統計標籤、版號行皆未達 AA）。darken 為 #586473，stat__label / sidebar__foot / meta__k 全部拉到 5.3–6.0

---

## v7.21 — 2026-05-21

- 設計版·深 修主 CTA 對比：深版 nav CTA「預約諮詢」被 nav 規則覆寫成 `--text-mid` 灰字配橘底僅 **1.14:1**（幾乎不可見）。`.btn-primary` 的 `color:#110800` 加 `!important` 蓋過覆寫，4 個 btn-primary 全部 7:1（接續 v7.20 亮版同修法）

---

## v7.20 — 2026-05-21

- 設計版·亮 修主 CTA 對比：`.btn-primary` 橘底（#FF6B35）配白字僅 ~3:1、nav CTA 還被覆寫成灰字僅 ~2.6:1，皆未達 AA。改為橘底深字 `#110800 !important`（~7:1，比照設計系統 orange badge），一併蓋過 nav 覆寫

---

## v7.19 — 2026-05-21

- 設計版（深/亮）systems 區 Claude Agents 移除禁止項：metric 欄原為 C-suite 角色清單「技術／營運／商務／產品／資安／法務」，改為通用「多角色 AI 副手庫」；tagline「AI 高管副手角色庫」去掉「高管」與標準版 v7.18 一致（dict-zh/en 各 2 處）

---

## v7.18 — 2026-05-21

- 標準版「可交付系統」19 項產品描述細度正規化：原本 Conch/Squid/打工仔/Abacus 等被塞滿細節（測試拆解、檔案行數、爬蟲站台清單），Tianji/LIDS/Vault 等只有一句帶過。全部統一為「名稱（版本）— 定位　3 段亮點」模板，長度趨於一致（zh + EN 各 19 項）。並移除 Claude Agents 描述中的 C-suite 角色清單

---

## v7.17 — 2026-05-21

- 三版語言切換鈕統一：標準版原為 vs-switcher 雙鈕（中文｜EN）、設計版原為 Nav 單鈕——統一為「vs-switcher 內單鈕 toggle」。標準版雙鈕改單鈕（toggleLang），設計版語言鈕從 Nav 移到各自 vs-switcher，core.js 設鈕標籤。三版位置與形式一致

---

## v7.16 — 2026-05-21

- 標準版 EN 模式隱藏集團組織圖的子公司中文名（颶鋒科技…等 6 個 `<em>`，英文讀者無意義）：一條 `html[lang="en"]` CSS rule 解決，與設計版 studio 一致

---

## v7.15 — 2026-05-21

- 設計版·亮 修對比：`.sys-card .metric` 與 `.ai-tag` 的 cyan 文字（#0EA5E9）在淺青底上對比僅 ~2.8:1，亮版加深青覆寫 `#0369A1`（~5.9:1，達 AA），比照 v7.11 `.tl-kind` 做法。清掉先前標記的待辦

---

## v7.14 — 2026-05-21

- 設計版（深/亮）EN hero 文案修正：英文 hero-sub 用了中文全形雙破折號 `——`，改為英文排版正確的空格 em-dash ` — `（hero.jsx EN 分支）

---

## v7.13 — 2026-05-21

- 標準版「為什麼選工作室」對照卡標籤統一：`vs In-house 招募` 改為 `vs In-house`，與另兩張卡（vs Freelancer / vs Agency）一致的純英文格式，並消除 EN 模式殘留中文「招募」

---

## v7.12 — 2026-05-21

- 設計版（深 + 亮）新增英文 i18n：全域 `window.t()` 字典機制（`design/i18n/core.js` + `dict-zh.js` + `dict-en.js`，271 key 中英對齊）、Nav 加中/英切換鈕、切換寫 localStorage + reload。13 個 jsx 元件 + 兩個 html 的 meta-live／vs-switcher／meta／JSON-LD 全部接上 i18n。深/亮 × 中/英 四組合親測通過（EN 模式殘留 CJK 僅切換鈕本身）。流程：分析→CPO 計劃→CEO 審→3 dev 開發→CEO 親測修補

---

## v7.11 — 2026-05-21

- 設計版·亮 修對比：timeline 案例類型標籤 `.tl-kind`（12px）原用 `var(--cyan)` #0EA5E9，在白色 tl-card 上對比僅 ~2.8:1（未達 AA）。亮版加深青覆寫 `#0369A1 !important`（~5.9:1），比照既有 `.trust-cell .count` 做法

---

## v7.10 — 2026-05-21

- 設計版（深/亮）信任要件列修視覺層次：六格統計的數字（count）原僅 11px，比標籤名（15px）還小，數字反成最小字。放大為 34px 主角字級、標籤縮為輔助，並把數字移到格內最上方（trust.jsx）

---

## v7.9 — 2026-05-21

- 三版 meta-live 橫幅步驟 ③ 移除具體工具名「Chrome MCP」改為通用「瀏覽器自動化親測」（EN：browser automation live test），避免公開頁洩漏內部工具鏈被同業複製

---

## v7.8 — 2026-05-21

- 三版 copy 修正：政府補助服務卡列出的方案「智慧製造」改為「SIIR」——2026 AI 補助四大方案實為 SBIR／AI 躍昇／數位轉型／SIIR，與颶風官網一致。改 resume.html（zh + EN）+ design/src/services.jsx，三版同步

---

## v7.7 — 2026-05-21

- 設計版·亮 修 CTA 聯絡面板背景：`.cta-meta-row` 原硬寫死 `rgba(8,9,12,0.5)`（近黑半透明，為深版設計），在亮版變成淺色頁面中的深灰方塊。改用 theme-aware 的 `var(--surface-2)`，icon 內框改 `var(--surface-3)` 保持層次（faq-cta.jsx，深/亮皆正確）

---

## v7.6 — 2026-05-21

- 設計版（深/亮）CTA 區聯絡面板可點擊化：電話／Email／Live Pipeline 三列原為純文字 `<div>`，改為 `<a>`（tel:／mailto:／pipeline 連結）+ hover 態，手機可直接點擊撥號／寄信（faq-cta.jsx）

---

## v7.5 — 2026-05-21

- 標準版 修對比：品牌紅 `--accent` #ef4444 配白字僅 3.76:1（未達 WCAG AA），影響 topbar CTA「預約諮詢」、status pill 等所有 white-on-accent 表面。darken 為 #e03131（白字 4.5:1 達 AA），accent-as-text 同步達標

---

## v7.4 — 2026-05-21

- 設計版·亮 修對比：`--text-dim` 由 #B5B8C0（白底對比僅 ~2:1，footer 公司法務資訊與多個 10px mono 小標形同不可讀）darken 為 #777A83（~4.3:1，接近 WCAG AA）

---

## v7.3 — 2026-05-21

- 設計版（深/亮）定價卡移除冗餘 hover tooltip：每張卡原有 hover-only 的「? 何時適合」tooltip 與常駐「何時適合 · GOOD FIT」框顯示完全相同的 fitFor 文字，重複且 tooltip 在手機（無 hover）失效。移除 tooltip（pricing.jsx）精簡定價卡

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
