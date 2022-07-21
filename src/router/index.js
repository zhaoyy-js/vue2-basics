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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const resToken = window.sessionStorage.getItem("token");
  if (resToken) {
    //toekn存在
    if (to.path === "/login") {
      //token存在，并且是login页面
      next("/");
    } else {
      //token存在，不是login页面
      next({ replace: true });
    }
  } else {
    if (to.path == "/login") {
      //token不存在，并且是login页面
      next();
    } else {
      //token不存在，不是login页面
      next("/login");
    }
  }
});

export default router;
