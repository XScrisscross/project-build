import * as type from './mutation_type'
// import * as Apis_imSB from '../../api/modules/user'

export default {
  async [type.renderCardA]({ commit, state }, val) {
    if (val) state.listAInfo = val
    // let resA = await Apis_imSB.getListA(state.listAInfo)
    // let resB = await Apis_imSB.getListB(state.listBInfo)
    commit('renderCardA', resA)
    commit('renderCardA', resB)
  },
  async [type.renderCardB]({ commit, state }, val) {
    if (val) state.listCInfo = val
    // let res = await Apis_imSB.getListC(state.listCInfo)
    commit('renderCardB', res)
  },
}
