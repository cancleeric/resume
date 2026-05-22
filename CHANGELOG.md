# Changelog

接案工作室落地頁版本紀錄。

---

## v7.74 — 2026-05-22

- loop-opt(標準版)：「2 週健檢」低風險入口卡 CTA 對齊設計版（v7.71）。原本丟到通用 `#預約諮詢` 錨點 → 改為帶意圖直連 mailto（主旨預填「[預約健檢]」、正文預填三欄）。降低入口摩擦、保留高意圖訊號，三版健檢 CTA 一致。CTA 文案 zh+en 改為「主旨已預填，2 分鐘寄出」。

---

## v7.73 — 2026-05-22

- 「20×」全面改為「兩者並陳」（§0 Q1）：「20×」是無定義基準的倍數、禁不起客戶追問，與官網已移除的「82% 核准率」同類。13+ 處（SEO title / twitter / hero claim / hero-desc / hire-lede / why 區 / why-studio row）改為**主打可查證的具體數字**——「一年交付 14+ 自有產品」「SaaS 0→生產最快 23 天」（git 工期可查）——「20×」降為明標的主觀註解（「我們自己的體感是 20×」「體感約 20×」「≈20× by our own measure」），不再當裸宣稱。三版一致：resume.html（zh body + EN I18N）+ design dict-zh/en + hero.jsx。

---

## v7.72 — 2026-05-22

- 產品交付區加註「AI 自主開發」事實：在交付物 / 系統區的 section intro 一次性聲明「每一個都由 AI 自主開發與維運：人類定方向、AI 跑交付」，涵蓋其下所有產品（不逐行寫，避免雜訊）。措辭刻意不講死「100%」、且與既有「AI 副手 ASSIST／驗收」敘事相容、不與月費卡「親自下海 code」打架（§0 Q1 可禁得起追問）。三版一致：resume.html deliverables-intro（zh+en）+ design systems.section.sub（zh+en）。

---

## v7.71 — 2026-05-22

- 設計版（深/亮）定價區轉換優化：「2 週開發流程自動化健檢」這個低風險入口卡，CTA 不再丟到通用 `#cta` 諮詢區，改為直接帶意圖進 mailto——主旨預填「[預約健檢]」、正文預填三欄（架構/技術棧、最想解決的技術債、聯絡時段）。降低入口摩擦、保留高意圖訊號。其餘三張卡（專案/月費/顧問）維持走 `#cta`（金額較大、本就需先對話）。pricing.jsx 改為 data-driven `tier.href || '#cta'`。

---

## v7.70 — 2026-05-22

- 產品版本號全面對齊 Gitea 權威數據（§0 Q1，含修正 v7.69 自身的錯誤）：
  - **Conch**：reservation-saas 實際 0 tag、0 release，唯一可查證版本是 `main` 上 web/api package.json 的 `4.0.0`。v7.69 寫的「v1.18.0」查無出處，改為 **v4.0.0**。
  - **打工仔 DaGongZai**：dagongzai 最新 tag 為 v1.1.0，原寫「v1.6.0」改為 **v1.1.0**。
  - **Gyre**：gyre 最新 tag 為 v0.11.0，原寫「v0.9.0」改為 **v0.11.0**。
  - **Manta**：manta 最新 tag 為 v2.55.0，原寫「v2.64」改為 **v2.55.0**。
- 三版一致：resume.html + design/i18n/dict-zh+en（item / case / timeline / sys.*.tagline / sys.manta.metric）+ timeline.jsx + systems.jsx。

---

## v7.69 — 2026-05-22

- 修正 Conch 版本號（§0 Q1）：接案頁原寫「Conch v6.0」，查無出處且與 Gitea 矛盾——reservation-saas（=Conch）最新 release tag 實際是 v1.18.0。三版共 7 處（item-conch / case-conch zh+en、timeline、sys.conch.tagline）統一改為可查證的 v1.18.0

---

## v7.68 — 2026-05-22

