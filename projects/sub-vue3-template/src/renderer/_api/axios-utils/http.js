// axios 封装基础请求
import { createDefaultService, createCasService } from './service';
import { isObject } from '../../_utils/types';
import { isString } from '../../_utils/object-utils';

const isParamsTrue = function() {
  const pathUrl = Array.prototype.shift.call(arguments);
  if (!isString(pathUrl)) throw new Error('api path params wrong!');
};

// service
const serviceMap = {
  default: createDefaultService(),
  cas: createCasService(),
};

// get
export const get = function(pathUrl, params = {}, strategy = 'cas') {
  isParamsTrue.apply(this, arguments);
  const service = serviceMap[strategy];

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
export const post = function(pathUrl, bodyData = {}, params = {}, strategy = 'cas') {
  isParamsTrue.apply(this, arguments);
  const service = serviceMap[strategy];
  pathUrl = params.length > 0 ? `${pathUrl}?${qs.stringify(params)}` : pathUrl;

  return new Promise((resolve, reject) => {
    service
      .post(pathUrl, { ...bodyData }, { headers: { 'Content-Type': 'application/json;charset=UTF-8' } })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};

// fpost
export const fpost = function(pathUrl, formData, params = {}, strategy = 'cas') {
  isParamsTrue.apply(this, arguments);
  const service = serviceMap[strategy];
  pathUrl = params.length > 0 ? `${pathUrl}?${qs.stringify(params)}` : pathUrl;

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
