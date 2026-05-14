# 王英豪 - AI-Augmented CTO & AI Platform Architect

## Built & Operates a 14-Agent AI Engineering Organization | 30+ Production Systems | Zero Traditional Engineering Headcount

---

| 項目 | 內容 |
|------|------|
| 姓名 | 王英豪 (WANG YING HAO) |
| 電話 | 0921-107-206 |
| 信箱 | [cancleeric@gmail.com](mailto:cancleeric@gmail.com) |
| 期望薪資 | NT$ 2,400,000 / 年 |
| 工作地點 | 新北市中和區（可配合北部地區工作）|

---

## The AI Engineering Organization

設計並實際運作一套**雙層 AI 代理工程組織**，取代傳統工程人力進行架構決策、CI/CD 部署、QA 驗收、法務審查、產品規劃：

```
C-suite Tier（8 個角色）         Manager Tier（16 個角色）
─────────────────────────────────────────────────────────
CTO  技術副總長                → dev-manager / infra-manager
COO  營運副總長                → pmo / release-manager
CPO  產品副總長                → product-manager / qa-lead
CBO  商務副總長                → finance-manager / marketing-manager
CISO 資安長                    → secops-manager / netops-manager
CoS  幕僚長                    → ea / comms-manager
Legal 法務顧問                 → contract-counsel / compliance-counsel
CDO  資料長                    → db-architect / db-ops
```

**Agents execute real production actions via Claude Code tool-calling:**

* `git commit` / `git push` — version control and branching
* `gcloud run deploy` — Cloud Run production deployment
* Playwright E2E — automated UI acceptance testing
* Gitea issue creation — ticket and work order management
* Database migration — Alembic / EF Core with 6-step change protocol

**Result: Delivered equivalent output of a 14+ person engineering organization through AI-augmented execution — 30+ integrated production systems, 19 GCP Cloud Run services, 6 subsidiary companies.**

---

## AI Infrastructure Built

### Brain — LLM Gateway & Billing Center

* Multi-provider routing engine across **Claude / Gemini / OpenAI / Modelhub** self-hosted model
* Per-tenant token metering and quota enforcement: each of 6 subsidiaries billed independently via Superadmin Console
* Dynamic provider selection: routes low-complexity queries to Modelhub, complex reasoning to commercial LLMs
* Serves as the single LLM entry point for all 14 AI agents and all client-facing AI features
* Three-service architecture: brain-api (LLM proxy) / brain-cloud (external relay) / brain-console (billing management UI)

### Anemone — Production LLM Ingress

* WebSocket relay session management: LLM token streaming without buffering full response in memory
* Reverse connector authentication: external connectors initiate outbound connection, eliminating inbound firewall exposure
* Compliant with group AI routing standards; all external LLM traffic routed through Anemone before Brain
* Production deployment: `anemone-api-production` on GCP Cloud Run; 2026-04-30 E2E acceptance passed

### MCP Server — AI-to-Production Protocol

* **40+ tool endpoint definitions** (Squid MCP Server: 43 confirmed tools)
* AI agents directly create tickets, trigger deployments, update production data via Model Context Protocol
* Enables AI agents to act as full participants in the engineering workflow, not just advisors
* OAuth2.0 token authentication with action-level permission control

### commtool — Inter-Agent Communication Protocol

* Python-based IPC enabling agents to receive task assignments, escalate blockers, coordinate cross-agent workflows
* Supports POP3S/SMTPS + IM protocols; LIDS OAuth integrated; multi-tenant administration
* Agents communicate via commtool without requiring human relay for routine task coordination

---

## AI Training Pipeline

### Modelhub — Self-Hosted Model Platform

* End-to-end training pipeline: Kaggle dataset ingestion → feature engineering → training → serving
* Integrated as Brain's secondary LLM provider via standardized provider interface
* Provider-agnostic routing: Brain routes to Modelhub without upstream code changes
* Cost-optimized query routing: open-source self-hosted model for low-complexity tasks, commercial API for complex reasoning

### Aegis Security Scanner — ML-Powered Code Analysis

