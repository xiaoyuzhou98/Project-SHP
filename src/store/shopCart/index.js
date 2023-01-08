import { reqGetCartList } from "@/api";

const state = {
  cartList: [],
};
const mutations = {
  CARTLIST(state, list) {
    state.cartList = list;
  },
};
const actions = {
  async GetCartList({ commit }) {
    let res = await reqGetCartList();
    if (res.code === 200) {
      commit('CARTLIST',res.data);
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