- 再補 2 個產品的 git 可查工期（延續 v7.67）：打工仔 DaGongZai「首 commit 到生產 28 天、51 commits」、Gyre「首 commit 起 36 天、111 commits」。數據走 mDNS 連開發機 Gitea 確認（dagongzai 2026-03-17→04-14、gyre 04-13→05-19）。三版 deliverable item + 設計版 systems metric 一致

---

## v7.67 — 2026-05-22

- AI-CAD 加上 git 可查的真實開發工期：把抽象的速度宣稱換成可查證數據——AI-CAD 工程圖辨識 SaaS「首 commit 到生產 23 天、214 commits」（Gitea 權威數據：2026-03-01→03-24）。三版（標準版 deliverable item + 設計版 sys.aicad.metric）一致。這是把「20×」從口號往「可查證」推的第一個實例

---

## v7.66 — 2026-05-22

- 設計版·亮 secure-note eyebrow 對比補 AA：v7.62 SecureNote 的「04 / SECURITY VALIDATION」小標用 var(--orange) #FF6B35，亮版白底僅 ~2.8:1。亮版補 override 改 #B14A0E，與既有 hero 深橘修補一致（前兩輪 deferred 的項目）

---

## v7.65 — 2026-05-22

- 設計版 secure-note 補手機斷點：v7.62 新增的 SecureNote 元件 `<style>` 無手機斷點，.secure-note 在手機上 padding 30/34px 偏擠（375px 內容僅 ~243px）。加 ≤560px 時 padding 收為 22/20px，與其他設計元件的手機處理一致

---

## v7.64 — 2026-05-22

- 標準版 secure-note 標題 CSS 修正：v7.62 的 .secure-note__title（h3）規格打不過全站 .main h3，誤吃到左邊框＋漸層底＋28px 留白，跟 callout 自己的左框疊成雙框。提高 specificity 並 reset 那些裝飾，標題回歸 callout 內正常樣式

---

## v7.63 — 2026-05-22

- 設計版·亮 區塊小標對比修正：.section-label（每個區塊的橘色 eyebrow，如「05 / PRICING」）原用 var(--orange) #FF6B35，亮版白底僅 ~2.8:1 未達 AA。改用 #B14A0E（~5.5:1）。這是全站每區塊共用的元素，先前橘字 AA 修補漏掉的一處

---

## v7.62 — 2026-05-22

- 新增「安全驗收」信任區塊（三版）：正面處理自動化開發最大未處理異議——「做太快、洞太多」。在 why-studio 後新增一個 callout/section，講明 pipeline 的「審查」是真把關：自建安全驗收 agent 不只靜態掃源碼、會主動對執行中的系統做驗收（CVE/弱點/行為驗證）、量化評審門檻沒過不進部署、交付物附掃描驗收紀錄。標準版加 .secure-note 區塊、設計版加 SecureNote 元件 + TOC 項，未掛 Aegis/聖盾 名稱（符合禁止規則）

---

## v7.61 — 2026-05-22

- 健檢卡價格溢出修正：v7.59 健檢卡價格「US$ 1,500–2,000」放進設計版 48px 等寬大數字會溢出窄卡片。改為大數字只放「US$ 1,500」、「–2,000 / 健檢」收進較小的 unit。三版一致，低入門價當主視覺也更貼「低風險入口」定位

---

## v7.60 — 2026-05-22

- 標準版報價區 4 卡佈局修正：v7.59 加第 4 張卡後，rate-grid 的 auto-fit 在筆電寬度會排成 3+1（第 4 張孤兒卡）。改用明確斷點——視窗 ≥1280px 才 4 卡一排，其餘 2×2，≤560px 單欄，永不出現 3+1

---

## v7.59 — 2026-05-22

- 訂價策略（轉換槓桿 2）落地：報價區新增第 4 張方案卡「2 週開發流程自動化健檢」US$ 1,500–2,000，作為低風險入口 SKU——補上「免費諮詢」與「US$8K 專案／US$10K 月費」之間的斷崖，把第一次說 yes 的門檻降到 ~US$1.5K。交付物=架構診斷+自動化導入藍圖。三版（標準＋設計深/亮）一致，設計版標題改「四種接案模式」

