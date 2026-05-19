# 王英豪 (WANG YING HAO)

## 資安架構師 / 認證系統專家

**Security Architect & Identity System Expert | 25 年軟體工程 | OAuth2/OIDC/MFA 自建實作**

---

| 項目 | 內容 |
|------|------|
| 姓名 | 王英豪 (Eric Wang) |
| 電話 | 0921-107-206 |
| 信箱 | cancleeric@gmail.com |
| 接案報價 | US$ 10,000 / 月（彈性條件可議） |
| 工作地點 | 新北市中和區（可協調北部地區工作） |

---

## 專業摘要

**資安架構師 | IAM 設計者 | 集團 Vault 與 PKCE patch 主導者**

具備 25 年軟體工程經驗的資安架構師，專精 Identity & Access Management (IAM) 與集團統一密鑰治理。從零自建完整 OAuth 2.0 / OpenID Connect 身份認證伺服器 **LocalIdentityServer (LIDS)**，涵蓋 Authorization Code + PKCE、Client Credentials、Device Code、Refresh Token Rotation 全流程；實作 MFA（TOTP / Email / SMS）；設計 90 天自動密鑰輪替（LIDS Secret Rotator + GCP Cloud Functions）。

**2026 年集團安全大躍進**：
- **Hurricane Vault v1.0.0** — 自建 Secret Manager（Audit chain + GCP parity，集團 90+ secrets 統一管理；開發 / CI / CEO token 用 Vault，生產 Cloud Run 用 GCP Secret Manager）
- **Gitea OIDC 客製 patch** — 為 LIDS OIDC 整合客製 Gitea，客戶端安全強化整合（已部署）
- **自建程式碼安全掃描器** — 含 ML 優化（持續修復）
- **Headscale VPN ACL** — 集團 VPN 鎖定，只 eric-mac 可主動連，其他節點全拒
- **資料庫異動安全流程** — （多階段強制備份／驗證／留證）（2026/04/01 災情後制度化）
- **集團 19 Cloud Run 服務 IAM 統一治理** — 由 HurricaneSoft 維運主責

加密工程實務：BCrypt 密碼雜湊、AES-256-GCM 資料加密、JWT RS256 非對稱簽章；Multi-tenant 安全隔離（所有 table 強制 tenant_id）；RBAC + Rate Limiting + Audit Logging + Break-glass 緊急存取，建構集團級零信任基礎設施。

---

## 核心技術能力

### Identity & Access Management
OAuth 2.0, OpenID Connect (OIDC), JWT (RS256/HS256), PKCE, MFA (TOTP/Email/SMS), RBAC, ACL, Dynamic Client Registration, Token Blacklist, Session Management, Refresh Token Rotation

### Cryptography & Data Protection
BCrypt, AES-256-GCM, Data Protection Keys, SSL/TLS Certificate Management, Secret Management (Azure Key Vault, GCP Secret Manager)

### Security Infrastructure
OWASP Top 10, Rate Limiting (AspNetCoreRateLimit), Idempotency, Dynamic CORS Policy, Audit Logging, Break-glass Access, Docker Network Isolation, Zero Trust Architecture

### Monitoring & Observability
Prometheus, OpenTelemetry, Sentry, Security Event Logging, Distributed Tracing

### Programming & Frameworks
C#, ASP.NET Core 8, Python, FastAPI, Node.js, TypeScript, React 18, Express.js

### Infrastructure & Database
PostgreSQL, Redis, Docker, GCP (Cloud Run, Cloud Functions, Secret Manager, Firestore), GitHub Actions CI/CD

---

## 專業年資總覽

| 領域 | 年資 |
|------|------|
| Security Architecture | 10+ 年 |
| Identity & Access Management | 5+ 年（自建 LIDS + Vault + PKCE patch）|
| Secret Management（自建 Vault）| 1+ 年（v1.0.0 上線）|
| Security Scanning + ML（自建）| 1+ 年 |
| 集團技術領導 Group Leadership | 24 年（HurricaneGroup 6 子公司）|
| System Architecture | 18 年 |
| Software Engineering | 25 年 |

---

## 重點專案經歷

### 1. LocalIdentityServer (LIDS) — 企業級身份認證伺服器

**期間**：2024/11 — 現職 | **角色**：後端架構師 / 核心開發者
**技術**：ASP.NET Core 8.0, C#, PostgreSQL (Npgsql EF Core), Redis, Blazor Server
**規模**：428 個 C# 原始碼檔案，1.2 GB 專案

> 這是一套從零打造的完整 Enterprise Identity Provider，不依賴 IdentityServer4 或任何第三方 IdP 框架，全部自行設計與實作。

#### Authentication & Authorization
- 完整 OAuth 2.0 實作：Authorization Code Flow with PKCE、Client Credentials Flow、Device Code Flow、Refresh Token Rotation
- OpenID Connect Discovery endpoint (`.well-known/openid-configuration`)
- JWT RS256 非對稱 Token 簽署與驗證
- Dynamic Client Registration 動態用戶端註冊
- Token introspection 與 revocation endpoint

