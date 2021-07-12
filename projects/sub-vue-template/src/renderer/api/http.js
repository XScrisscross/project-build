import axiosConfig from '../utils/request'

// get
export const get = (url, params, config) => {
  return new Promise((resolve, reject) => {
    axiosConfig(config)
      .get(url, {
        params: { ...params },
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        console.log(err)
      })
  })
}

// post
export const post = (url, params, config) => {
  return new Promise((resolve, reject) => {
    axiosConfig(config)
      .post(url, { ...params })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        console.log(err)
      })
  })
}

// fpost
export const fpost = (url, formData, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}?${qs.stringify(data)}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        console.log(err)
      })
  })
}
