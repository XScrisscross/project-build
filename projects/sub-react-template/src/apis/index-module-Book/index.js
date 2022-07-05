import { urls, jpurls, get, post, fpost } from '../http.js'

const BASE_PATH = ''

// listdemoA { parms1,params2 }
export const fetchListDemoA1 = (params) => get(`${BASE_PATH}?method=listdemoA1`, params)

export const fetchListDemoA2 = (params) => get(`${BASE_PATH}?method=listdemoA2`, params)
