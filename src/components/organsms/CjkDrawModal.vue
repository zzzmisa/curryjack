<template>
  <div class="modal-card">
    <header class="modal-card-head has-background-cjklight">
      <p class="modal-card-title">{{ title }}</p>
    </header>
    <section class="modal-card-body">
      <figure>
        <img :src="require('@/assets/curries/'+ id +'.jpg')">
      </figure>
    </section>
    <footer class="modal-card-foot has-background-cjklight is-centered">
      <button class="button is-cjknormal" @click="$parent.close()">OK</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CjkDrawModal",

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

<style scoped>
@import url(https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c);

.modal-card-head{
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

.modal-card-body {
  padding: 8px 8px 0px 8px;
}
</style>
