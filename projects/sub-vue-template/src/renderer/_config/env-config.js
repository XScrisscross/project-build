export const buildConfig = {
  // envMode: 'webapp'
  envMode: process.env.VUE_APP_TEMPLATE_MODE,
  // api是否挂载Window
  apiMountWindow: false,
  // api是否挂载Vue
  apiMountVue: true,
  // Vue-ls 配置
  storageOptions: {
    namespace: 'pro__',
    name: 'ls',
    storage: 'session',
  },
};

export const apiConfig = {
  baseURL: '/api',
  ssoService: '', // 认证服务器
};
