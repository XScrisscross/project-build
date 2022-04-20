import axiosConfig from './request';
import { isObject } from '../../utils/types';
import { isString } from '../../utils/object-utils';

const isParamsTrue = function () {
  const pathUrl = Array.prototype.shift.call(arguments);
  if (!isString(pathUrl)) throw new Error('api path params wrong!');
  const params = Array.prototype.shift.call(arguments);
  if (!isObject(params)) throw new Error('api obj params wrong!');
};

const service = (function () {
  // strategy
  const strategy = {
    getVali: function () {},
    postVali: function () {},
    postfVali: function () {},
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
})();

// axios
export const axios = config => axiosConfig(config);

// get
export const get = function (pathUrl, params) {
  isParamsTrue.apply(this, arguments);

  return new Promise((resolve, reject) => {
    service
      .get(pathUrl, {
        params: { ...params },
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};

// post
export const post = function (pathUrl, bodyData, params) {
  isParamsTrue.apply(this, arguments);

  return new Promise((resolve, reject) => {
    service
      .post(pathUrl, { ...bodyData })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};

// fpost
export const fpost = function (pathUrl, formData, params = {}) {
  isParamsTrue.apply(this, arguments);
  pathUrl = `${pathUrl}?${qs.stringify(params)}`;

  return new Promise((resolve, reject) => {
    service
      .post(pathUrl, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
