<template>
  <div class="modal-card">
    <header class="modal-card-head has-background-cjklight">
      <p class="modal-card-title">カレージャックの遊び方</p>
    </header>
    <section class="modal-card-body">
      <div class="content has-text-left">
        <h2>1人で遊ぶ場合</h2>2,100円に近づけます。超えたらアウトです。
        <h2>2人以上で遊ぶ場合</h2>それぞれのスマートフォンなどで、カレージャックを開きます。
        <br>お互いのカードは見えるようにしておきます。
        <br>カレーカードをもう一枚引く（Hit）か、
        それ以上カードを引かないで勝負をする（Stand）か順番に選択していきます。
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
export default {
  name: "CjkGuideModal"
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c);

.modal-card-head{
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>