#### Multi-Factor Authentication (MFA)
- TOTP Authenticator App 整合（Otp.NET + QRCoder QR Code 產生）
- Email OTP 驗證（SendGrid 整合）
- SMS OTP 驗證（Twilio 整合）
- SuperAdmin MFA 強制政策（資料庫遷移 `superadmin_mfa_enforcement.sql`）
- 每個 Tenant 可獨立設定 MFA 政策

#### Multi-tenant Security Isolation
- 資料庫層級完整租戶隔離，所有 Table 強制包含 `tenant_id` 欄位
- Tenant 自助註冊搭配 Invite Code 機制
- 每租戶獨立安全政策（密碼複雜度、MFA 要求、Session 過期時間）
- 租戶配額管理（`add_tenant_quota_fields.sql`）

#### Emergency Access & Resilience
- Break-glass 緊急存取機制（`add_breakglass_access.sql`）
- 確保認證系統異常時仍可進行關鍵操作
- 所有 Break-glass 使用記錄完整稽核追蹤

#### Security Infrastructure
- Data Protection Keys 密鑰管理機制
- Dynamic CORS Policy Engine 動態跨域政策引擎
- Rate Limiting 速率限制（AspNetCoreRateLimit）
- Azure Key Vault 密鑰管理整合
- GCP Secret Manager 密鑰管理整合
- SuperAdmin 允許空租戶特殊權限（`allow_null_tenantid_for_superadmin.sql`）

#### Monitoring & Audit
- Prometheus.NET Metrics 暴露端點
- OpenTelemetry Distributed Tracing 分散式追蹤
- Platform Audit Logs 平台稽核日誌系統（`add_platform_audit_logs.sql`）
- 完整 Security Event Logging

---

### 2. LIDS Secret Rotator — 自動化密鑰輪替系統

**期間**：2025 — 現職 | **角色**：架構設計 / 開發
**技術**：Node.js 20, TypeScript, GCP Cloud Functions Gen 2, GCP Secret Manager, Firestore

- 90 天自動輪替週期，支援手動觸發輪替
- 輪替失敗自動驗證與回滾機制（Automatic Validation & Rollback）
- Firestore Audit Logging 記錄所有輪替事件
- Slack / Email 通知整合
- HTTP Trigger + Pub/Sub Trigger 雙觸發模式
- 部署於 GCP Cloud Functions Gen 2，Serverless 架構

---

### 3. Squid API — 安全層設計與實作

**期間**：2025/01 — 現職 | **角色**：後端架構師
**技術**：Python, FastAPI, PostgreSQL, Docker, Prometheus, Sentry

- JWT Token 管理（PostgreSQL-based Token Blacklist，架構決策捨棄 Redis 以降低攻擊面）
- RBAC 權限控制系統，細粒度 API 存取管理
- Rate Limiting 與 Idempotency 機制，防止重放攻擊
- API Key Authentication + OAuth 2.0 整合認證
- Multi-tenant 資料隔離（50+ 資料表全數包含 `tenant_id`）
- Prometheus + Sentry Security Monitoring
- 分散式節點認證與協調機制
- Alembic 資料庫遷移管理，每次遷移包含 Rollback Plan

---

### 4. Platform Audit Logging 系統

**角色**：架構設計
**技術**：PostgreSQL, SQL Migration

設計並實作企業級平台稽核日誌系統，完整記錄：
- **Authentication Events**：登入、登出、Token Refresh、MFA 驗證
- **Authorization Decisions**：存取授權與拒絕記錄
- **Administrative Actions**：使用者建立/刪除、租戶管理操作
- **Break-glass Access Events**：緊急存取事件與授權追蹤
- **Secret Rotation Events**：密鑰輪替操作記錄

---

### 5. Hurricane Vault — 集團自建 Secret Manager（v1.0.0）

**期間**：2026/04 — 至今 | **角色**：架構師 / 主導開發
**技術**：Go, PostgreSQL, GCP Secret Manager parity API

集團統一密鑰管理服務，取代純 GCP Secret Manager 用於開發與內部工具：

- **Audit chain**：所有 secret 取用走完整 audit log，可追蹤誰在何時取用什麼版本
- **GCP parity API**：與 GCP Secret Manager API 兼容，遷移無痛
- **bind mount 部署**：本機 Docker `hurricane-vault-server-dev` (port 8930)，集團所有 dev 工具走 hvault
- **90+ secrets 治理**：含 dev token、Gitea CEO token、各專案 SA key、API key
- **責任分工**：開發 / CI / CEO token / 副手用 token → Vault；生產 Cloud Run 服務 → GCP Secret Manager

---

### 6. Gitea-hs PKCE 客製 Patch (v1.26.1)

**期間**：2026 — 至今 | **角色**：架構決策 / 客製 patch 維護
**技術**：Go (gitea fork), OAuth2 PKCE

為 LIDS OIDC 整合客製 Gitea，解決原版 OIDC 整合的多客戶端衝突：

