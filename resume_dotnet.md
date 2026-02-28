# 王英豪 - 資深 .NET 架構師 / C# 技術主管

## Senior .NET Architect & C# Technical Lead | 25年軟體工程 | .NET 全棧開發

---

## 聯絡資訊 - Contact Information

* **姓名 Name**：王英豪 (WANG YING HAO)
* **電話 Phone**：0921-107-206
* **信箱 Email**：[cancleeric@gmail.com](mailto:cancleeric@gmail.com)
* **期望薪資 Expected Salary**：NT$ 2,400,000 / 年
* **工作地點 Location**：新北市中和區（可北部地區工作）

---

## 專業摘要 - Professional Summary

**資深 .NET 架構師 | C# 技術主管 | 企業級系統設計者**

擁有 **25 年** C# / .NET 開發經驗，完整歷經 .NET Framework 1.1 到 .NET 8 每一代技術演進，具備深厚的平台遷移與現代化實務能力。精通 **ASP.NET Core 8.0**、**Blazor Server / WebAssembly**、**Entity Framework Core**，並從零自建 OAuth 2.0 / OIDC 身份認證伺服器 **LocalIdentityServer (LIDS)**，涵蓋 428 個 C# 檔案、完整的多租戶隔離、MFA、JWT RS256 簽章等企業級安全機制。

同時擁有 **24 年技術管理**經驗，現管理 **11 人跨職能工程團隊**，建立工單驅動開發流程、140 分標準化評審制度、兩層式 Git Hooks CI/CD 架構，從本地 Docker 開發到 GCP Cloud Run 生產環境的完整 DevOps Pipeline。

---

## 核心技術棧 - Core Technical Skills

### C# / .NET 平台 (.NET Platform)
`C# 12` `.NET 8` `.NET Core 3.1 ~ 8.0` `.NET Framework 1.1 ~ 4.8` `ASP.NET Core` `ASP.NET MVC` `ASP.NET Web API` `ASP.NET Web Forms`

### Blazor 生態系 (Blazor Ecosystem)
`Blazor Server` `Blazor WebAssembly` `Razor Components` `SignalR` `Bootstrap 5`

### ORM 與資料存取 (Data Access)
`Entity Framework Core (Npgsql)` `Entity Framework 6` `LINQ` `ADO.NET` `Dapper`

### 資料庫 (Database)
`PostgreSQL` `SQL Server` `SQLite` `Firebase Firestore` `T-SQL` `Alembic` `EF Core Migrations`

### 認證與安全 (Authentication & Security)
`OAuth 2.0` `OpenID Connect (OIDC)` `Authorization Code + PKCE` `JWT (RS256/HS256)` `MFA (TOTP / Email / SMS)` `RBAC` `BCrypt` `AES-256-GCM` `ASP.NET Core Identity`

### 雲端與 DevOps (Cloud & DevOps)
`Docker` `GCP Cloud Run` `GCP Secret Manager` `Azure Key Vault` `Azure` `Git Hooks CI/CD` `GitHub Actions` `IIS` `Prometheus.NET` `OpenTelemetry`

### 相關技術 (Complementary)
`Redis (StackExchange.Redis)` `AspNetCoreRateLimit` `SendGrid` `Twilio` `Otp.NET` `QRCoder` `Serilog` `Swagger / Swashbuckle`

### 開發工具 (Development Tools)
`Visual Studio 2022` `Visual Studio Code` `SSMS` `Git` `TFS` `Docker Desktop` `Postman` `NuGet`

---

## 重點專案經歷 - Key Projects

### 1. LocalIdentityServer (LIDS) — 企業級 OAuth2/OIDC 身份認證伺服器

**時間**：2024/11 - 至今
**角色**：後端架構師 / .NET 核心開發者
**規模**：428 個 C# 檔案 / 1.2 GB 專案 / 獨立架構設計

#### 技術棧
`ASP.NET Core 8.0` `C# 12` `PostgreSQL (Npgsql EF Core Provider)` `Redis (StackExchange.Redis)` `Blazor Server` `Docker` `GCP Cloud Run`

#### 系統架構與實作

