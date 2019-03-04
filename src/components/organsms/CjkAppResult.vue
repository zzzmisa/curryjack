<template>
  <section class="section">
    <CjkResult v-bind:total="total"/>
    <div class="columns is-centered is-multiline" v-if="total <= cjscore">
      <div class="column is-one-third" v-for="(curry, index) in curries" :key="index">
        <CjkCurryDetail v-bind:curry="curry" v-bind:tag="(index + 1) + '杯目'"/>
      </div>
    </div>
    <div class="buttons is-centered">
      <router-link to="/">
        <button class="button is-medium is-cjknormal">もう一度遊ぶ</button>
      </router-link>
    </div>
    <div>結果をシェアする</div>
    <div class="buttons is-centered">

      <a class="button is-primary" v-bind:href="'http://twitter.com/intent/tweet?url='+url">
        <span class="icon">
          <i class="fab fa-twitter"></i>
        </span>
        <span>Twitter</span>
      </a>
      <a class="button is-primary" v-bind:href="'http://www.facebook.com/sharer.php?u='+url">
        <span class="icon">
          <i class="fab fa-facebook"></i>
        </span>
        <span>Facebook</span>
      </a>
    </div>
  </section>
</template>

<script>
import CjkCurryDetail from "@/components/molecules/CjkCurryDetail.vue";
import CjkResult from "@/components/molecules/CjkResult.vue";
import deck from "@/constants/curries.js";
import config from "@/constants/config.js";

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
      total: 0,
      cjscore: config.cjscore,
      url: config.url
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

