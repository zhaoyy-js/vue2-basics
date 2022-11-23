<template>
  <div>
    <div class="home__btn" @click="login">登录</div>
  </div>
</template>

<script>
import { validate } from "@/request/api";
export default {
  name: "Login",
  methods: {
    async login() {
      // try {
      //   let params = {
      //     linkToken: "dasdasdasdas",
      //   };
      //   const res = await validate(params);
      //   console.log(res);
      // } catch (error) {
      //   console.log(error);
      // }
      // window.sessionStorage.setItem("token", "登录成功");
      this.$router.replace({
        path: "/home",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__btn {
    width: 300px;
    height: 45px;
    line-height: 45px;
    background: pink;
    border-radius: 4px;
    text-align: center;
  }
}
</style>
