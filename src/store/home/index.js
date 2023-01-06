import { reqCategoryList } from "@/api";

const state = {
  categoryList: [],
};
const mutations = {
  CATEGORYLIST(state, newVal) {
    state.categoryList = newVal;
  },
};
const actions = {
  async categoryList({ commit }) {
    let res = await reqCategoryList();
    if (res.code === 200) {
      commit("CATEGORYLIST", res.data);
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
