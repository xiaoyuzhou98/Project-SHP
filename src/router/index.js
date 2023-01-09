import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import routes from "./routes";

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
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
        location,
        () => {},
        () => {},
      );
    }
  };
let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {
    if (to.name === "login" || to.name === "register") {
      next("/home");
    } else if (name) {
      next();
    } else {
      try {
        await store.dispatch("user/reqUserInfo");
        next();
      } catch (err) {
        store.commit("user/CLEAR");
        alert(err.message);
        next("/login");
      }
    }
  } else {
    if (to.path.indexOf("/trade") !== -1 || to.path.indexOf("/center") !== -1 || to.path.indexOf("/pay") !== -1) {
      next("/login?redirect="+to.path);
    }
    next();
  }
});

export default router;
