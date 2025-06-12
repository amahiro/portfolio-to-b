# プロジェクト構造

このプロジェクトは、Next.jsを使用した最新のWebアプリケーションです。以下のディレクトリ構造に従って、コードを整理しています。

## ディレクトリ構造

```
src/
├── app/                    # アプリケーションのメインディレクトリ
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── globals.css        # グローバルスタイル
│   ├── about/             # Aboutページ (/about)
│   │   └── page.tsx
│   ├── blog/              # ブログ一覧ページ (/blog)
│   │   ├── page.tsx
│   │   └── [slug]/        # ブログ記事詳細ページ (/blog/[slug])
│   │       └── page.tsx
│   └── api/               # APIルート (/api)
│       └── route.ts
├── components/            # 再利用可能なコンポーネント
│   ├── ui/               # 基本的なUIコンポーネント
│   │   └── button.tsx    # ボタンなどの基本的なUI要素
│   ├── features/         # 機能別のコンポーネント
│   │   └── ...          # 特定の機能に関連するコンポーネント
│   ├── layouts/          # レイアウト関連のコンポーネント
│   │   └── ...          # ヘッダー、フッター、サイドバーなど
│   ├── common/           # 共通のコンポーネント
│   │   └── ...          # 複数の場所で使用される共通コンポーネント
│   ├── forms/            # フォーム関連のコンポーネント
│   │   └── ...          # 入力フォーム、バリデーションなど
│   └── content/          # コンテンツ関連のコンポーネント
│       └── ...          # ブログ記事、カードなどのコンテンツ表示用
├── lib/                  # ユーティリティ関数やヘルパー
│   └── utils.ts         # 汎用的なユーティリティ関数
├── hooks/                # カスタムフック
│   └── ...              # React カスタムフック
├── types/                # 型定義
│   └── ...              # TypeScript の型定義ファイル
└── constants/            # 定数
    └── ...              # アプリケーション全体で使用する定数

```

## ディレクトリの説明

### `app/`
Next.js 13以降のApp Routerを使用したルーティング構造です。各ディレクトリはURLパスに対応しています。

### `components/`
再利用可能なReactコンポーネントを格納します。用途別に以下のサブディレクトリに分類されています：
- `ui/`: ボタン、入力フィールドなどの基本的なUI要素
- `features/`: 特定の機能に関連するコンポーネント
- `layouts/`: ページレイアウトに関連するコンポーネント
- `common/`: アプリケーション全体で使用される共通コンポーネント
- `forms/`: フォーム関連のコンポーネント
- `content/`: コンテンツ表示用のコンポーネント

### `lib/`
ユーティリティ関数、APIクライアント、ヘルパー関数など、アプリケーション全体で使用される汎用的な関数を格納します。

### `hooks/`
Reactのカスタムフックを格納します。コンポーネント間で共有される状態やロジックをここで管理します。

### `types/`
TypeScriptの型定義ファイルを格納します。インターフェース、型エイリアス、列挙型などを定義します。

### `constants/`
アプリケーション全体で使用される定数を格納します。設定値、固定テキスト、環境変数などを管理します。

## 開発ガイドライン

1. 新しいコンポーネントを作成する際は、その用途に応じて適切なディレクトリに配置してください。
2. コンポーネントは可能な限り再利用可能な形で設計してください。
3. 型定義は`types/`ディレクトリで一元管理し、必要に応じて適切なモジュールに分割してください。
4. 定数は`constants/`ディレクトリで管理し、ハードコーディングを避けてください。
5. ユーティリティ関数は`lib/`ディレクトリに配置し、適切な名前空間で管理してください。

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
