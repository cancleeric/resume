# 颶風軟體有限公司 · HurricaneSoft Ltd.

## Studio for Hire — 開發流程自動化 · Automated Software Delivery

> **負責人**：王英豪 (WANG YING HAO)　·　**統一編號**：80289779　·　**HurricaneGroup（颶風集團）第一家子公司**

---

## 聯絡資訊 - Contact Information

* **公司 Company**：颶風軟體有限公司（HurricaneSoft Ltd.）— 統編 80289779（可開發票）
* **負責人 Principal**：王英豪 (WANG YING HAO)
* **電話 Phone**：0921-107-206
* **信箱 Email**：[cancleeric@gmail.com](mailto:cancleeric@gmail.com)
* **作品官網 Portfolio**：[www.hurricanesoft.com.tw/pipeline](https://www.hurricanesoft.com.tw/pipeline) — LF 全系統 Pipeline 線上展示
* **接案報價 Contract Rate**：US$ 10,000 / 月（彈性條件可議；支援電匯／Wise／USDC）
* **工作地點 Location**：新北市中和區（可配合北部地區工作）

---

## 專業摘要 - Professional Summary

**交付可運轉的系統，從架構決策到部署完工**

*集團技術長 · 技術架構師 · 創業技術負責人*

擁有 **25 年**軟體工程經驗與 **24 年**技術管理實務。創立並主導 **HurricaneGroup（颶風集團）** 軟體企業，旗下涵蓋 **6 家子公司**（HurricaneSoft / HurricaneEdge / HurricaneCore / HurricanePrime / HurricaneDigital / HurricaneTech），主導設計並建構 **30+ 互相整合的生產系統**，部署於 **GCP Cloud Run（19 個生產服務）** 與本機 / 客戶基礎設施。

主導打造**集團統一基礎設施層**：自建 OAuth2/OIDC 身份提供者（LIDS）、自建 Secret Manager（Hurricane Vault）、自建 LLM Gateway 計費中心（Brain）、自建多租戶 SaaS 框架、Gitea Git Server（含客製 OIDC patch）、Wiki.js 技術文檔平台與 Headscale VPN，所有子公司產品與內部工具皆共用此基礎層。

設計並落實**集團級工程治理體系**：自建多層 CI/CD、強制式資料庫異動安全流程、量化 PR 評審門檻、工單驅動開發狀態機，以及 AI 高管副手團隊架構，落地跨 12+ 專案、6 家子公司。

> 外包進來的不只是人力——是補位資深技術決策，讓既有團隊不被卡住。

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
* **集團統一金流微服務**（Hurricane Pay）— FastAPI + PostgreSQL + PayPal SDK；GCP Cloud Run 多環境部署；15 routes；90 tests / 88% coverage；多集團產品接入，憑證統一由 GCP Secret Manager / Hurricane Vault 注入
* **多代理 AI 協作框架**（Brain）— AI agent 框架 + 終端整合；多角色協作分工；21 Python files / ~6,350 lines；多模式決策路由；工單驅動 + 狀態機；100% task completion in tests
* **AI 高管副手角色庫**（claude-agents）— 多角色虛擬團隊（覆蓋技術／營運／商務／產品／資安／法務）；多角色知識基準 + 跨機同步 + 分級權限
* **ML 模型訓練需求 / 版本管理平台**（Modelhub）— FastAPI + SQLAlchemy + SQLite；多層訓練資源排程；密鑰自動注入；多模組 CRUD；CI smoke test 全自動驗收
* **短視頻腳本生成 Pipeline**（content-pipeline）— FastAPI；多 LLM 引擎容錯 fallback；n8n webhook 通知；平台感知腳本生成；SQLite 儲存最近 50 筆
* **社群內容雷達**（content-radar）— APScheduler 每日定時抓取 YouTube；OpenAI 摘要分析；SQLite 去重儲存；Telegram Bot 推送每日報告；無對外 port，內網隔離
* **Multi-tenant SaaS 身份層**（LIDS）— OAuth2/OIDC Identity Provider，集團 SSO，9+ 系統接入，含客製 OIDC patch（依集團文件，非本 repo 可驗）
* **集團統一密鑰管理**（Hurricane Vault v1.0.0）— 自建 Secret Manager，多層稽核 + 雲端對稱備援，90+ secrets（依集團文件，非本 repo 可驗）
* **Tentacle BFF 與 Squid 工單生態**— Backend for Frontend pattern；工單狀態機（強制流轉）；內部 CLI 驅動；跨集團多產品共用（依集團文件，非本 repo 可驗）
* **集團統一 LLM Gateway**（Brain / Anemone）— 計費中心 + 跨租戶可視化 + 自動模型路由；Anemone 作 LLM ingress；Modelhub 為第二 LLM Provider（依集團文件，非本 repo 可驗）
* **集團統一 VPN**（Headscale）— ACL 鎖定，跨辦公室節點互通，動態 IP 管理（依集團文件，非本 repo 可驗）

### 技術決策 Key Technical Decisions
* 集團統一 OAuth2/OIDC Server（LIDS）— 多租戶完全掌控
* 集團統一 Secret Manager（Hurricane Vault）+ 雲端對稱備援架構 — 開發 / CI 走自建，生產 Cloud Run 走 GCP
* 集團統一 LLM Gateway（Brain）— 計費中心 + 自動模型路由
* 集團 Git Server（含 OIDC 客製 patch）— LIDS OIDC 整合多客戶端共用安全
* 自建多層 CI/CD（不依賴外部 CI 服務）— 不依賴外部 CI 服務，跨 12+ 專案
* PostgreSQL 統一資料層 — 跨 Python / C# / .NET / Node 共用，本機統一容器整併
* Cloud Run 統一部署規範（命名／版本／映像來源強制）
* 強制式資料庫異動安全流程（多階段備份／驗證／留證）

### 工程管理 Engineering Management
* 主導 **集團 6 家子公司** 的技術架構與部署協調
* 建立 **AI 高管副手團隊架構**（多角色虛擬團隊，覆蓋技術／營運／商務／產品／資安／法務）
* 建立 **量化 PR 評審制度**
* 工單驅動開發（狀態機強制流轉，全自動追蹤）
* 分層自動化測試 + CI 全綠強制門檻
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
`OAuth 2.0` `OpenID Connect (OIDC)` `OIDC（客製 patch）` `JWT (RS256)` `MFA (TOTP/Email/SMS)` `RBAC` `BCrypt` `AES-256-GCM` `Rate Limiting` `Audit Logging` `自建程式碼安全掃描器（含 ML 優化）`

### AI 與 LLM Integration
`MCP (Model Context Protocol)` `Anthropic Claude API` `Google Gemini` `OpenAI API` `Brain LLM Gateway（自建計費）` `Anemone（自建 LLM ingress）` `Modelhub（自訓模型 + 訓練 Pipeline）` `RAG` `LLM Provider Routing`

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
| **Hurricane Vault** | Go, PostgreSQL, GCP parity | v1.0.0，自建 Secret Manager，多層稽核，90+ secrets |
| **Hurricane Pay** | FastAPI, PostgreSQL, PayPal SDK | v0.13.0，集團統一金流，PayPal LIVE，9+ tenant |
| **Brain LLM Gateway** | FastAPI, PostgreSQL | 集團 LLM 計費中心，跨租戶可視化（brain-api/cloud/console） |
| **Anemone Platform** | FastAPI, WebSocket | 集團 LLM ingress，Widget ↔ Server ↔ Brain |
| **Modelhub** | Python, ML, Connector | v0.8.0，自訓模型 + 推論平台，Brain 第二 LLM Provider |
| **Wiki.js** | Node.js, LIDS SSO, Git Storage | 集團技術文檔平台，與 Gitea wiki-docs 雙向同步 |
| **Gitea Git Server** | Go, PostgreSQL, **客製 OIDC patch** | 自架 Git，工單與 Branch 雙向 Hook，集團主版控 |
| **Headscale VPN** | Go, ACL | 集團 VPN，跨辦公室節點互通，IP 動態 ACL |
| **CommTool** | Python | 統一通訊平台（IM + Email + LINE），集團與容器員工通訊 |
| **自建程式碼安全掃描器** | Python, ML | 集團內部資安掃描，含 ML 優化 |
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
| **Manta** | FastAPI + React, Canvas SSO | manta-production v2.16.1，AI Workflow Canvas |
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

### 公司負責人 / 集團技術長 | 颶風軟體有限公司 → HurricaneGroup
*2002 - 至今（24 年）*

* 創立軟體開發公司，2026 年完成集團化架構升級，旗下 **6 家子公司**
* 累積服務 **100+ 企業客戶**
* 主導設計 **30+ 互相整合的生產系統**，跨 6 家子公司
* 集團 GCP 統一維運：**19 個 Cloud Run 生產服務**
* 建立集團統一基礎設施：LIDS / Vault / Pay / Brain / Anemone / Wiki.js / Gitea / Headscale
* 建立 AI 高管副手團隊架構
* 建立工單驅動開發流程、量化 PR 評審制度、資料庫異動安全流程

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
* 建立 **AI 高管副手團隊架構**（多角色協作 + 內部通訊整合）
* GCP 統一維運責任歸 HurricaneSoft，集團 19 個 Cloud Run 服務統一管理

### 重大新系統上線
* **Hurricane Vault v1.0.0**（2026/04）— 自建 Secret Manager，多層稽核 + 雲端對稱備援
* **Hurricane Pay v0.13.0**（2026/05）— 集團統一金流，PayPal LIVE，9+ tenant 接入
* **Brain LLM Gateway**（2026/05 計費中心修復完工）— 集團 LLM 統一入口
* **Manta v2.16.1**（2026/05）— AI Workflow Canvas，LIDS SSO 整合
* **Gyre**（2026/05）— Next.js + Fastify 社群內容排程 SaaS
* **pxmart-warehouse v1.0.0**（2026/04）— .NET 8 WMS，810 tests，92% coverage
* **antique-master-web** 上線（2026/04）— 167 tests
* **Gitea OIDC 客製 patch**— LIDS OIDC PKCE 整合
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
**獨立開發 | 656+ 工時 | 分階段交付**

* Blazor Server (.NET 9) + Firebase Admin SDK
* 完成用戶管理、Firestore 瀏覽器、Storage 管理、統計分析、推播通知、系統監控等 8 個階段

### STA 組織綜合管理平台 (2019/02-2021/02)
**全端工程師 | 5 人團隊**

* 中華民國游泳救生協會線上課程報名系統，服務 **5,000+ 學員**
* 線上報名率提升 80%，行政作業時間減少 60%
* PHP CodeIgniter HMVC 架構，15+ 種營運報表
* 2026 年持續維運，5/9 大修復後上生產


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
| **DevOps & Cloud** | 5 年 | GCP Cloud Run（19 services）、自建多層 CI/CD、資料庫異動安全流程 |
| **企業客戶服務** | 24 年 | 100+ 企業客戶 |

---

*最後更新：2026 年 5 月*
*此履歷已針對 ATS 系統關鍵字強化：Group CTO, Technical Architect, Engineering Lead, System Design, Microservices, Multi-tenant SaaS, Platform Engineering, OAuth2/OIDC, LLM Gateway, GCP Cloud Run, CI/CD Pipeline Design, Secret Management*
