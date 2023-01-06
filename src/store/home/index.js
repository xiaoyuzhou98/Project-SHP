import { reqGetCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";

const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const mutations = {
  CATEGORYLIST(state, newVal) {
    state.categoryList = newVal;
  },
  BANNERLIST(state, newVal) {
    state.bannerList = newVal;
  },
  FLOORLIST(state, newVal) {
    state.floorList = newVal;
  },
};
const actions = {
  async categoryList({ commit }) {
    let res = await reqGetCategoryList();
    if (res.code === 200) {
      commit("CATEGORYLIST", res.data);
    }
  },
  async bannerList({ commit }) {
    let res = await reqGetBannerList();
    if (res.code === 200) {
      commit("BANNERLIST", res.data);
    }
  },
  async floorList({ commit }) {
    let res = await reqGetFloorList();
    if (res.code === 200) {
      commit("FLOORLIST", res.data);
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
