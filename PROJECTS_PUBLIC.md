# 王英豪 - 專案技術清單

> 資深全端工程師 | 25年軟體開發經驗

**最後更新：** 2026年1月

---

## 📋 專案概覽

### 核心專案群組
1. **Squid 專案管理系統** - 企業級專案管理平台
2. **Neritic CLI 工具** - 命令列管理工具
3. **LocalIdentityServer (LIDS)** - OAuth 2.0 / OIDC 身份認證服務
4. **Tentacle Frontend** - React 18 企業級前端應用
5. **Tentacle BFF** - Backend for Frontend 層

### SDK 專案
6. **Squid API SDK (Python)** - Python 客戶端 SDK
7. **Squid JS SDK** - JavaScript/TypeScript 客戶端 SDK

### 行動應用
8. **LifeSnap iOS** - 多功能社交遊戲平台
9. **LifeSnapAdmin** - Firebase 後台管理系統

---

## 1. Squid 專案管理系統

**專案類型**: 企業級專案管理平台（核心後端）

**時間線**: 2025/01 - 至今（持續開發）

### 主要功能
- 需求管理（Requirements）與工單追蹤
- 專案管理（Projects）與分類系統
- 驗證審查系統（Verification Reports）
- API 服務與分散式節點協調
- MCP (Model Context Protocol) 整合
- 多租戶（Multi-tenant）架構支援

### 技術棧

**核心技術**:
- **語言**: Python 3.11+
- **Web 框架**: FastAPI（非同步 Web 服務）
- **資料庫**: PostgreSQL（主要）、SQLite（開發）
  - SQLAlchemy 2.0 ORM
  - Alembic 資料庫遷移
- **快取**: Redis
- **非同步**: asyncpg、aiohttp

**整合服務**:
- **認證**: JWT + OAuth2.0
- **支付**: Stripe、PayPal (Braintree)
- **通知**: SendGrid (Email)、Slack SDK
- **監控**: Prometheus metrics、Sentry 錯誤追蹤、OpenTelemetry
- **機器學習**: scikit-learn（異常偵測）
- **排程**: APScheduler
- **通訊**: WebSocket

### 架構分層

```
squid/
├── api_service/          # FastAPI 路由層（REST API）
├── business_access_layer/  # 業務存取層（BAL）
├── core_logic_layer/     # 核心邏輯層（CORL）
├── data_access_layer/    # 資料存取層（DAL）
├── mcp_server/           # MCP 服務（AI 工具整合）
└── distributed/          # 分散式節點管理
```

### 專案規模
- **檔案數**: 1,076 個 Python 檔案
- **專案大小**: 3.0 GB
- **資料表數量**: 50+ 個資料表
- **API 端點**: 100+ 個

---

## 2. Neritic CLI 工具

**專案類型**: 命令列工具（CLI）

**時間線**: 2024 年 - 至今（持續開發）

### 主要功能
- Squid API 客戶端
- 工單管理（requirement）
- 專案管理（project）
- 認證系統（auth）- API Key 模式
- 雲端資源管理
- Docker 遠端部署工具
- 版本自動化（PyInstaller 打包）

### 技術棧
- **語言**: Python 3.8+
- **CLI 框架**: Click
- **UI 增強**: Rich（終端機 UI）
- **HTTP 客戶端**: requests、httpx
- **SDK 依賴**: squid-api-sdk
- **系統工具**: psutil、netifaces、PyYAML
- **打包**: PyInstaller

### 特殊機制
- **Git Hook 自動編譯**: post-commit hook 自動執行 PyInstaller
- **版本號自動管理**:
  - `feat:` → MINOR bump (1.2.0 → 1.3.0)
  - `fix:` → PATCH bump (1.2.0 → 1.2.1)
- **符號連結系統**: `neritic` → `neritic-fast` → `neritic-v{VERSION}`

### 專案規模
- **檔案數**: 3,312 個檔案（含虛擬環境）
- **專案大小**: 291 MB
- **目前版本**: 3.2.0+

---

