import * as type from './mutation_type'
import * as server from './server'

export default {
  // data-change
  [type.renderCardA](state, { data, option = null }) {
    server[type.renderCardA](state, { data }, option)
  },
  [type.renderCardB](state, { data, option = null }) {
    server[type.renderCardB](state, { data }, option)
  },

  // info-change
  [type.handleListAInfo](state, data) {
    state.listAInfo = data
  },
  [type.handleListBInfo](state, data) {
    state.listBInfo = data
  },
  [type.handleListCInfo](state, data) {
    state.listCInfo = data
  },
}
