import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/style/init.css"

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$log = window.console.log; // 调试模板

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
