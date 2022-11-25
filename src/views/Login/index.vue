<template>
  <div class="home">
    <div class="home__form">
      <login-form></login-form>
    </div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm";
export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url("../../assets/images/bac.jpg");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__form {
    box-sizing: border-box;
    padding-top: 70px;
    background: white;
    width: 600px;
    height: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
  }
}
</style>
