# 王英豪 - Python / AI / LLM 工程師

## AI/LLM Platform Engineer | Brain LLM Gateway + Anemone + MCP + Modelhub | 25 年 Python 全棧經驗 | GCP Cloud Run 19 services

---

## 聯絡資訊 - Contact Information

* **姓名 Name**：王英豪 (WANG YING HAO)
* **電話 Phone**：0921-107-206
* **信箱 Email**：[cancleeric@gmail.com](mailto:cancleeric@gmail.com)
* **期望薪資 Expected Salary**：NT$ 2,400,000 / 年
* **工作地點 Location**：新北市中和區（可北部地區工作）

---

## 專業摘要 - Professional Summary

**Python 架構師 | AI / LLM Gateway 工程師 | 集團技術長**

精通 Python FastAPI 非同步架構設計，從零建構涵蓋 **100+ REST API 端點**的企業級系統。主導 **HurricaneGroup（颶風集團）** 統一 LLM 基礎設施：

- **Brain LLM Gateway**（FastAPI + PostgreSQL）— 集團 LLM 計費中心，multi-provider routing（Claude / Gemini / OpenAI / Modelhub），per-tenant 配額控制 + Superadmin 計費可視化
- **Anemone Platform**（FastAPI + WebSocket）— 集團 LLM ingress，WebSocket relay + reverse connector auth，符合集團 AI routing 標準
- **Modelhub** v0.8.0 — 自訓模型 + 推論平台，Kaggle Pipeline，Brain 第二 LLM Provider
- **Manta** v2.38.0 — AI Workflow Canvas（FastAPI + React Canvas）
- **Gyre** v0.4.0 — 多平台社群媒體管理 SaaS（Next.js + Fastify + Python AI service）
- **Tianji** v1.2.2 — 命理 App（FastAPI + Jinja SSR + Hurricane Pay）
- **Fiona Pipeline** v0.2.4 — 內容生成 Pipeline（呼叫 Manta workflow）
- **Aegis Security Scanner** — 自建程式碼安全掃描器 + ML FP ranker 訓練（scikit-learn）

主導 **MCP (Model Context Protocol)** 整合方案，**40+** 個工具端點，實現 AI 助手（Claude、ChatGPT、Gemini）與生產系統的無縫對接。

擁有 **25 年**跨語言軟體開發經驗、**24 年**技術管理實務，創立 HurricaneGroup 集團（**6 家子公司、30+ 生產系統、Cloud Run 19 services**），建立 C-suite 副手制虛擬高管團隊架構。

---

## 核心技術棧 - Core Technical Skills

### Python 生態系 Python Ecosystem
`Python 3.11+` `FastAPI` `SQLAlchemy 2.0` `Alembic` `asyncpg` `aiohttp` `Pydantic` `Click` `Typer` `Rich` `PyInstaller` `requests` `httpx` `PyJWT` `setuptools` `pytest`

### AI / Machine Learning
`MCP (Model Context Protocol)` `Anthropic Claude API` `Google Gemini` `OpenAI API` `Brain LLM Gateway（自建）` `Anemone（自建 LLM ingress）` `Modelhub（自訓模型）` `scikit-learn` `Anomaly Detection` `Prompt Engineering` `LLM Provider Routing`

### 資料庫 Database Technologies
`PostgreSQL` `SQLite` `asyncpg` `SQLAlchemy 2.0 (Async)` `Alembic Migrations` `Full-Text Search (FTS5)` `ClickHouse`

### 雲端與 DevOps Cloud & DevOps
`Docker` `Git Hooks CI/CD (post-commit / pre-push)` `GitHub Actions` `GCP Cloud Run` `GCP Cloud Functions` `GCP Secret Manager` `Prometheus` `Sentry` `OpenTelemetry`

### 認證與安全 Authentication & Security
`OAuth 2.0` `OpenID Connect (OIDC)` `JWT (RS256)` `RBAC` `Multi-tenant Isolation` `Rate Limiting` `Audit Logging`

### 其他語言與框架 Other Languages & Frameworks
`C#` `ASP.NET Core 8` `TypeScript` `Fastify` `Next.js` `React 18` `Swift` `PHP`

---

## Python 專案詳述 - Python Project Details

### 1. Brain LLM Gateway — 集團 LLM 計費中心

