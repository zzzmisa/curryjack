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

export default {
  name: "CjkAppHand",
  components: {
    CjkCurry
  },
  data: function() {
    return {
      allCurries: ["1", "2", "3", "4", "5"],
      hand: [] //手札
    };
  },
  created() {
    this.addCurry();
  },
  methods: {
    addCurry: function() {
      const rand = Math.floor(Math.random() * this.allCurries.length);
      this.hand.push(this.allCurries[rand]);
      this.allCurries.splice(rand, 1);
    }
  }
};
</script>