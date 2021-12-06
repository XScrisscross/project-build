export default {
  // utils是否挂载Window
  utilsMountWindow: false,
  // utils是否挂载Vue
  utilsMountVue: true,
  // api是否挂载Window
  apiMountWindow: false,
  // api是否挂载Vue
  apiMountVue: true,
  // baseURL测试生产地址
  baseURL: process.env.NODE_ENV === 'production' ? 'http://127.0.0.1' : '/api',
};
