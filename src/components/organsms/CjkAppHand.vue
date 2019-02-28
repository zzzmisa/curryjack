<template>
  <section class="section">
    <div class="columns is-centered is-multiline">
      <div class="column is-one-quarter" v-for="id in hand" :key="id">
        <CjkCurry v-bind:id="id"/>
      </div>
      <div class="column is-one-quarter">
        <div class="buttons">
          <button class="button is-medium is-primary" @click="addCurry">もう一枚引く</button>
          <router-link :to="{ path: 'result', query: { h: hand }}">
            <button class="button is-medium is-primary">結果を見る</button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CjkCurry from "@/components/molecules/CjkCurry.vue";
import deck from "@/assets/curries.js";

export default {
  name: "CjkAppHand",
  components: {
    CjkCurry
  },
  data: function() {
    return {
      deck: [],
      hand: [] //手札
    };
  },
  created() {
    Object.assign(this.deck, deck);
    this.addCurry();
  },
  methods: {
    addCurry: function() {
      const rand = Math.floor(Math.random() * this.deck.length);
      this.hand.push(this.deck[rand].id);
      this.deck.splice(rand, 1);
    }
  }
};
</script>