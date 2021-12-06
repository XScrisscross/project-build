import axiosConfig from './request';
import { isObjectArr, isString } from '../../utils/object-utils';

const isParamsTrue = function () {
  const pathUrl = Array.prototype.shift.call(arguments);
  if (!isString(pathUrl)) throw new Error('api path params wrong!');
  if (!isObjectArr(arguments)) throw new Error('api obj params wrong!');
};

const strategy = {
  getVali: function () {
  },
  postVali: function () {

  },
  postfVali: function () {

  },
};

// get
export const get = function (pathUrl, params, config) {
  isParamsTrue.apply(this, arguments);
  

  return new Promise((resolve, reject) => {
    axiosConfig(config)
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
export const post = function (pathUrl, data, params, config) {
  isParamsTrue.apply(this, arguments);

  return new Promise((resolve, reject) => {
    axiosConfig(config)
      .post(pathUrl, { ...params })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};

// fpost
export const fpost = function (pathUrl, formData, data) {
  isParamsTrue.apply(this, arguments);

  return new Promise((resolve, reject) => {
    axios
      .post(`${pathUrl}?${qs.stringify(data)}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
