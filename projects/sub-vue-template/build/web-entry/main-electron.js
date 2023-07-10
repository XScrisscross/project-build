import Vue from 'vue';

import App from '@/App.vue';
import router from '@/_router';
import store from '@/_store';

import 'amfe-flexible';
import 'nprogress/nprogress.css';

import '@/_assets/style/index.scss';

Vue.config.productionTip = false;

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app');
