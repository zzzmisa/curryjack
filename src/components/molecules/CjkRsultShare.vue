<template>
  <div>
    <p class="is-size-5 cjkmsgshare">結果をシェアする</p>
    <div class="buttons is-centered">
      <a class="button is-cjktwitter" :href="twitter" title="Twitterでシェア" target="_blank">
        <span class="icon">
          <i class="fab fa-twitter"></i>
        </span>
        <span>Twitter</span>
      </a>
      <a class="button is-cjkfacebook" :href="facebook" title="Facebookでシェア" target="_blank">
        <span class="icon">
          <i class="fab fa-facebook"></i>
        </span>
        <span>Facebook</span>
      </a>
      <a class="button is-cjkline" :href="line" title="LINEでシェア" target="_blank">
        <span class="icon">
          <i class="fab fa-line"></i>
        </span>
        <span>Line</span>
      </a>
    </div>
  </div>
</template>

<script>
import config from "@/constants/config.js";

function msg(total) {
  if (total === config.cjscore) {
    return "パーフェクト！！";
  } else if (total > config.cjscor) {
    return "アウト！！";
  } else {
    return "あと少し！！";
  }
}

export default {
  name: "CjkRsultShare",
  props: {
    total: {
      type: Number
    }
  },
  data: function() {
    return {
      url: config.url
    };
  },
  computed: {
    msg: function() {},
    twitter: function() {
      const url = encodeURIComponent(config.url + "/#" + this.$route.fullPath);
      const text = encodeURIComponent(
        this.total.toLocaleString() + "円 " + msg(this.total)
      );
      const hashtags = encodeURIComponent("カレージャック");
      const twurl =
        "https://twitter.com/intent/tweet?text=" +
        text +
        "&hashtags=" +
        hashtags +
        "&url=" +
        url;
      return twurl;
    },
    facebook: function() {
      const url = encodeURIComponent(config.url + "/#" + this.$route.fullPath);
      const fburl =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        url +
        "&t=" +
        msg(this.total);
      return fburl;
    },
    line: function() {
      const url = encodeURIComponent(config.url + "/#" + this.$route.fullPath);
      const text = encodeURIComponent(
        this.total.toLocaleString() +
          "円 " +
          msg(this.total) +
          " カレージャック "
      );
      const lineurl = "http://line.me/R/msg/text/?" + text + url;
      return lineurl;
    }
  }
};
</script>

<style scoped>
.cjkmsgshare {
  margin-bottom: 1.5rem;
}
</style>

