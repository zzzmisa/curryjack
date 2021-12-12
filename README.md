# カレージャック Curryjack

カレージャックは、[#オープンデータカレー](https://www.facebook.com/opendatacurry/) を使ったゲームアプリです。  
Curryjack is a game app using Open Data Curry.

🍛 [日本語で遊んでみる](https://curryjack.zzzmisa.com)   
🍛 [Play in English](https://curryjack.zzzmisa.com/en/#/)

![screenshot](./public/screenshot.png)

## 動作環境
ツールはすべてブラウザ上で動きます。  
以下のブラウザの最新バージョンで動作確認しています。
- パソコン：Google Chrome、Safari（いずれもOSX環境にて確認）
- スマートフォン：iOS Safari

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
```

### ビルド
ビルド結果はdistフォルダに格納されます。
```
npm run build
```

### Lints実行
可能なものは自動で修正までしてくれます。
```
npm run lint
```

### 単体テスト実行
```
npm run test:unit
```

## ライセンス
MIT
