import Home from "@/views/Home";
import Search from "@/views/Search";
import Register from "@/views/Register";
import Login from "@/views/Login";
import Detail from "@/views/Detail";
import AddCartSuccess from "@/views/AddCartSuccess";
import ShopCart from "@/views/ShopCart";
import Trade from "@/views/Trade";
import Pay from "@/views/Pay";
import PaySuccess from "@/views/PaySuccess";
import Center from "@/views/Center";
import GroupOrder from "@/views/Center/GroupOrder";
import MyOrder from "@/views/Center/MyOrder";

export default [
  {
    name: "home",
    path: "/home",
    component: Home,
    meta: { showFooter: true },
  },
  {
    name: "center",
    path: "/center",
    component: Center,
    children: [
      {
        name: "myOrder",
        path: "myOrder",
        component: MyOrder,
      },
      {
        name: "groupOrder",
        path: "groupOrder",
        component: GroupOrder,
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
    component: Search,
    meta: { showFooter: true },
  },
  {
    name: "register",
    path: "/register",
    component: Register,
    meta: { showFooter: false },
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: { showFooter: false },
  },
  {
    name: "detail",
    path: "/detail/:skuid",
    component: Detail,
    meta: { showFooter: true },
  },
  {
    name: "addCartSuccess",
    path: "/addCartSuccess",
    component: AddCartSuccess,
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path.indexOf("/detail")) next();
      else next(false);
    },
  },
  {
    name: "shopCart",
    path: "/shopCart",
    component: ShopCart,
    meta: { showFooter: true },
  },
  {
    name: "trade",
    path: "/trade",
    component: Trade,
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path === "/shopCart") next();
      else next(false);
    },
  },
  {
    name: "pay",
    path: "/pay",
    component: Pay,
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path === "/trade") next();
      else next(false);
    },
  },
  {
    name: "paysuccess",
    path: "/paySuccess",
    component: PaySuccess,
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path === "/pay") next();
      else next(false);
    },
  },
  { path: "*", redirect: "/home" },
];
