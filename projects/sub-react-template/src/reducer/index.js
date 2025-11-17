import { combineReducers } from 'redux'
import { compose } from '../utils/compose'

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

export default compose(initReducersMap, createReducer, combineReducers)(files)
