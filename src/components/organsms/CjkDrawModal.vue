<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{ title }}</p>
    </header>
    <section class="modal-card-body">
      <figure>
        <img :src="require('@/assets/curries/'+ id +'.jpg')">
      </figure>
    </section>
    <footer class="modal-card-foot"></footer>
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