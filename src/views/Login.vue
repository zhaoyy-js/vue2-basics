<template>
  <div>
    <div class="home__btn" @click="login">登录</div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      window.sessionStorage.setItem("token", "登录成功");
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
