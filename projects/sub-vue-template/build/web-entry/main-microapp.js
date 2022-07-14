import './public-path';

import Vue from 'vue';

import App from '@/App.vue';
import router from '@/_router';
import store from '@/_store';

import 'amfe-flexible';
import 'nprogress/nprogress.css';

import '@/_assets/style/index.scss';

Vue.config.productionTip = false;

let instance = null;

function render(props = {}) {
  const { container } = props;

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);

  props.onGlobalStateChange((state, prev) => {
    store.commit('protal/setProtalInfo', state);
  }, true);

  window.$setGlobalState = props.setGlobalState;

  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
