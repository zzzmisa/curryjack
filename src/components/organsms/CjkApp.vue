<template>
  <section class="section">
    <div class="columns is-centered is-multiline">
      <div class="column is-one-quarter">
        <CjkCurry/>
      </div>
      <div class="column is-one-quarter">
        <CjkCurry/>
      </div>
      <div class="column is-one-quarter">
        <CjkCurry/>
      </div>
      <div class="column is-one-quarter">
        <CjkCurry/>
      </div>
      <div class="column is-one-quarter">
        <CjkCurry/>
      </div>
      <div class="column is-one-quarter">
        <div class="buttons">
          <button class="button is-medium is-primary">もう一枚引く</button>
          <button class="button is-medium is-primary">結果を見る</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CjkCurry from "@/components/molecules/CjkCurry.vue";

export default {
  name: "CjkApp",
  components: {
    CjkCurry
  }
};
</script>