# 王英豪 (WANG YING HAO)

## 資安架構師 / 認證系統專家

**Security Architect & Identity System Expert | 25 年軟體工程 | OAuth2/OIDC/MFA 自建實作**

---

| 項目 | 內容 |
|------|------|
| 姓名 | 王英豪 (Eric Wang) |
| 電話 | 0921-107-206 |
| 信箱 | cancleeric@gmail.com |
| 期望薪資 | NT$ 2,400,000 / 年 |
| 工作地點 | 新北市中和區（可協調北部地區工作） |

---

## 專業摘要

具備 25 年軟體工程經驗的資安架構師，專精 Identity & Access Management (IAM) 領域。從零自建完整的 OAuth 2.0 / OpenID Connect 身份認證伺服器（LocalIdentityServer），涵蓋 Authorization Code Flow with PKCE、Client Credentials、Device Code Flow、Refresh Token Rotation 等完整流程。實作多因素認證（MFA）——TOTP、Email OTP、SMS OTP，並設計密鑰自動輪替系統（LIDS Secret Rotator）部署於 GCP Cloud Functions。

在加密工程面向，實務運用 BCrypt 密碼雜湊、AES-256-GCM 資料加密、JWT RS256 非對稱簽章，確保資料在傳輸與靜態儲存時的安全。同時具備 Multi-tenant 安全隔離架構設計經驗，所有資料表強制 tenant_id 欄位隔離，搭配 RBAC 權限控制、Rate Limiting、Idempotency、Platform Audit Logging 與 Break-glass 緊急存取機制，建構企業級零信任安全基礎設施。

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
| Identity & Access Management | 5+ 年（密集實作） |
| System Architecture | 18 年 |
| Technical Management | 24 年 |
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

### 5. 加密與資料保護工程

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
