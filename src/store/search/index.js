import { reqGetSearchInfo } from "@/api";
const state = {
  searchList: {},
};
const mutations = {
  SEARCHLIST(state, newVal) {
    state.searchList = newVal;
  },
};
const actions = {
  async getSearchList({ commit }, params = {}) {
    let res = await reqGetSearchInfo(params);
    if (res.code === 200) {
      commit("SEARCHLIST", res.data);
    }
  },
};
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
  tradeMarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
