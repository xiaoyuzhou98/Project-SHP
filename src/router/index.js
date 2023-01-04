import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/views/Home";
import Search from "@/views/Search";
import Register from "@/views/Register";
import Login from "@/views/Login";

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      () => {},
      () => {},
    );
  }
};

VueRouter.prototype.replace ==
  function (location, resolve, reject) {
    if (resolve && reject) {
      originReplace.call(this, location, resolve, reject);
    } else {
      originReplace.call(
        this,
        () => {},
        () => {},
      );
    }
  };
export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { showFooter: true },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: { showFooter: true },
    },
    {
      path: "/register",
      component: Register,
      meta: { showFooter: false },
    },
    {
      path: "/login",
      component: Login,
      meta: { showFooter: false },
    },
  ],
});
