// axios 全局默认配置
import qs from 'qs';
import axios from 'axios';
import config from '@/env-config';

axios.defaults.withCredentials = true; // 前后端分离使用
axios.defaults.baseURL = config.baseURL;
axios.defaults.timeout = 60000;

const axiosConfig = (config = {}) => {
  return axios.create({
    ...config,
    transformRequest: [
      function (data, headers) {
        return qs.stringify(data);
      },
    ],
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });
};

export default axiosConfig;
