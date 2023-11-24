import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGtm from '@gtm-support/vue2-gtm'
import Buefy from 'buefy' // buefy
import i18n from './i18n'
// import 'buefy/dist/buefy.css' //カスタマイズしている場合はコメントアウト

Vue.use(VueGtm, {
  id: 'GTM-M5SJDZ36'
})

Vue.use(Buefy) // buefy

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
