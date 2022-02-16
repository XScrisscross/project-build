const electronConfig = require('./build/vue.config-electron')
const microappConfig = require('./build/vue.config-microapp')
const webappConfig = require('./build/vue.config-webapp')

const innerWebappConfig = require('./build/vue.config-webapp-inner')
const outerWebappConfig = require('./build/vue.config-webapp-outer')

let currentConfig = null
let commonConfig = {}

if (process.env.VUE_APP_TEMPLATE_MODE === 'electron') currentConfig = electronConfig
if (process.env.VUE_APP_TEMPLATE_MODE === 'microapp') currentConfig = microappConfig
if (process.env.VUE_APP_TEMPLATE_MODE === 'webapp') currentConfig = webappConfig

if (process.env.VUE_APP_TEMPLATE_TYPE === 'inner' && process.env.VUE_APP_TEMPLATE_MODE === 'webapp') currentConfig = innerWebappConfig
if (process.env.VUE_APP_TEMPLATE_TYPE === 'outer' && process.env.VUE_APP_TEMPLATE_MODE === 'webapp') currentConfig = outerWebappConfig

if (!currentConfig) {
  throw new Error('checok env file config')
}

module.exports = { ...currentConfig, ...commonConfig }
