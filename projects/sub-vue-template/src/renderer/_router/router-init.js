/**
 * @param Strategy 路由策略
 * @param Routes 路由列表
 * @argument '@/views/' 扫描路径
 * @argument /router\.js$/ 扫描文件
 * @note
 */
import { isObject, isObjectArr } from '@/_utils/object-utils';
import { error } from '@/_utils/error-utils';
import { compose } from '@/_utils/compose';

export const createRouter = (function () {
  let Vue;
  let VueRouter;
  let Strategy;
  let Routes;

  const init = function (args) {
    const Config = Array.prototype.shift.call(args);
    Vue = Config.Vue;
    VueRouter = Config.VueRouter;
    Strategy = Config.Strategy;
    Routes = Config.Routes;
    Vue.use(VueRouter);
    const files = require.context('@/views/', true, /router\.js$/);
    return files.keys().reduce((res, cur) => {
      const module = files(cur).default || error('router export should be "export default"');
      if (isObjectArr(module)) return [...res, ...module];
    }, []);
  };

  const inject = function (routes) {
    return isObjectArr(Routes) ? [...routes, ...Routes] : error('inject router should be "object arr"');
  };

  const strategy = function (routes) {
    return Strategy.call(this, VueRouter, routes);
  };

  return function () {
    return compose(init, inject, strategy)(arguments);
  };
})();
