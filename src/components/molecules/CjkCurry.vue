<template>
  <div class="box">
    <p class="title">1杯目のカレー</p>
    <div class="card-image">
      <figure>
        <img :src="require('@/assets/curries/'+ id +'.jpg')" >
      </figure>
    </div>
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