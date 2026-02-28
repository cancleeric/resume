# 王英豪 - 資深全端工程師

## Senior Full-Stack Developer | 25年軟體工程 | React + TypeScript + Node.js + Python + iOS

---

## 聯絡資訊 - Contact Information

* **姓名 Name**：王英豪 (WANG YING HAO)
* **電話 Phone**：0921-107-206
* **信箱 Email**：[cancleeric@gmail.com](mailto:cancleeric@gmail.com)
* **期望薪資 Expected Salary**：NT$ 2,400,000 / 年
* **工作地點 Location**：新北市中和區（可配合北部地區工作）

---

## 專業摘要 - Professional Summary

**資深全端工程師 | React + TypeScript + Node.js + Python + iOS**

擁有 **25 年**軟體工程經驗，涵蓋 Web Frontend、Backend API、Mobile App 與 SDK 開發。近年專注於 **React 18 + TypeScript** 企業級 Web 應用開發，同時具備 **Node.js/Express.js** 中間層、**Python FastAPI** 後端 API、**iOS SwiftUI** 原生應用的完整全端開發能力。

主導建構 **Squid 企業級平台生態系統** — 獨立完成從 React Frontend、Node.js BFF、Python API Backend 到 TypeScript SDK 的完整技術棧開發。具備從零建構產品到上線的完整經驗，包含架構設計、API 開發、UI 實作、測試部署的全流程能力。

**核心技術亮點**：
- **React 18 + TypeScript**：382 個 TSX 檔案的企業級 SPA（Dashboard、OIDC 認證、Stripe/PayPal 支付）
- **Node.js + Express.js**：BFF 中間層（Session 管理、OIDC 整合、Rate Limiting）
- **TypeScript SDK**：ESM/CJS 雙格式、100% 測試覆蓋率、瀏覽器 + Node.js 通用
- **iOS SwiftUI**：已上線 App Store 的社交遊戲平台（SpriteKit 遊戲引擎）
- **Python FastAPI**：50+ 資料表、100+ API 端點的企業級後端

---

## 核心技術棧 - Core Technical Skills

### Frontend 前端技術
`React 18` `TypeScript 5` `JavaScript (ES6+)` `Webpack 5` `Bootstrap 5` `Sass/SCSS` `HTML5` `CSS3` `React Router 6` `Chart.js` `react-window` `oidc-client-ts` `Jest` `Playwright` `Cypress`

### Backend 後端技術
`Node.js 20` `Express.js` `Python FastAPI` `C# ASP.NET Core 8` `Blazor Server` `SQLAlchemy 2.0` `Entity Framework Core`

### Mobile 行動開發
`Swift` `SwiftUI` `SpriteKit` `UIKit` `Combine` `Core Data` `Firebase SDK` `CloudKit`

### 資料庫 Database
`PostgreSQL` `SQL Server` `MySQL` `SQLite` `Firebase Firestore`

### 支付與第三方整合
`Stripe` `PayPal (Braintree)` `SendGrid` `Twilio` `ChatGPT API` `Google AdMob`

### DevOps & 工具
`Docker` `Git` `GitHub Actions` `Google Cloud Run` `Webpack` `Rollup` `Jest` `Playwright` `Cypress`

### 認證與安全
`OAuth 2.0` `OpenID Connect (OIDC)` `JWT (RS256)` `MFA (TOTP/Email/SMS)` `RBAC` `BCrypt`

---

## 重點專案經歷 - Key Projects

### 1. Tentacle Frontend — 企業級 Web 應用 (2025/06 - 至今)

**角色**：Full-Stack Developer | **規模**：382 TypeScript/TSX 檔案, 891 MB

**技術棧**：React 18.3, TypeScript 5.1+, Webpack 5, Bootstrap 5.3, Sass/SCSS, React Router 6

**核心功能**：
- **Dashboard 儀表板**：Chart.js 資料視覺化、即時 KPI 指標顯示
- **需求與專案管理 UI**：完整 CRUD 操作、篩選排序、工單狀態流程管理
- **OIDC 認證整合**：oidc-client-ts 實作 OpenID Connect 登入/登出/Token 管理
- **支付整合**：Stripe (@stripe/react-stripe-js) + PayPal (@paypal/react-paypal-js) 雙金流
- **Virtual Scrolling**：react-window 實現萬筆資料高效能虛擬化列表
- **Responsive Design**：Bootstrap 5.3 + Sass/SCSS 響應式設計，支援多裝置

**測試與品質**：
- Jest 單元測試 + Playwright E2E + Cypress E2E
- 測試覆蓋率門檻：80%
- Git Hooks 自動化建置：post-commit → Docker build → HTTPS Local

---

