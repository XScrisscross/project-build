/**
 * @param Strategy 路由策略
 * @param Routes 路由列表
 * @param ScanPath 路由扫描路径
 * @note
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import { Strategy } from './router-strategy';
import { createRouter } from './router-init';
import envConfig from '../env-config';

// import routes
import rootRoutes from './routes/root';

export default createRouter({ Vue, VueRouter, Strategy: Strategy[envConfig.projectMode], Routes: [...rootRoutes] });
