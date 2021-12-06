import Vue from 'vue';
import VueRouter from 'vue-router';
import { Strategy } from './router-strategy';
import { createRouter } from './router-util';
import { config } from '../env-config';

export default createRouter({ Vue, VueRouter, Strategy: Strategy[config.envMode], Routes: [] });
