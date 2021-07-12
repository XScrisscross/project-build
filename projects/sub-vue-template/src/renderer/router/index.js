import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '../layout/BasicLayout.vue'

Vue.use(VueRouter)

const basicFiles = require.context('./', true, /(^\.\/basicRoutes)([a-zA-Z/]+)\.js$/)
const dynaFiles = require.context('./', true, /(^\.\/dynaRoutes)([a-zA-Z/]+)\.js$/)

const basicMdules = basicFiles.keys().reduce((res, cur) => {
  const modules = basicFiles(cur).default
  return [...res, ...modules]
}, [])

const dynaModules = dynaFiles.keys().reduce((res, cur) => {
  const moduleKey = cur.match(/\.\/dynaRoutes\/(\S*)\.js$/)[1].toLowerCase()
  const [routes, layoutComponnet] = dynaFiles(cur).default
  const modules = {
    path: '/' + moduleKey,
    name: moduleKey,
    component: layoutComponnet || BasicLayout,
    children: routes,
  }
  return [...res, modules]
}, [])

const routes = [
  // 二级静态路由
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/home',
    children: [
      // static import
    ].concat(basicMdules),
  },
  // 二级动态路由
  ...[
    // static import
    ...dynaModules,
  ],
  // 基础路由
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/Error.vue'),
  },
]

// webapp or electron
export const hashRouter = () => {
  const router = new VueRouter({
    routes,
  })

  router.beforeEach((to, from, next) => {
    next()
  })

  router.afterEach((to, from) => {})

  return router
}

// inject micro-apps routes
export const microRouter = () => {
  const router = new VueRouter({
    routes,
    // baseURL根据主应用注册的子应用路由决定
    base: window.__POWERED_BY_QIANKUN__ ? '/sub-vue-template' : '/',
    mode: 'history',
  })

  router.beforeEach((to, from, next) => {
    next()
  })

  router.afterEach((to, from) => {})

  return router
}
