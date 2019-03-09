<template>
  <div class="buttons">
    <a
      :href="twitter"
      title="Twitterでシェア"
      class="button is-cjktwitter"
      target="_blank"
      rel="nofollow"
    >
      <b-icon pack="fab" icon="twitter"></b-icon>
    </a>
    <a
      :href="facebook"
      title="Facebookでシェア"
      class="button is-cjkfacebook"
      target="_blank"
      rel="nofollow"
    >
      <b-icon pack="fab" icon="facebook"></b-icon>
    </a>
    <a :href="line" title="Lineでシェア" class="button is-cjkline" target="_blank" rel="nofollow">
      <b-icon pack="fab" icon="line"></b-icon>
    </a>
    <a href="https://github.com/zzzmisa/curryjack" title="Github" class="button" target="_blank" rel="nofollow">
      <b-icon pack="fab" icon="github"></b-icon>
      <span>Star</span>
    </a>
  </div>
</template>

<script>
import config from "@/constants/config.js";

export default {
  name: "CjkShare",
  data: function() {
    return {
      url: config.url
    };
  },
  computed: {
    msg: function() {},
    twitter: function() {
      const url = encodeURIComponent(config.url);
      const text = encodeURIComponent("カレージャックで遊ぼう！");
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
      const url = encodeURIComponent(config.url);
      const hashtag = encodeURIComponent("カレージャック");
      const fburl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
      return fburl;
    },
    line: function() {
      const url = encodeURIComponent(config.url);
      const text = encodeURIComponent("カレージャックで遊ぼう！");
      const lineurl = "http://line.me/R/msg/text/?" + text + url;
      return lineurl;
    }
  }
};
</script>