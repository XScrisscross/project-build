// import Vue from 'vue';
// import VueRouter from 'vue-router';
import { isObjectArr } from '../utils/object-utils';
import { error } from '../utils/error-utils';
import strategy from 'router-strategy.js';

// const createRoutes = (function (strategy, type) {
//   return function () {};
// })(strategy);

const initRoutes = (function () {
  // const mainModules = mainFiles.keys().reduce((res, cur) => {
  //   const modules = mainFiles(cur).default;
  //   return [...res, ...modules];
  // }, []);
  let cacheMap = null;
  let { routerConfig, imRoutes } = Array.prototype.shift.call(arguments);

  const fileScan = function () {
    if (cacheMap) return cacheMap;
    return require.context('./', true, /(^\.\/routes)([a-zA-Z/]+)\.js$/);
  };

  const addLRoutes = function (cur, module, res) {
    const [routes, layout] = module;
    const moduleKey = cur.split('/').pop().split('.').shift();
    const lmodule = {
      path: '/' + moduleKey.toLowerCase(),
      name: moduleKey.toLowerCase(),
      component: layout || null,
      children: routes || [],
    };
    return [...res, lmodule];
  };

  const createRoutes = function (files) {
    return files.keys().reduce((res, cur) => {
      const module = files(cur).default || error('es6 export should be default');
      if (isObjectArr(module)) return [...res, ...module];
      return addLRoutes(cur, module, res);
    }, []);
  };

  const injectRoutes = function (routes) {
    if (!isObjectArr(routes)) return routes;
    return [...routes, ...imRoutes];
  };

  const cacheRoutes = function (routes) {
    if (!cacheMap) cacheMap = routes;
    return routes;
  };

  const createRouter = function (routes) {
    strategy['webapp'].apply(this, 'hash');
  };

  return function () {
    // fileScan();
    initRoutes(fileScan());
  };
})();

initRoutes();
