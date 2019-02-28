<template>
  <div class="box">
    <figure>
      <img :src="require('@/assets/curries/'+ curry.id +'.jpg')">
    </figure>
    <p class="title">{{curry.price.toLocaleString()}}円</p>
    <p>{{curry.description}}</p>
  </div>
</template>

<script>
export default {
  name: "CjkCurryDetail",

  props: {
    curry: {
      type: Object
    }
  }
};
</script>