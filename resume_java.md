# 王英豪 - 資深 Java 工程師 / 系統架構師

## Senior Java Developer & System Architect | 25年軟體工程 | OOP 跨語言架構專家

---

## 聯絡資訊 - Contact Information

* **姓名 Name**：王英豪 (WANG YING HAO)
* **電話 Phone**：0921-107-206
* **信箱 Email**：[cancleeric@gmail.com](mailto:cancleeric@gmail.com)
* **期望薪資 Expected Salary**：NT$ 2,400,000 / 年
* **工作地點 Location**：新北市中和區（可配合北部地區工作）

---

## 專業摘要 - Professional Summary

**資深系統架構師 | OOP 跨語言專家 | 技術主管**

擁有 **25 年**物件導向程式設計經驗，從 Java 起步，橫跨 C#、Python、TypeScript、Swift 等 10+ 語言，深刻理解 **Design Patterns、SOLID 原則、Clean Architecture** 在不同語言生態的實踐。

**核心架構能力**：
* **設計模式實戰**：25 年 OOP 經驗，在 Java / C# / Python / TypeScript 中實踐 Repository、Factory、Observer、Strategy、MVVM 等模式
* **跨語言架構遷移**：將 Java 世界的 Spring Boot 分層概念（Controller → Service → Repository）成功應用到 FastAPI（API → BAL → CORL → DAL）與 ASP.NET Core
* **企業級系統設計**：主導建構 12 個生產系統的 Squid 企業級生態系統
* **團隊管理**：24 年技術管理，現管理 8 人跨職能工程團隊

---

## 核心技術棧 - Core Technical Skills

### Java 相關 Java Ecosystem
`Java` `OOP` `Design Patterns` `SOLID` `MVC` `REST API` `SQL` `JDBC` `Multi-threading`

### 跨語言 OOP 實踐 Cross-language OOP
`C#` `.NET 8` `ASP.NET Core` `Python` `FastAPI` `TypeScript` `Swift` `SwiftUI`

### 設計模式與架構 Design Patterns & Architecture
`Repository Pattern` `Factory Pattern` `Observer Pattern` `Strategy Pattern` `MVVM` `MVC` `Layered Architecture` `BFF Pattern` `Multi-tenant SaaS` `Microservices` `Domain-Driven Design`

### 資料庫 Database
`PostgreSQL` `SQL Server` `MySQL` `SQLite` `Firebase Firestore` `ORM (SQLAlchemy / EF Core)` `Database Migration`

### 雲端與 DevOps
`Docker` `GCP Cloud Run` `Azure` `Git Hooks CI/CD` `GitHub Actions` `Prometheus`

---

## OOP 設計模式跨語言實踐 - Design Patterns Across Languages

展示同一設計思維如何在不同語言中實現：

| 設計模式 | Java 根基 | C# 實踐 | Python 實踐 | TypeScript 實踐 |
|----------|-----------|---------|-------------|-----------------|
| **Repository** | DAO/Repository | EF Core DbContext (LIDS) | SQLAlchemy DAL (Squid) | SDK Client Class |
| **Layered Arch** | Controller→Service→DAO | Controller→Service→EF | API→BAL→CORL→DAL | React→BFF→API |
| **Factory** | Interface Factory | DI Container (ASP.NET) | FastAPI Dependency | Provider Pattern |
| **Observer** | Event Listener | Event Handler / SignalR | WebSocket Events | React State/Hooks |
| **Strategy** | Interface + Impl | Interface + DI | Protocol/ABC | Interface + Class |
| **MVVM** | — | Blazor Server | — | React Hooks |
| **Protocol-Oriented** | Interface-based | Interface-based | ABC/Protocol | Interface/Type |

---

## 重點專案 — OOP 架構觀點 - Key Projects (Architecture Perspective)

### Squid API — Layered Architecture in Python (2025/01 - 至今)
**後端架構師 / 技術負責人**

將 Java/Spring Boot 的分層架構思維遷移至 Python FastAPI：

```
Java Spring Boot 思維          →  Python FastAPI 實踐
────────────────────────────     ────────────────────────
@RestController                →  api_service/ (FastAPI Router)
@Service                       →  business_access_layer/ (BAL)
Business Logic                 →  core_logic_layer/ (CORL)
@Repository / JPA              →  data_access_layer/ (DAL + SQLAlchemy)
```

* **規模**：50+ 資料表、100+ REST API 端點、1,076 Python 檔案
* **模式應用**：Repository Pattern、Dependency Injection、Strategy Pattern（多認證方式）
* **多租戶隔離**：tenant_id 強制於所有資料表，類比 Java 的 @TenantScope
* **ORM**：SQLAlchemy 2.0（類比 JPA/Hibernate）
* **Migration**：Alembic（類比 Flyway/Liquibase）

### LocalIdentityServer (LIDS) — Enterprise Auth in C# (2024/11 - 至今)
**後端架構師 / .NET 開發工程師**

類比 Java 的 Spring Security + Keycloak，自建完整 OAuth2/OIDC：

