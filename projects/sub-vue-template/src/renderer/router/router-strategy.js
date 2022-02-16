export const Strategy = {
  // web-apps routes
  webapp: function (VueRouter, routes) {
    const router = new VueRouter({
      routes,
      mode: 'hash',
    });
    router.beforeEach((to, from, next) => {
      next();
    });
    router.afterEach((to, from) => {});
    return router;
  },
  // micro-apps routes
  microapp: function (VueRouter, routes) {
    const router = new VueRouter({
      routes,
      // baseURL根据主应用注册的子应用路由决定
      base: window.__POWERED_BY_QIANKUN__ ? '/sub-vue-template' : '/',
      mode: 'history',
    });
    router.beforeEach((to, from, next) => {
      next();
    });
    router.afterEach((to, from) => {});
    return router;
  },
  // electron-apps routes
  electron: function (VueRouter, routes) {
    const router = new VueRouter({
      routes,
      mode: 'hash',
    });
    router.beforeEach((to, from, next) => {
      next();
    });
    router.afterEach((to, from) => {});
    return router;
  },
};
