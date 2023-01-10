const projectMode = process.env.PROJECT_MODE;

let currentConfig = null;
let commonConfig = {};

switch (projectMode) {
  case 'webapp':
    currentConfig = require('./build/vue.config-webapp');
    break;
  case 'electron':
    currentConfig = require('./build/vue.config-electron');
    break;
  case 'microapp':
    currentConfig = require('./build/vue.config-microapp');
    break;
  case 'webappX':
    currentConfig = require('./build/vue.config-webapp-webappX');
    break;
  case 'webappY':
    currentConfig = require('./build/vue.config-webapp-webappY');
    break;
  default:
    break;
}

if (!currentConfig) {
  throw new Error('checok env file config');
}

module.exports = { ...currentConfig, ...commonConfig };
