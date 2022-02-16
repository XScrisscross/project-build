## 更新日志

#### 2021-07-06

- 集成 vue，react 的微应用，使用阿里的 qiankun，实现简单的通信

#### 2021-08-10

- 集成 vue-electron 应用，可根据不同配置开启 web 或客户端应用

#### 2021-08-12

- vue 应用的基础封装，后续 react 及 vue 相关实践集中到此项目中

#### 2021-09-10

- 已经集成全局的 vue 观察者（主系统 vue,子系统暂定 vue、react 框架模板各一个）
- react 项目集成值 qiankun 尚有问题

#### 2021-11-03

- sub-vue-zp-template 项目相关问题，代码已清空，保留思路
- sub-vue-zp-template 构建分内外网 env，可同时启动打包，针对代码部分有相同，部署环境不同
- sub-vue-zp-template nginx 分多层转发 外网 - 内网 - 负载均衡 - 前端 - 后端
- sub-vue-zp-template nginx 转发过程中对 history 路由以及 sso 验证有影象，需调整
- sub-vue-zp-template 页面转 pdf 分割问题需要计算

#### 2021-12-06

- 不应做过多的动态扫描文件引入方式，部分多余动态引入重构成普通按需引入
- 是否将 api，utils 模块内部函数挂载到 Vue 实例或 Window 上，方便调用？
- router 重新封装，micro 与普通 web 路由分策略构建

#### 2021-12-20

- sub-vue-template 实现微应用衔接，electron 应用，普通 web 应用（分 env 环境启动）

#### 2021-12-29

- 多页面架构实现，npm-run-all 分 dev 环境启动多个应用，打包多个应用，整合老框架 Vue 多页面
- sub-vue-zp-template 模板整合
