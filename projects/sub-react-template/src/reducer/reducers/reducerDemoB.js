import { actionsMap, actionsCreater } from '../../actions/index.js'

// types 中有aciotn,reducer,key
const { getListDemoB } = actionsMap

const initState = {}

export default [
  getListDemoB.reducer,
  (state = initState, action) => {
    const { type, payload } = action
    if (type === 'getListDemoB') {
      const { data } = payload
      return { ...state, data }
    }
    return state
  }
]