* **技術**：ASP.NET Core 8.0, EF Core, PostgreSQL, Blazor Server
* **架構模式**：
  * DI Container（類比 Spring IoC）
  * Repository Pattern（EF Core DbContext）
  * Middleware Pipeline（類比 Java Filter Chain）
  * Options Pattern（類比 Spring Configuration Properties）
* **功能**：OAuth 2.0 + OIDC、MFA (TOTP/Email/SMS)、多租戶、Break-glass
* **規模**：428 C# 檔案

### Tentacle Frontend + BFF — React + Express.js (2024-至今)
**全端開發**

類比 Java 的 Angular + Spring Gateway：

* **Frontend**：React 18, TypeScript（類比 Angular + TypeScript in Java ecosystem）
* **BFF**：Express.js（類比 Spring Cloud Gateway / Zuul）
* **模式**：Component-based Architecture、State Management (Hooks vs Java State)、BFF Pattern
* **規模**：382 TypeScript 檔案

### LifeSnap iOS — MVVM in Swift (2024/03-2024/04)
**iOS 開發工程師 | 3 人團隊**

* **架構**：MVVM + Protocol-Oriented Design（Swift 版的 Interface-based Programming）
* **技術**：SwiftUI + SpriteKit + Firebase
* **模式**：Observer (Combine)、Strategy (Protocol)、Coordinator
* 已上線 App Store

---

## Java 直接經驗 - Direct Java Experience

### 東岸互動 — Web 海報編輯器 (2000-2001)
**軟體工程師 / 技術長 (CTO)**

* **技術**：Java, ASP, C++, JavaScript, SQL Server, MySQL
* **專案**：Web 版海報編輯器 — 金流串接 / 印刷廠串接 / 會員系統 / 物流收送
* 這是職涯初期使用 Java 進行企業級 Web 開發的起點

### 跨語言 Java 思維持續應用

25 年來，Java 的核心設計思維（Interface、Generics、Collections、Concurrency、Design Patterns）持續影響所有專案的架構決策：

* **Python**：ABC/Protocol ← Java Interface；asyncio ← Java Concurrency
* **C#**：幾乎 1:1 對應 Java 生態（.NET ≈ JVM、LINQ ≈ Stream API、EF Core ≈ JPA）
* **TypeScript**：Interface/Generic/Decorator ← Java 直接映射
* **Swift**：Protocol-Oriented ← Java Interface-based Design

---

## 工作經歷 - Professional Experience

### 系統分析師 (SA) | 統一錢包後台專案
*2025/06 - 至今*
* 金融科技後台系統架構設計，.NET Core 2.0

### .NET Engineer | 中小企業信用保證基金
*2024/05 - 2025/07*
* 8 人團隊，.NET Framework 4.6 → .NET 8 升級（類比 Java 8 → Java 17 遷移）

### 公司負責人 / 總經理 / 技術架構師 | 颶風軟體有限公司
*2002 - 至今（24 年）*
* 管理 8 人團隊，100+ 企業客戶，12 個生產系統

### 軟體工程師 / 專案經理 | 米迪亞
*2001 - 2002*
* C++ / WinCE PDA 應用開發

### 軟體工程師 / CTO | 東岸互動
*2000 - 2001*
* **Java** + ASP + C++ 企業級 Web 應用開發

---

## 學歷 - Education

* **東南科技大學** 數位電子系（二專）— 第一名畢業
* **內湖高級工業職業學校** — 代表學校參加技能競賽，榮獲二等榮譽獎章

---

## 專業能力統計 - Professional Experience Summary

| 專業領域 | 年資 | 說明 |
|----------|------|------|
| **OOP / Design Patterns** | 25 年 | 從 Java 起步，跨 10+ 語言實踐 |
| **Java 直接經驗** | 2 年 | 早期職涯核心語言 |
| **Java 生態類比（C#/.NET）** | 20+ 年 | C# 與 Java 高度相似，可快速遷移 |
| **技術管理 & 創業** | 24 年 | 8 人團隊管理 |
| **系統架構設計** | 18 年 | 12 個生產系統 |

---

## 為什麼我能快速上手 Java 專案

1. **25 年 OOP 根基**：Java 的核心概念（Interface、Generics、Annotations、Concurrency）已在 C# / Python / TypeScript 中深度實踐
2. **C# ≈ Java**：20+ 年 C# 經驗可近乎無縫遷移（語法、生態、架構模式高度相似）
3. **Spring Boot ↔ FastAPI/ASP.NET**：分層架構、DI、ORM、Migration 概念完全一致
4. **已驗證的跨語言能力**：在職涯中多次成功切換技術棧（C++ → Java → C# → Python → Swift → TypeScript）

---

*最後更新：2026 年 2 月*
*此履歷針對 Java 相關職位強化，展示 OOP 跨語言架構能力*
*ATS Keywords: Java Developer, System Architect, OOP, Design Patterns, SOLID, Spring Boot (concept), Microservices, REST API, SQL, PostgreSQL, Team Lead*
