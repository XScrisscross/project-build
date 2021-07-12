import Vue from 'vue'
import envConfig from '../config/envConfig'

const files = require.context('./', true, /^.*?(?<!index)\.js$/)
const { utilsMountWindow, utilsMountVue } = envConfig

if (utilsMountWindow) window.$utlis = {}
if (utilsMountVue) Vue.$utlis = {}

const utils = files.keys().reduce((res, cur) => {
  const modules = files(cur)
  const fnkeys = Object.keys(modules)

  const fns = fnkeys.reduce((fnres, key) => {
    if (utilsMountWindow) window.$utlis[key] = modules[key]
    if (utilsMountVue) Vue.$utlis[key] = modules[key]
    return { ...fnres, [key]: modules[key] }
  }, {})
  return { ...res, ...fns }
}, {})

export default utils
