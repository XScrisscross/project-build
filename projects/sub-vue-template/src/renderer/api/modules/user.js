// import { get, post, fpost } from '../http.js';
import { axiosFactory } from '../create-axios';

const { get, post, fpost } = axiosFactory();
// const axiosInstance = function(axios,'default') {

// }

// listA
export const getListA = params => get(``, params);

// listB
export const getListB = params => get(``, params);

// listC
export const getListC = params => get(``, params);
