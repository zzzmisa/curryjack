<template>
  <section class="hero">
    <h1 class="title">
      <img alt="Vue logo" src="@/assets/logo.png">
    </h1>
    <h2 class="subtitle" >2,100円に近づけろ！超えたらアウト！
      <b-icon
        pack="fa"
        icon="question-circle"
        type="is-primary"
        @click.native="isComponentModalActive = true"
      ></b-icon>
    </h2>
    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <CjkGuideModal />
    </b-modal>
  </section>
</template>

<script>
import CjkGuideModal from "@/components/organsms/CjkGuideModal.vue";

export default {
  name: "CjkHero",
  components: {
    CjkGuideModal
  },
  data() {
    return {
      isComponentModalActive: false
    };
  }
};
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);
</style>
