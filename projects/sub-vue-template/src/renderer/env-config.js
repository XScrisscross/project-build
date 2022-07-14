console.log(process.env);

export default {
  apiMountWindow: false, // 挂载Window
  apiMountVue: true, // 挂载Vue
  projectMode: process.env.VUE_APP_MODE, // 启动模式
  projectEnv: process.env.VUE_APP_ENV, // 环境
  baseURL: process.env.VUE_APP_API, // api
  ssoService: process.env.VUE_APP_CAS, // cas
};
