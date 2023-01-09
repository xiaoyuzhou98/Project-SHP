export default [
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/Home"),
    meta: { showFooter: true },
  },
  {
    name: "center",
    path: "/center",
    component: () => import("@/views/Center"),
    children: [
      {
        name: "myOrder",
        path: "myOrder",
        component: () => import("@/views/Center/MyOrder"),
      },
      {
        name: "groupOrder",
        path: "groupOrder",
        component: () => import("@/views/Center/MyOrder"),
      },
      {
        path: "/center",
        redirect: "/center/myOrder",
      },
    ],
    meta: { showFooter: true },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: () => import("@/views/Center/MyOrder"),
    meta: { showFooter: true },
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/views/Register"),
    meta: { showFooter: false },
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/Login"),
    meta: { showFooter: false },
  },
  {
    name: "detail",
    path: "/detail/:skuid",
    component: () => import("@/views/Detail"),
    meta: { showFooter: true },
  },
  {
    name: "addCartSuccess",
    path: "/addCartSuccess",
    component: () => import("@/views/AddCartSuccess"),
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path.indexOf("/detail")) next();
      else next(false);
    },
  },
  {
    name: "shopCart",
    path: "/shopCart",
    component: () => import("@/views/ShopCart"),
    meta: { showFooter: true },
  },
  {
    name: "trade",
    path: "/trade",
    component: () => import("@/views/Trade"),
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path === "/shopCart") next();
      else next(false);
    },
  },
  {
    name: "pay",
    path: "/pay",
    component: () => import("@/views/Pay"),
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path === "/trade") next();
      else next(false);
    },
  },
  {
    name: "paysuccess",
    path: "/paySuccess",
    component: () => import("@/views/PaySuccess"),
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path === "/pay") next();
      else next(false);
    },
  },
  { path: "*", redirect: "/home" },
];
