import { reqGoodInfo } from "@/api";

const state = {
  goodInfo: {},
};
const mutations = {
  GOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const actions = {
  async getGoodInfo({ commit }, skuid) {
    let res = await reqGoodInfo(skuid);
    if (res.code === 200) {
      commit("GOODINFO", res.data);
    }
  },
};
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
