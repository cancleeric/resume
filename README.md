# HurricaneSoft 工作室 — Studio for Hire

> **開發流程自動化 · Automated Software Delivery**
> AI 整合是基本盤 — 真正的差異是把整套開發流程自動化（規格 → 設計 → 實作 → 審查 → 部署 → 維運），**一個人扛起以往需要整支團隊的產出**。

🌐 **線上版**：[cancleeric.github.io/resume/resume.html](https://cancleeric.github.io/resume/resume.html)
🌪️ **作品實證**：[hurricanesoft.com.tw/pipeline](https://www.hurricanesoft.com.tw/pipeline) — LF 全系統 Pipeline 即時運行狀態

---

## 服務項目（六大類）

| 項目 | 定位 | 實證 |
|---|---|---|
| **⚡ 開發流程自動化（主力）** | AI 副手分工 + Agent 框架 + 工單狀態機 + 自建 CI/CD + 量化評審 | 自家集團一個人月跑 30+ 系統維運 + 多 SaaS 並行迭代 |
| 🤖 AI / LLM 平台整合 | LLM Gateway / 計費 / Provider routing / 自訓模型 / RAG / 多 Agent | Brain + Modelhub + Anemone 跨產品線跑生產 |
| 🏢 多租戶 SaaS 從 0 到上線 | 多租戶資料隔離 / 計費 / Admin / SDK / API 共用層 | 9+ 系統接入（Hurricane Pay / Squid 生態） |
| 🔐 身份 / 安全基礎建設 | OAuth2/OIDC 自建 / SSO / MFA / 密鑰管理 | Hurricane Vault 90+ secrets 治理 |
| 💳 金流 / 訂閱整合 | PayPal / 跨境 / Webhook / 訂閱與發票 / 多租戶帳務 | Hurricane Pay v0.13.0 LIVE |
| ☁️ GCP Cloud Run 部署 | 容器化 / Cloud Build / Artifact Registry / Secret Manager | 19 個生產服務維運經驗 |
| ⚙️ 既有系統現代化 | .NET Framework → .NET 8 / 單體 → 微服務 / Legacy → Modern | 信保基金 1.5 年現代化 / STA 5,000+ 學員平台 |

---

## 接案模式 / 報價

| 模式 | 報價 | 適用 |
|---|---|---|
| **月費 Retainer**（主推） | **US$ 10,000 / 月** | 3 個月以上中長案，主理人 + AI 副手團隊全力投入 |
| **專案制 Project-based** | **US$ 8,000 起 / 案** | POC 2–4 週 / MVP 4–8 週 / 現代化 8–12 週，固定價 + 里程碑 |
| **顧問諮詢 Advisory** | **US$ 250 / 小時** | 架構審查 / 技術選型 / Code Review，最少 4 小時起 |

**合作流程**：免費 30 分諮詢 → 範圍確認 → 報價單 → 簽約（30% 訂金）→ 開發 → 里程碑驗收 → 上線 → 1 個月保固
**付款**：可開發票、支援電匯 / Wise / 加密貨幣（USDC）

---

## 信任要件（2026 集團規模）

| 指標 | 數字 |
|---|---|
| 軟體工程經驗 | **25 年**（2001-2026） |
| 集團子公司 | **6 家**（HurricaneSoft / Edge / Core / Prime / Digital / Tech） |
| 生產系統 | **30+ 個** 互相整合的服務 |
| GCP Cloud Run | **19 services**（HurricaneSoft 統一維運） |
| 對外 SaaS 產品 | **8+ 個**（Manta / Conch / Abacus / Tianji / 打工仔 / AICAD / fiona-radar / Gyre） |
| 集團統一基建 | LIDS / Vault / Hurricane Pay / Brain / Anemone / Modelhub / Wiki.js / Gitea / Headscale |
| 企業客戶服務 | **100+** |
| SaaS Tenant | **9+** 接入 |

---

## 文件結構

| 檔案 / 目錄 | 用途 |
|---|---|
| `resume.md` / `resume.html` | **接案主頁**（工作室定位 / 開發流程自動化） |
| `resume-style.css` | 雙模樣式（螢幕 + 列印 A4） |
| `template.html5` | pandoc HTML 模板 |
| `build.sh` | `pandoc` build 腳本 |
| `archive/` | **舊資料封存**：6 求職特化版、PROJECTS / INSTRUCTIONS、過往 plans / presets |

---

## 使用本 repo（自架 / build PDF）

```bash
git clone https://github.com/cancleeric/resume.git
cd resume
./build.sh                    # 一鍵 build 全部 .html
./build.sh resume.md          # 單檔 build
open resume.html              # 開瀏覽器看
```

需求：`pandoc`（`brew install pandoc`）

---

## 預約諮詢

- **Email**：[cancleeric@gmail.com](mailto:cancleeric@gmail.com?subject=%5B%E6%8E%A5%E6%A1%88%E8%AB%AE%E8%A9%A2%5D%20HurricaneSoft%20%E5%B7%A5%E4%BD%9C%E5%AE%A4)（含預填表單）
- **電話**：[0921-107-206](tel:+886921107206)（tap-to-call）
- **作品官網**：[hurricanesoft.com.tw/pipeline](https://www.hurricanesoft.com.tw/pipeline)
- **下個可承接檔期**：2026 Q3 · 同時段最多 2 個專案 · 顧問諮詢隨到隨接

> 免費 30 分鐘諮詢 — 聊聊您的案子是否 fit，無壓力。回信時間 24 小時內。

---

**最後更新：** 2026 年 5 月 · 接案 / 顧問 / 月費合作 · 可開發票
