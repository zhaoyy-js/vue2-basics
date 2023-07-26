import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import myButton from "@/components/myButton/index.vue";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/style/init.css";
import Debounce from "@/utils/debounce";

Vue.directive("debounceClick", {
  bind(el, binding, vnode, oldvnode) {},
  inserted: function (el, binding) {
    let delayTime = el.getAttribute("delay-time") || 1500; //设置延时时间，传入时间是为传入时间，否则默认
    el.onclick = Debounce(function () {
      binding.value();
    }, delayTime);
  },
});

Vue.use(ElementUI);
Vue.component("myButton", myButton);

Vue.config.productionTip = false;
Vue.prototype.$log = window.console.log; // 调试模板

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
