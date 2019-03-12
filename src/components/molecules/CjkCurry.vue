<template>
  <a class="box" v-on:click="$emit('curry', id)">
    <figure
      class="image is-3by2"
      :style="{ backgroundImage: 'url(' + require('@/assets/curries/'+id+'.jpg') + ')' }"
    >
      <span class="tag is-light is-rounded is-medium">{{ tag }}</span>
    </figure>
  </a>
</template>

<script>
export default {
  name: 'CjkCurry',

  props: {
    id: {
      type: String
    },
    tag: {
      type: String
    }
  }
}
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);
@import url(https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c);

figure {
  background-size: cover;
  background-position: center;
}

.box {
  padding: 8px;
  margin: 0px 0px 8px 0px;
}

.tag {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}
</style>
