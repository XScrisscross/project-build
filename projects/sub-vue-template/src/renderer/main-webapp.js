import Vue from 'vue';
import App from './App.vue';
import router from './_router';
import store from './_store';

import './_api/index'
import './_assets/style/index.scss';
import 'amfe-flexible';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
