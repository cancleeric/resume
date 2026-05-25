# 颶風軟體有限公司 · HurricaneSoft Ltd. — 接案工作室 Landing Page

把整套開發流程自動化（規格→設計→實作→審查→部署→維運），一個人扛起以往需要整支團隊的產出。

這個 repo 是**公司對外接案的主要入口頁**，同時也是「開發流程自動化」最直接的實體證明——頁面本身每小時由 AI 自動迭代、commit、push、部署，無人手動改 code。

---

## 線上網址

| 頁面 | URL |
|------|-----|
| 主入口（redirect） | https://cancleeric.github.io/resume/ |
| 設計版 · 亮（主力） | https://cancleeric.github.io/resume/design/index-light.html |
| 設計版 · 深 | https://cancleeric.github.io/resume/design/index.html |
| 標準版（舊） | https://cancleeric.github.io/resume/resume.html |

---

## 檔案結構

```
resume/
├── index.html                  # 根入口，redirect → design/index-light.html
├── resume.md                   # 標準版原稿（Markdown）
├── resume.html                 # pandoc build 出的標準版 HTML
├── resume-style.css            # 標準版樣式（螢幕 + 列印 A4）
├── template.html5              # pandoc HTML5 模板
├── build.sh                    # 一鍵 build 腳本（需 pandoc）
├── CHANGELOG.md                # 版本紀錄（v<major>.<minor>，目前 v8.x）
├── sitemap.xml                 # SEO sitemap（三版 URL）
├── robots.txt                  # 爬蟲指引
│
├── design/                     # 主力設計版（接案 landing page）
│   ├── index-light.html        # 亮色版（主力，SEO canonical）
│   ├── index.html              # 深色版
│   ├── i18n/
│   │   ├── core.js             # i18n runtime（語系切換邏輯）
│   │   ├── dict-zh.js          # 繁體中文字典（fallback / default）
│   │   └── dict-en.js          # 英文字典
│   └── src/                    # React JSX 元件原始碼（僅供參考，未 bundle）
│       ├── app.jsx             # 根元件
│       ├── hero.jsx            # Hero 區段
│       ├── services.jsx        # 服務項目
│       ├── pricing.jsx         # 報價模式
│       ├── systems.jsx         # 可交付系統
│       ├── timeline.jsx        # 交付案例時間軸
│       ├── trust.jsx           # 信任要件
│       ├── faq-cta.jsx         # FAQ + 預約 CTA
│       └── tokens.jsx          # Design tokens
│
├── assets/                     # 靜態資源（avatar 等）
├── screenshots/                # 頁面截圖存檔（loop 親測用）
└── archive/                    # 封存舊版（6 個求職特化版 + 舊 plans）
```

---

## 本地預覽

設計版是純 HTML + 內聯 JS，直接開瀏覽器即可：

```bash
open design/index-light.html
```

標準版需要 pandoc build：

```bash
brew install pandoc       # 僅首次
./build.sh                # build 全部 .html
open resume.html
```

---

## 自動優化 Loop

這個 repo 接入 Agentic OS 控制台的 `/loop` 自動優化排程。

**排程**：每小時 `:23` 分（`23 * * * *`，session-only，session 結束需重建）

**每輪流程**：

```
CPO（計劃）→ CEO（審核）→ CTO（實作）→ eye 驗收 → CEO 親測 → git commit + push
```

**紀律**：
- 每輪挑最弱一個點聚焦修改，不大改
- skip 只留給真的窮舉過無改進空間的版面
- 禁止 CPO 動 code，禁止任何副手執行 git 操作
- git 操作只由 CEO 本人執行

**loop 設定檔**：`/Users/apple/HurricaneSoft/console/LOOP-SETUP.md`

push main 後 GitHub Pages 約 1–2 分鐘自動部署，無需手動操作。

---

## i18n 系統

設計版支援繁體中文 / 英文切換，由 `design/i18n/` 驅動。

| 檔案 | 說明 |
|------|------|
| `core.js` | runtime：語系偵測、切換、DOM 渲染 |
| `dict-zh.js` | 繁中字典，全站預設 fallback |
| `dict-en.js` | 英文字典 |

字串以 key 形式管理，例如 `hero.h1_line1`、`meta.title`。
新增文案只需在兩份 dict 同步新增對應 key，不動 HTML 結構。

---

## 版號規則

格式：`v<major>.<minor>`

| 等級 | 觸發條件 |
|------|---------|
| major | 定位轉移（如求職版→接案版）、大型改版 |
| minor | 每次 loop 迭代 polish batch |

目前版號：**v8.x**（2026-05）

完整版本紀錄：[CHANGELOG.md](./CHANGELOG.md)

---

## 部署方式

push `main` branch → GitHub Pages 自動部署，無需額外設定。

```bash
git push origin main
# GitHub Pages 約 1–2 分鐘後生效
```

GitHub Pages 設定：Source = `main` branch，根目錄 `/`

---

## 聯絡

- Email：cancleeric@gmail.com
- 電話：0921-107-206
- 統一編號：80289779（可開發票）
- 官網：https://www.hurricanesoft.com.tw
