# 王英豪 - 技術架構師 / 工程主管

## Technical Architect & Engineering Lead | 25年軟體工程經驗 | 12+ Production Systems

---

## 聯絡資訊 - Contact Information

* **姓名 Name**：王英豪 (WANG YING HAO)
* **電話 Phone**：0921-107-206
* **信箱 Email**：[cancleeric@gmail.com](mailto:cancleeric@gmail.com)
* **期望薪資 Expected Salary**：NT$ 2,400,000 / 年
* **工作地點 Location**：新北市中和區（可配合北部地區工作）

---

## 專業摘要 - Professional Summary

**技術架構師 | 工程主管 | 創業技術負責人**

擁有 **25 年**軟體工程經驗與 **24 年**技術管理實務。主導設計並建構 **Squid 企業級生態系統** — 涵蓋 API 後端、OAuth2/OIDC 身份認證服務、Web 前端、BFF 層、2 套多語言 SDK、CLI 工具鏈、統一通訊平台，以及 AI 整合的 MCP Server，共 **12 個互相協作的生產系統**。

設計並實施兩層式 CI/CD 架構（Git Hooks post-commit 本地建置 + pre-push Staging 部署），管理從本地 Docker 開發到 GCP Cloud Run 生產環境的完整 DevOps Pipeline。現管理 **8 人跨職能工程團隊**，建立工單驅動的標準化開發流程與自動化評審系統。

---

## 架構能力與技術領導 - Architecture & Technical Leadership

### 系統設計 System Design
* Multi-tenant SaaS Architecture（Squid + LIDS 多租戶隔離）
* Layered Architecture：API Service → BAL → CORL → DAL（50+ 資料表、100+ API 端點）
* OAuth 2.0 / OIDC Identity Provider（自建 LocalIdentityServer）
* Backend for Frontend (BFF) Pattern（Tentacle BFF）
* MCP (Model Context Protocol) Integration — AI 工具整合架構

### 技術決策 Key Technical Decisions
* 選擇自建 OAuth2/OIDC Server 而非使用 Auth0/Okta — 滿足多租戶隔離與完全掌控需求
* 採用 FastAPI + asyncpg 非同步架構 — 支撐 100+ API 端點的高並發
* 實施兩層式 CI/CD（Git Hooks）— 消除對外部 CI 服務的依賴，5 個專案自動化
* PostgreSQL 統一資料層 — 跨 Python / C# / .NET 專案共用
* Alembic 集中式 Migration 管理 — 將 DB 版本控制從專案目錄中分離

### 工程管理 Engineering Management
* 管理 **8 人跨職能團隊**（開發、DBA、DevOps、部署、助理）
* 建立 **140 分評審制度**（90% 通過門檻，6 維度評分）
* 實施工單驅動開發：open → in_progress → pending_review → reviewed → completed
* 建立三階段測試規範：單元測試 → 整合測試 → E2E 測試
* 自架 Gitea Git Server — 工單與 Branch 雙向自動化 Hook

---

## 核心技術棧 - Core Technical Skills

### 程式語言 Programming Languages
`C#` `Python` `Java` `JavaScript` `TypeScript` `Swift` `PHP` `SQL` `C++` `Objective-C`

### 後端框架 Backend Frameworks
`.NET 8` `ASP.NET Core` `FastAPI` `Express.js` `Entity Framework Core` `SQLAlchemy 2.0` `Blazor Server` `RESTful API` `WebSocket`

### 資料庫 Database Technologies
`PostgreSQL` `SQL Server` `MySQL` `SQLite` `Firebase Firestore` `CloudKit` `Alembic` `EF Core Migrations`

### 雲端與 DevOps Cloud & DevOps
`Google Cloud Run` `GCP Cloud Functions` `GCP Secret Manager` `Azure` `Firebase` `Docker` `Git Hooks CI/CD` `GitHub Actions` `Prometheus` `OpenTelemetry` `Sentry`

### 認證與安全 Authentication & Security
`OAuth 2.0` `OpenID Connect (OIDC)` `JWT (RS256)` `MFA (TOTP/Email/SMS)` `RBAC` `BCrypt` `AES-256-GCM` `Rate Limiting` `Audit Logging`

### AI 與工具整合 AI & Tooling
`MCP (Model Context Protocol)` `ChatGPT API` `scikit-learn` `PyInstaller` `Rollup` `Webpack 5`

---

## 核心架構成就：Squid 企業級生態系統 - Flagship Architecture

**角色**：技術架構師 / 技術負責人 | 主導 8 人團隊 | 2024/11 - 至今

從零設計並建構完整的企業級平台生態系統，包含 12 個互相整合的服務與工具：

### 後端核心服務

| 服務 | 技術棧 | 規模 |
|------|--------|------|
| **Squid API** | Python FastAPI, PostgreSQL, SQLAlchemy 2.0 | 50+ 資料表, 100+ API 端點 |
| **LocalIdentityServer (LIDS)** | ASP.NET Core 8, PostgreSQL, EF Core, Blazor | OAuth2/OIDC, Multi-tenant, MFA |
| **MCP Server** | TypeScript, Express.js | AI Tool Integration (Model Context Protocol) |