### 2. Tentacle BFF — Backend for Frontend 中間層 (2024 - 至今)

**角色**：Full-Stack Developer

**技術棧**：Node.js 20, Express.js 4.22, TypeScript 5.9

**核心功能**：
- **Session 管理**：express-session + connect-redis 安全 Session 儲存
- **OIDC 整合**：openid-client + jose (JWT) 實現伺服器端認證流程
- **Rate Limiting**：express-rate-limit 保護 API 端點不被濫用
- **安全性中介層**：helmet (HTTP Security Headers) + cors (Cross-Origin 控制)
- **API Proxy & Aggregation**：聚合後端多個微服務 API，簡化 Frontend 呼叫

**架構特色**：
- BFF Pattern 分離關注點：Frontend 只需面對單一 BFF 端點
- 伺服器端 Token 管理，避免 JWT 暴露在瀏覽器
- 統一錯誤處理與回應格式

---

### 3. Squid JS SDK — TypeScript SDK 開發 (2024/12 - 至今)

**角色**：SDK Developer | **版本**：0.3.0

**技術棧**：TypeScript 5.4, Rollup (Bundler), cross-fetch, Jest, TypeDoc

**核心功能**：
- **雙認證模式**：支援 JWT Token + API Key 兩種認證方式
- **ESM + CJS**：同時輸出 ES Module 與 CommonJS 格式，跨環境通用
- **100% 測試覆蓋率**：Jest 完整覆蓋所有 API 方法與邊界條件
- **TypeDoc 文件**：自動產生完整 API 文件
- **跨平台相容**：Browser + Node.js 雙環境支援（cross-fetch）

**品質管理**：
- Git post-commit Hook 自動執行 `npm run build`
- 嚴格 TypeScript 類型檢查
- 版本號自動管理腳本

---

### 4. LifeSnap iOS — 社交遊戲平台 (2024/03 - 2024/04)

**角色**：iOS Developer | **團隊**：3 人 | **狀態**：已上線 App Store

**技術棧**：Swift, SwiftUI, SpriteKit, UIKit, Combine, Core Data

**後端整合**：Firebase Auth, Firestore, Storage, Cloud Messaging (FCM), CloudKit

**核心功能**：
- **即時多人對戰**：SpriteKit 遊戲引擎，多米諾骨牌對戰遊戲
- **ChatGPT AI 聊天**：整合 OpenAI API 實現 AI 聊天助手
- **社交系統**：好友系統、即時通訊、虛擬貨幣與商店
- **廣告整合**：Google AdMob 橫幅廣告 + 獎勵廣告

**架構設計**：MVVM + Protocol-Oriented Design

**專案規模**：399 個 Swift 檔案, 1.6 GB

---

### 5. STA 組織綜合管理平台 (2019/02 - 2021/02)

**角色**：Full-Stack Developer | **團隊**：5 人

**技術棧**：PHP CodeIgniter (HMVC), jQuery, HTML/CSS, MySQL, Apache

**業務成果**：
- 服務 **5,000+ 學員**（中華民國游泳救生協會）
- 線上報名率提升 **80%**
- 行政作業時間減少 **60%**

**核心功能**：
- 課程管理與即時報名系統
- 15+ 種營運報表與 PDF 自動產生
- 會員管理與資格認證系統

---

### 6. Squid API — 企業級後端 API (2025/01 - 至今)

**角色**：Full-Stack Developer（同時開發 Frontend + Backend）

**技術棧**：Python FastAPI, PostgreSQL, SQLAlchemy 2.0, Alembic

**規模**：50+ 資料表, 100+ API 端點, 1,076 個 Python 檔案

**核心功能**：
- Multi-tenant SaaS 架構（多租戶隔離）
- 分層架構：API Service → BAL → CORL → DAL
- JWT + OAuth 2.0 認證整合
- Stripe / PayPal 支付整合
- WebSocket 即時通訊
- Prometheus + OpenTelemetry 監控

**全端能力展現**：獨立完成從 React Frontend → Node.js BFF → Python Backend 的完整技術棧

---

### 7. LocalIdentityServer (LIDS) — OAuth2/OIDC 身份認證服務 (2024/11 - 至今)

**技術棧**：C# ASP.NET Core 8, PostgreSQL, Entity Framework Core, Blazor Server

**核心功能**：
- 自建 OAuth 2.0 / OpenID Connect Provider
- Multi-tenant 身份管理
- MFA 多因素認證（TOTP, Email, SMS）
- Blazor Server 管理後台 UI
- JWT RS256 Token 簽發與驗證

---

### 8. LifeSnapAdmin — Firebase 後台管理系統 (2024/03 - 2024/12)

