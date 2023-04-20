// 路由器对象模块
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Order from "../views/Order/Order.vue";
import Search from "../views/Search/Search.vue";
import User from "../views/User/User.vue";
import Login from "../views/Login/Login.vue";
 
// 声明使用插件
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Home,
    meta: {
      showFooter :true
    }
  },
  {
    path: "/order",
   
    component: Order,
    meta: {
      showFooter :true
    }
  },
  {
    path: "/search",
   
    component: Search,
    meta: {
      showFooter :true
    }
  },
  {
    path: "/user",
   
    component: User,
    meta: {
      showFooter :true
    }
  },
  {
    path: "/login",
   
    component: Login,
  },
  // 默认显示home路由
  {
    path: "/",
    
    redirect: '/home',
  },

  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];
// VueRouter 构造函数
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
