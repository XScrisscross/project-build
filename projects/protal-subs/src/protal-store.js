import { initGlobalState, MicroAppStateActions } from 'qiankun'
import Vue from 'vue'

const state = Vue.observable({
  auther: 'XScrisscross',
})

const actions = initGlobalState(state)

actions.onGlobalStateChange((newState, prev) => {
  // change hook
  for (const key in state) {
    if (Object.hasOwnProperty.call(state, key)) {
      state[key] = newState[key]
    } else {
      throw new Error('check the key is right')
    }
  }
})

actions.getProtalState = key => {
  if (!key || !state[key]) {
    throw new Error('check the key is right')
  }

  return state[key]
}

actions.setProtalState = (key, val) => {
  if (!key || !state[key]) {
    throw new Error('check the key is right')
  }

  actions.setGlobalState({ ...state, [key]: val })
}

export default actions
