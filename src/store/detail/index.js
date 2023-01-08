import { reqGoodInfo, reqAddOrUpdateShopCart } from "@/api";
import { getUUID } from "@/utils/uuid_token";
const state = {
  goodInfo: {},
  uuid_token: getUUID(),
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
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    let res = await reqAddOrUpdateShopCart(skuId, skuNum);
    return res.code === 200 ? "添加成功" : Promise.reject(new Error("添加失败"));
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