## 3. LocalIdentityServer (LIDS)

**專案類型**: 身份認證服務（OAuth 2.0 / OIDC）

**時間線**: 2024/11 - 至今（持續開發）

### 主要功能
- OpenID Connect (OIDC) 提供者
- OAuth 2.0 授權伺服器
- JWT Token 簽發與驗證
- 多租戶身份管理
- MFA（多因素認證）- TOTP、Email、SMS
- Blazor Server 管理介面
- LDAP 整合支援
- Break-glass 緊急存取機制

### 技術棧

**核心技術**:
- **語言**: C# .NET 8.0
- **框架**: ASP.NET Core 8.0
- **資料庫**: PostgreSQL (Npgsql EF Core)、SQLite（開發）
- **快取**: Redis (StackExchange.Redis)
- **認證**: JWT Bearer、BCrypt 密碼雜湊

**MFA 與通知**:
- **TOTP**: Otp.NET、QRCoder
- **SMS**: Twilio
- **Email**: SendGrid

**監控與安全**:
- **監控**: Prometheus.NET、OpenTelemetry
- **密鑰管理**: Azure Key Vault、Google Cloud Secret Manager
- **限流**: AspNetCoreRateLimit

**UI 框架**:
- **管理介面**: Blazor Server

### 架構特點
- 支援動態 CORS 策略
- 資料保護金鑰（Data Protection Keys）
- 租戶自註冊與邀請碼機制
- 超級管理員（SuperAdmin）MFA 強制
- 平台稽核日誌（Platform Audit Logs）

### 專案規模
- **檔案數**: 428 個 C# 檔案
- **專案大小**: 1.2 GB

---

## 4. Tentacle Frontend

**專案類型**: 企業級 Web 前端（SPA）

**時間線**: 2025/06 - 至今（持續開發）

### 主要功能
- Squid API 的 Web UI 介面
- 儀表板（Dashboard）
- 需求管理介面
- 專案管理介面
- OpenID Connect 登入整合
- 支付整合（Stripe、PayPal）
- 虛擬化長列表（react-window）

### 技術棧

**核心技術**:
- **語言**: TypeScript 5.1+
- **UI 框架**: React 18.3 + React Router 6
- **UI 元件庫**: Bootstrap 5.3 + Bootstrap Icons
- **狀態管理**: React Hooks (useState, useContext)
- **打包工具**: Webpack 5
- **樣式**: Sass/SCSS

**整合服務**:
- **認證**: oidc-client-ts (OpenID Connect)
- **支付**: @stripe/react-stripe-js、@paypal/react-paypal-js
- **圖表**: Chart.js
- **虛擬化**: react-window
- **SDK**: @squid/js-sdk

**測試框架**:
- Jest（單元測試）
- Playwright（E2E 測試）
- Cypress（E2E 測試）
- 覆蓋率門檻: 80%

### 專案規模
- **檔案數**: 382 個 TypeScript/TSX 檔案
- **專案大小**: 891 MB

---

## 5. Tentacle BFF

**專案類型**: Backend for Frontend（BFF 層）

**時間線**: 2024 年 - 至今（持續開發）

### 主要功能
- Session 管理（connect-redis）
- OpenID Connect 整合（openid-client）
- CORS 與安全性中介層（helmet）
- Rate Limiting（express-rate-limit + rate-limit-redis）
- API 代理與聚合

### 技術棧
- **語言**: TypeScript 5.9
- **框架**: Express.js 4.22
- **Session**: express-session + connect-redis
- **認證**: openid-client (OIDC)、jose (JWT)
- **快取**: Redis 5.10
- **安全**: helmet、cors
- **限流**: express-rate-limit + rate-limit-redis

### 專案規模
- **檔案數**: 19 個 TypeScript 檔案
- **專案大小**: 112 MB

---

## 6. Squid API SDK (Python)

**專案類型**: Python SDK

**時間線**: 2024/12 - 至今

### 主要功能
- Squid API 的 Python 客戶端
- 支援所有 Squid API 端點
- 類型提示（Type Hints）完整
- Requirements API
- Projects API
- Verification Reports API
- Device Code API
- Health API