**時間**：2026 - 至今（2026/05 計費中心修復完工）
**角色**：架構設計者 / 核心開發者
**技術**：FastAPI, PostgreSQL, brain-api (8931) / brain-cloud (8932) / brain-console (3931)

集團統一 LLM 入口，所有子公司 LLM 呼叫一律走 Brain：

- Engineered multi-provider LLM routing with dynamic provider selection: routes requests across Claude / Gemini / OpenAI / Modelhub self-hosted model based on per-tenant configuration and query complexity
- Implemented per-tenant token metering and quota enforcement: each subsidiary billed independently via Superadmin Console, real-time cost tracking across 6 tenants
- Exposed per-tenant quota control API: downstream services enforce rate limits before reaching upstream LLM providers
- **Headless 預設 Gemini**，可動態切換 provider，不需修改下游呼叫端 code
- **Superadmin 計費可視化 Console**（brain-console）：跨租戶 token 用量、成本分攤、配額管理一覽
- **Provider 抽象層設計**：Anthropic Claude / Google Gemini / OpenAI / Modelhub 四個 provider 共用統一介面，新增 provider 不影響 routing logic
- **brain-cloud 本機即生產**：brain-cloud-dev 連接生產 Anemone，不另建 Cloud Run 實例
- **GEMINI_CLI_TRUST_WORKSPACE** 環境設定：避免 Gemini CLI delta={} 靜默失敗問題
- 完整 token 計量日誌：每筆 LLM 呼叫記錄 provider / model / input tokens / output tokens / tenant_id
- 三服務協作架構：brain-api（核心 LLM proxy）/ brain-cloud（外部連線中繼）/ brain-console（計費管理 UI）

---

### 2. Anemone — LLM Ingress Platform

**時間**：2026 - 至今
**角色**：架構設計者 / 核心開發者
**技術**：FastAPI + WebSocket + 反向連線架構
**Cloud Run**：anemone-api-production

集團統一 LLM ingress 平台，所有外部 Widget → Anemone → Brain 的流量由此路由：

- Architected WebSocket relay session management: LLM token stream delivered to client Widget without buffering full response in memory
- Implemented reverse connector authentication: external LLM connectors initiate outbound connection to Anemone, eliminating inbound firewall exposure
- Compliant with group AI routing standards: all LLM traffic passes through Anemone before reaching Brain Gateway, enabling centralized logging and quota tracking
- 2026-04-30 connector_auth 修復後首次 E2E 驗收通過
- **流量架構**：外部 Widget → Anemone（WebSocket relay）→ Brain Gateway（LLM proxy）→ upstream provider
- **ADR-002 / ADR-003 合規**：符合集團 AI routing 標準，Gyre 等子產品已整合

---

### 3. MCP Server — AI 工具整合服務

**角色**：架構設計者 / 整合工程師
**期間**：2025 - 至今
**技術**：TypeScript + Express.js（由 Python Squid API 驅動）

#### 設計理念
實現 **Model Context Protocol (MCP)** 標準，讓 AI 助手（Claude、ChatGPT 等）能直接操作 Squid 生產系統 — 查詢工單、建立需求、部署服務、管理專案。

#### 技術亮點
* **40+ 工具端點**：Squid MCP Server 43 個已確認工具定義，AI 助手直接操作生產票務、部署、資料更新
* **自動化工具定義生成**：掃描 Squid API 端點，自動產生 MCP Tool Definitions
* **雙向整合**：AI 助手可讀取、建立、更新生產資料
* **安全控制**：OAuth2.0 Token 認證，Action-level 權限控制

#### 應用場景
```
AI Assistant (Claude Code)
    ↓ MCP Protocol
MCP Server (40+ Tool Definitions)
    ↓ REST API
Squid API (Python FastAPI)
    ↓ SQLAlchemy
PostgreSQL (Production Data)
```

---

### 4. Modelhub — 自建模型訓練平台

**時間**：2026 - 至今（v0.8.0）
**技術**：Kaggle Pipeline + 自訓模型 + FastAPI serving
**整合**：作為 Brain LLM Gateway 第二 provider

- Built end-to-end model training pipeline: Kaggle dataset ingestion → feature engineering → training → serving via Brain LLM Gateway as secondary provider
- Integrated Modelhub as Brain's secondary LLM provider via standardized provider interface, enabling cost-optimized routing to self-hosted model for low-complexity queries
- Modelhub serving 與 Brain routing 解耦：Brain 視 Modelhub 為標準 provider，切換不需改 upstream code
- **成本最佳化路由**：低複雜度查詢自動 route 至 Modelhub 自訓模型，降低 Anthropic / Google API 費用
- **自訓模型 Pipeline**：Kaggle 資料集收取 → Feature Engineering → 模型訓練 → FastAPI 推論服務

