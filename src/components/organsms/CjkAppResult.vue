<template>
  <div>
    <section class="section">
      <CjkResult v-bind:total="total"/>
    </section>
    <section class="section container">
      <div class="columns is-centered is-multiline">
        <div class="column is-one-third" v-for="(curry, index) in curries" :key="index">
          <CjkCurry
            v-bind:id="curry.id"
            v-bind:tag="(index + 1) + '杯目'"
            v-on:curry="isDrawModalActive = true; selectedId=$event"
          />
          <template v-if="total <= cjscore">
            <CjkCurryDetail v-bind:curry="curry" v-bind:tag="(index + 1) + '杯目'"/>
          </template>
        </div>
      </div>
      <b-message type="is-warning" v-if="total > cjscore">アウトだとカレーの詳細は表示されないよ。</b-message>
      <div class="buttons is-centered">
        <router-link to="/">
          <button class="button is-medium is-cjknormal">最初から遊ぶ</button>
        </router-link>
      </div>
      <b-modal :active.sync="isDrawModalActive" has-modal-card>
        <CjkDrawModal v-bind:id="selectedId" v-bind:title="hand.length + '杯目のカレー'"/>
      </b-modal>
    </section>
    <section class="section">
      <CjkRsultShare v-bind:total="total"/>
    </section>
  </div>
</template>

<script>
import CjkCurryDetail from '@/components/molecules/CjkCurryDetail.vue'
import CjkCurry from '@/components/molecules/CjkCurry.vue'
import CjkDrawModal from '@/components/organsms/CjkDrawModal.vue'
import CjkResult from '@/components/molecules/CjkResult.vue'
import CjkRsultShare from '@/components/molecules/CjkRsultShare.vue'
import deck from '@/constants/curries.js'
import config from '@/constants/config.js'

export default {
  name: 'CjkAppResult',
  components: {
    CjkCurryDetail,
    CjkCurry,
    CjkDrawModal,
    CjkResult,
    CjkRsultShare
  },
  props: {
    hand: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      curries: [],
      total: 0,
      selectedId: '',
      isDrawModalActive: false,
      cjscore: config.cjscore
    }
  },
  created () {
    for (let id of this.hand) {
      if (this.findCurry(id) === undefined) {
        console.log('だめ')
      }
      this.curries.push(this.findCurry(id))
    }
    this.total = this.curries.reduce((p, c) => p + c.price, 0)
  },
  methods: {
    findCurry: function (id) {
      return deck.find(function (el) {
        return el.id === id
      }, this)
    }
  }
}
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);
</style>
