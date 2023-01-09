import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/api";

const state = {
  token: localStorage.getItem("TOKEN") || "",
  code: "",
  userInfo: {},
};
const mutations = {
  CODE(state, code) {
    state.code = code;
  },
  USER(state, token) {
    state.token = token;
  },
  USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  CLEAR(state) {
    state.token = "";
    state.userInfo = {};
    localStorage.removeItem("TOKEN");
  },
};
const actions = {
  async getCode({ commit }, phone) {
    let res = await reqGetCode(phone);
    if (res.code === 200) {
      commit("CODE", res.data);
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },

  async userRegister({ commit }, user) {
    let res = await reqUserRegister(user);
    if (res.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error(res.message));
    }
  },

  async userLogin({ commit }, user) {
    let res = await reqUserLogin(user);
    if (res.code === 200) {
      commit("USER", res.data.token);
      localStorage.setItem("TOKEN", res.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },

  async reqUserInfo({ commit }) {
    let res = await reqUserInfo();
    if (res.code === 200) {
      commit("USERINFO", res.data);
      return "ok";
    } else if (res.code !== 208) {
      return Promise.reject(new Error("failed"));
    }
  },

  async userLogout({ commit }) {
    let res = await reqLogout();
    if (res.code === 200) {
      commit("CLEAR");
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
