import { reqGetCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

const state = {
  cartList: [],
};
const mutations = {
  CARTLIST(state, list) {
    state.cartList = list;
  },
};
const actions = {
  async getCartList({ commit }) {
    let res = await reqGetCartList();
    if (res.code === 200) {
      commit("CARTLIST", res.data);
    }
  },

  async deleteCartListById({ commit }, skuId) {
    let res = await reqDeleteCartById(skuId);
    if (res.code === 200) {
      return "ok";
    } else return Promise.reject(new Error("failed"));
  },

  async deleteAllCheckedCart({ dispatch, getters }) {
    let promises = [];
    getters.cartList.cartInfoList.forEach((item) => {
      if (item.isChecked === 1) {
        promises.push(dispatch("deleteCartListById", item.skuId));
      }
    });
    return Promise.all(promises);
  },

  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let res = await reqUpdateCheckedById(skuId, isChecked);
    if (res.code === 200) {
      return "ok";
    } else return Promise.reject(new Error("failed"));
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
