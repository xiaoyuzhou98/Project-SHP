import Home from "@/views/Home";
import Search from "@/views/Search";
import Register from "@/views/Register";
import Login from "@/views/Login";
import Detail from "@/views/Detail";
import AddCartSuccess from "@/views/AddCartSuccess";

export default [
  {
    name: "home",
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
  },
  { path: "*", redirect: "/home" },
];
