import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store/store";
import "normalize.css/normalize.css";
import "@/styles/index.scss";
import "amfe-flexible/index.js";
import "@/icons";
Vue.config.productionTip = false;

import VcToast from "@/components/toast";
// 加载组件
Vue.use(VcToast);
// register global utility filters.
import * as filters from "./filters";
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");