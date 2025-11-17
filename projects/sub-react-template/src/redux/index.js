import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducer/index.js'

const loggerMiddleware = createLogger()

const files = require.context('./', true, /(^\.\/middlewares)([a-zA-Z\/\_]+)\.js$/)

const initmMiddlewares = (files, middlewares = []) => {
  return  files.keys().reduce((res, k) => {
    return files(k).default ? res.concat(files(k).default) : res
  }, middlewares)
}

export default ((rootReducer, preloadedState, middlewares) => {
  return createStore(reducers, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware, ...middlewares))
})(reducers, {}, initmMiddlewares(files))
