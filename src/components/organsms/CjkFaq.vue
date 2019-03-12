<template>
  <section class="section container">
    <div class="content has-text-left">
      <dl>
        <dt>このサービスは？</dt>
        <dd>
          <a href="https://www.facebook.com/opendatacurry/" target="_blank">#オープンデータカレー</a>のオープンデータを使ったゲームアプリです。
          <br>個人が趣味の範囲で開発・運営しています。
          <br>カレージャックというタイトル、2,100円という目標金額は、トランプゲームのブラックジャックからです。
          <br>
        </dd>
        <dt>カレーのデータはどこから来ているの？</dt>
        <dd>
          <a href="https://www.facebook.com/opendatacurry/" target="_blank">#オープンデータカレー</a>のデータを使っています。
          <br>メニュー名や値段はオープンデータカレーのデータを元に入力しています。
        </dd>
        <dt>カレーのデータを追加してほしい</dt>
        <dd>
          <a href="https://www.facebook.com/opendatacurry/" target="_blank">#オープンデータカレー</a>に投稿すれば、そのうち追加されるかもしれません。
          <br>プログラムがわかる方はプルリクを送っていただくと早いかもしれません。
        </dd>
        <dt>不具合を見つけた</dt>
        <dd>
           不具合の内容、不具合が起きたURL、及び閲覧環境を<a href="https://docs.google.com/forms/d/e/1FAIpQLSdmZDfWbJXaHeG3EDmlgfXZXdfZw15Ot0gFwtpNbs3yIhTuJA/viewform" target="_blank">お問い合わせ</a>から教えてください。<br>
           （個人が趣味の範囲で開発していますので、必ず対応できる訳ではありません）。
        </dd>
        <dt>動作環境は？</dt>
        <dd>以下のブラウザの最新バージョンで動作確認しています。
          <br>- パソコン：Google Chrome、Safari（いずれもOSX環境にて確認）
          <br>- スマートフォン：iOS Safari
        </dd>
      </dl>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CjkFaq'
}
</script>

<style scoped>
dt {
  padding: 8px;
  font-weight: bold;
}
dt:before {
  content: "Q.";
  color: #ed1c24;
  font-weight: bold;
  margin-right: 8px;
}
dd {
  text-indent: -24px;
  margin-bottom: 1rem;
}
dd:before {
  content: "A.";
  color: #0000ff;

  font-weight: bold;
  margin-right: 8px;
}
</style>
