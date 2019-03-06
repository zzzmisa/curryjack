<template>
  <div>
    <CjkHero/>
    <CjkFaq/>
    <CjkFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import CjkHero from "@/components/organsms/CjkHero.vue";
import CjkFaq from "@/components/organsms/CjkFaq.vue";
import CjkFooter from "@/components/organsms/CjkFooter.vue";

export default {
  name: "CjkFaqView",
  components: {
    CjkHero,
    CjkFaq,
    CjkFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
