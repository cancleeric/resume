# Changelog

接案工作室落地頁版本紀錄。

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
