import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import './api/index'
import 'normalize.css';

import 'amfe-flexible';

import './_assets/style/index.scss';

import 'nprogress/nprogress.css';

Vue.config.productionTip = false;

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app');
