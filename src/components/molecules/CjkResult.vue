<template>
  <div class="box">
    <div v-if="total == cjscore">
      <p>ピッタリ！！
        <br>合計{{ cjscore.toLocaleString() }}円
        <br>素晴らしい！！
      </p>
    </div>
    <div v-else-if="total > cjscore">
      <p>アウト！！
        <br>
        合計{{ total.toLocaleString() }}円
        <br>
        {{ cjscore.toLocaleString() }}円を{{ (total-cjscore).toLocaleString() }}円オーバー
      </p>
    </div>
    <div v-else>
      <p>
        合計{{total.toLocaleString()}}円
        <br>
        {{ cjscore.toLocaleString() }}円まであと{{ (cjscore - total).toLocaleString() }}円
      </p>
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