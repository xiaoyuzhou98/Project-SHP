import { reqAddressInfo, reqOrderInfo } from "@/api";

const state = {
  addressInfo: [],
  orderInfo: {},
};
const mutations = {
  ADDRESSINFO(state, addressInfo) {
    state.addressInfo = addressInfo;
  },
  ORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo;
  },
};
const actions = {
  async getUserAddress({ commit }) {
    let res = await reqAddressInfo();
    if (res.code === 200) {
      commit("ADDRESSINFO", res.data);
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  async getUserOrder({ commit }) {
    let res = await reqOrderInfo();
    if (res.code === 200) {
      commit("ORDERINFO", res.data);
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
};
const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
