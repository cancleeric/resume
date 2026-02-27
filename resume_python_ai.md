# 王英豪 - Python 架構師 / AI 工程師

## Python Architect & AI Engineer | 25年軟體工程 | FastAPI + MCP + AI Integration

---

## 聯絡資訊 - Contact Information

* **姓名 Name**：王英豪 (WANG YING HAO)
* **電話 Phone**：0921-107-206
* **信箱 Email**：[cancleeric@gmail.com](mailto:cancleeric@gmail.com)
* **期望薪資 Expected Salary**：NT$ 2,400,000 / 年
* **工作地點 Location**：新北市中和區（可北部地區工作）

---

## 專業摘要 - Professional Summary

**Python 架構師 | AI 工程師 | 技術負責人**

精通 Python FastAPI 非同步架構設計，從零建構涵蓋 **50+ 資料表、100+ REST API 端點**的企業級系統。主導 **MCP (Model Context Protocol)** 整合方案，實現 AI 助手（Claude、ChatGPT）與生產系統的無縫對接，將 AI 能力嵌入真實業務流程。

獨立開發 **4 個 Python 工具/SDK**：Squid API 後端、Neritic CLI DevOps 工具鏈、CommTool 統一通訊平台、Squid Python SDK — 展現從系統架構到工具鏈的完整 Python 工程能力。整合 **scikit-learn** 進行異常偵測與專案指標分析，具備 Machine Learning 實務應用經驗。

擁有 **25 年**跨語言軟體開發經驗，**24 年**技術管理實務，現管理 **8 人跨職能工程團隊**，建立工單驅動的標準化開發流程與自動化評審系統。

---

## 核心技術棧 - Core Technical Skills

### Python 生態系 Python Ecosystem
`Python 3.11+` `FastAPI` `SQLAlchemy 2.0` `Alembic` `asyncpg` `aiohttp` `Pydantic` `Click` `Typer` `Rich` `PyInstaller` `requests` `httpx` `PyJWT` `setuptools` `pytest`

### AI / Machine Learning
`MCP (Model Context Protocol)` `ChatGPT API` `scikit-learn` `Anomaly Detection` `AI Tool Integration` `Prompt Engineering`

### 資料庫 Database Technologies
`PostgreSQL` `SQLite` `asyncpg` `SQLAlchemy 2.0 (Async)` `Alembic Migrations` `Full-Text Search (FTS5)`

### 雲端與 DevOps Cloud & DevOps
`Docker` `Git Hooks CI/CD (post-commit / pre-push)` `GitHub Actions` `GCP Cloud Run` `GCP Cloud Functions` `GCP Secret Manager` `Prometheus` `Sentry` `OpenTelemetry`

### 認證與安全 Authentication & Security
`OAuth 2.0` `OpenID Connect (OIDC)` `JWT (RS256)` `RBAC` `Multi-tenant Isolation` `Rate Limiting` `Audit Logging`

### 其他語言與框架 Other Languages & Frameworks
`C#` `ASP.NET Core 8` `TypeScript` `Express.js` `React 18` `Swift` `PHP`

---

## Python 專案詳述 - Python Project Details

### 1. Squid API — 企業級專案管理系統

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

### 2. MCP Server — AI 工具整合服務

**角色**：架構設計者 / 整合工程師
**期間**：2025 - 至今
**技術**：TypeScript + Express.js（由 Python Squid API 驅動）

#### 設計理念
實現 **Model Context Protocol (MCP)** 標準，讓 AI 助手（Claude、ChatGPT 等）能直接操作 Squid 生產系統 — 查詢工單、建立需求、部署服務、管理專案。

#### 技術亮點
* **自動化工具定義生成**：掃描 Squid API 端點，自動產生 MCP Tool Definitions
* **自動化**：掃描 API 端點自動產生 MCP Tool Definitions
* **雙向整合**：AI 助手可讀取、建立、更新生產資料
* **安全控制**：OAuth2.0 Token 認證，Action-level 權限控制

