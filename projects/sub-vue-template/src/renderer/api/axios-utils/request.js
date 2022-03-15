import qs from 'qs';
import axios from 'axios';
import envConfig from '../config/envConfig';

const { baseURL } = envConfig;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseURL;
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
