<template>
  <div class="box">
    <p class="title">{{ title }}</p>
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
    },
    title: {
      type: String
    }
  }
};
</script>