#### 應用場景
```
AI Assistant (Claude Code)
    ↓ MCP Protocol
MCP Server (Tool Definitions)
    ↓ REST API
Squid API (Python FastAPI)
    ↓ SQLAlchemy
PostgreSQL (Production Data)
```

---

### 3. Neritic CLI — DevOps 命令列工具

**角色**：獨立開發者
**期間**：2024 - 至今（版本 3.2.0+）
**技術**：Python 3.8+, Click, Rich, requests, httpx, PyInstaller

#### 核心功能
* **工單管理（CRUD）**：建立 / 查詢 / 更新 / 搜尋需求工單
* **Docker Remote 部署**：一鍵部署至 Staging 環境
* **認證系統**：Device Code Flow + API Key，macOS Keychain 整合
* **評審報告系統**：140 分制自動化評分與提交
* **計劃案管理**：大型功能的 Plan 建立與追蹤

#### DevOps 自動化亮點
* **Git Hook 自動編譯**：post-commit → PyInstaller → `~/.local/bin/neritic`
* **語意化版本號自動遞增**：`feat:` commit → MINOR bump, `fix:` commit → PATCH bump
* **Symlink 管理**：`neritic → neritic-fast → neritic-v{VERSION}` 無縫升級

#### 程式碼品質
* Rich Terminal UI — 美觀的表格 / 進度條 / 語法高亮
* 完整的錯誤處理與 retry 機制
* 模組化架構，功能可擴展

---

### 4. CommTool (CMC) — 統一通訊平台

**角色**：架構設計者 / 核心開發者
**技術**：Python 3, SQLite/PostgreSQL, HTTP API

#### 核心功能
* **郵件管理**：POP3S (SSL 995) / SMTPS (SSL 465) 收發信件
* **內部即時訊息**：私訊 + 群組訊息系統
* **全文搜索**：SQLite FTS5 高效文字檢索
* **多介面支援**：CLI / Web UI / GUI 三種操作模式
* **通知整合**：Telegram Bot + Webhook 推送
* **管理者功能**：Admin 角色管理、訊息審核

#### 整合能力
* 統一管理 Email（對外）+ IM（對內）兩套通訊系統
* CMS (Communication Management Server) 中央管控
* LIDS OAuth 認證整合

---

### 5. Squid Python SDK — API 客戶端函式庫

**角色**：獨立開發者
**期間**：2024/12 - 至今
**技術**：Python 3.7+, requests, PyJWT, Pydantic, setuptools

#### 特色
* **完整 Type Hints**：Pydantic Model 定義所有 API 請求/回應
* **自動 Token Refresh**：JWT 過期自動重新取得，無縫體驗
* **Pythonic API 設計**：`client.requirements.list()`, `client.projects.get(id)`
* **完整測試覆蓋**：pytest 單元測試 + 整合測試

---

### 6. scikit-learn 異常偵測整合

**技術**：scikit-learn, NumPy, pandas
**應用場景**：Squid API 內建 Machine Learning 模組

* **專案指標異常偵測**：監控工時、完成率、品質評分的異常波動
* **資料前處理 Pipeline**：Feature Engineering + Normalization
* **模型選擇**：Isolation Forest / Local Outlier Factor
* **API 端點整合**：以 FastAPI 端點暴露 ML 推論結果

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
                    [MCP Server] ←── Auto-generated Tool Definitions
                         |
[Tentacle Frontend] → [BFF] → [Squid API (FastAPI)] → [PostgreSQL]
                                      |
                               [scikit-learn ML]
                                      |
                    [LIDS (OAuth2/OIDC)] ←── Identity Provider