* ML false-positive ranker trained on internal codebase patterns, significantly reducing manual CI review burden
* tree-sitter AST parsing for blast radius analysis and function signature extraction (PHP + JavaScript WASM)
* Integrated into CI gate: auto-runs on every PR, flags high-severity patterns for human review
* scikit-learn anomaly detection (Isolation Forest / Local Outlier Factor) trained on group engineering metrics

---

## Measured Outcomes

| 指標 | 數值 |
|------|------|
| AI 副手（C-suite + 經理） | **14 個** |
| LLM Provider 整合 | **3 個**（Claude / Gemini / OpenAI） |
| MCP 工具端點 | **40+**（AI 直接操作生產系統） |
| 生產系統 | **30+**（互相整合） |
| GCP Cloud Run | **19 services** |
| 集團子公司 | **6 家** |
| 企業客戶 | **100+** |
| 傳統工程人力 | **0**（創辦人 CTO 以外） |

---

## Platform Engineering Supporting Stack

以下為 AI 組織能夠高效運作的基礎平台：

* **LIDS**（428 C# 檔案）— OAuth2/OIDC SSO，PKCE 客製 patch，MFA，Multi-tenant，9+ 系統接入
* **Hurricane Vault** — 自建 Secret Manager，90+ secrets，Audit chain，GCP parity
* **Hurricane Pay** — 集團統一金流，PayPal LIVE，9+ tenant 接入（v0.13.0）
* **Wiki.js** — 技術文檔平台，LIDS SSO，Git Storage 雙向同步（hurricanesoft/wiki-docs）
* **Gitea** — 自建 Git 平台，LIDS OIDC 整合，客製 PKCE patch（v1.26.1）
* **Headscale VPN** — 跨辦公室節點互通，ACL 安全鎖定
* **PostgreSQL（統一）** — 集團唯一本機 DB 容器，跨 Python / C# / Node 共用

---

## 工作經歷 - Work Experience

### 公司負責人 / AI-Augmented CTO | 颶風軟體有限公司 → HurricaneGroup
*2002 - 至今（24 年）*

Designed, built, and operates a production AI engineering organization. Founded HurricaneGroup, scaling from a single company to 6 subsidiary companies through AI-augmented development.

**[AI 工程組織建構]**

* Architected a two-tier AI agent engineering organization: 8 C-suite AI roles (CTO/COO/CPO/CBO/CISO/CoS/Legal/CDO) × 2 manager agents each, executing via Claude Code tool-calling — architecture review, CI/CD deployment, QA validation, compliance drafting, and product roadmap execution all handled by purpose-built AI agents with production-grade tool access
* Built commtool IPC (inter-agent communication protocol) enabling agents to receive task assignments, escalate blockers, and coordinate cross-agent workflows without human relay; agents autonomously execute git commit, Cloud Run deploy, Playwright E2E, and Gitea issue creation
* Delivered equivalent output of a 14+ person engineering organization through AI-augmented execution — zero traditional engineering headcount beyond the founding CTO

**[AI 基礎設施]**

* Built Brain LLM Gateway: unified billing center for all 6 subsidiaries, per-tenant token quota control, dynamic routing across Claude / Gemini / OpenAI / Modelhub self-hosted model
* Engineered Anemone LLM ingress platform: WebSocket relay, reverse connector authentication, compliant with group AI routing standards — serving as the production gateway for all external LLM traffic
* Deployed Modelhub: self-hosted model training platform with Kaggle Pipeline integration, serving as Brain's secondary LLM provider for cost-optimized query routing
* Implemented MCP Server: 40+ tool endpoint definitions (Squid MCP), AI assistants directly query, create, and update production tickets, deployments, and project data via standardized MCP protocol

**[成果]**

* 30+ integrated production systems, 19 GCP Cloud Run services, 6 subsidiary companies under unified technical governance, 100+ enterprise clients
* 集團統一基礎設施：LIDS（OAuth2/OIDC SSO）/ Hurricane Vault（密鑰管理）/ Hurricane Pay（統一金流）/ Wiki.js（技術文檔）/ Gitea（版控）/ Headscale（VPN）

