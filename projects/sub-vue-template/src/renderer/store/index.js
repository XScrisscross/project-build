import Vue from 'vue'
import Vuex from 'vuex'

// 手动引入
import demo from './stores/demo'
import protal from './stores/protal'

// 动态引入
const files = require.context('./', true, /(^\.\/module-)([a-zA-Z/]+)index\.js$/)

const dynaticModules = files.keys().reduce((res, cur) => {
  const moduleKey = cur.match(/\.\/module-(\S*)\//)[1]
  const module = files(cur).default
  return { ...res, [moduleKey]: module }
}, {})

Vue.use(Vuex)

export default new Vuex.Store({ modules: { ...dynaticModules, demo, protal } })
