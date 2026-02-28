# 王英豪 - 資深 iOS 工程師 / 行動應用架構師

## Senior iOS Engineer & Mobile App Architect | 25年軟體工程經驗 | iOS 遊戲 & 應用開發

---

## 聯絡資訊 - Contact Information

* **姓名 Name**：王英豪 (WANG YING HAO)
* **電話 Phone**：0921-107-206
* **信箱 Email**：[cancleeric@gmail.com](mailto:cancleeric@gmail.com)
* **期望薪資 Expected Salary**：NT$ 2,400,000 / 年
* **工作地點 Location**：新北市中和區（可配合北部地區工作）

---

## 專業摘要 - Professional Summary

**資深 iOS 工程師 | 行動應用架構師 | SpriteKit 遊戲開發**

擁有 **25 年**軟體工程經驗與 **24 年**技術管理實務，專精 iOS 原生應用與遊戲開發。獨立設計並開發 **LifeSnap** — 一款多人線上骨牌對戰遊戲 App，涵蓋 SpriteKit 遊戲引擎、SwiftUI 介面、Firebase 即時後端、StoreKit 內購系統、ChatGPT AI 整合、CloudKit 同步、推播通知等完整功能，App Store 已上架並持續維運。

近期主導 **LifeCrypto** 獨立 App 拆分（從 LifeSnap 解耦），實作 Clean Architecture 與 Repository Pattern，展現模組化架構設計能力。同時開發 **LifeSnapAdmin** — 以 C# Blazor Server 建構的 Firebase 後台管理系統（117 個 C# 檔案、800+ 單元測試），完成從行動端到後台的全棧交付。

---

## iOS 核心技術棧 - iOS Technical Skills

### Apple 開發生態系
`Swift` `SwiftUI` `UIKit` `SpriteKit` `GameplayKit` `StoreKit` `CloudKit` `Core Data` `Combine` `async/await` `Xcode` `Instruments`

### 架構模式 Architecture Patterns
`MVVM` `Clean Architecture` `Repository Pattern` `Coordinator Pattern` `Dependency Injection` `Protocol-Oriented Programming`

### 遊戲開發 Game Development
`SpriteKit` `SKScene` `SKNode` `SKAction` `SKPhysicsBody` `GameplayKit` `粒子系統` `場景管理` `動畫系統` `音效管理`

### 後端與雲端整合
`Firebase Authentication` `Firebase Firestore` `Firebase Storage` `Firebase Cloud Messaging` `CloudKit` `REST API` `WebSocket`

### 工具與 CI/CD
`Xcode 16` `XCTest` `GitHub Actions` `TestFlight` `App Store Connect` `CocoaPods` `Swift Package Manager` `Git`

### 跨平台與後端
`C#` `.NET 9` `Blazor Server` `Python` `FastAPI` `Docker` `PostgreSQL` `GCP Cloud Run`

---

## 核心專案：LifeSnap — 多人線上骨牌遊戲

**角色**：獨立開發者 / iOS 架構師 | 2023/06 - 至今 | App Store 已上架

從零設計並開發的完整 iOS 遊戲應用，包含 **1,545 個 Swift 檔案**，涵蓋以下核心系統：

### 遊戲引擎（SpriteKit）
* 基於 SpriteKit 建構完整骨牌遊戲引擎，支援 Block、Draw、All 5's 三種經典模式
* 自建場景管理架構：MainMenuScene → GameScene → GameCoverScene → LeaderboardScene
* 實作自訂 UI 元件系統：AnimatedSKNode、PrimeStackNode（HStack/VStack）、ButtonNode、TextLabel
* 金幣動畫系統（CoinAnimationHelper）— 粒子效果與貝茲曲線移動
* 音效管理器（AudioPlayer）— 背景音樂與遊戲音效即時切換
* 多場景動畫控制：moveInScreen / moveOutScreen 過場動畫架構

### SwiftUI 介面層
* 主架構採用 SwiftUI + MVVM，自訂 TabBar（CusomTabBarView）整合多模組
* 模組化視圖設計：FeedView、ProfileView、MessageView、LifeFateView、WelcomeView
* AI 聊天整合（AIChatLogView）— 串接 ChatGPT API 的即時對話介面
* 好友系統 UI：AddNewFriendView、FriendListView、InboxView、ChatLogView
* 啟動動畫（LaunchView）與 Deep Link 處理（URLHandler + Universal Links）

### Firebase 後端整合
* **Authentication**：Email/密碼登入、第三方登入、帳號管理
* **Firestore**：17 個 Manager 類別管理遊戲資料（GameRoomManager、PlayerStatsManager、FriendManager、ChatManager、SubscriptionManager 等）
* **Storage**：頭像上傳與遊戲資源管理
* **Cloud Messaging**：推播通知系統（遊戲邀請、好友請求、系統公告）

### 即時多人對戰系統
* GameDataCenter — 遊戲狀態即時同步（Firestore Realtime Listeners）
* GameEventsCenter — 事件驅動架構，處理玩家動作廣播
* FriendDataCenter — 好友系統資料中心，管理好友請求與配對
* ObserverManager — 統一觀察者模式管理，避免記憶體洩漏
* SafeAccessQueue — 執行緒安全佇列，保護共享狀態