### 技術棧
- **語言**: Python 3.7+
- **HTTP**: requests
- **驗證**: PyJWT
- **資料驗證**: Pydantic 1.8-2.x
- **打包**: setuptools + build + twine

### 專案規模
- **專案大小**: 20 MB
- **版本**: 1.2.0+

---

## 7. Squid JS SDK

**專案類型**: JavaScript/TypeScript SDK

**時間線**: 2024/12 - 至今

### 主要功能
- Squid API 的 JS/TS 客戶端
- 支援 ESM 和 CJS 模組格式
- 完整的 TypeScript 類型定義
- 測試覆蓋率 100%

### 技術棧
- **語言**: TypeScript 5.4
- **打包工具**: Rollup
- **HTTP**: cross-fetch（瀏覽器 + Node.js 通用）
- **測試**: Jest（覆蓋率 80% 門檻）
- **文檔**: TypeDoc

### 專案規模
- **專案大小**: 194 MB
- **版本**: 0.3.0+

---

## 8. LifeSnap iOS 遊戲

**專案類型**: iOS 原生遊戲應用

**時間線**: 2024/03 - 2024/04（已上線 App Store）

### 主要功能
- 社交遊戲平台
- 骰子遊戲（Dominoes）
- 聊天系統（ChatGPT 整合）
- 好友系統
- 虛擬貨幣與商店
- 每日任務與獎勵系統
- 命運占卜（易經卦象）- Yao/Gua 系統
- CloudKit 資料同步
- 推播通知

### 技術棧

**核心技術**:
- **語言**: Swift
- **UI 框架**: SwiftUI（主要）+ SpriteKit（遊戲渲染）
- **開發工具**: Xcode

**後端整合**:
- **Firebase Auth**: Apple、Google、Email 登入
- **Firestore**: 雲端資料庫
- **Firebase Storage**: 檔案上傳
- **Firebase Cloud Messaging**: 推播
- **CloudKit**: 使用者資料、推播

**第三方服務**:
- **圖片處理**: Kingfisher（圖片快取與載入）
- **AI 整合**: ChatGPT API（聊天輔助）
- **廣告**: Google AdMob（橫幅廣告、獎勵廣告）

### 架構設計

**設計模式**: MVVM + Protocol-Oriented Design

**Service 層**:
- ChatSessionService
- ChatMessageService
- DBUserService
- AuthenticationManager

**遊戲架構**:
- GameController → 遊戲邏輯控制
- GameBoardNode → SpriteKit 遊戲渲染
- GameBoardStateManager → 狀態邏輯
- GameBoardLayoutManager → 版面配置
- GameBoardInteractionManager → 互動管理
- CardManager → 牌組管理
- TurnManager → 回合管理

### 專案規模
- **檔案數**: 399 個 Swift 檔案
- **專案大小**: 1.6 GB

### 測試要求
- 單元測試（XCTest）
- UI 測試（XCUITest）
- 效能測試（實機驗證）

---

## 9. LifeSnapAdmin - Firebase 後台管理系統

**專案類型**: C# Blazor Server 後台管理系統

**時間線**: 2024/03 - 2024/12（已完成，歷時 9 個月）

### 主要功能
- LifeSnap iOS App 的 Firebase 資料管理
- Firebase Authentication 用戶管理
- Firestore 資料庫管理
- Firebase Storage 檔案管理
- 用戶統計與分析
- 推播通知管理

### 技術棧

**核心技術**:
- **語言**: C# .NET 9.0
- **框架**: Blazor Server
- **Firebase**: Firebase Admin SDK 3.4.0
- **資料庫**: Google Cloud Firestore
- **UI**: Bootstrap 5

**整合服務**:
- **Firebase Authentication**: 用戶身份驗證管理
- **Firestore**: NoSQL 雲端資料庫
- **Firebase Storage**: 檔案儲存
- **Firebase Cloud Messaging**: 推播通知

### 核心功能實作

