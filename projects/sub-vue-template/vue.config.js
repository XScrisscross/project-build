const electronConfig = require('./build/vue.config-electron');
const microappConfig = require('./build/vue.config-microapp');
const webappConfig = require('./build/vue.config-webapp');

const webappConfigX = require('./build/vue.config-webapp-webappX');
const webappConfigY = require('./build/vue.config-webapp-webappY');

const projectMode = process.env.PROJECT_MODE;

let currentConfig = null;
let commonConfig = {};

switch (projectMode) {
  case 'webapp':
    currentConfig = webappConfig;
    break;
  case 'electron':
    currentConfig = electronConfig;
    break;
  case 'microapp':
    currentConfig = microappConfig;
    break;
  case 'webappX':
    currentConfig = webappConfigX;
    break;
  case 'webappY':
    currentConfig = webappConfigY;
    break;
  default:
    break;
}

if (!currentConfig) {
  throw new Error('checok env file config');
}

module.exports = { ...currentConfig, ...commonConfig };
