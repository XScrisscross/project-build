import { combineReducers } from 'redux'

const files = require.context('./', true, /(^\.\/reducers)([a-zA-Z\/\_]+)\.js$/)

const initReducersMap = (files, reducers = []) => {
  return files.keys().reduce((res, k) => {
    return files(k).default ? [...res, files(k).default] : res
  }, reducers)
}

const createReducer = (initReducersMap = [], reducers = {}) => {
  for (const [key, reducer] of initReducersMap) {
    reducers[key] = reducer
  }
  return reducers
}

export default Utils_Array.compose(initReducersMap, createReducer, combineReducers)(files)
