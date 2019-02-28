<template>
  <section class="section">
    <CjkResult v-bind:total="total"/>
    <div class="columns is-centered is-multiline">
      <div class="column is-one-quarter" v-for="(curry, index) in curries" :key="index">
        <CjkCurryDetail v-bind:curry="curry"/>
      </div>
    </div>
    <div class="buttons is-centered">
      <router-link to="/">
        <button class="button is-medium is-primary">もう一度遊ぶ</button>
      </router-link>
    </div>
  </section>
</template>

<script>
import CjkCurryDetail from "@/components/molecules/CjkCurryDetail.vue";
import CjkResult from "@/components/molecules/CjkResult.vue";
import deck from "@/constants/curries.js";

export default {
  name: "CjkAppResult",
  components: {
    CjkCurryDetail,
    CjkResult
  },
  props: {
    hand: {
      type: Array
    }
  },
  data: function() {
    return {
      curries: [],
      total: 0
    };
  },
  created() {
    for (let id of this.hand) {
      this.curries.push(this.findCurry(id));
    }
    this.total = this.curries.reduce((p, c) => p + c.price, 0)
  },
  methods: {
    findCurry: function(id) {
      return deck.find(function(el) {
        return el.id === id;
      }, this);
    }
  }
};
</script>