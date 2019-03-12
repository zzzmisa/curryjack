<template>
  <div>
    <CjkHero/>
    <CjkAppHand/>
    <CjkFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import CjkHero from '@/components/organsms/CjkHero.vue'
import CjkAppHand from '@/components/organsms/CjkAppHand.vue'
import CjkFooter from '@/components/organsms/CjkFooter.vue'

export default {
  name: 'CjkFirstView',
  components: {
    CjkHero,
    CjkAppHand,
    CjkFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
