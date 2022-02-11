<template>
  <div class="buttons">
    <a
      :href="twitter"
      :title="$t('shareWithTwitter')"
      class="button is-cjktwitter"
      target="_blank"
      rel="nofollow"
    >
      <b-icon pack="fab" icon="twitter"></b-icon>
    </a>
    <a
      :href="facebook"
      :title="$t('shareWithFacebook')"
      class="button is-cjkfacebook"
      target="_blank"
      rel="nofollow"
    >
      <b-icon pack="fab" icon="facebook"></b-icon>
    </a>
    <a
      :href="line"
      :title="$t('shareWithLine')"
      class="button is-cjkline"
      target="_blank"
      rel="nofollow"
    >
      <b-icon pack="fab" icon="line"></b-icon>
    </a>
    <a
      href="https://github.com/zzzmisa/curryjack"
      title="Github"
      class="button"
      target="_blank"
      rel="nofollow"
    >
      <b-icon pack="fab" icon="github"></b-icon>
      <span>Star</span>
    </a>
  </div>
</template>

<script>
import config from '@/constants/config.js'

export default {
  name: 'CjkShare',
  computed: {
    url: function () {
      if (this.$i18n.locale === 'ja') return config.url
      else return config.url + '/en'
    },
    twitter: function () {
      const url = encodeURIComponent(this.url)
      const text = encodeURIComponent(this.$t('letsPlayCurryjack'))
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
      const url = encodeURIComponent(this.url)
      const fburl = 'https://www.facebook.com/sharer/sharer.php?u=' + url
      return fburl
    },
    line: function () {
      const url = encodeURIComponent(this.url)
      const text = encodeURIComponent(this.$t('letsPlayCurryjack'))
      const tag = encodeURIComponent('#' + this.$t('tag'))
      const lineurl = 'http://line.me/R/msg/text/?' + text + ' ' + url + ' ' + tag
      return lineurl
    }
  }
}
</script>

<i18n>
{
  "ja": {
    "letsPlayCurryjack": "カレージャックで遊ぼう！",
    "tag": "カレージャック",
    "shareWithTwitter": "Twitterでシェア",
    "shareWithFacebook": "Facebookでシェア",
    "shareWithLine": "Lineでシェア"
  },
  "en": {
    "letsPlayCurryjack": "Let's play Curryjack!",
    "tag": "Curryjack",
    "shareWithTwitter": "Share with Twitter",
    "shareWithFacebook": "Share with Facebook",
    "shareWithLine": "SHare with Line"
  }
}
</i18n>
