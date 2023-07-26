import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/index.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
];

let debug = process.env.NODE_ENV !== "production";
/**
 * @description ：重复点击相同路由，报错： Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location.
 * 解决方案如下
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: process.env.VUE_APP_MODE || "hash",
  strict: debug,
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});
export default router;
