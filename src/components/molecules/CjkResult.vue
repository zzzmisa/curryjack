<template>
  <div>
    <div v-if="total === cjscore">
      <img alt="パーフェクト" src="@/assets/perfect.png">
      <p class="has-text-weight-bold is-size-1 title">ピッタリ！！</p>
      <p class="is-size-3">合計{{ cjscore.toLocaleString() }}円</p>
      <p class="is-size-3">素晴らしい！！</p>
    </div>
    <div v-else-if="total > cjscore">
      <img alt="アウト" src="@/assets/out.png">
      <p class="has-text-weight-bold is-size-1 title">アウト！！</p>
      <p class="is-size-3">合計{{ total.toLocaleString() }}円</p>
      <p
        class="is-size-5"
      >{{ cjscore.toLocaleString() }}円を{{ (total-cjscore).toLocaleString() }}円オーバー</p>
    </div>
    <div v-else-if="total > cjscore-1000">
      <img alt="more" src="@/assets/more.png">
      <p class="has-text-weight-bold is-size-1 title">もう少し！！</p>
      <p class="is-size-3">合計{{total.toLocaleString()}}円</p>
      <p
        class="is-size-3"
      >{{ cjscore.toLocaleString() }}円まであと{{ (cjscore - total).toLocaleString() }}円</p>
    </div>
    <div v-else>
      <img alt="more" src="@/assets/hungry.png">
      <p class="has-text-weight-bold is-size-1 title">まだまだ！！</p>
      <p class="is-size-3">合計{{total.toLocaleString()}}円</p>
      <p
        class="is-size-3"
      >{{ cjscore.toLocaleString() }}円まであと{{ (cjscore - total).toLocaleString() }}円</p>
    </div>
  </div>
</template>

<script>
import config from "@/constants/config.js";

export default {
  name: "CjkResult",

  props: {
    total: {
      type: Number
    }
  },
  data: function() {
    return {
      cjscore: config.cjscore
    };
  }
};
</script>