### .NET Engineer | 中小企業信用保證基金
*2024/05 - 2026/02*

* **8 人開發團隊**（派遣方編制），負責信用保證網路作業系統現代化
* 主導舊系統從 .NET Framework 4.6 升級至 .NET 8 + Blazor
* 採用微服務架構設計，提升系統擴展性與維護性
* 支援銀行端信用保證業務系統

### 首席工程師 | 東岸互動
*2000/12 - 2001/12*（1 年）| 新北市

POP 線上海報編輯系統獨立開發負責人，從產品企畫到系統上線均由一人負責。
消費者在瀏覽器內設計 POP 廣告海報，付款後全自動串接印刷廠印製、物流宅配到府。

* **後端圖像引擎**：整合 Photoshop 伺服器端批次處理，支援向量文字渲染與向量圖合成（印刷規格輸出）
* **前端 Web 編輯器**（IE 5.x）：即時呼叫後端大量圖庫素材，瀏覽器內排版即時預覽
* **電商整合**：金流串接藍新科技（NewebPay）、印刷廠 API 自動推送訂單、物流整合宅配到府
* **技術演進**：ASP / Java / C++ 第一代 → Apache / PHP / MySQL 重構

---

## 教育背景 - Education

* **東南科技大學** 數位電子系（二專）— 第一名畢業
* **內湖高級工業職業學校** — 代表學校參加技能競賽，榮獲三等榮譽獎章

---

## 核心技術棧 - Technical Skills

### AI / LLM Integration
`MCP (Model Context Protocol)` `Anthropic Claude API` `Google Gemini` `OpenAI API` `Brain LLM Gateway（自建計費）` `Anemone（自建 LLM ingress）` `Modelhub（自訓模型 + Kaggle Pipeline）` `RAG` `LLM Provider Routing` `Multi-agent Orchestration` `Tool-calling` `Prompt Engineering`

### 程式語言 Programming Languages
`C#` `Python` `Java` `JavaScript` `TypeScript` `Swift` `PHP` `SQL` `C++` `Objective-C` `Bash`

### 後端框架 Backend Frameworks
`.NET 8` `ASP.NET Core` `FastAPI` `Express.js` `Fastify` `Next.js` `Entity Framework Core` `SQLAlchemy 2.0` `Blazor Server` `Jinja SSR` `RESTful API` `WebSocket` `MCP`

### 前端框架 Frontend Frameworks
`React 18` `Next.js` `TypeScript` `SwiftUI` `SpriteKit` `Vue.js`

### 資料庫 Database Technologies
`PostgreSQL` `SQL Server` `MySQL` `SQLite` `Firebase Firestore` `CloudKit` `Alembic` `EF Core Migrations` `RLS (Row Level Security)`

### 雲端與 DevOps Cloud & DevOps
`GCP Cloud Run（19 services）` `Cloud SQL` `Cloud Build` `Artifact Registry` `GCP Secret Manager` `Hurricane Vault（自建）` `Docker` `Docker Compose` `Git Hooks CI/CD` `Gitea Actions` `Headscale VPN`

### 認證與安全 Authentication & Security
`OAuth 2.0` `OpenID Connect (OIDC)` `PKCE（客製 patch）` `JWT (RS256)` `MFA (TOTP/Email/SMS)` `RBAC` `AES-256-GCM` `Audit Logging` `Aegis Security Scanner（自建 + ML 訓練）`

### 金流整合 Payment Integration
`PayPal（LIVE + Sandbox）` `Stripe` `藍新科技 NewebPay` `Hurricane Pay（自建集團統一金流）`

---

*最後更新：2026 年 5 月*
*此履歷已針對 ATS 系統關鍵字強化：AI-Augmented CTO, AI Platform Architect, Multi-Agent AI, LLM Gateway, MCP Protocol, Model Context Protocol, Tool-calling, Agentic Engineering, AI-driven DevOps, Brain LLM Gateway, Anemone, Modelhub, Multi-provider Routing, AI Workflow Automation, Virtual Engineering Organization, GCP Cloud Run, Multi-tenant SaaS, OAuth2/OIDC*
