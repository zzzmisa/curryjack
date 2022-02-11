# Developing Curryjack

## コマンド

### セットアップ

依存モジュールがインストールされます。

```
npm install
```

### 開発サーバー起動

ブラウザで`localhost:8080`にアクセスすると、アプリの画面が表示されます。

```
npm run serve
npm run serve-en
```

### ビルド

ビルド結果は dist フォルダに格納されます。

```
npm run build
npm run build-en
```

### Lints 実行

可能なものは自動で修正までしてくれます。

```
npm run lint
```

### 単体テスト実行

```
npm run test:unit
```