**Phase 1-2: 基礎建設與用戶管理**
- ✅ Firebase Authentication 用戶管理
- ✅ 用戶列表顯示、啟用/停用、刪除
- ✅ 進階搜尋、批量操作
- ✅ 用戶資料匯出（CSV/Excel）

**Phase 3: Firestore 資料管理**
- ✅ 集合瀏覽器
- ✅ 文檔管理（CRUD）
- ✅ JSON 編輯器（Monaco Editor）
- ✅ 查詢建構器
- ✅ 批量操作、CSV 匯入/匯出

**Phase 4: Firebase Storage 管理**
- ✅ 檔案瀏覽器（樹狀結構）
- ✅ 檔案操作（上傳、下載、刪除、重新命名）
- ✅ 圖片預覽
- ✅ 儲存空間管理
- ✅ 檔案處理（ImageSharp）

**Phase 5: 統計與分析**
- ✅ 儀表板總覽（KPI Cards）
- ✅ 用戶分析（增長趨勢、活躍度、留存率）
- ✅ 內容統計
- ✅ 自訂報表
- ✅ 實時監控
- ✅ Chart.js / ApexCharts 圖表

**Phase 6: 推播通知管理**
- ✅ 通知發送（單一、群組、全體）
- ✅ 通知編輯器（Rich Media、Deep Link）
- ✅ 用戶定向
- ✅ 通知歷史與統計
- ✅ Firebase Cloud Messaging (FCM)

**Phase 7: 系統設定與管理**
- ✅ 系統配置
- ✅ 操作日誌（Serilog + Elasticsearch）
- ✅ 權限管理（與 LIDS 整合）
- ✅ 資料備份/還原
- ✅ 系統監控（Prometheus）

**Phase 8: 進階功能與優化**
- ✅ 多租戶支援
- ✅ API 整合（RESTful API、Swagger）
- ✅ 行動優化（PWA）
- ✅ 效能優化
- ✅ 國際化

### 開發成果

**8 個開發階段全部完成**：

| Phase | 功能 | 工時 | 狀態 |
|-------|------|------|------|
| Phase 1-2 | 基礎建設、用戶管理 | - | ✅ |
| Phase 3 | Firestore 資料管理 | 88h | ✅ |
| Phase 4 | Firebase Storage 管理 | 112h | ✅ |
| Phase 5 | 統計與分析 | 168h | ✅ |
| Phase 6 | 推播通知管理 | 132h | ✅ |
| Phase 7 | 系統設定與管理 | 156h | ✅ |
| Phase 8 | 進階功能與優化 | - | ✅ |
| **總計** | | **656+ 小時** | **✅** |

### 專案規模
- **檔案數**: 200+ 個 .razor/.cs 檔案
- **專案大小**: 150+ MB
- **實際總工時**: 656+ 小時（約 82+ 個工作天）
- **開發週期**: 2024/03 - 2024/12（歷時 9 個月）
- **專案狀態**: 已完成全部功能

---

## 技術總結

### 後端技術棧

| 技術 | 專案應用 |
|------|---------|
| **Python FastAPI** | Squid API |
| **SQLAlchemy 2.0** | Squid API (ORM) |
| **Alembic** | Squid 資料庫遷移 |
| **C# ASP.NET Core 8** | LocalIdentityServer |
| **C# .NET 9.0** | LifeSnapAdmin |
| **Entity Framework Core** | LIDS (ORM) |
| **Blazor Server** | LIDS 管理介面, LifeSnapAdmin |
| **Express.js** | Tentacle BFF, MCP Server |

### 前端技術棧

| 技術 | 專案應用 |
|------|---------|
| **React 18.3** | Tentacle Frontend |
| **TypeScript 5.x** | Tentacle Frontend, BFF, SDKs |
| **Webpack 5** | Tentacle Frontend |
| **Bootstrap 5** | Tentacle Frontend, LIDS, LifeSnapAdmin |
| **SwiftUI** | LifeSnap iOS |
| **SpriteKit** | LifeSnap 遊戲渲染 |