[Neritic CLI] → [Squid API] (Direct REST)
[CommTool] → Internal Communication
[Python SDK] → External Developer Access
[Gitea] → Source Code + Webhook Integration
```

---

## 工作經歷 - Professional Experience

### 系統分析師 (SA) | 統一錢包後台專案
*2025/06 - 至今（1 年契約）*

* 負責金融科技後台系統架構設計與 API 開發
* 技術棧：.NET Core 2.0, C#, SQL Server
* 第三方金流整合與權限管理系統

### .NET Engineer | 中小企業信用保證基金
*2024/05 - 2025/07*

* **8 人開發團隊**，負責信用保證網路作業系統現代化
* 主導舊系統從 .NET Framework 4.6 升級至 .NET 8 + Blazor
* 採用微服務架構設計，提升系統擴展性與維護性

### 公司負責人 / 總經理 / 技術架構師 | 颶風軟體有限公司
*2002 - 至今（24 年）*

* 創立並經營軟體開發公司，累積服務 **100+ 企業客戶**
* 管理 **8 人跨職能技術團隊**（開發、DBA、DevOps、部署、助理）
* 主導設計 **Squid 企業級生態系統**（12 個生產系統）
* 建立工單驅動開發流程與 140 分評審制度
* 自架 Gitea Git Server — 工單與 Branch 雙向自動化 Hook

---

## 其他技術專案 - Other Technical Projects

### LocalIdentityServer (LIDS) — OAuth2/OIDC 身份認證伺服器
* **技術**：C# ASP.NET Core 8, PostgreSQL, EF Core, Blazor Server
* **功能**：Multi-tenant OAuth2.0 + OIDC Provider, MFA (TOTP/Email/SMS), Break-glass Access
* **由 Eric 主導架構設計**，與 Squid API 深度整合

### LifeSnap — iOS 多人對戰手遊 (2024/03-2024/04)
* **技術**：SwiftUI + SpriteKit + Firebase + CloudKit + ChatGPT API
* **亮點**：整合 ChatGPT AI 聊天功能，已上線 App Store

---

## 學歷 - Education

* **東南科技大學** 數位電子系（二專）— 第一名畢業
* **內湖高級工業職業學校** — 代表學校參加技能競賽，榮獲二等榮譽獎章

---

## 專業能力統計 - Professional Experience Summary

| 專業領域 Field | 年資 Years | 主要成就 Key Achievement |
|----------------|-----------|------------------------|
| **Python 開發 Python Development** | 5+ 年 | 建構 4 個 Python 工具/SDK，100+ API 端點 |
| **AI / ML 整合 AI Integration** | 2+ 年 | MCP 整合, scikit-learn 異常偵測, ChatGPT API |
| **技術管理 Technical Management** | 24 年 | 管理 8 人團隊，100+ 企業客戶 |
| **系統架構 System Architecture** | 18 年 | Multi-tenant SaaS, OAuth2, Microservices |
| **軟體工程 Software Engineering** | 25 年 | 12 個生產系統的企業級生態系統 |
| **DevOps & CI/CD** | 5 年 | 兩層式 CI/CD, Docker, Cloud Run |

---

## 為什麼選擇我 - Why Hire Me

1. **Python 實戰深度**：不只寫腳本，而是用 Python 建構完整企業級後端 — FastAPI + SQLAlchemy + Alembic + asyncpg 的生產系統
2. **AI 整合實務經驗**：MCP Protocol 整合讓 AI 助手直接操作生產系統，不是 Demo 而是真實落地
3. **工具鏈建構者**：CLI (Neritic)、SDK (Python SDK)、通訊平台 (CommTool) — 從需求到交付的完整工具鏈
4. **架構思維**：24 年技術管理經驗，能從系統全局思考，不只解決單一問題
5. **跨語言視野**：Python / C# / TypeScript / Swift 多語言經驗，能選擇最合適的技術而非偏好

---

*最後更新：2026 年 2 月*
*此履歷已針對 ATS 系統關鍵字強化：Python Architect, AI Engineer, FastAPI, MCP, Model Context Protocol, Machine Learning, scikit-learn, asyncio, SQLAlchemy, Pydantic, DevOps, CI/CD, Docker, PostgreSQL, OAuth2, Multi-tenant, REST API*
