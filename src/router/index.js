import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/forms",
    name: "forms",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms" */ "../views/Forms.vue"),
  },
  {
    path: "/EchartDemo",
    name: "EchartDemo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "EchartDemo" */ "../views/EchartDemo.vue"),
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
  // 切换路由后滚动条置顶
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

// router.beforeEach((to, from, next) => {
//   const resToken = window.sessionStorage.getItem("token");
//   if (resToken) {
//     //toekn存在
//     if (to.path === "/login") {
//       //token存在，并且是login页面
//       next("/");
//     } else {
//       //token存在，不是login页面
//       next({ replace: true });
//     }
//   } else {
//     if (to.path == "/login") {
//       //token不存在，并且是login页面
//       next();
//     } else {
//       //token不存在，不是login页面
//       next("/login");
//     }
//   }
// });

export default router;
