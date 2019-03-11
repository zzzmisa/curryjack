<template>
  <div class="modal-card">
    <header class="modal-card-head has-background-cjklight">
      <p class="modal-card-title">カレージャックの遊び方</p>
    </header>
    <section class="modal-card-body">
      <div class="content has-text-left">
        <h3>基本ルール</h3>
        <p>
          カレーの写真を見て値段を推測します。
          <br>
          合計値が2,100円に近づくように、カレーの写真を引きます。<br>
          カレーの写真は{{maxHand}}枚以下の範囲内で、好きなだけ引くことができます。
          <br>ただし2,100円を超えたら無条件にアウト（ブラックジャックで言うBust）負けです。
          <br>
        </p>
        <h3>2人以上で遊ぶ場合</h3>
        それぞれのスマートフォンなどで、カレージャックを開きます。
        <br>お互いのカードは見えるようにしておきます。
        <br>カレーの写真をもう一枚引く（ブラックジャックで言うHit）か、
        それ以上引かないで勝負をする（ブラックジャックで言うStand）かを順番に選択していきます。
        <br>新しく引いたカードは皆に見せます。
        <br>全員がStandを選ぶまで順番を回します。
        <br>最後に全員で一斉に結果を見ます。
        <br>2,100円に最も近い人が勝ちです！
      </div>
    </section>
    <footer class="modal-card-foot has-background-cjklight">
      <button class="button is-cjknormal" @click="$parent.close()">OK</button>
    </footer>
  </div>
</template>

<script>
import config from "@/constants/config.js";

export default {
  name: "CjkGuideModal",
  data: function() {
    return {
      maxHand: config.maxHand
    };
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c);

.modal-card-head {
  font-family: "M PLUS Rounded 1c", sans-serif;
}

.modal-card-foot {
  justify-content: center;
}
</style>