---

## v7.58 — 2026-05-22

- 版本切換器併入 topbar（三版結構調整）：移除頂部那條會隨捲動消失的獨立 vs-switcher 深色細條，把「標準／設計·深／設計·亮」三段切換器 + EN 鈕併進各版的 topbar/nav（topbar 本來就 sticky → 切換器從此常駐、滑到哪都按得到）。設計版原本只有深/淺 2 段 theme toggle，現升級為 3 段含「標準」。三版少一條 bar、首屏高度還給內容
- 標準版 hero 加邀請：lede CTA 下方新增一行「想看設計實力？這頁另有兩個設計版本：設計·深 / 設計·亮」帶連結，主動把標準版訪客導去看設計版 showpiece

---

## v7.57 — 2026-05-22

- 設計版·亮 hero 橘字對比修正：hero h1 第二行與 hero-claim 強調字原用 var(--orange) #FF6B35，亮版白底僅 ~2.8:1，連大字 3:1 門檻都未達。主標是全頁最醒目文字。改用 #B14A0E（~5.5:1），延續亮版既有的深橘 AA 修補慣例

---

## v7.56 — 2026-05-22

- 三版 head 補 og:locale:alternate：頁面實為雙語（完整 zh/en i18n + 語言切換）但 head 只宣告 og:locale=zh_TW，未告知爬蟲/社群有英文版。三版各補一行 og:locale:alternate=en_US

---

## v7.55 — 2026-05-22

- 設計版 why-studio 手機版對照維度標籤對比修正：手機單欄佈局下每格的 row-label-inline（責任歸屬／成本結構等對照維度，10px）原用 --text-low 僅 ~3.3:1 未達 AA，手機用戶看不清每格在比什麼。改用 --text-mid。改在共用 why-studio.jsx

---

## v7.54 — 2026-05-22

- 設計版 FAQ 補上 v7.48 漏掉的 Brain 正名：v7.48 只修了標準版，設計版 FAQ（dict faq.04/06 可見文字 + 深/亮兩版 FAQPage JSON-LD）仍把 Brain 稱「Agent 框架／Brain framework」。統一為「Brain LLM Gateway」共 8 處，三版描述一致

---

## v7.53 — 2026-05-22

- 標準版 topbar 品牌副標對比修正：「HURRICANESOFT」9.5px 小字原用 #94a3b8，在 --brand 深藍底僅 ~4.0:1 未達 WCAG AA。改用 #a6b3c5（~4.85:1 通過），仍比導覽列文字暗、維持副標層級

---

## v7.52 — 2026-05-22

- 設計版 footer 對比修正：footer（公司名／統編／負責人／地址／版號）原用 --text-dim，深版 #4A4D55 僅 ~2.3:1，法人識別資訊近乎不可見。改用 --text-mid，深/亮兩版皆達 ~7:1+ WCAG AA。改在共用 app.jsx

---

## v7.51 — 2026-05-22

- 設計版定價卡「何時適合」標籤對比補到 WCAG AA：.price-fit .fit-label（10px）原用 --text-low，亮版白底僅 ~3.3:1 未達 AA。改用 --text-mid。改在共用 pricing.jsx，深/亮兩版同時生效，延續既有 --text-low→--text-mid 修補慣例

---

## v7.50 — 2026-05-22

- 設計版·深 修正 sticky TOC 對比不足：右側固定目錄導覽文字原用 --text-low（#686B75），深版暗底僅 ~3.6:1 未達 WCAG AA。改用 --text-mid（~7.7:1 通過）。與上一輪亮版 v7.49 的同款修補對齊，兩設計版的 TOC 對比現皆達 AA

---

## v7.49 — 2026-05-22

