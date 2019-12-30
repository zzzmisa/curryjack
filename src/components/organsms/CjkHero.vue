<template>
  <section class="section hero">
    <router-link to="/">
      <h1 class="title">
        <img :alt="$t('curryjack')" :src="logoUrl[$i18n.locale]">
      </h1>
    </router-link>
    <h2 class="subtitle">{{ $t('catchphrase') }}
      <b-icon v-if="$i18n.locale=='ja'"
        pack="fa"
        icon="question-circle"
        type="is-cjknormal"
        @click.native="isGuideModalActive = true"
      ></b-icon>
    </h2>
    <b-modal :active.sync="isGuideModalActive" has-modal-card>
      <CjkGuideModal/>
    </b-modal>
  </section>
</template>

<script>
import CjkGuideModal from '@/components/organsms/CjkGuideModal.vue'
import LogoJa from '@/assets/logo.png'
import LogoEn from '@/assets/logo_en.png'

export default {
  name: 'CjkHero',
  components: {
    CjkGuideModal
  },
  data () {
    return {
      isGuideModalActive: false
    }
  },
  computed: {
    logoUrl: function () {
      return {
        ja: LogoJa,
        en: LogoEn
      }
    }
  }
}
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);

img {
  width: 500px;
}

</style>

<i18n>
{
  "ja": {
    "catchphrase": "2,100円に近づけろ！超えたらアウト！",
    "curryjack": "カレージャック"
  },
  "en": {
    "catchphrase": "Get closer to 2,100 yen! Don't exceed it!",
    "curryjack": "Curryjack"
  }
}
</i18n>
