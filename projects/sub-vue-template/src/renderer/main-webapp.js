import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';

// import './api/index'
// import './utils/index';

import 'amfe-flexible';
import './assets/style/index.scss';

Vue.config.productionTip = false;

console.log(router);

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app');
