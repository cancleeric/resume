# 王英豪 - AI 賦能技術長 / AI 平台建構者

## AI-Augmented CTO & Platform Builder | Designed & Operated 14-Agent AI Engineering Organization | 30+ Production Systems

---

## 聯絡資訊 - Contact Information

* **姓名 Name**：王英豪 (WANG YING HAO)
* **電話 Phone**：0921-107-206
* **信箱 Email**：[cancleeric@gmail.com](mailto:cancleeric@gmail.com)
* **期望薪資 Expected Salary**：NT$ 2,400,000 / 年
* **工作地點 Location**：新北市中和區（可配合北部地區工作）

---

## 專業摘要 - Professional Summary

**AI-Augmented CTO | AI Platform Builder | 創業技術負責人**

AI-Augmented CTO & Platform Engineering Leader with 25 years of software engineering and 24 years of technical leadership. Designed and operates a production-grade AI engineering organization: 14 specialized AI agents (C-suite + manager tier) executing architecture decisions, CI/CD deployment, QA validation, and legal review — delivering 30+ integrated production systems across 6 subsidiary companies with zero traditional engineering headcount beyond the founding CTO.

Built the group's complete AI infrastructure: Brain LLM Gateway (multi-provider routing across Claude / Gemini / OpenAI, per-tenant billing and token quota control), Anemone (production LLM ingress with WebSocket relay and reverse connector auth, compliant with group AI routing standards), MCP Server (40+ tool endpoints — AI assistants directly create tickets, trigger deployments, and update production data), and Modelhub (self-hosted model training platform + Kaggle Pipeline, integrated as Brain's secondary LLM provider).

