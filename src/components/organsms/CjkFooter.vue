<template>
  <footer class="footer">
    <div class="container has-text-left">
      <div class="columns">
        <div class="column is-7">
          <div class="content">
            <h4 class="title is-5">
              <strong>{{ $t('whatIsCurryjack') }}</strong>
            </h4>
            <p>
              <span v-html="$t('curryjackIs')"></span>
              <br>{{ $t('pleaseShareAndStar') }}
            </p>
          </div>
          <CjkShare/>
          <strong>
            Made by
            <a href="https://zzzmisa.com" target="_blank">zzzmisa</a>
          </strong>
        </div>
        <div class="column">
          <aside class="menu">
            <ul class="menu-list">
              <li>
                <a href="https://blog.zzzmisa.com/notice" target="_blank">{{ $t('notice') }}</a>
              </li>
              <li>
                <a href="https://blog.zzzmisa.com/privacy" target="_blank">{{ $t('privacyPolicy') }}</a>
              </li>
              <li v-if="$i18n.locale=='ja'">
                <router-link to="faq">{{ $t('qanda') }}</router-link>
              </li>
              <li>
                <a :href="$t('langUrl')">{{ $t('footerLang') }}</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CjkShare from '@/components/molecules/CjkShare.vue'

export default {
  name: 'CjkFooter',
  components: {
    CjkShare
  }
}
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);

.footer {
  margin-top: 3rem;
}
</style>

<i18n>
{
  "ja": {
    "notice": "免責事項",
    "privacyPolicy": "プライバシーポリシー",
    "qanda": "Q&A",
    "langUrl": "https://curryjack.zzzmisa.com/en",
    "footerLang": "English",
    "whatIsCurryjack": "カレージャックとは",
    "curryjackIs": "<a href='https://www.facebook.com/opendatacurry/' target='_blank'>#オープンデータカレー</a> を使ったゲームアプリです。",
    "pleaseShareAndStar": "気に入ったらシェア・GitHubのスターをお願いします😺"
  },
  "en": {
    "notice": "Notice",
    "privacyPolicy": "Privacy Policy",
    "qanda": "Q&A",
    "langUrl": "https://curryjack.zzzmisa.com/",
    "footerLang": "日本語",
    "whatIsCurryjack": "What is Curryjack?",
    "curryjackIs": "Curryjack is a game app using <a href='https://www.facebook.com/opendatacurry/' target='_blank'>Open Data Curry</a>.",
    "pleaseShareAndStar": "Please share this app and click the GitHub Star below 😺"
  }
}
</i18n>
