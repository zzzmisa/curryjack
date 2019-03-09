<template>
  <section class="section hero has-text-centered">
    <router-link to="/">
      <h1 class="title">
        <img alt="カレージャック" src="@/assets/logo.png">
      </h1>
    </router-link>
    <h2 class="subtitle">2,100円に近づけろ！超えたらアウト！
      <b-icon
        pack="fa"
        icon="question-circle"
        type="is-cjknormal"
        @click.native="isGuideModalActive = true"
      ></b-icon>
    </h2>
    <b-modal :active.sync="isGuideModalActive" has-modal-card>
      <CjkGuideModal/>
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
      isGuideModalActive: false
    };
  }
};
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);

img {
  width: 500px;
}

</style>