### 資料庫

| 技術 | 專案應用 |
|------|---------|
| **PostgreSQL** | Squid API, LIDS（主要生產資料庫）|
| **SQLite** | 本地開發 |
| **Redis** | 快取、Session 儲存 |
| **Firebase Firestore** | LifeSnap 雲端資料庫, LifeSnapAdmin 管理 |
| **CloudKit** | LifeSnap iCloud 同步 |

### DevOps & CI/CD

| 技術 | 專案應用 |
|------|---------|
| **Docker** | 所有專案容器化 |
| **Git Hooks** | 兩層式 CI/CD（post-commit + pre-push）|
| **GitHub Actions** | 自動部署到雲端 |
| **Google Cloud Run** | 生產環境部署 |
| **Prometheus** | 監控 (Squid, LIDS, MCP) |
| **OpenTelemetry** | 分散式追蹤 |
| **Sentry** | 錯誤追蹤 |

### 認證與安全

| 技術 | 專案應用 |
|------|---------|
| **OAuth 2.0 / OIDC** | LocalIdentityServer |
| **JWT** | Token 簽發與驗證 |
| **MFA (TOTP/Email/SMS)** | LIDS 多因素認證 |
| **BCrypt** | 密碼雜湊 |
| **AES-256-GCM** | 資料加密 |
| **Azure Key Vault** | 密鑰管理 |
| **GCP Secret Manager** | 密鑰管理 |

### 整合服務

| 服務 | 專案應用 |
|------|---------|
| **Stripe** | Squid API, Tentacle 支付整合 |
| **PayPal (Braintree)** | Squid API, Tentacle 支付整合 |
| **SendGrid** | Email 通知 (Squid, LIDS) |
| **Twilio** | SMS 通知 (LIDS) |
| **Slack SDK** | Slack 通知 (Squid) |
| **ChatGPT API** | LifeSnap 聊天輔助 |
| **Google AdMob** | LifeSnap 廣告 |
| **Firebase Admin SDK** | LifeSnapAdmin 後台管理 |

### AI 整合

| 技術 | 專案應用 |
|------|---------|
| **MCP (Model Context Protocol)** | Squid MCP Server |
| **ChatGPT API** | LifeSnap 聊天機器人 |
| **scikit-learn** | Squid 異常偵測 |

---

## 專案規模總覽

| 專案 | 檔案數 | 專案大小 | 主要語言 | 開發週期 |
|------|-------|---------|---------|---------|
| Squid 專案管理系統 | 1,076 | 3.0 GB | Python | ~1 年 |
| Neritic CLI | 3,312 | 291 MB | Python | ~1 年 |
| LocalIdentityServer | 428 | 1.2 GB | C# | ~2 個月 |
| Tentacle Frontend | 382 | 891 MB | TypeScript | ~7 個月 |
| Tentacle BFF | 19 | 112 MB | TypeScript | ~1 年 |
| LifeSnap iOS | 399 | 1.6 GB | Swift | ~10 個月 |
| LifeSnapAdmin | 200+ | 150+ MB | C# | 9 個月（已完成） |
| Squid API SDK | - | 20 MB | Python | ~2 個月 |
| Squid JS SDK | - | 194 MB | TypeScript | ~2 個月 |

**總計**: ~6,800+ 個程式碼檔案，約 7.4 GB 專案規模

---

## 專案時間線

```
2019/02 ────── STA 組織綜合管理平台 (PHP) ────── 2021/02

2024/03 ────── LifeSnap iOS 遊戲 ────── 2024/04 (已上線)

2024/03 ────── LifeSnapAdmin (Firebase 後台) ────── 2024/12 (已完成)

2024/11 ────── LocalIdentityServer (LIDS) ────── 至今

2024/12 ────── Squid API SDK / JS SDK ────── 至今

2025/01 ────── Squid 專案管理系統 ────── 至今

2025/06 ────── Tentacle Frontend ────── 至今
```

---

*此文件為公開版本，已移除內部配置與機密資訊*
