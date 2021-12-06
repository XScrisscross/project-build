import Vue from 'vue'
import App from './App.vue'
import { hashRouter } from './router'
import store from './store'

// import './api/index'
import './utils/index'

import 'amfe-flexible'
import './assets/style/index.scss'

Vue.config.productionTip = false

new Vue({
  router: hashRouter(),
  store,
  render: h => h(App),
}).$mount('#app')
