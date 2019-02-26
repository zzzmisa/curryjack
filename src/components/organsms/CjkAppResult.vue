<template>
  <section class="section">
    <div class="columns is-centered is-multiline">
      <div class="column is-one-quarter" v-for="(curry, index) in curries" :key="index">
        <CjkCurryDetail v-bind:curry="curry"/>
      </div>
      <div class="column is-one-quarter">
        <div class="buttons">
          <router-link to="/">
            <button class="button is-medium is-primary">もう一度遊ぶ</button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CjkCurryDetail from "@/components/molecules/CjkCurryDetail.vue";
import allCurries from "@/assets/curries.js";

export default {
  name: "CjkAppResult",
  components: {
    CjkCurryDetail
  },
  props: {
    hand: {
      type: Array
    }
  },
  data: function() {
    return {
      curries: []
    };
  },
  created() {
    for (let id of this.hand) {
      this.curries.push(this.findCurry(id));
    }
  },
  methods: {
    findCurry: function(id) {
      return allCurries.find(function(el) {
        return el.id === id;
      }, this);
    }
  }
};
</script>