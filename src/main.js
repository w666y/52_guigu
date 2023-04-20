//入口js
import Vue from "vue";
// import { RouterLink, RouterView } from "vue-router";
import App from "./App.vue";
import router from "./router";


//写在vue项目的main.js中，意思是阻止你显示显示生产模式的消息
Vue.config.productionTip = false;
new Vue({
  el:"#app",
  router, //两个方面的结果, 1. 多了几个组件标签, <router-link>,<router-view>
  //2.$router ,$route
  render: (h) => h(App),
});



