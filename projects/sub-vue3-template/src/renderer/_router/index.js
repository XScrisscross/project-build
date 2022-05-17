import VueRouter from 'vue-router';
import { Strategy } from './router-strategy';
import { createRouter } from './router-util';
import { buildConfig } from '../_config/env-config';
import redirectRoutes from './routes/redirect';

export default createRouter({ VueRouter, Strategy: Strategy[buildConfig.envMode], Routes: [...redirectRoutes] });
