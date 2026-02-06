# Bookshelf

読んだ本を管理する個人向け静的Webサイト。Astro + GitHub Pages で構築し、データはリポジトリ内のJSONファイルで管理する。

## 技術スタック

- **Astro** - 静的サイトジェネレーター
- **TypeScript** - 型安全
- **Tailwind CSS** - スタイリング
- **Chart.js** - 読書統計グラフ
- **Pagefind** - 全文検索（タイトル・著者・感想を横断検索）
- **GitHub Actions** - 自動ビルド・デプロイ
- **GitHub Pages** - ホスティング

## ページ構成

| パス | 内容 |
| :--- | :--- |
| `/` | 読了本の一覧（グリッド表示、ジャンルフィルタ、全文検索） |
| `/want-to-read/` | 読みたいリスト |
| `/books/[id]/` | 本の詳細（書籍情報、星評価、感想全文） |
| `/stats/` | 読書統計（月別冊数の棒グラフ、ジャンル別円グラフ、サマリー） |

## 本の追加方法

`src/data/books.json` を編集して push するだけで、GitHub Actions が自動ビルド・デプロイする。

```jsonc
{
  "id": "example",           // URLに使用されるID
  "title": "書籍タイトル",
  "author": "著者名",
  "publisher": "出版社",
  "firstEditionDate": "2024-01-01",  // 初版発行日
  "rating": 4,               // 1-5の評価
  "readDate": "2024-06-15",  // 読了日
  "memo": "感想・レビュー",
  "genre": "ジャンル",
  "tags": ["タグ1", "タグ2"],
  "pageCount": 300,
  "coverImage": "/covers/example.jpg",  // 表紙画像パス
  "status": "read"           // "read" or "want_to_read"
}
```

表紙画像は `public/covers/` に配置する。

## 開発

```sh
npm install     # 依存パッケージのインストール
npm run dev     # 開発サーバー起動 (localhost:4321)
npm run build   # 本番ビルド（Astro + Pagefind）
npm run preview # ビルド結果のプレビュー
```

## プロジェクト構成

```
src/
├── data/books.json        # 全書籍データ
├── types/book.ts          # Book型定義
├── layouts/Layout.astro   # 共通レイアウト
├── components/            # UIコンポーネント
│   ├── BookCard.astro
│   ├── BookGrid.astro
│   ├── StarRating.astro
│   ├── GenreFilter.astro
│   ├── TagList.astro
│   └── StatsChart.astro
├── pages/
│   ├── index.astro        # トップページ（読了本一覧）
│   ├── want-to-read.astro # 読みたいリスト
│   ├── stats.astro        # 読書統計
│   └── books/[id].astro   # 本の詳細
└── styles/global.css
```
