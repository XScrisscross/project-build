const electronConfig = require('./vue.config-electron')
const microappConfig = require('./vue.config-microapp')
const webappConfig = require('./vue.config-webapp')

let currentConfig = null
let commonConfig = {}

if (process.env.VUE_APP_TEMPLATE_MODE === 'electron') currentConfig = electronConfig
if (process.env.VUE_APP_TEMPLATE_MODE === 'microapp') currentConfig = microappConfig
if (process.env.VUE_APP_TEMPLATE_MODE === 'webapp') currentConfig = webappConfig

if (!currentConfig) {
  throw new Error('checok env file config')
  return
}

module.exports = { ...currentConfig, ...commonConfig }
