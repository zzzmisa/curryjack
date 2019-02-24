<template>
  <section class="section">
    <div class="columns is-centered is-multiline">
      <div class="column is-one-quarter" v-for="id in curries" :key="id">
        <CjkCurryDetail v-bind:id="id"/>
      </div>
      <div class="column is-one-quarter">
        <div class="buttons">
          <router-link to="/"><button class="button is-medium is-primary">もう一度遊ぶ</button></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CjkCurryDetail from "@/components/molecules/CjkCurryDetail.vue";

export default {
  name: "CjkAppResult",
  components: {
    CjkCurryDetail
  },
  props: {
    curries: {
      type: Array
    }
  }
};
</script>