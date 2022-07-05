import qs from 'qs'
import axios from 'axios'

import envConfig from '../env/config'

axios.defaults.withCredentials = true
axios.defaults.baseURL = envConfig.env.baseURL
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
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// jpurls
export const jpurls = (pathURL, params) => {
  if (params) {
    return `${baseURL}${pathURL}?${qs.stringify(params)}`
  }
  return `${baseURL}${pathURL}`
}

// urls
export const urls = (pathURL, params) => {
  if (params) {
    return `${baseURL}${pathURL}?${qs.stringify(params)}`
  }
  return `${baseURL}${pathURL}`
}

// get
export const get = (url, params, config) => {
  return new Promise((resolve, reject) => {
    axiosConfig(config)
      .get(url, {
        params: { ...params },
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        throw new Error(err)
      })
  })
}

// post
export const post = (url, params, config) => {
  return new Promise((resolve, reject) => {
    axiosConfig(config)
      .post(url, { ...params })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        throw new Error(err)
      })
  })
}

// fpost
export const fpost = (url, formData, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}?${qs.stringify(data)}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        throw new Error(err)
      })
  })
}