- **branch**：`pkce-on-1.26.1`（custom image `a7b6f22844`）
- **OIDC 客戶端 PKCE 強化**：多客戶端安全，多 OIDC client 可同時使用
- **AuthURL / Token / ProfileURL mapping**：AuthURL=localhost（瀏覽器），Token/Profile=docker 內網
- **生產部署於 .32**（hTech 維運），原 hurricanesoft/gitea-hs 已 archived

---

### 自建程式碼安全掃描器（含 ML 優化）

**期間**：2026 — 至今 | **角色**：架構設計 / Python + ML 開發
**技術**：Python, ML pipeline, ML 優化訓練

自建程式碼安全掃描器，掃描集團 repo 安全問題；ML 模型訓練減少誤報（False Positive）：

- **aegis-fp-ranker-v3 訓練**（log 已存）
- **aegis-secret-scanner-fp-v1 訓練**
- **Sprint 21 安全發現持續修復中**（brain repo branch `fix/aegis-s21-security-findings`）
- **本機部署**：aegis-daemon-dev (8941) + aegis-docker-proxy-dev

---

### 8. Headscale VPN ACL — 集團 VPN 安全鎖定

**期間**：2026 — 至今 | **角色**：架構設計 / 維運
**技術**：Headscale (VM `lobsterfarm-633f7`), ACL JSON

- ACL 嚴格限定：只有 eric-mac (100.64.0.3) 能主動連，其他節點全拒
- ACL 在 `/etc/headscale/acl.json`（VM 136.119.59.232）
- IP 動態 ACL（節點 re-register 後 IP 跳號的處理）
- 跨辦公室節點（辦A/辦B/onano）統一 VPN

---

### 9. 資料庫異動安全流程 — 集團制度化

**期間**：2026/04 — 至今 | **角色**：流程設計 / 強制執行

2026/04/01 因 docker-compose down 造成 DB 全失（時光機復原），制度化集團 DB 異動 SOP：

```
備份 → 匯出前驗證 → 執行 migration → 匯出後驗證 → 資料驗證 → 紀錄
```

任何 DB 異動（含新建零資料 DB）都必須走 6 步，缺一不可。所有 alembic / EF Core migration 強制走此流程。

---

### 10. 加密與資料保護工程

- **BCrypt** 密碼雜湊（可調整 Work Factor）
- **AES-256-GCM** 靜態資料加密
- **JWT RS256** 非對稱簽章用於 Token
- **SSL/TLS** 憑證管理，所有服務強制 HTTPS
- **Docker Network Isolation**：專屬子網路 172.20.0.0/16，容器間命名解析隔離
- **Secret Management**：整合 Azure Key Vault 與 GCP Secret Manager

---

## 工作經歷

### .NET 工程師 | 信保基金

**期間**：2024/05 — 2026/02

銀行等級安全合規開發，參與金融機構內部系統維護與安全標準實作。

### 公司負責人 / 總經理 | 颶風軟體 (HurricaneSoft)

**期間**：2002 — 現職（24 年）

創辦並經營軟體公司，為超過 100 家客戶設計系統安全架構。負責企業級 Identity & Access Management、Multi-tenant SaaS 安全架構、CI/CD Pipeline Security（GitHub Actions + Docker）、GCP / Azure 雲端安全部署。

---

## 其他相關專案

| 專案 | 安全相關內容 |
|------|-------------|
| Tentacle Frontend (React 18) | OIDC Client 整合、Secure Session Management、PKCE Flow |
| Tentacle BFF (Express.js) | Session Security、OIDC Proxy、Helmet Security Headers、CORS Policy |
| CommTool | 安全郵件通訊（POP3S/SMTPS over SSL）、OAuth Token 認證 |
| LifeSnap iOS | Firebase Authentication、CloudKit Security、Biometric Auth |
| Neritic CLI | Device Code Flow Authentication、macOS Keychain API Key 儲存 |

---

## 學歷

| 學校 | 科系 | 備註 |
|------|------|------|
| 東南科技大學 | 數位電子系（二專） | 第一名畢業 |
| 內湖高級工業職業學校 | — | 三等榮譽獎章 |

---

## ATS Keywords

Security Architect, Information Security Engineer, Identity Management, IAM, OAuth 2.0, OpenID Connect, OIDC, MFA, Multi-Factor Authentication, TOTP, JWT, JSON Web Token, RS256, RBAC, Role-Based Access Control, ACL, OWASP Top 10, Zero Trust, Secret Management, Key Rotation, Audit Logging, Compliance, Penetration Testing, Data Protection, Encryption, AES-256-GCM, BCrypt, SSL/TLS, Certificate Management, Multi-tenant Security, Break-glass Access, Rate Limiting, Token Blacklist, Session Management, PKCE, Docker Security, Cloud Security, GCP, Azure, PostgreSQL, ASP.NET Core, C#, Python, FastAPI, Prometheus, OpenTelemetry, Sentry, CI/CD Security

---

*最後更新：2026 年 2 月*
