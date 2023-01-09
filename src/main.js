import Vue from "vue";
import App from "./App.vue";
import router from "@/router";

Vue.config.productionTip = false;

import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

import store from "@/store";
import "@/mock/mockServe";
import "swiper/css/swiper.css";
import { MessageBox, Button } from "element-ui";
Vue.use(Button);
import * as API from "@/api";
Vue.prototype.$api = API;
Vue.prototype.$msgBox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store,
}).$mount("#app");
