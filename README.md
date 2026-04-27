# 園児台帳アプリ（nursery-manager-app）

保育園・幼稚園で園児情報を管理するアプリ
クラスごとに園児を管理し、一覧・登録・編集・削除が可能

## ■ 機能

- クラスごとの表示
- 園児一覧表示（予定）
- 園児登録（予定）
- 園児編集（予定）
- 園児削除（予定）
- ログイン画面 (予定)
- お知らせ (予定)
- スケジュール (予定)
- 備品管理 (予定)

## ■ 技術スタック

### フロントエンド

- React（Vite）
- TypeScript

### バックエンド

- Laravel（PHP）（予定）

### DB

- MySQL（予定）

## ■ ディレクトリ構成

```
nursery-manager-app/
├── frontend/
├── backend/
├── .gitignore
└── README.md
```

## ■ 実行方法

### backend

```
cd .\backend\
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### frontend

```
cd .\frontend\
npm install
npm run dev
```

## ■ memo

- フロントとバックエンドを分離した構成で作成(予定)