---

### 5. Manta — AI Workflow Canvas（HurricaneEdge）

**時間**：2026 - 至今（v2.38.0）
**角色**：架構設計者 / 核心開發者
**技術**：FastAPI + React Canvas + LIDS OAuth SSO
**Cloud Run**：manta-production

可視化 AI workflow 編輯器，節點化串接 LLM / 外部 API / 資料處理：

- DAG-based workflow 執行引擎：nodes define typed input/output schema，執行順序由依賴圖決定
- React Canvas renderer：拖拉節點、連線、即時預覽，前端以 React 18 實作無限畫布
- fiona-pipeline API 整合：fiona-pipeline 透過 Manta REST API 觸發 workflow，有完整整合 SOP
- LIDS OAuth SSO 整合：v2.38.0 Canvas browser SSO，FRONTEND_URL 不帶路徑後綴
- Migrations 018-025 已上生產，v2.38.0 穩定運行中

---

### 6. Gyre — 多平台社群媒體管理 SaaS

**時間**：2026 - 至今（v0.4.0）
**角色**：架構設計者
**技術**：Next.js 15 + Fastify (TypeScript) + Python FastAPI AI service + PostgreSQL + ClickHouse
**架構**：Turborepo monorepo（apps/web + apps/api + apps/ai-service + packages/db + packages/types）
**Cloud Run**：gyre-api / gyre-web / gyre-ai-service（anemone ADR-002/003 合規）

對標 Publer 的亞太本地化社群排程 SaaS，AI 原生設計：

- Architected tri-service monorepo: Next.js frontend / Fastify API / Python FastAPI AI service 解耦部署，共用 packages/types 型別定義
- Python AI service 整合 Anemone，走集團 AI routing standards，Claude 文案生成 + 最佳發布時間預測
- ClickHouse 雙資料庫架構：PostgreSQL 處理業務資料，ClickHouse 存放發布紀錄 / 分析數據
- 支援 Facebook Page / Instagram Business / LinkedIn / LINE OA 多平台排程（Phase 1 MVP）

---

### 7. Squid API — 企業級專案管理系統

**角色**：後端架構師 / Python 開發工程師 / 技術負責人
**期間**：2025/01 - 至今
**技術**：Python 3.11+, FastAPI, PostgreSQL, SQLAlchemy 2.0, Alembic, asyncpg, Pydantic, pytest

#### 系統規模
* **50+ 資料表**，完整的關聯式資料模型設計
* **100+ REST API 端點**，完整 CRUD + 業務邏輯
* **1,076 個 Python 檔案**，專案規模 3.0 GB
* Multi-tenant 架構，每個租戶資料完全隔離

#### 架構設計（四層式 Layered Architecture）
```
API Service (FastAPI Routes / Middleware)
    ↓
BAL - Business Access Layer (業務邏輯驗證)
    ↓
CORL - Core Logic Layer (核心運算 / 排程 / 協調)
    ↓
DAL - Data Access Layer (SQLAlchemy 2.0 + asyncpg)
    ↓
PostgreSQL (Multi-tenant Isolation)
```

#### 核心功能實現
* **非同步架構**：全面使用 `async/await`，FastAPI + asyncpg 高效處理並發請求
* **Multi-tenant RBAC 權限系統**：租戶隔離 + 角色權限控制，支援跨租戶管理
* **需求管理 / 專案管理 / 驗證評審系統**：完整工單生命週期管理
* **分散式節點協調 + APScheduler 排程**：支援多實例部署場景
* **WebSocket 即時通訊**：Server-Sent Events 與雙向溝通
* **Stripe / PayPal 金流整合**：訂閱制與一次性付款
* **SendGrid Email / Slack SDK 通知**：多頻道訊息推送
* **Prometheus + Sentry 監控**：效能指標收集與錯誤追蹤
* **JWT + OAuth2.0 認證**：RS256 簽章，Token Refresh 機制
* **Alembic 集中式 Migration 管理**：DB Schema 版本控制從專案目錄分離

---

### 8. Aegis Security Scanner — 自建掃描器 + ML 訓練

