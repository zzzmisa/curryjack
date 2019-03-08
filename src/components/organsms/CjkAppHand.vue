<template>
  <section class="section container">
    <div class="columns is-centered is-multiline">
      <div class="column is-one-third" v-for="(id, index) in hand" :key="id">
        <CjkCurry
          v-bind:id="id"
          v-bind:tag="(index + 1) + '杯目'"
          v-on:curry="isDrawModalActive = true; selectedId=$event"
        />
      </div>
    </div>
    <b-message type="is-warning" v-if="stopDrawFlg">カレーのおかわりは{{maxHand}}杯までだよ</b-message>
    <div class="buttons is-centered">
      <button
        class="button is-medium is-cjknormal"
        v-bind:disabled="stopDrawFlg"
        @click="draw"
      >もう一枚引く</button>
      <router-link :to="{ path: 'result', query: { h: hand }}">
        <button class="button is-medium is-cjkstrong">結果を見る</button>
      </router-link>
    </div>
    <b-modal :active.sync="isDrawModalActive" has-modal-card>
      <CjkDrawModal v-bind:id="selectedId" v-bind:title="hand.length + '杯目のカレー'"/>
    </b-modal>
  </section>
</template>

<script>
import CjkCurry from "@/components/molecules/CjkCurry.vue";
import CjkDrawModal from "@/components/organsms/CjkDrawModal.vue";
import config from "@/constants/config.js";
import deck from "@/constants/curries.js";

export default {
  name: "CjkAppHand",
  components: {
    CjkCurry,
    CjkDrawModal
  },
  data: function() {
    return {
      deck: [], //デッキ
      hand: [], //手札
      selectedId: "",
      isDrawModalActive: false,
      maxHand: config.maxHand,
      stopDrawFlg: false
    };
  },
  created() {
    Object.assign(this.deck, deck);
    this.draw();
  },
  methods: {
    draw: function() {
      const rand = Math.floor(Math.random() * this.deck.length);
      this.hand.push(this.deck[rand].id);
      this.deck.splice(rand, 1);
      //デッキの残り枚数が0になった時
      if (this.deck.length === 0) {
        this.stopDrawFlg = true;
      }
      //手札の最大枚数を超える時
      if (this.hand.length >= config.maxHand) {
        this.stopDrawFlg = true;
      }
      //2枚目以降カードを引く時
      if (this.hand.length != 1) {
        this.selectedId = this.hand[this.hand.length - 1];
        this.isDrawModalActive = true;
      }
    }
  }
};
</script>

<style scoped>
@import url(https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css);
</style>