import { actionsMap, actionsCreater } from '~actions'

// types 中有aciotn,reducer,key
const { getListDemoA } = actionsMap

const initState = {}

export default [
  getListDemoA.reducer,
  (state = initState, action) => {
    const { type, payload } = action
    if (type !== getListDemoA.key) return state
    // logic
    const { data } = payload
    return { ...state, data }
  },
]
