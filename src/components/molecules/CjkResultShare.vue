<template>
  <div>
    <p class="is-size-5 cjkmsgshare">{{ $t('shareTheResult') }}</p>
    <div class="buttons is-centered">
      <a class="button is-cjktwitter" :href="twitter" :title="$t('shareWithTwitter')" target="_blank">
        <span class="icon">
          <i class="fab fa-twitter"></i>
        </span>
        <span>Twitter</span>
      </a>
      <a class="button is-cjkfacebook" :href="facebook" :title="$t('shareWithFacebook')" target="_blank">
        <span class="icon">
          <i class="fab fa-facebook"></i>
        </span>
        <span>Facebook</span>
      </a>
      <a class="button is-cjkline" :href="line" :title="$t('shareWithLine')" target="_blank">
        <span class="icon">
          <i class="fab fa-line"></i>
        </span>
        <span>Line</span>
      </a>
    </div>
  </div>
</template>

<script>
import config from '@/constants/config.js'

export default {
  name: 'CjkResultShare',
  props: {
    total: {
      type: Number
    }
  },
  methods: {
    $_msg: function (total) {
      if (total === config.cjscore) {
        return this.$t('perfect')
      } else if (total > config.cjscor) {
        return this.$t('bust')
      } else {
        return this.$t('bitMore')
      }
    }
  },
  computed: {
    url: function () {
      if (this.$i18n.locale === 'ja') return config.url
      else return config.url + '/en'
    },
    twitter: function () {
      const url = encodeURIComponent(this.url + '/#' + this.$route.fullPath)
      const text = encodeURIComponent(
        this.total.toLocaleString() + this.$t('yen') + '! ' + this.$_msg(this.total)
      )
      const tag = encodeURIComponent(this.$t('tag'))
      const twurl =
        'https://twitter.com/intent/tweet?text=' +
        text +
        '&hashtags=' +
        tag +
        '&url=' +
        url
      return twurl
    },
    facebook: function () {
      const url = encodeURIComponent(this.url + '/#' + this.$route.fullPath)
      const fburl =
        'https://www.facebook.com/sharer/sharer.php?u=' +
        url +
        '&t=' +
        this.$_msg(this.total)
      return fburl
    },
    line: function () {
      const url = encodeURIComponent(this.url + '/#' + this.$route.fullPath)
      const text = encodeURIComponent(
        this.total.toLocaleString() +
          this.$t('yen') + '! ' +
          this.$_msg(this.total))
      const tag = encodeURIComponent('#' + this.$t('tag'))
      const lineurl = 'http://line.me/R/msg/text/?' + text + ' ' + url + ' ' + tag
      return lineurl
    }
  }
}
</script>

<style scoped>
.cjkmsgshare {
  margin-bottom: 1.5rem;
}
</style>

<i18n>
{
  "ja": {
    "perfect": "パーフェクト！",
    "bust": "アウト！",
    "bitMore": "もう少し！",
    "shareTheResult": "結果をシェアする",
    "shareWithTwitter": "Twitterでシェア",
    "shareWithFacebook": "Facebookでシェア",
    "shareWithLine": "Lineでシェア",
    "yen": "円",
    "tag": "カレージャック"
  },
  "en": {
    "perfect": "Perfect!",
    "bust": "Bust!",
    "bitMore": "Just a little bit more!",
    "shareTheResult": "Share the result",
    "shareWithTwitter": "Share with Twitter",
    "shareWithFacebook": "Share with Facebook",
    "shareWithLine": "SHare with Line",
    "yen": " yen",
    "tag": "Curryjack"
  }
}
</i18n>
