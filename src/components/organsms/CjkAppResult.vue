<template>
  <div>
    <CjkResult v-bind:total="total"/>
    <section class="section">
      <div class="columns is-centered is-multiline">
        <div class="column is-one-third" v-for="(curry, index) in curries" :key="index">
          <template v-if="total <= cjscore">
            <CjkCurryDetail v-bind:curry="curry" v-bind:tag="(index + 1) + '杯目'"/>
          </template>
          <template v-else>
            <CjkCurry v-bind:id="curry.id" v-bind:tag="(index + 1) + '杯目'"/>
          </template>
        </div>
      </div>
      <div class="buttons is-centered">
        <router-link to="/">
          <button class="button is-medium is-cjknormal">もう一度遊ぶ</button>
        </router-link>
      </div>
      <CjkShare/>
    </section>
  </div>
</template>

<script>
import CjkCurryDetail from "@/components/molecules/CjkCurryDetail.vue";
import CjkCurry from "@/components/molecules/CjkCurry.vue";
import CjkResult from "@/components/molecules/CjkResult.vue";
import CjkShare from "@/components/molecules/CjkShare.vue";
import deck from "@/constants/curries.js";
import config from "@/constants/config.js";

export default {
  name: "CjkAppResult",
  components: {
    CjkCurryDetail,
    CjkCurry,
    CjkResult,
    CjkShare
  },
  props: {
    hand: {
      type: Array
    }
  },
  data: function() {
    return {
      curries: [],
      total: 0,
      cjscore: config.cjscore
    };
  },
  created() {
    for (let id of this.hand) {
      this.curries.push(this.findCurry(id));
    }
    this.total = this.curries.reduce((p, c) => p + c.price, 0);
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