**角色**：獨立開發者
**技術**：Python, scikit-learn, tree-sitter AST, NumPy, pandas

Python 寫的程式碼安全掃描器，含 ML false-positive ranker 訓練 pipeline：

* **tree-sitter AST 解析**：PHP + JavaScript WASM，blast radius 分析 + function signature 提取
* **ML FP Ranker**：Isolation Forest / Local Outlier Factor 訓練於集團內部程式碼庫，降低誤報率
* **專案指標異常偵測**：監控工時、完成率、品質評分的異常波動（整合至 Squid API ML 模組）
* **資料前處理 Pipeline**：Feature Engineering + Normalization，以 FastAPI 端點暴露 ML 推論結果
* **CI gate 自動執行**：整合至集團兩層式 CI/CD，pre-push 階段自動觸發掃描

---

### 9. Tianji（天機）— 命理 SaaS

**技術**：FastAPI + Jinja SSR + Hurricane Pay
**版本**：v1.2.2，Cloud Run `tianji-api-production`

集團首個全 stack Python SSR + 自建金流整合的對外 SaaS。

---

### 10. Fiona Pipeline / Radar — 內容生成與監控

`fiona-pipeline-production` v0.2.4（內容生成，呼叫 Manta workflow）+ `fiona-radar-production`（YouTube 頻道監控）。

---

### 11. line-controller / LC — 訓練資料工具

**技術**：Python, SQLite, LINE API
**版本**：v1.4.0

LINE 對話管理與 AI 訓練資料工具鏈，parse_chat_text 完全重構（Round 5）：

* **7,608 輪對話**訓練資料已整理，供 LLM fine-tuning 使用
* `lc export` 輸出標準訓練格式（question / answer 對）
* 143 個測試全部通過（v1.4.0 main 4a877d3）
* LINE 媒體佔位修復：圖片 / 貼圖不帶括號，避免訓練資料污染

---

### 內部工具鏈 Internal Tooling

- **Neritic CLI** (v3.2.0)：DevOps CLI，PyInstaller binary，Device Code Flow auth，Git Hook 自動 build 整合
- **CommTool (CMC)**：集團統一通訊平台，POP3S/SMTPS + IM，LIDS OAuth 整合，多租戶管理
- **Squid Python SDK**：type-safe API client，Pydantic models，自動 token refresh，pytest 整合覆蓋

---

## 兩層式 CI/CD 架構 - Two-tier CI/CD Architecture

**Python 驅動的完整 DevOps Pipeline，5 個專案自動化建置部署**

### 設計理念
消除對外部 CI 服務的依賴，用 Git Hooks 實現本地 + Staging 兩層自動化：

| 層級 | 觸發機制 | 目標環境 | 用途 |
|------|----------|----------|------|
| **post-commit** | `git commit` | Local Docker | 本地開發驗證 |
| **pre-push** | `git push` | Staging Server | Staging 整合測試 |

### 涵蓋專案
| 專案 | 本地部署 | Staging 部署 |
|------|----------|-------------|
| Squid API | Docker Build → HTTPS | Docker Transfer → HTTPS |
| MCP Server | Docker Build → HTTP | Docker Transfer → HTTP |
| LIDS | Docker Build → HTTP/HTTPS | Docker Transfer → HTTP/HTTPS |
| Frontend | Docker Build → HTTPS | neritic deploy → HTTPS |
| Neritic CLI | PyInstaller → binary | Validation only |

### 生產環境
* **GCP Cloud Run**：GitHub Actions 觸發，自動部署至生產環境
* **LIDS Secret Rotator**：GCP Cloud Functions，90 天自動密鑰輪替

---

## 系統架構總覽 - Architecture Overview

```
                    [AI Assistants]
                         |
              [Anemone LLM Ingress Platform]
              (WebSocket relay / connector auth)
                         |
              [Brain LLM Gateway]
              (multi-provider routing / per-tenant billing)
              Claude | Gemini | OpenAI | Modelhub
                         |
                    [MCP Server] ←── 40+ Tool Definitions
                         |
[Tentacle Frontend] → [BFF] → [Squid API (FastAPI)] → [PostgreSQL]
                                      |
                               [Aegis + scikit-learn ML]
                                      |
                    [LIDS (OAuth2/OIDC)] ←── Identity Provider

[Neritic CLI] → [Squid API] (Direct REST)
[CommTool] → Internal Communication
[Python SDK] → External Developer Access
[Gitea] → Source Code + Webhook Integration
```

