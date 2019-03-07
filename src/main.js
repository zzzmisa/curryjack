import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy' //buefy
//import 'buefy/dist/buefy.css' //buefy

Vue.use(Buefy) //buefy

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
