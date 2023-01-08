import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

requests.interceptors.request.use((config) => {
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token;
  }

  nProgress.start(); //进度条开始
  return config;
});

requests.interceptors.response.use(
  (res) => {
    nProgress.done(); //进度条结束

    return res.data;
  },
  (error) => {
    return Promise.reject(new Error(error));
  },
);

export default requests;
