<template>
  <div>
    <CjkHero/>
    <div class="container"><CjkAppResult v-bind:hand="hand"/></div>
    <CjkFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import CjkHero from "@/components/organsms/CjkHero.vue";
import CjkAppResult from "@/components/organsms/CjkAppResult.vue";
import CjkFooter from "@/components/organsms/CjkFooter.vue";

export default {
  name: "CjkResultView",
  components: {
    CjkHero,
    CjkAppResult,
    CjkFooter
  },
  props: {
    hand: Array
  }
};
</script>