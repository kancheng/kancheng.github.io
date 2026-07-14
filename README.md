# kancheng.github.io

Horst Kan（干皓丞）個人網站與多語履歷頁面。

**Site:** https://kancheng.github.io/

---

## 中文

### 簡介

本專案為 GitHub Pages 靜態網站，作為個人入口與履歷展示。首頁採現代單頁設計；履歷提供多語版本；另有學術研究與演講頁面。

### 頁面一覽

| 頁面 | 說明 |
|------|------|
| [`index.html`](index.html) | 首頁：介紹、聯絡方式、導覽、多語 CV PDF 下載 |
| [`en.html`](en.html) | 履歷（English） |
| [`zh_tw.html`](zh_tw.html) | 履歷（正體中文） |
| [`zh_cn.html`](zh_cn.html) | 履歷（简体中文） |
| [`ja.html`](ja.html) | 履歷（日本語） |
| [`de.html`](de.html) | 履歷（Deutsch） |
| [`fr.html`](fr.html) | 履歷（Français） |
| [`academic.html`](academic.html) | 學術研究與論文 |
| [`presentations.html`](presentations.html) | 演講與公開分享 |

### 主要功能

- **主題切換**：Sakura 深色（`sakura-vader`）／淺色（`sakura-earthly`）；依本地時間預設，並以 `localStorage` 記住選擇
- **回到頂部**：捲動後顯示固定按鈕
- **社群圖示**：深／淺色主題各一套圖示
- **回首頁按鈕**：履歷頁在語言切換列下方；Academic／Presentations 頁在主題按鈕正下方
- **CV PDF 下載**：英文、英文精簡、正體、簡體、日文、法文、德文（見 `spa_cv/`）

### 目錄結構

```
├── index.html              # 首頁
├── en.html / zh_*.html / ja.html / de.html / fr.html
├── academic.html / presentations.html
├── css/
│   ├── home.css            # 首頁專用樣式（不影響其他頁）
│   ├── cv-layout.css       # 共用版面、固定按鈕
│   ├── sakura*.css         # 主題樣式
│   └── normalize.css
├── js/
│   ├── main.js             # 主題、回到頂部、圖示切換
│   └── jquery.min.js
├── spa_cv/                 # 多語 CV PDF
├── image/                  # 社群圖示等
└── README.md
```

### 本機預覽

以靜態伺服器開啟專案根目錄即可，例如：

```bash
npx serve .
```

或直接以瀏覽器開啟對應 HTML 檔。

### 注意事項

- 首頁樣式集中在 `css/home.css`（`body.home-page`），修改時避免改動會影響履歷／學術頁的共用檔，除非有意為之
- 主題邏輯在 `js/main.js`；`data-theme` 供首頁 CSS 變數切換使用

---

## English

### Overview

This repository is a GitHub Pages static site for Horst Kan — a personal landing page, multilingual CVs, academic work, and presentations.

### Pages

| Page | Description |
|------|-------------|
| [`index.html`](index.html) | Home: intro, contact, navigation, multilingual CV PDF downloads |
| [`en.html`](en.html) | Resume (English) |
| [`zh_tw.html`](zh_tw.html) | Resume (Traditional Chinese) |
| [`zh_cn.html`](zh_cn.html) | Resume (Simplified Chinese) |
| [`ja.html`](ja.html) | Resume (Japanese) |
| [`de.html`](de.html) | Resume (German) |
| [`fr.html`](fr.html) | Resume (French) |
| [`academic.html`](academic.html) | Research and publications |
| [`presentations.html`](presentations.html) | Talks and public presentations |

### Features

- **Theme toggle**: Sakura dark (`sakura-vader`) / light (`sakura-earthly`); time-based default with `localStorage` persistence
- **Back to top**: Fixed button after scrolling
- **Social icons**: Separate icon sets for dark and light themes
- **Home button**: On resume pages, below the language switcher; on Academic / Presentations, directly under the theme button
- **CV PDF downloads**: English, English (Simple), Traditional Chinese, Simplified Chinese, Japanese, French, German (under `spa_cv/`)

### Project layout

```
├── index.html              # Home page
├── en.html / zh_*.html / ja.html / de.html / fr.html
├── academic.html / presentations.html
├── css/
│   ├── home.css            # Home-only styles (scoped; does not affect other pages)
│   ├── cv-layout.css       # Shared layout and fixed controls
│   ├── sakura*.css         # Theme stylesheets
│   └── normalize.css
├── js/
│   ├── main.js             # Theme, back-to-top, icon switching
│   └── jquery.min.js
├── spa_cv/                 # Multilingual CV PDFs
├── image/                  # Social icons, etc.
└── README.md
```

### Local preview

Serve the repo root as static files, for example:

```bash
npx serve .
```

Or open the HTML files directly in a browser.

### Notes

- Home styling lives in `css/home.css` (`body.home-page`). Prefer not to change shared CSS/JS unless the change is intentional for all pages
- Theme logic is in `js/main.js`; `data-theme` drives home-page CSS variables