**角色**：獨立開發 | **總工時**：656+ 小時 | **8 階段完成**

**技術棧**：C# .NET 9.0, Blazor Server, Firebase Admin SDK, Bootstrap 5

**完成功能**：
- Firebase Authentication 用戶管理（列表、啟停用、搜尋、批量操作、匯出）
- Firestore 資料庫管理（集合瀏覽、文檔 CRUD、視覺化查詢建構器）
- Firebase Storage 檔案管理（樹狀瀏覽、Drag & Drop 上傳、圖片預覽）
- 統計分析儀表板（Chart.js、DAU/MAU、留存率、漏斗分析）
- 推播通知管理（FCM 整合、排程發送、A/B 測試）
- 系統管理（權限管理、稽核日誌、備份還原、系統監控）

---

## 其他專案經歷 - Other Projects

| 專案 | 技術 | 說明 |
|------|------|------|
| **Squid Python SDK** | Python, Pydantic, PyJWT | API 客戶端 SDK，PyPI 發布 |
| **MCP Server** | TypeScript, Express.js | AI 工具整合（Model Context Protocol）|
| **Neritic CLI** | Python Click, PyInstaller | 工單管理 + Docker 遠端部署 CLI 工具 |
| **CommTool** | Python | 統一通訊平台（IM + Email 多頻道）|

### 早期專案

| 時期 | 專案 | 技術 |
|------|------|------|
| 2015-2016 | 德州撲克遊戲平台 | Delphi |
| 2012-2013 | 太陽能發電監測系統 | PHP, MySQL |
| 2004-2008 | 車載娛樂系統（多家車廠）| C++ MFC, WinCE |
| 2001-2002 | PDA 應用軟體 | C++ MFC, WinCE |
| 2000-2001 | Web 海報編輯器（金流/印刷串接）| ASP, Java, C++ |

---

## 工作經歷 - Professional Experience

### .NET Engineer | 中小企業信用保證基金
*2024/05 - 2025/07 | 8 人開發團隊*

- 主導舊系統從 .NET Framework 4.6 升級至 .NET 8 + Blazor
- 直保線上填報系統全新開發 (.NET 5)
- 支援銀行端信用保證業務系統
- 採用微服務架構設計，提升系統擴展性與維護性

### 公司負責人 / 總經理 / 技術架構師 | 颶風軟體有限公司
*2002 - 至今（24 年）*

- 創立並經營軟體開發公司，累積服務 **100+ 企業客戶**
- 管理 **8 人跨職能技術團隊**，負責技術培訓與 Code Review
- 主導設計 Squid 企業級生態系統（12 個生產系統）
- 建立兩層式 CI/CD 架構（Git Hooks post-commit + pre-push）
- 建立工單驅動開發流程與 140 分評審制度

---

## 學歷 - Education

* **東南科技大學** 數位電子系（二專）— 第一名畢業
* **內湖高級工業職業學校** — 代表學校參加技能競賽，榮獲二等榮譽獎章

---

## 專業經驗統計 - Professional Experience Summary

| 專業領域 | 年資 | 主要成就 |
|----------|------|---------|
| **Full-Stack Development 全端開發** | 25 年 | React + Node.js + Python + iOS 完整技術棧 |
| **Technical Management 技術管理** | 24 年 | 創立軟體公司，管理 8 人團隊，100+ 企業客戶 |
| **System Architecture 系統架構** | 18 年 | Multi-tenant SaaS / OAuth2 / Microservices |
| **Frontend Development 前端開發** | 8 年 | React 18 + TypeScript 企業級 SPA |
| **iOS Development 行動開發** | 2+ 年 | SwiftUI + SpriteKit，已上線 App Store |

---

## 自我優勢 - Key Strengths

1. **真正的全端能力**：獨立完成從 React Frontend → Node.js BFF → Python Backend → TypeScript SDK 的完整產品線，不是只懂一端
2. **企業級專案經驗**：382 個 TSX 檔案的大型 React 應用、50+ 資料表的 Backend API，具備處理複雜商業邏輯的能力
3. **多語言技術棧**：TypeScript / Python / C# / Swift / PHP，根據場景選擇最適合的技術
4. **從零到上線**：LifeSnap iOS 遊戲上線 App Store、Squid 平台 Cloud Run 生產環境，具備完整的產品交付經驗
5. **測試驅動品質**：100% SDK 測試覆蓋率、80% Frontend 覆蓋率門檻、三階段測試流程

---

*最後更新：2026 年 2 月*
*此履歷已針對 ATS 系統關鍵字強化：Full-Stack Developer, React, TypeScript, Node.js, Express.js, iOS, SwiftUI, Frontend Engineer, Senior Developer, Python FastAPI, SDK Development*