### 商業化功能
* StoreKit 內購系統（StorekitView + StoreKitViewModel）— 支援消耗型與訂閱型商品
* 每日任務與獎勵系統（DailyTask Model）
* 邀請碼系統（InviteCodeService）— Deep Link 邀請好友
* 訂閱管理（SubscriptionManager）— 自動續訂與狀態追蹤

---

## 核心專案：LifeCrypto — 加密貨幣追蹤 App

**角色**：iOS 架構師 | 2025/02 | 從 LifeSnap 獨立拆分

將 LifeSnap 中的加密貨幣模組獨立為完整 App，展現 iOS 模組化架構能力：

* **Clean Architecture 實踐**：Domain / Data / Presentation 三層分離
* Repository Pattern — CryptoRepositoriesData 統一資料存取介面
* Firebase Infrastructure 層抽象化（FirebaseCryptoDataManager / Adapter Pattern）
* 即時市場數據：CryptoCoinDataService → REST API 串接即時幣價
* 圖表與視覺化：ChartView 展示歷史價格走勢
* 投資組合管理：PortfolioView + Core Data 本地持久化
* 網路層封裝：NetworkingManager（URLSession + Combine）
* 震動回饋：HapticManager — 提升操作手感

---

## 核心專案：LifeSnapAdmin — Firebase 後台管理系統

**角色**：全端開發者 | 2025/01 - 2026/02 | C# Blazor Server

為 LifeSnap iOS App 開發的完整後台管理系統：

* **技術棧**：.NET 9 + Blazor Server + Firebase Admin SDK 3.4.0 + Bootstrap 5
* **規模**：117 個 C# 檔案、800+ 單元測試（xUnit）
* 功能模組：用戶管理、Firestore 資料管理、Storage 檔案瀏覽、排程通知、影片處理、用戶行為分析
* Docker 容器化部署 + GitHub Actions CI/CD
* LIDS 認證整合（OAuth2/OIDC SSO）
* 完整測試覆蓋：DashboardService、SecurityMonitoring、ErrorTracking、VideoProcessing 等模組

---

## 其他技術專案

### Squid 企業級生態系統 | 技術架構師 | 2024/11 - 至今
* 主導 12 個生產系統設計（API、OAuth2/OIDC 認證服務、Web 前端、BFF、SDK、CLI、MCP Server）
* 管理 11 人跨職能工程團隊，建立 140 分評審制度
* 技術棧：Python FastAPI / C# .NET 8 / React TypeScript / PostgreSQL / Docker / GCP

### 企業級系統開發經驗（2002 - 至今）
* 颶風軟體有限公司負責人 — 24 年技術管理與創業經驗
* 曾開發 ERP、CRM、電子商務、信保基金投保系統等企業級軟體
* 熟悉 C++、Java、C#、Python、JavaScript 等 10+ 種程式語言

---

## 工作經歷 - Work Experience

### 颶風軟體有限公司 | 總經理 / 技術負責人
**2002/10 - 至今**（24 年）| 台北

* 創立並經營軟體開發公司，主導所有技術架構決策
* 獨立開發 **LifeSnap** iOS 遊戲 App — 已上架 App Store
* 開發 **LifeCrypto** 獨立加密貨幣 App — Clean Architecture 模組拆分
* 開發 **LifeSnapAdmin** 後台管理系統 — C# Blazor Server
* 主導 **Squid 企業級生態系統** — 12 個生產系統
* 信保基金投保系統開發（2024/05 - 2026/02）
* 管理 11 人工程團隊，建立標準化開發流程

### 米迪亞 | 軟體工程師 / 專案經理
**2001/12 - 2002/12**（1 年）| 台北

* 使用 C++ / MFC 開發桌面應用程式
* 專案管理與客戶需求分析

### 東岸互動 | 軟體工程師
**2000/12 - 2001/12**（1 年）| 新北市

* 使用 PHP / MySQL 開發 Web 應用系統
* 早期 Web 技術實務經驗

---

## 教育背景 - Education

### 東南科技大學 | 電子工程學系
* **第一名畢業**

### 內湖高級工業職業學校
* 代表學校參加競賽
* 榮獲學校頒發**三等榮譽獎章**

---

## 專業技能標籤 - Skill Tags

`iOS Development` `Swift` `SwiftUI` `SpriteKit` `UIKit` `MVVM` `Clean Architecture` `Firebase` `StoreKit` `CloudKit` `Core Data` `Combine` `async/await` `Game Development` `Multiplayer Gaming` `Real-time Sync` `ChatGPT Integration` `Xcode` `TestFlight` `App Store` `Git` `CI/CD` `Docker` `C#` `.NET` `Blazor` `Python` `FastAPI` `PostgreSQL` `OAuth2/OIDC` `REST API` `Agile` `Team Leadership`

---

*最後更新：2026 年 2 月*
