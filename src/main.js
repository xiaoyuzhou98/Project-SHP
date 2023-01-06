import Vue from "vue";
import App from "./App.vue";
import router from "@/router";

Vue.config.productionTip = false;

import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);

import store from "@/store";


new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