### 用戶端應用

| 應用 | 技術棧 | 特點 |
|------|--------|------|
| **Tentacle Frontend** | React 18, TypeScript, Webpack 5 | OIDC Auth, Stripe/PayPal, Dashboard |
| **Tentacle BFF** | Express.js, TypeScript | Session Management, OIDC, Rate Limiting |

### 開發工具鏈

| 工具 | 技術棧 | 特點 |
|------|--------|------|
| **Neritic CLI** | Python Click, PyInstaller | 工單管理, Docker Remote Deploy, 自動版本號 |
| **CommTool** | Python | 統一通訊平台 (IM + Email)，多頻道整合 |
| **NLIDS CLI** | Python Typer | LIDS 遠端管理（用戶/租戶/OAuth Client） |
| **Squid Python SDK** | Python, Pydantic | API 客戶端 SDK |
| **Squid JS SDK** | TypeScript, Rollup | ESM/CJS, 100% test coverage |

### 基礎設施與 DevOps

| 設施 | 技術棧 | 特點 |
|------|--------|------|
| **兩層式 CI/CD** | Git Hooks (post-commit + pre-push) | 5 個專案自動化建置部署 |
| **LIDS Secret Rotator** | Node.js, GCP Cloud Functions | 90 天自動密鑰輪替 + Audit |
| **Gitea Git Server** | Self-hosted (2026/02) | 自架 Git，工單與 Branch 雙向 Hook |

### 架構總覽

```
[Tentacle Frontend] → [Tentacle BFF] → [Squid API] → [PostgreSQL]
        |                                     |
   [OIDC Login]                        [MCP Server]
        |                                     |
[LocalIdentityServer] ←───── [AI Assistants (Claude, etc.)]
        |
[LIDS Secret Rotator] (GCP Cloud Functions)

[Neritic CLI] → [Squid API] (Direct)
[CommTool] → Internal Team Communication
[Python SDK / JS SDK] → External Developer Access
[Gitea] → Source Code Management + Webhook Integration
```

---

## 工作經歷 - Professional Experience

### .NET Engineer | 中小企業信用保證基金
*2024/05 - 2025/07*

* **8 人開發團隊**，負責信用保證網路作業系統現代化
* 主導舊系統從 .NET Framework 4.6 升級至 .NET 8 + Blazor
* 採用微服務架構設計，提升系統擴展性與維護性
* 支援銀行端信用保證業務系統

### 公司負責人 / 總經理 / 技術架構師 | 颶風軟體有限公司
*2002 - 至今（24 年）*

* 創立並經營軟體開發公司，累積服務 **100+ 企業客戶**
* 管理 **8 人跨職能技術團隊**，負責員工技術培訓與 Code Review
* 主導設計 Squid 企業級生態系統（12 個生產系統）
* 主導大型 ERP、CRM、電商平台、身份認證系統專案開發
* 建立工單驅動開發流程與 140 分評審制度

### 軟體工程師 | 米迪亞系統科技（d-media）
*2001 - 2002*

* 負責 Casio Cassiopeia E-125 (Pocket PC / Windows CE) 平台原生應用開發
* 使用 **eVC++ (eMbedded Visual C++ 3.0) + MFC** 進行嵌入式 C++ 開發
* 開發四大模組（全中文介面 + 多語系支援）：主選單工具列、行事曆、聯絡人、相簿
* 產品搭載於 d-media 品牌 PDA，銷售通路涵蓋**全球 400+ 機場**

### 軟體工程師 / CTO | 東岸互動
*2000 - 2001*

* Web 版海報編輯器 — 金流串接 / 印刷廠串接 / 會員系統 / 物流收送
* 技術：ASP, Java, C++, JavaScript, SQL Server

---

## 其他重點專案 - Other Key Projects

### LifeSnap - 多功能社交遊戲平台 (2024/03-2024/04)
**iOS 開發工程師 | 3 人團隊**

* 多米諾骨牌對戰手遊，已上線 App Store
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

---

## 學歷 - Education

* **東南科技大學** 數位電子系（二專）— 第一名畢業
* **內湖高級工業職業學校** — 代表學校參加技能競賽，榮獲二等榮譽獎章

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
| **技術管理 & 創業** | 24 年 | 創立軟體公司，管理 8 人團隊，服務 100+ 企業客戶 |
| **系統程式開發** | 25 年 | 建構 12 個生產系統的企業級生態系統 |
| **系統架構設計** | 18 年 | Multi-tenant SaaS / OAuth2 / Microservices 架構師 |
| **系統分析** | 15 年 | 需求分析，技術選型，專案規劃 |
| **DevOps & CI/CD** | 5 年 | 兩層式 CI/CD、Docker 容器化、Cloud Run 部署 |

---

*最後更新：2026 年 2 月*
*此履歷已針對 ATS 系統關鍵字強化：Technical Architect, Engineering Lead, System Design, Microservices, Multi-tenant SaaS, Platform Engineering, OAuth2/OIDC, CI/CD Pipeline Design*
