<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import mutations from "./store/mutations";

export default {
  name: "App",
  data() {
    return {
      address: process.env.VUE_APP_DEMO,
      linkUrl: process.env.VUE_APP_BASE_URL_APIURL,
      env: process.env,
      mutationList: {
        id: 0,
        name: "韩信",
      },
    };
  },
  components: {},
  computed: {
    name() {
      return this.data;
    },
    ...mapState(["token", "userInfo", "count"]), //读取state信息
    ...mapGetters(["doneTodos", "doneTodos2", "roleInfo"]),
  },
  methods: {
    // 调用方式1
    ...mapMutations(["SOME_MUTATION"]),
    counts() {
      this.SOME_MUTATION(this.mutationList);
    },
    // 调用方式2
    // counts() {
    //   this.$store.commit("SOME_MUTATION", this.mutationList);
    // },

    changeActions() {
      this.$store.dispatch("actionB");
    },
  },
};
</script>