---

## 工作經歷 - Professional Experience

### .NET Engineer | 中小企業信用保證基金
*2024/05 - 2026/02*

* **8 人開發團隊**，負責信用保證網路作業系統現代化
* 主導舊系統從 .NET Framework 4.6 升級至 .NET 8 + Blazor
* 採用微服務架構設計，提升系統擴展性與維護性

### 公司負責人 / 總經理 / 技術架構師 | 颶風軟體有限公司
*2002 - 至今（24 年）*

* 創立並經營軟體開發公司，累積服務 **100+ 企業客戶**
* 主導設計 **Squid 企業級生態系統**（12 個生產系統）
* 建立工單驅動開發流程與 140 分評審制度
* 自架 Gitea Git Server — 工單與 Branch 雙向自動化 Hook

---

## 其他技術專案 - Other Technical Projects

### LocalIdentityServer (LIDS) — OAuth2/OIDC 身份認證伺服器
* **技術**：C# ASP.NET Core 8, PostgreSQL, EF Core, Blazor Server
* **功能**：Multi-tenant OAuth2.0 + OIDC Provider, MFA (TOTP/Email/SMS), Break-glass Access, 客製 PKCE patch (v1.26.1)
* **由 Eric 主導架構設計**，與 Squid API 深度整合

### LifeSnap — iOS 多人對戰手遊 (2023/06-2024/04)
* **技術**：SwiftUI + SpriteKit + Firebase + CloudKit + ChatGPT API
* **亮點**：整合 ChatGPT AI 聊天功能，已上線 App Store

---

## 學歷 - Education

* **東南科技大學** 數位電子系（二專）— 第一名畢業
* **內湖高級工業職業學校** — 代表學校參加技能競賽，榮獲三等榮譽獎章

---

## 專業能力統計 - Professional Experience Summary

| 專業領域 Field | 年資 Years | 主要成就 Key Achievement |
|----------------|-----------|------------------------|
| **Python 開發 Python Development** | 8+ 年 | Brain Gateway / Anemone / Modelhub / Squid API / 4 工具 |
| **AI / LLM Integration** | 3+ 年 | Brain Gateway / Anemone / Modelhub / MCP 40+ endpoints / Manta Workflow |
| **集團技術領導 Group Leadership** | 24 年 | HurricaneGroup 6 子公司、C-suite 副手制 |
| **系統架構 System Architecture** | 18 年 | Multi-tenant SaaS, OAuth2, Microservices, LLM Gateway |
| **軟體工程 Software Engineering** | 25 年 | 30+ 生產系統的集團生態系統 |
| **GCP DevOps & CI/CD** | 5 年 | Cloud Run 19 services, 兩層式 CI/CD, 6 步 DB 流程 |

---

## 為什麼選擇我 - Why Hire Me

1. **LLM 基礎設施實戰深度**：自建完整 LLM 路由棧 — Brain Gateway（multi-provider routing + per-tenant billing）+ Anemone（ingress + WebSocket relay）+ Modelhub（self-hosted model），不是 API wrapper，是生產級平台
2. **MCP Protocol 先行者**：40+ 工具端點，AI 助手直接操作生產系統，不是 Demo 而是真實落地運作中的工程組織核心基礎設施
3. **Python 全棧深度**：不只寫腳本，而是用 Python 建構完整企業級後端 — FastAPI + SQLAlchemy + Alembic + asyncpg 的生產系統
4. **工具鏈建構者**：CLI (Neritic)、SDK (Python SDK)、通訊平台 (CommTool)、LC 訓練資料工具 — 從需求到交付的完整工具鏈
5. **架構思維**：24 年技術管理經驗，能從系統全局思考，不只解決單一問題
6. **跨語言視野**：Python / C# / TypeScript / Swift 多語言經驗，能選擇最合適的技術而非偏好

---

*最後更新：2026 年 5 月*
*此履歷已針對 ATS 系統關鍵字強化：Python Architect, AI Engineer, LLM Gateway, FastAPI, MCP, Model Context Protocol, Brain LLM Gateway, Anemone, Modelhub, Multi-provider Routing, Per-tenant Billing, WebSocket, Reverse Connector, Machine Learning, scikit-learn, asyncio, SQLAlchemy, Pydantic, DevOps, CI/CD, Docker, PostgreSQL, OAuth2, Multi-tenant, REST API*
