<template>
  <div class="box">
      <figure>
        <img :src="require('@/assets/curries/'+ id +'.jpg')" >
      </figure>
      <p class="title">1,000円</p>
      <p>ミサさんちのおいしいパキスタンカレー。</p>
  </div>
</template>

<script>
export default {
  name: "CjkCurryDetail",

  props: {
    id: {
      type: String
    }
  }

};
</script>