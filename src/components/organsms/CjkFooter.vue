<template>
  <footer class="footer">
    <div class="container has-text-left">
      <div class="columns">
        <div class="column is-7">
          <div class="content">
            <h4 class="title is-5">
              <strong>カレージャック</strong>とは
            </h4>
            <p>
              <a href="https://www.facebook.com/opendatacurry/" target="_blank">#オープンデータカレー</a> のカレーデータを使ったゲームアプリです。
              <br>気に入ったらシェア・Githubのスターをお願いします😃
            </p>
          </div>
          <CjkShare/>
          <strong>
            Made by
            <a href="https://blog.zzzmisa.com" target="_blank">zzzmisa</a>
          </strong>
        </div>
        <div class="column">
          <aside class="menu">
            <ul class="menu-list">
              <li>
                <a href="https://blog.zzzmisa.com/privacy" target="_blank">プライバシーポリシー</a>
              </li>
              <li>
                <router-link to="faq">Q&A</router-link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CjkShare from "@/components/molecules/CjkShare.vue";
import config from "@/constants/config.js";

export default {
  name: "CjkFooter",
  components: {
    CjkShare
  },
};
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);

.footer {
  margin-top: 3rem;
}
</style>