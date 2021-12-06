import qs from 'qs'
import axios from 'axios'
import envConfig from '../config/envConfig'

const { baseURL } = envConfig
axios.defaults.withCredentials = true
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 60000

const axiosConfig = (config = {}) =>
  axios.create({
    ...config,
    transformRequest: [
      function (data, headers) {
        return qs.stringify(data)
      },
    ],
    transformResponse: [
      function (data) {
        return JSON.parse(data)
      },
    ],
  })

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosConfig
