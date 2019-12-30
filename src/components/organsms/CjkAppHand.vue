<template>
  <section class="section container">
    <div class="columns is-centered is-multiline">
      <div class="column is-one-third" v-for="(id, index) in hand" :key="id">
        <CjkCurry
          v-bind:id="id"
          v-bind:tag="$t(index + 1)"
          v-on:curry="isDrawModalActive = true; selectedId=$event"
        />
      </div>
    </div>
    <b-message type="is-warning" v-if="stopDrawFlg">{{ $t('refillNotice', { maxHand: maxHand }) }}</b-message>
    <div class="buttons is-centered">
      <button
        class="button is-medium is-cjknormal"
        v-bind:disabled="stopDrawFlg"
        @click="draw"
      >{{ $t('drawACard') }}</button>
      <router-link :to="{ path: 'result', query: { h: hand }}">
        <button class="button is-medium is-cjkstrong">{{ $t('showTheResult') }}</button>
      </router-link>
    </div>
    <b-modal :active.sync="isDrawModalActive" has-modal-card>
      <CjkDrawModal v-bind:id="selectedId" v-bind:title="$t(hand.indexOf(selectedId)+1)"/>
    </b-modal>
  </section>
</template>

<script>
import CjkCurry from '@/components/molecules/CjkCurry.vue'
import CjkDrawModal from '@/components/organsms/CjkDrawModal.vue'
import config from '@/constants/config.js'
import deck from '@/constants/curries.js'

export default {
  name: 'CjkAppHand',
  components: {
    CjkCurry,
    CjkDrawModal
  },
  data: function () {
    return {
      deck: [], // デッキ
      hand: [], // 手札
      selectedId: '',
      isDrawModalActive: false,
      stopDrawFlg: false
    }
  },
  created () {
    Object.assign(this.deck, deck)
    this.draw()
  },
  computed: {
    maxHand () {
      return config.maxHand
    }
  },
  methods: {
    draw: function () {
      const rand = Math.floor(Math.random() * this.deck.length)
      this.hand.push(this.deck[rand].id)
      this.deck.splice(rand, 1)
      // デッキの残り枚数が0になった時
      if (this.deck.length === 0) {
        this.stopDrawFlg = true
      }
      // 手札の最大枚数を超える時
      if (this.hand.length >= config.maxHand) {
        this.stopDrawFlg = true
      }
      // 2枚目以降カードを引く時
      if (this.hand.length !== 1) {
        this.selectedId = this.hand[this.hand.length - 1]
        this.isDrawModalActive = true
      }
    }
  }
}
</script>

<style scoped>
@import url(https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css);
</style>

<i18n>
{
  "ja": {
    "showTheResult": "結果を見る",
    "drawACard": "もう一枚引く",
    "refillNotice": "カレーのおかわりは{maxHand}杯までだよ",
    "1": "1杯目",
    "2": "2杯目",
    "3": "3杯目",
    "4": "4杯目",
    "5": "5杯目",
    "6": "6杯目"
  },
  "en": {
    "showTheResult": "Show the result",
    "drawACard": "Draw a Card",
    "refillNotice": "You can't eat more than {maxHand} curries",
    "1": "1st curry",
    "2": "2nd curry",
    "3": "3rd curry",
    "4": "4th curry",
    "5": "5th curry",
    "6": "6th curry"
  }
}
</i18n>