**OAuth 2.0 / OIDC 完整實作**
- 從零建構 OAuth 2.0 Authorization Server，支援 Authorization Code + PKCE Flow
- 實作完整的 OIDC Discovery Endpoint (`.well-known/openid-configuration`)
- JWT RS256 非對稱簽章與驗證，支援金鑰輪替 (Key Rotation)
- Token 生命週期管理：Access Token / Refresh Token / ID Token
- Scope-based 與 Claims-based 權限控制

**多因素認證 (MFA)**
- TOTP 時間型一次性密碼（整合 Otp.NET + QRCoder 產生 QR Code）
- Email 驗證碼（整合 SendGrid SMTP）
- SMS 驗證碼（整合 Twilio API）
- 支援 MFA 強制策略與 Recovery Codes

**多租戶身份管理 (Multi-tenant Identity)**
- 完整的租戶隔離架構，每個租戶獨立的用戶、角色、權限
- 租戶自助註冊流程與邀請碼機制
- 租戶配額管理（用戶數、OAuth Client 數量上限）
- SuperAdmin 跨租戶管理介面 (Blazor Server)

**進階安全機制**
- Break-glass 緊急存取機制（繞過 MFA / 帳號鎖定的緊急通道）
- Dynamic CORS Policy 動態跨域策略
- Rate Limiting（整合 AspNetCoreRateLimit）防暴力破解
- Platform Audit Log 平台稽核日誌，記錄所有管理操作
- BCrypt 密碼雜湊、帳號鎖定策略

**雲端整合與監控**
- Azure Key Vault / GCP Secret Manager 金鑰管理
- Prometheus.NET 指標蒐集 + OpenTelemetry 分散式追蹤
- Docker 容器化部署 + GCP Cloud Run 生產環境
- 兩層式 Git Hooks CI/CD：post-commit 本地建置 → pre-push Staging 部署
- Serilog 結構化日誌

#### 架構決策
- **為何自建而非使用 Auth0 / Okta**：需要完全掌控多租戶隔離邏輯、自訂 MFA 策略、Break-glass 機制，第三方 SaaS 無法滿足所有客製需求
- **PostgreSQL over SQL Server**：考量跨平台相容性（Linux Docker）與成本，選用 Npgsql EF Core Provider
- **Blazor Server 管理後台**：充分利用 C# 全棧能力，減少 JavaScript 依賴，提供即時 SignalR 互動體驗

---

### 2. 信保基金信用保證網路作業系統 — .NET 現代化遷移

**時間**：2024/05 - 2026/02
**角色**：.NET Engineer | 8 人開發團隊
**客戶**：中小企業信用保證基金（SME Credit Guarantee Fund）

#### 技術棧
`.NET Framework 4.6` `.NET 5` `.NET 8` `Blazor WebAssembly` `C#` `ASP.NET MVC` `Entity Framework` `SQL Server` `Visual Studio 2022` `SSMS` `IIS` `TFS`

#### 主要職責與成果

**舊系統維護 (.NET Framework 4.6)**
- 維護已運行多年的信用保證業網作業系統
- 處理 .NET Framework 4.6 技術債務，改善系統穩定性
- 修正 Entity Framework 6 查詢效能瓶頸

**新模組開發 (.NET 5)**
- 開發直保線上填報系統，新增銀行端網路申請功能
- 使用 .NET 5 + ASP.NET Core Web API 建構 RESTful 後端
- 實作報表產出模組，支援多種格式匯出

**系統現代化升級 (.NET 8 + Blazor)**
- 主導從 .NET Framework 遷移到 .NET 8 的技術路線規劃
- 導入 Blazor WebAssembly 取代傳統 MVC Razor Views
- 設計微服務架構，將單體應用拆分為獨立服務
- 實施 Entity Framework Core Migration 資料庫版本控制

---

### 3. LifeSnapAdmin — Firebase 全方位後台管理系統

**時間**：2024/03 - 2024/12
**角色**：獨立開發者 | 656+ 工時 | 8 階段完成
**性質**：從零獨立設計開發的完整後台管理平台

#### 技術棧
`C# .NET 9.0` `Blazor Server` `Firebase Admin SDK 3.4.0` `Bootstrap 5` `Google Cloud Firestore` `Chart.js` `ApexCharts` `Monaco Editor`

#### 功能模組（8 個開發階段）

