import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics' // vue-analytics
import Buefy from 'buefy' // buefy
import i18n from './i18n'
// import 'buefy/dist/buefy.css' //カスタマイズしている場合はコメントアウト

Vue.use(Buefy) // buefy

// vue-analytics
Vue.use(VueAnalytics, {
  id: 'UA-88635038-4',
  router
})

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
