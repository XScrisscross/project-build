import { urls, jpurls, get, post, fpost } from './http.js'

const BASE_PATH = ''

// download-file
export const downloadFile = params => get(`${BASE_PATH}?method=downloadfile`, params)

// upload-file
export const uploadFile = params => get(`${BASE_PATH}?method=uploadfile`, params)

// delete-file
export const deleteFile = params => get(`${BASE_PATH}?method=deletefile`, params)