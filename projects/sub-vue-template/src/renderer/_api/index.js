import Vue from 'vue';
import config from '../env-config';

const files = require.context('./', true, /(^\.\/modules)([a-zA-Z/]+)\.js$/);
const { apiMountVue, apiMountWindow } = config;

if (apiMountVue) Vue.prototype.$apis = {};

const apis = files.keys().reduce((res, cur) => {
  const moduleKey = cur.match(/\.\/modules\/(\S*)\.js$/)[1];
  const modules = files(cur);
  const fnkeys = Object.keys(modules);

  const fns = fnkeys.reduce((fnres, key) => {
    if (apiMountWindow) window.$apis[moduleKey + '/' + key] = modules[key];
    if (apiMountVue) Vue.prototype.$apis[moduleKey + '/' + key] = modules[key];
    return { ...fnres, [moduleKey + '/' + key]: modules[key] };
  }, {});
  return { ...res, ...fns };
}, {});

const fetchApi = (key, params) => {
  const keys = Object.keys(apis);
  if (keys.indexOf(key) === -1) throw new Error('no such api!');
  if (Object.prototype.toString.call(params) !== '[object Object]') throw new Error('prams should be object!');
  return apis[key](params);
};

if (apiMountVue) Vue.prototype.$fetchApi = fetchApi;

export { apis, fetchApi };
