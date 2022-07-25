<template>
  <div id="app">
    <router-view />
    <div>{{ address }}</div>
    <div>{{ linkUrl }}</div>
    <div>{{ $log(env) }}</div>
    <img src="@assets/03.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      address: process.env.VUE_APP_DEMO,
      linkUrl: process.env.VUE_APP_BASE_URL_APIURL,
      env: process.env,
    };
  },
  components: {},
  computed: {
    name() {
      return this.data;
    },
  },
};
</script>

<style lang="scss"></style>
