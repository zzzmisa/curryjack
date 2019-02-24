<template>
  <div class="box">
    <p class="title">1杯目のカレー</p>
    <figure>
      <img :src="require('@/assets/curries/'+ id +'.jpg')">
    </figure>
  </div>
</template>

<script>
export default {
  name: "CjkCurry",

  props: {
    id: {
      type: String
    }
  }
};
</script>