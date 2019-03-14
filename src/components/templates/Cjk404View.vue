<template>
  <div>
    <CjkHero/>
        <section class="section container">
      <p class="title is-size-1">404 Not Found</p>
      <p class="subtitle is-size-6">お探しのページは見つかりません。</p>
    <router-link to="/">
      <button class="button is-medium is-cjknormal">最初から遊ぶ</button>
    </router-link>
        </section>
    <CjkFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import CjkHero from '@/components/organsms/CjkHero.vue'
import CjkFooter from '@/components/organsms/CjkFooter.vue'

export default {
  name: 'Cjk404View',
  components: {
    CjkHero,
    CjkFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
