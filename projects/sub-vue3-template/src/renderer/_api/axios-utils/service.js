// service 策略
import Vue from 'vue';
import axiosConfig from './request';

// default
export const createDefaultService = function() {
  // strategy
  let strategy = {
    getVali: function() {},
    postVali: function() {},
    postfVali: function() {},
  };

  // config
  const config = {};
  const service = axiosConfig(config);

  // interceptors
  service.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  service.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return service;
};

// cas
export const createCasService = function() {
  // strategy
  let strategy = {
    getVali: function() {},
    postVali: function() {},
    postfVali: function() {},
  };

  // config
  const config = {};
  const service = axiosConfig(config);

  // interceptors
  service.interceptors.request.use(
    config => {
      const token = Vue.ls.get('token');
      if (token) {
        config.headers['X-Access-Token'] = token;
      }
      if (config.method === 'get') {
        config.params = {
          _t: Date.parse(new Date()) / 1000,
          ...config.params,
        };
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  service.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return service;
};
