<template>
  <div>結果をシェアする
    <div class="buttons is-centered">
      <a class="button is-primary" v-bind:href="'http://twitter.com/intent/tweet?url='+url">
        <span class="icon">
          <i class="fab fa-twitter"></i>
        </span>
        <span>Twitter</span>
      </a>
      <a class="button is-primary" v-bind:href="'http://www.facebook.com/sharer.php?u='+url">
        <span class="icon">
          <i class="fab fa-facebook"></i>
        </span>
        <span>Facebook</span>
      </a>
    </div>
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
  }
};
</script>

<style scoped>
</style>

