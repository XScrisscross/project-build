import Vue from 'vue';
import VueRouter from 'vue-router';


import './router-utils'
// import BasicLayout from '../layout/BasicLayout.vue';

// const initRoutes = (function (Vue, VueRouter, routerConfig) {
//   Vue.use(VueRouter);

//   let routes = [];
//   let Layout = Layout;
//   let basicModules = null;
//   let mainModules = null;
//   let dynaModules = null;

//   const initBasic = function () {
//     const basicFiles = require.context('./', true, /(^\.\/basic-routes)([a-zA-Z/]+)\.js$/);
//     const basicModules = basicFiles.keys().reduce((res, cur) => {
//       const modules = basicFiles(cur).default;
//       return [...res, ...modules];
//     }, []);
//     return basicModules;
//   };

//   const initMain = function () {
//     const mainFiles = require.context('./', true, /(^\.\/main-layout-outes)([a-zA-Z/]+)\.js$/);
//     const mainModules = mainFiles.keys().reduce((res, cur) => {
//       const modules = mainFiles(cur).default;
//       return [...res, ...modules];
//     }, []);
//     return [
//       {
//         path: '/',
//         name: 'index',
//         component: Layout,
//         redirect: '/home',
//         children: [
//           // static import
//         ].concat(mainModules),
//       },
//     ];
//   };

//   const initDyna = function () {
//     const dynaFiles = require.context('./', true, /(^\.\/dyna-layout-routes)([a-zA-Z/]+)\.js$/);
//     const dynaModules = dynaFiles.keys().reduce((res, cur) => {
//       const moduleKey = cur.match(/\.\/dyna-layout-routes\/(\S*)\.js$/)[1].toLowerCase();
//       const [routes, layoutComponent] = dynaFiles(cur).default;
//       const modules = {
//         path: '/' + moduleKey,
//         name: moduleKey,
//         component: layoutComponent || Layout,
//         children: routes,
//       };
//       return [...res, modules];
//     }, []);
//     return dynaModules;
//   };

//   return function () {
//     basicModules = initBasic.apply(this, arguments);
//     mainModules = initMain.apply(this, arguments);
//     dynaModules = initDyna.apply(this, arguments);
//     return [...basicModules, ...mainModules, ...dynaModules];
//   };
// })(Vue, VueRouter, BasicLayout);

// const createRouter = function () {};

// // const routes =

// // webapp or electron
// const hashRouter = function () {
//   const router = new VueRouter({
//     routes,
//   });

//   router.beforeEach((to, from, next) => {
//     next();
//   });

//   router.afterEach((to, from) => {});

//   return router;
// };

// // inject micro-apps routes
// const microRouter = function () {
//   const router = new VueRouter({
//     routes,
//     // baseURL根据主应用注册的子应用路由决定
//     base: window.__POWERED_BY_QIANKUN__ ? '/sub-vue-template' : '/',
//     mode: 'history',
//   });

//   router.beforeEach((to, from, next) => {
//     next();
//   });

//   router.afterEach((to, from) => {});

//   return router;
// };
