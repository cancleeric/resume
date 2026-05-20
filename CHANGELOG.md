# Changelog

接案工作室落地頁版本紀錄。

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