Unified group infrastructure under a single platform: self-built OAuth2/OIDC provider (LIDS, 428 C# files, PKCE custom patch), Hurricane Vault (Secret Manager, 90+ secrets), Hurricane Pay (unified payment gateway, PayPal LIVE, 9+ tenants), Wiki.js with bidirectional Git sync, and Gitea. 19 GCP Cloud Run services under unified HurricaneSoft operation.

---

## 核心成就 - Key Metrics

| 指標 | 數值 |
|------|------|
| 軟體工程年資 | 25 年（2001–2026） |
| 技術管理年資 | 24 年（2002–2026） |
| AI 副手（C-suite + 經理） | 14 個（虛擬研發組織） |
| LLM Provider 整合 | 3 個（Claude / Gemini / OpenAI） |
| MCP 工具端點 | 40+（AI 直接操作生產系統） |
| 集團子公司 | 6 家（統一技術治理） |
| 生產系統 | 30+（互相整合） |
| GCP Cloud Run | 19 services（集團統一維運） |
| 企業客戶 | 100+ |
| 程式語言 | 10+ 種 |

---

## 集團架構 - Group Structure

```
HurricaneGroup (集團控股)
├── HurricaneSoft（颶風軟體）— 集團部署主責 / GCP / Cloud Run / FTP / Vault 維運
├── HurricaneEdge（颶鋒科技）— 8 大對外 SaaS 產品線
├── HurricaneCore（颶核科技）— LLM Gateway / 自訓模型 / Wiki.js / 智腦平台
├── HurricanePrime（颶擎科技）— 客製化企業系統（.NET WMS、SaaS）
├── HurricaneDigital（颶電娛樂）— 行動遊戲 / iOS / 文創
└── HurricaneTech（颶風科技）— LIDS / CMS / Squid 等共用技術平台
```

**統一基礎設施**：LIDS（OAuth2/OIDC SSO）/ Hurricane Vault（密鑰管理）/ Brain（LLM 計費）/ Anemone（LLM ingress）/ Wiki.js（文檔）/ Gitea（版控）/ Headscale（VPN）

---

## 架構能力與技術領導 - Architecture & Technical Leadership

### 系統設計 System Design
* Multi-tenant SaaS Architecture（Squid + LIDS 多租戶隔離，跨 9+ 系統共用）
* Layered Architecture：API → BAL → CORL → DAL（Squid: 50+ 表 / 100+ API 端點）
* OAuth 2.0 / OIDC Identity Provider（自建 LocalIdentityServer，PKCE 客製）
* Backend for Frontend (BFF) Pattern（Tentacle BFF）
* MCP (Model Context Protocol) Integration — AI 工具整合架構
* **集團統一金流**（Hurricane Pay v0.13.0）— PayPal LIVE，Admin LIDS OAuth，9+ tenant 接入
* **集團統一密鑰管理**（Hurricane Vault v1.0.0）— Audit chain + GCP parity，90+ secrets
* **集團統一 LLM Gateway**（Brain）— 計費中心、跨租戶可視化、Headless Provider 路由
* **集團統一 VPN**（Headscale）— ACL 鎖定、跨辦公室節點互通

### AI 系統架構 AI System Architecture
* **14-agent 雙層 AI 工程組織**：8 個 C-suite AI 角色（CTO / COO / CPO / CBO / CISO / CoS / Legal / CDO），每個配備 2 個專責經理（共 16 個），透過 tool-calling 與 commtool IPC 執行生產操作（git commit / Cloud Run deploy / Playwright E2E / Gitea issue creation）
* **Brain LLM Gateway**：multi-provider routing 決策引擎（Claude / Gemini / OpenAI / Modelhub），per-tenant token metering 與 quota enforcement，跨 6 家子公司 Superadmin 計費可視化
* **MCP Server（40+ tool endpoints）**：AI 副手透過 Model Context Protocol 直接操作生產票務、部署觸發、專案資料更新；Squid API 43 個工具定義
* **Anemone LLM ingress**：WebSocket relay 架構，reverse connector auth（外部 connector 主動發起連線，消除入站防火牆暴露），符合集團 AI routing 標準
* **Modelhub**：自建模型訓練平台，整合 Kaggle Pipeline，作為 Brain LLM Gateway 的第二 provider，實現成本最佳化的 provider routing
* **Aegis Security Scanner**：ML false-positive ranker（tree-sitter AST 解析，PHP + JavaScript WASM），訓練於集團內部程式碼庫，整合 CI gate 自動執行

### 技術決策 Key Technical Decisions
* 自建 OAuth2/OIDC Server（LIDS）取代 Auth0/Okta — 多租戶完全掌控
* 自建 Secret Manager（Hurricane Vault）取代純 GCP Secret Manager — 開發 / CI / CEO token 走自建，生產 Cloud Run 走 GCP
* 自建 LLM Gateway（Brain）取代直連 OpenAI / Anthropic — 集團計費 + 模型路由
* 自建 Gitea + 客製 PKCE patch（v1.26.1）— LIDS OIDC 整合不污染 provider singleton
* 兩層式 CI/CD（Git Hooks post-commit + pre-push）— 不依賴外部 CI 服務，跨 12+ 專案
* PostgreSQL 統一資料層 — 跨 Python / C# / .NET / Node 共用，本機單一 squid-postgres-dev 容器整併
* Cloud Run Service-only 部署規範（禁同名 Service+Job、禁 :latest tag、必走 Artifact Registry）
* 6 步 DB 異動流程強制執行（備份→匯出前→執行→匯出後→驗證→紀錄）

### 工程管理 Engineering Management
* 主導 **集團 6 家子公司** 的技術架構與部署協調
* 建立並實際運作 **14-agent AI 工程組織**（C-suite 8 個 + 經理 16 個），透過 Claude Code tool-calling 執行架構決策、CI/CD 部署、QA 驗收、法務審查、產品規劃等所有工程管理職能
* 建立 **140 分評審制度**（90% 通過門檻，6 維度評分）
* 工單驅動開發：open → in_progress → pending_review → reviewed → completed（狀態機強制）
* 三階段測試：Unit / Integration / E2E，集團 CI 全綠才允許上生產
* 集團文檔治理：Wiki.js + LIDS SSO + Git Storage 雙向同步

---

## 核心技術棧 - Core Technical Skills

### 程式語言 Programming Languages
`C#` `Python` `Java` `JavaScript` `TypeScript` `Swift` `PHP` `SQL` `C++` `Objective-C` `Bash` `Delphi`

### 後端框架 Backend Frameworks
`.NET 8` `ASP.NET Core` `FastAPI` `Express.js` `Fastify` `Next.js` `Entity Framework Core` `SQLAlchemy 2.0` `Blazor Server` `Jinja SSR` `RESTful API` `WebSocket` `MCP`

### 前端框架 Frontend Frameworks
`React 18` `Next.js` `TypeScript` `SwiftUI` `SpriteKit` `Webpack 5` `Rollup` `Vue.js`

### 資料庫 Database Technologies
`PostgreSQL` `SQL Server` `MySQL` `SQLite` `Firebase Firestore` `CloudKit` `Alembic` `EF Core Migrations` `RLS (Row Level Security)`

### 雲端與 DevOps Cloud & DevOps
`GCP Cloud Run（19 services 集團維運）` `Cloud SQL` `Cloud Build` `Artifact Registry` `Cloud Functions` `GCP Secret Manager` `Hurricane Vault（自建）` `Azure` `Firebase` `Docker` `Docker Compose` `Git Hooks CI/CD` `Gitea Actions` `GitHub Actions` `Prometheus` `OpenTelemetry` `Sentry` `Headscale VPN` `Tailscale`

### 認證與安全 Authentication & Security
`OAuth 2.0` `OpenID Connect (OIDC)` `PKCE（客製 patch）` `JWT (RS256)` `MFA (TOTP/Email/SMS)` `RBAC` `BCrypt` `AES-256-GCM` `Rate Limiting` `Audit Logging` `Aegis Security Scanner（自建 + ML 訓練）`

### AI 與 LLM Integration
`MCP (Model Context Protocol)` `Anthropic Claude API` `Google Gemini` `OpenAI API` `Brain LLM Gateway（自建計費）` `Anemone（自建 LLM ingress）` `Modelhub（自訓模型 + Kaggle Pipeline）` `RAG` `LLM Provider Routing`

### 金流整合 Payment Integration
`PayPal（LIVE + Sandbox）` `Stripe` `藍新科技 NewebPay` `Hurricane Pay（自建集團統一金流）`

### 工具鏈 Tooling
`Neritic CLI` `CommTool` `LC (LINE Controller)` `Mailtool` `Eye (PHP/JS Static Analysis)` `tea CLI`

---

## 旗艦架構：HurricaneGroup 生態系統 - Flagship Architecture

**角色**：集團技術長 / 創辦人 | 6 家子公司技術統籌 | 2002 - 至今（核心 SaaS 群 2024/11 起）

### 集團統一基礎設施（HurricaneSoft 維運）

| 系統 | 技術棧 | 規模 / 狀態 |
|------|--------|-------------|
| **LIDS（LocalIdentityServer）** | ASP.NET Core 8, EF Core, Blazor, PostgreSQL | OAuth2/OIDC, MFA, Multi-tenant，集團 SSO，9+ 系統接入 |
| **Hurricane Vault** | Go, PostgreSQL, GCP parity | v1.0.0，自建 Secret Manager，Audit chain，90+ secrets |
| **Hurricane Pay** | FastAPI, PostgreSQL, PayPal SDK | v0.13.0，集團統一金流，PayPal LIVE，9+ tenant |
| **Brain LLM Gateway** | FastAPI, PostgreSQL | 集團 LLM 計費中心，跨租戶可視化（brain-api/cloud/console） |
| **Anemone Platform** | FastAPI, WebSocket | 集團 LLM ingress，Widget ↔ Server ↔ Brain |
| **Modelhub** | Python, Kaggle, Connector | v0.8.0，自訓模型 + 推論平台，Brain 第二 LLM Provider |
| **Wiki.js** | Node.js, LIDS SSO, Git Storage | 集團技術文檔平台，與 Gitea wiki-docs 雙向同步 |
| **Gitea Git Server** | Go, PostgreSQL, **客製 PKCE patch（v1.26.1）** | 自架 Git，工單與 Branch 雙向 Hook，集團主版控 |
| **Headscale VPN** | Go, ACL | 集團 VPN，跨辦公室節點互通，IP 動態 ACL |
| **CommTool** | Python | 統一通訊平台（IM + Email + LINE），集團與容器員工通訊 |
| **Aegis Security Scanner** | Python, ML | 自建程式碼安全掃描器，含 FP ranker ML 訓練 |
| **Eye Static Analyzer** | Tree-sitter (PHP/JS WASM) | 程式碼結構分析，blast radius / signature |

### HurricaneEdge 8 大對外 SaaS 產品線

| 產品 | 技術棧 | Cloud Run / 狀態 |
|------|--------|-----------------|
| **AICAD（AI CAD Converter）** | FastAPI, AI/ML, P&ID → DXF | ai-cad-api-production |
| **算盤（Abacus）** | .NET 8 Blazor Server | hurricane-books-production |
| **海螺（Conch）** | FastAPI, PostgreSQL RLS, Multi-tenant | rs-api / rs-web-production，預約訂位 SaaS |
| **天機（Tianji）** | FastAPI, Jinja SSR, Hurricane Pay | tianji-api-production v1.2.2，命理 App |
| **Fiona Pipeline** | FastAPI, Manta workflow integration | fiona-pipeline-production v0.2.4，內容生成 |
| **Fiona Radar** | FastAPI, YouTube API | fiona-radar-production，頻道監控 |
| **Manta** | FastAPI + React, Canvas SSO | manta-production v2.38.0，AI Workflow Canvas |
| **Gyre** | Next.js + Fastify + Python AI service | 社群內容排程 SaaS |

### HurricanePrime 客製化系統

| 產品 | 技術棧 | 狀態 |
|------|--------|------|
| **pxmart-warehouse** | .NET 8, EF Core, PostgreSQL | WMS v1.0.0，810 tests，92% coverage |
| **打工仔（Dagongzai）** | FastAPI + Next.js + Scraper | dagongzai-api / web-production |
| **iRCS（長榮航空）** | .NET, WebAPI + Web | dev 環境（Lucas 維運） |

### HurricaneDigital 行動 / 文創

| 產品 | 技術棧 | 狀態 |
|------|--------|------|
| **antique-master-web** | Next.js, FastAPI | antique-frontend / server-production，167 tests |
| **LifeSnap** | SwiftUI + SpriteKit + Firebase + CloudKit | App Store 已上架，多米諾骨牌對戰 |
| **STA 三件套（PHP 客戶 site）** | PHP CodeIgniter HMVC | 中華民國游泳救生協會，2026/05/09 大修復 |

### HurricaneTech 共用平台

* **Squid 企業級生態系統** — API / LIDS / Tentacle Frontend / Tentacle BFF / Python SDK / JS SDK / MCP Server / Neritic CLI / NLIDS CLI（共 12 系統，2024/11 起持續演進）

---

## 工作經歷 - Professional Experience

### 公司負責人 / AI-Augmented CTO | 颶風軟體有限公司 → HurricaneGroup
*2002 - 至今（24 年）*

**[AI 工程組織建構]**
- Designed and operates a two-tier AI agent engineering organization: 8 C-suite AI roles × 2 manager agents each, executing via Claude Code tool-calling — architecture review, CI/CD deployment, QA validation, compliance drafting, and product roadmap execution all handled by purpose-built AI agents with production-grade tool access
- Built commtool IPC (inter-agent communication protocol) enabling agents to receive task assignments, escalate blockers, and coordinate cross-agent workflows without human relay; agents autonomously execute git commit, Cloud Run deploy, Playwright E2E, and Gitea issue creation
- Delivered equivalent output of a 14+ person engineering organization through AI-augmented execution — zero traditional engineering headcount beyond the founding CTO

**[AI 基礎設施]**
- Built Brain LLM Gateway: unified billing center for all 6 subsidiaries, per-tenant token quota control, dynamic routing across Claude / Gemini / OpenAI / Modelhub self-hosted model
- Engineered Anemone LLM ingress platform: WebSocket relay, reverse connector authentication, compliant with group AI routing standards — serving as the production gateway for all external LLM traffic
- Deployed Modelhub: self-hosted model training platform with Kaggle Pipeline integration, serving as Brain's secondary LLM provider for cost-optimized query routing
- Implemented MCP Server: 40+ tool endpoint definitions (Squid MCP), AI assistants directly query, create, and update production tickets, deployments, and project data via standardized MCP protocol

**[成果]**
- 30+ integrated production systems, 19 GCP Cloud Run services, 6 subsidiary companies under unified technical governance, 100+ enterprise clients
- 集團統一基礎設施：LIDS（OAuth2/OIDC SSO）/ Hurricane Vault（密鑰管理）/ Hurricane Pay（統一金流）/ Wiki.js（技術文檔）/ Gitea（版控）/ Headscale（VPN）

### .NET Engineer | 中小企業信用保證基金
*2024/05 - 2026/02*

* **8 人開發團隊**（派遣方編制），負責信用保證網路作業系統現代化
* 主導舊系統從 .NET Framework 4.6 升級至 .NET 8 + Blazor
* 採用微服務架構設計，提升系統擴展性與維護性
* 支援銀行端信用保證業務系統

### 軟體工程師 | 米迪亞系統科技（d-media）
*2001 - 2002*

* 負責 Casio Cassiopeia E-125 (Pocket PC / Windows CE) 平台原生應用開發
* 使用 **eVC++ (eMbedded Visual C++ 3.0) + MFC** 進行嵌入式 C++ 開發
* 開發四大模組（全中文介面 + 多語系支援）：主選單工具列、行事曆、聯絡人、相簿
* 產品搭載於 d-media 品牌 PDA，銷售通路涵蓋**全球 400+ 機場**

### 首席工程師 | 東岸互動
*2000/12 - 2001/12*（1 年）| 新北市

POP 線上海報編輯系統獨立開發負責人，從產品企畫到系統上線均由一人負責。
消費者在瀏覽器內設計 POP 廣告海報，付款後全自動串接印刷廠印製、物流宅配到府。

* **後端圖像引擎**：整合 Photoshop 伺服器端批次處理，支援向量文字渲染與向量圖合成（印刷規格輸出）
* **前端 Web 編輯器**（IE 5.x）：即時呼叫後端大量圖庫素材，瀏覽器內排版即時預覽
* **電商整合**：金流串接藍新科技（NewebPay）、印刷廠 API 自動推送訂單、物流整合宅配到府
* **內部後台**：供數十位美編設計師使用的 POP 模板管理系統
* **技術演進**：ASP / Java / C++ 第一代 → Apache / PHP / MySQL 重構

---

## 2026 Q1-Q2 重大成就 - 2026 Recent Achievements

### 集團化升級
* 完成 **6 家子公司** 架構分立與統一基礎設施整合
* 建立 **C-suite 副手制** 虛擬高管團隊架構（Claude Agent + commtool）
* GCP 統一維運責任歸 HurricaneSoft，集團 19 個 Cloud Run 服務統一管理

### 重大新系統上線
* **Hurricane Vault v1.0.0**（2026/04）— 自建 Secret Manager，Audit chain + GCP parity
* **Hurricane Pay v0.13.0**（2026/05）— 集團統一金流，PayPal LIVE，9+ tenant 接入
* **Brain LLM Gateway**（2026/05 計費中心修復完工）— 集團 LLM 統一入口
* **Manta v2.38.0**（2026/05）— AI Workflow Canvas，LIDS SSO 整合
* **Gyre**（2026/05）— Next.js + Fastify 社群內容排程 SaaS
* **pxmart-warehouse v1.0.0**（2026/04）— .NET 8 WMS，810 tests，92% coverage
* **antique-master-web** 上線（2026/04）— 167 tests
* **gitea-hs PKCE 客製 patch**（v1.26.1）— LIDS OIDC PKCE 整合
* **Headscale VPN** 集團部署（lobsterfarm-633f7，ACL 鎖定）
* **Wiki.js Git Storage**（hurricanesoft/wiki-docs）— 文檔雙向同步上線

### 客戶系統重大事件
* **Safari LIDS 白頁修復**（2026/04）— 根因：生產 DB 缺 RequirePkce + Cloud Build INTERNAL_API_URL
* **STA 2026/05/09 大修復** — 5 大根因 + 11 修法，HRM Excel 對齊、ws_table 寫死修復
* **GCP 費用調整與備份** — Coldline bucket、min=0 策略、備份輪替 30 天 / 12 週 / 12 月 / 永久

---

## 其他重點專案 - Other Key Projects

### LifeSnap - 多功能社交遊戲平台 (2023/06-2024/04)
**iOS 開發工程師 | 3 人團隊** | 已上 App Store

* 多米諾骨牌對戰手遊
* 技術：SwiftUI + SpriteKit + Firebase + CloudKit
* 核心功能：即時多人對戰、ChatGPT AI 聊天、社交系統、AdMob 廣告
* 架構：MVVM + Protocol-Oriented Design

### LifeSnapAdmin - Firebase 後台管理系統 (2024/03-2024/12)
**獨立開發 | 656+ 工時 | 8 階段完成**

* Blazor Server (.NET 9) + Firebase Admin SDK
* 完成用戶管理、Firestore 瀏覽器、Storage 管理、統計分析、推播通知、系統監控等 8 個階段

### STA 組織綜合管理平台 (2019/02-2021/02)
**全端工程師 | 5 人團隊**

* 中華民國游泳救生協會線上課程報名系統，服務 **5,000+ 學員**
* 線上報名率提升 80%，行政作業時間減少 60%
* PHP CodeIgniter HMVC 架構，15+ 種營運報表
* 2026 年持續維運，5/9 大修復後上生產

---

## 學歷 - Education

* **東南科技大學** 數位電子系（二專）— 第一名畢業
* **內湖高級工業職業學校** — 代表學校參加技能競賽，榮獲三等榮譽獎章

---

## 早期經歷 - Early Career (2000-2016)

| 時期 | 專案 | 技術 |
|------|------|------|
| 2015-2016 | 德州撲克遊戲平台 | Delphi |
| 2012-2013 | 太陽能發電監測系統 | PHP, MySQL |
| 2004-2008 | 車載娛樂系統（多家車廠） | C++ MFC, WinCE |
| 2001-2002 | Pocket PC 應用套件（Casio E-125，全球 400+ 機場銷售）| eVC++ MFC, WinCE |
| 2000-2001 | Web 海報編輯器（金流/印刷串接）| ASP, Java, C++ |

---

## 專業能力統計 - Professional Experience Summary

| 專業領域 | 年資 | 主要成就 |
|----------|------|---------|
| **集團技術領導 & 創業** | 24 年 | 創立颶風軟體 → HurricaneGroup 集團（6 子公司），管理多公司虛擬高管團隊 |
| **系統程式開發** | 25 年 | 建構 30+ 生產系統的集團生態系統 |
| **系統架構設計** | 18 年 | Multi-tenant SaaS / OAuth2 / LLM Gateway / 集團統一基礎設施 |
| **DevOps & Cloud** | 5 年 | GCP Cloud Run（19 services）、兩層式 CI/CD、6 步 DB 異動流程 |
| **企業客戶服務** | 24 年 | 100+ 企業客戶 |

---

*最後更新：2026 年 5 月*
*此履歷已針對 ATS 系統關鍵字強化：AI-Augmented CTO, Platform Builder, AI Engineering Organization, Multi-Agent Architecture, LLM Gateway, MCP Server, Technical Architect, Engineering Lead, System Design, Multi-tenant SaaS, Platform Engineering, OAuth2/OIDC, GCP Cloud Run, CI/CD Pipeline Design, Secret Management*
