import { compose } from '../utils/compose'
const files = require.context('./', true, /(^\.\/types)([a-zA-Z\/\_]+)\.js$/)

// actions 指令集命名不可重复
const initActions = (files, actions = {}) => {
  files.keys().forEach((item) => {
    actions = { ...actions, ...files(item).default }
  })
  return actions
}

// action 创建函数 payload:{ data }
const creatActionFn = (actions = {}, actionsFn = {}) => {
  for (const actionInfo in actions) {
    const { key, action, reducer } = actions[actionInfo]
    actionsFn[action] = (payload) => {
      const { data, promise, success, error } = payload
      return {
        type: key,
        payload: {
          data,
          promise,
          success,
          error,
        },
      }
    }
  }
  return {
    actionsMap: actions,
    actionsCreater: actionsFn,
  }
}

// actionsMap:key列表
// actionsCreater:key-action列表
export const { actionsMap, actionsCreater } = compose(initActions, creatActionFn)(files)
