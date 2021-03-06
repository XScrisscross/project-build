import { isObject, isObjectArr } from '../_utils/object-utils';
import { error } from '../_utils/error-utils';
import { compose } from '../_utils/compose';

const createRouter = (function () {
  let files;
  let Routes;
  let VueRouter;
  let Strategy;

  const initParams = function (args) {
    const config = Array.prototype.shift.call(args);
    Routes = config.Routes;
    VueRouter = config.VueRouter;
    Strategy = config.Strategy;
    files = require.context('./', true, /(^\.\/dyna-routes)([a-zA-Z/]+)\.js$/);
    if (!Routes && !VueRouter && !Strategy) return false;
    return true;
  };

  const addLRoutes = function (res, cur, oModule) {
    const [routes, layout, config] = oModule;
    const key = cur.split('/').pop().split('.').shift();
    const otherInfo = isObject(config) ? config : {};
    routes.forEach(route => {
      route.path = route.path.replaceAll('/', '');
    });
    const tModule = {
      path: '/' + key.toLowerCase(),
      name: key.toLowerCase(),
      component: layout || null,
      children: routes || [],
      ...otherInfo,
    };
    return [...res, tModule];
  };

  const createRoutes = function (res) {
    if (!res) return;
    return files.keys().reduce((res, cur) => {
      const oModule = files(cur).default || error('es6 export should be default');
      if (isObjectArr(oModule)) return [...res, ...oModule];
      return addLRoutes(res, cur, oModule);
    }, []);
  };

  const injectRoutes = function (routes) {
    if (!isObjectArr(Routes)) return routes;
    return [...routes, ...Routes];
  };

  const configStrategy = function (routes) {
    return Strategy.call(this, VueRouter, routes);
  };

  return function () {
    return compose(initParams, createRoutes, injectRoutes, configStrategy)(arguments);
  };
})();

export { createRouter };
