## Vue Template

#### 介绍

- 微应用构建下子应用之一，主体Vue2，electron，支持多个子应用启动
- 四种模式对应的情况：常规app单页面应用，作为微应用下的子项，作为electron客户端构建，子应用支持多环境启动
- 子应用之一，提供基础模板：组件、api构建、store构建、utils库、vue插件...

#### 配置

- env配置各种环境变量：api、cas验证...
- vue.config配置webpack，build自建配置文件
- env-config配置webpack到项目变量的映射

####  注意事项

- PROJECT_MODE 动态指令启动，减少env的配置选项(package.json - webapp/electron/microapp)
- PROJECT_PORT 5000，只对微应用的程序起作用的注入变量，不可在其他模式下打印process.env.PROJECT_PORT
- 3000端口：普通应用下单应用
- 300x端口：普通应用下多应用启动
- 4000端口：electron客户端
- 5000端口：微应用，微应用子项与主项配置需一致
- 6000端口：react应用