**Phase 1-2：用戶管理 & 資料庫瀏覽器**
- Firebase Authentication 用戶 CRUD（建立、停用、密碼重設、自訂 Claims）
- Firestore 資料庫視覺化瀏覽器，支援巢狀 Collection/Document 導覽
- 整合 Monaco Editor 的 JSON 編輯器，支援即時格式驗證

**Phase 3-4：檔案管理 & 統計分析**
- Firebase Storage 檔案管理器（上傳、下載、預覽、批量操作）
- Chart.js / ApexCharts 統計儀表板，視覺化呈現用戶增長與使用趨勢

**Phase 5-6：推播通知 & 系統監控**
- Firebase Cloud Messaging (FCM) 推播管理（單一 / 主題 / 條件式推播）
- Prometheus 整合系統監控，即時追蹤 API 回應時間與錯誤率

**Phase 7-8：多租戶 & PWA**
- Multi-tenant 架構支援，不同租戶獨立資料隔離
- PWA (Progressive Web App) 支援離線存取
- i18n 國際化多語言切換

#### 專案指標
- 200+ `.razor` / `.cs` 檔案
- 完整的 DI (Dependency Injection) 架構
- Service Layer Pattern + Repository Pattern
- 全面的 Error Handling 與 Serilog 日誌

---

### 4. 颶風軟體企業系統 — 24 年持續演進的 .NET 平台

**時間**：2002 - 至今（24 年持續開發）
**角色**：系統架構師 / 技術負責人

#### 技術演進歷程
```
2002-2005  .NET Framework 1.1 → 2.0  |  ASP.NET Web Forms + ADO.NET
2006-2010  .NET Framework 3.5 → 4.0  |  ASP.NET MVC + LINQ to SQL
2011-2015  .NET Framework 4.5 → 4.8  |  Entity Framework + Web API
2016-2020  .NET Core 2.0 → 3.1       |  ASP.NET Core + EF Core
2021-至今  .NET 6 → .NET 8           |  Blazor + Modern Architecture
```

#### 主要成果
- 從零建構公司內部 ERP / CRM 系統，完整歷經 .NET 每一代技術演進
- 累積服務 **100+ 企業客戶**，涵蓋 ERP、CRM、電商、社區管理等領域
- 設計並實施 Squid 企業級生態系統（12 個互相協作的生產系統）
- 建立工單驅動開發流程與 140 分標準化評審制度

---

## 架構設計能力 - Architecture & System Design

### .NET 系統架構 (.NET Architecture)
* **Layered Architecture**：API Service → Business Access Layer (BAL) → Core Logic (CORL) → Data Access Layer (DAL)
* **Multi-tenant SaaS**：租戶級別資料隔離（LIDS 身份認證 + Squid 業務資料）
* **Microservices**：服務拆分、獨立部署、API Gateway 整合
* **Repository Pattern + Unit of Work**：EF Core 資料存取標準化
* **Dependency Injection**：ASP.NET Core 內建 DI Container 深度應用

### 安全架構 (Security Architecture)
* 自建 OAuth 2.0 / OIDC Identity Provider（非使用第三方 SaaS）
* JWT RS256 非對稱簽章 + Key Rotation 策略
* 多層次認證：MFA (TOTP / Email / SMS) + Break-glass Emergency Access
* RBAC + Claims-based Authorization

### DevOps 與部署 (DevOps & Deployment)
* Docker 容器化：所有 .NET 服務以 Multi-stage Dockerfile 建置
* 兩層式 CI/CD：Git Hooks (post-commit 本地 + pre-push Staging)
* GCP Cloud Run 生產環境部署
* Prometheus.NET + OpenTelemetry 可觀測性

### 技術決策能力 (Technical Decision Making)
* 評估自建 vs. 第三方方案（LIDS vs. Auth0/Okta — 選擇自建以滿足客製需求）
* 跨平台資料庫選型（SQL Server vs. PostgreSQL — 選擇 PostgreSQL 支援 Linux Docker）
* 前端技術選擇（Blazor vs. React/Vue — 依據團隊能力與需求場景決定）

---

## 工作經歷 - Professional Experience

### .NET Engineer | 中小企業信用保證基金
*2024/05 - 2026/02*

* **8 人開發團隊**，負責信用保證網路作業系統開發與維護
* 主導 .NET Framework 4.6 → .NET 8 + Blazor WebAssembly 現代化遷移
* 開發直保線上填報系統（.NET 5），設計微服務架構改善系統擴展性
* 技術棧：.NET Framework 4.6, .NET 5/8, Blazor, C#, Entity Framework, SQL Server