- 設計版·亮 修正 sticky TOC 對比不足：右側固定目錄導覽文字原用 --text-low（#8A8D96），亮版白底僅 ~3.3:1 未達 WCAG AA。改用 --text-mid（~7:1 通過），延續亮版既有的 --text-low→--text-mid 修補慣例（先前其他元件已修，sticky TOC 漏掉）

---

## v7.48 — 2026-05-22

- 標準版 FAQ 修正自我矛盾的 Brain 描述：FAQ #4／#6 原把 Brain 稱作「自建 Agent 框架／Brain framework」，但同頁的可交付系統清單、技術棧、交付案例都一致稱它為「Brain LLM Gateway」（計費中心 / Provider 路由）。把 FAQ（含 FAQPage JSON-LD 與 en i18n 共 6 處）統一為「Brain LLM Gateway」，讓頁面對自己的工具描述前後一致

---

## v7.47 — 2026-05-22

- 設計版 hero 主 CTA 強化（B/C 共用 dict）：hero 主按鈕原本只寫「預約諮詢 / Book a Consultation」，把「免費」這個降風險訊號補上按鈕本身——改為「預約免費諮詢 / Book a Free Consultation」。與標準版 A（「預約免費 30 分鐘諮詢」）及設計版最終 CTA（「30 min free」）一致；hero 是首屏第一轉換點，免費/低承諾框架放在點擊目標上轉換更好

---

## v7.46 — 2026-05-22

- 修正搜尋摘要與頁面實況不符的承諾（三版一致）：meta/og/twitter description 與 in-house 對比卡原寫「當週上工」，但頁面 availability 區明載月費 Retainer 下個檔期 2026/07（約 6 週後）——訪客從搜尋點進來會看到落差、傷信任。全部「當週上工 / start this week」改為保守且準確的「最快 1–2 週上工 / start within 1–2 weeks」，與 FAQ 既有說法（專案制 1–2 週 kick-off）對齊

---

## v7.45 — 2026-05-22

- 轉換策略槓桿 1（設計版深/亮）：meta-live 即時優化橫幅新增「最近自動優化」末行——JS 讀 CHANGELOG.md 取最新一筆版本與摘要，把「這頁每 30 分自我優化」主張接上可驗證的實證。fetch 失敗（file://）則該行隱藏、不影響橫幅其餘內容。標準版側欄卡 v7.44 已補，本輪補齊兩個設計版

---

## v7.44 — 2026-05-22

- 轉換策略槓桿 1（標準版）：新增「近期自動優化」側欄卡——JS 讀 CHANGELOG.md、呈現最近 3 筆優化紀錄，讓訪客親眼驗證「這頁每 30 分自我優化」的主張（最強且不可造假的證據）。fetch 失敗（file://）則卡片自動隱藏、不影響其他內容。設計版深/亮待後續輪次補

---

## v7.43 — 2026-05-22

- 轉換策略槓桿 5（三版）：bus-factor 保障前移。將「交付即時文件化、任何團隊可接手、不被一個人綁死」的保障從 FAQ 深處，加進定價區 footer（rate-foot / pricing.section.sub）——買家「掏 US$10K」當下即看到「主控權始終在您手上」

---

## v7.42 — 2026-05-21

- 轉換策略槓桿 3（三版）：hero 標題由「方法」改為「結果」導向。原 h1/h2-tagline 主打「開發流程自動化」（我們怎麼做），改為「整支團隊的產出，一個人交付 / Full-Team Output, One Engineer」（買家要的結果）；方法（自動化）留在 sub 當支撐，meta 關鍵字不動

---

## v7.41 — 2026-05-21

- 三版修事實錯誤：`item-anemone` 原寫「Anemone / Brain — 集團統一 LLM Gateway · 計費中心」，但 Anemone 架構上是純中繼、不持有 LLM key，計費/路由屬 Brain 層。更正為「Anemone — 集團 AI API 閘道（電話總機 / LLM ingress）」，並移除已不成立的「/ Brain」獨立命名。standard item-anemone zh/en + 設計版 sys.anemone.tagline/metric + systems.jsx 卡同步

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
