import * as type from './mutation_type'
// import * as Apis_imSA from '../../api/modules/home'

export default {
  async [type.renderCardA]({ commit, state }, val) {
    if (val) state.listAInfo = val
    // let resA = await Apis_imSA.getListA(state.listAInfo)
    // let resB = await Apis_imSA.getListB(state.listBInfo)
    commit('renderCardA', resA)
    commit('renderCardA', resB)
  },
  async [type.renderCardB]({ commit, state }, val) {
    if (val) state.listCInfo = val
    // let res = await Apis_imSA.getListC(state.listCInfo)
    commit('renderCardB', res)
  },
}