### 公司負責人 / 技術架構師 | 颶風軟體有限公司
*2002 - 至今（24 年）*

* 創立並經營軟體開發公司，累積服務 **100+ 企業客戶**
* 管理 **11 人跨職能技術團隊**（開發、DBA、DevOps、部署、助理）
* 主導設計 Squid 企業級生態系統（12 個生產系統，含 .NET 與 Python 服務）
* 建立工單驅動開發流程與 140 分標準化評審制度
* 經歷完整 .NET 技術棧演進：.NET Framework 1.1 → .NET 8

---

## 其他相關專案 - Other Relevant Projects

| 專案 | 時間 | 角色 | 技術 | 說明 |
|------|------|------|------|------|
| **Squid API** | 2024/11-至今 | 架構師 | Python FastAPI, PostgreSQL | 展現跨語言系統整合能力 |
| **LifeSnap iOS** | 2024/03-04 | iOS 工程師 | Swift, SwiftUI, Firebase | 展現行動端開發能力 |
| **STA 管理平台** | 2019-2021 | 全端工程師 | PHP, MySQL | 服務 5,000+ 學員 |
| **車載娛樂系統** | 2004-2008 | 嵌入式工程師 | C++ MFC, WinCE | 多家車廠 OEM |

---

## 早期 .NET 經歷 - Early .NET Career (2000-2016)

| 時期 | 專案 | .NET 相關技術 |
|------|------|--------------|
| 2015-2016 | 德州撲克遊戲平台 | Delphi (Win32 平台經驗) |
| 2012-2013 | 太陽能發電監測系統 | Web 應用 + 資料庫整合 |
| 2006-2008 | 敦北翠苑社區管理系統 | .NET Framework 2.0, ASP.NET, SQL Server |
| 2004-2008 | 車載娛樂系統 | C++ MFC, WinCE (底層系統開發) |
| 2000-2001 | Web 海報編輯器 | ASP, Java, C++ (Web 開發基礎) |

---

## 學歷 - Education

* **東南科技大學** 數位電子系（二專）— 第一名畢業
* **內湖高級工業職業學校** — 代表學校參加技能競賽，榮獲二等榮譽獎章

---

## 專業經驗統計 - Professional Experience Summary

| 專業領域 | 年資 | 主要成就 |
|----------|------|---------|
| **.NET / C# 開發** | 20+ 年 | 從 .NET Framework 1.1 到 .NET 8 全版本實務經驗 |
| **技術管理 & 創業** | 24 年 | 創立軟體公司，管理 11 人團隊，服務 100+ 企業客戶 |
| **系統架構設計** | 18 年 | 自建 OAuth2/OIDC Server、Multi-tenant SaaS、Microservices |
| **Blazor 開發** | 3 年 | Blazor Server + WebAssembly，兩個生產級系統 |
| **系統程式開發** | 25 年 | 12 個生產系統的企業級生態系統 |

---

## 自我評價 - Self Assessment

從 2002 年以 .NET Framework 1.1 撰寫第一個企業應用開始，至今 20 餘年始終深耕 .NET 生態系。見證並實踐了從 Web Forms → MVC → Web API → .NET Core → Blazor 的每一次典範轉移。最引以為傲的成果是從零自建 **LocalIdentityServer** — 一個 428 檔案規模的 OAuth 2.0 / OIDC 身份認證伺服器，證明了對 ASP.NET Core 安全機制的深入理解。

技術廣度上，除了 .NET 核心能力外，亦具備 Python FastAPI、Swift iOS、TypeScript 等跨語言整合經驗，能在 .NET 為主軸的架構下靈活選擇最適技術。管理能力上，24 年創業經驗使我兼具技術深度與商業視角，善於在架構決策中平衡技術理想與實務需求。

---

*最後更新：2026 年 2 月*
*此履歷已針對 ATS 系統關鍵字強化：.NET Architect, C# Senior Developer, ASP.NET Core, Blazor Server, Blazor WebAssembly, Entity Framework Core, OAuth2, OIDC, JWT, Multi-tenant, System Design, Team Lead, Docker, Cloud Run, Microservices*
