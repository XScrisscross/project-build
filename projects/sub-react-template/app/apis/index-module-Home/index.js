import { urls, jpurls, get, post, fpost } from '../http.js'

const BASE_PATH = ''

// listdemoB1 { parms1,params2 }
export const fetchListDemoB1 = params => get(`${BASE_PATH}?method=listdemoB1`, params)

// listdemoB2 { parms1,params2 }
export const fetchListDemoB2 = params => get(`${BASE_PATH}?method=listdemoB2`, params)

