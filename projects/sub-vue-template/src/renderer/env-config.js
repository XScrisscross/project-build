console.log(process.env, 'process.env');
console.log(process.env.PROJECT_MODE, 'process.env.PROJECT_MODE');

export default {
  baseURL: process.env.VUE_APP_API, // api
  projectMode: process.env.PROJECT_MODE, // 启动模式
  projectEnv: process.env.VUE_APP_ENV, // 打包环境
  ssoService: process.env.VUE_APP_CAS_URL, // cas url
  ssoCasMode: process.env.VUE_APP_CAS_MODE, // cas mode
};
