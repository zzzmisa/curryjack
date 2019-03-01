<template>
  <div class="box">
    <figure>
      <a :href="curry.source" target="_blank"><img :src="require('@/assets/curries/'+ curry.id +'.jpg')"></a>
    </figure>
    <p class="title">{{curry.price.toLocaleString()}}円</p>
    <p class="subtitle">{{curry.label}}</p>
    <p><b-icon pack="fas" icon="map-marker-alt"></b-icon>{{curry.address}}</p>
    <p>{{curry.restaurant}}</p>
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

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);
</style>
