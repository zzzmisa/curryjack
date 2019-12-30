<template>
  <div>
    <section class="section">
      <CjkResult v-bind:total="total"/>
    </section>
    <section class="section container">
      <div class="columns is-centered is-multiline">
        <div class="column is-one-third" v-for="(curry, index) in curries" :key="index">
          <CjkCurry
            v-bind:id="curry.id"
            v-bind:tag="$t(index + 1)"
            v-on:curry="isDrawModalActive = true; selectedId=$event"
          />
          <template v-if="total <= cjscore">
            <CjkCurryDetail v-bind:curry="curry" v-bind:tag="$t(index + 1)"/>
          </template>
        </div>
      </div>
      <b-message type="is-warning" v-if="total > cjscore">{{ $t('bustMessage') }}</b-message>
      <div class="buttons is-centered">
        <router-link to="/">
          <button class="button is-medium is-cjknormal">{{ $t('replay') }}</button>
        </router-link>
      </div>
      <b-modal :active.sync="isDrawModalActive" has-modal-card>
        <CjkDrawModal v-bind:id="selectedId" v-bind:title="$t(hand.indexOf(selectedId)+1)"/>
      </b-modal>
    </section>
    <section class="section">
      <CjkResultShare v-bind:total="total"/>
    </section>
  </div>
</template>

<script>
import CjkCurryDetail from '@/components/molecules/CjkCurryDetail.vue'
import CjkCurry from '@/components/molecules/CjkCurry.vue'
import CjkDrawModal from '@/components/organsms/CjkDrawModal.vue'
import CjkResult from '@/components/molecules/CjkResult.vue'
import CjkResultShare from '@/components/molecules/CjkResultShare.vue'
import deck from '@/constants/curries.js'
import config from '@/constants/config.js'

function findCurry (id) {
  return deck.find(function (el) {
    return el.id === id
  }, this)
}

export default {
  name: 'CjkAppResult',
  components: {
    CjkCurryDetail,
    CjkCurry,
    CjkDrawModal,
    CjkResult,
    CjkResultShare
  },
  props: {
    hand: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      curries: [],
      selectedId: '',
      isDrawModalActive: false,
      cjscore: config.cjscore
    }
  },
  created () {
    for (let id of this.hand) {
      if (findCurry(id) === undefined) {
        this.$router.push('/404')
      }
      this.curries.push(findCurry(id))
    }
  },
  computed: {
    total () {
      return this.curries.reduce((p, c) => p + c.price, 0)
    }
  }
}
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);
</style>

<i18n>
{
  "ja": {
    "replay": "最初から遊ぶ",
    "bustMessage": "アウトだとカレーの詳細は表示されないよ。",
    "1": "1杯目",
    "2": "2杯目",
    "3": "3杯目",
    "4": "4杯目",
    "5": "5杯目",
    "6": "6杯目"
  },
  "en": {
    "replay": "Replay",
    "bustMessage": "If you bust, the curry details will not be displayed.",
    "1": "1st curry",
    "2": "2nd curry",
    "3": "3rd curry",
    "4": "4th curry",
    "5": "5th curry",
    "6": "6th curry"
  }
}
</i18n>
