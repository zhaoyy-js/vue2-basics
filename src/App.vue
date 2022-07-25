<template>
  <div id="app">
    <router-view />
    <div>{{ address }}</div>
    <div>{{ linkUrl }}</div>
    <div>{{ $log(env) }}</div>
    <div>token:{{ token }}</div>
    <div>{{ $log(userInfo, "userInfo") }}</div>
    <div>{{ $log(doneTodos, "doneTodos") }}</div>
    <div>{{ $log("doneTodos2", doneTodos2) }}</div>

    <div class="wrap">
      <div class="wrap__count" @click="counts">count</div>
      <div class="wrap__num">{{ count }}</div>
    </div>

    <div class="roleInfo">
      <p class="roleInfo__btn" @click="changeActions">actions</p>
      <p>{{ roleInfo.role }}</p>
    </div>
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

<style lang="scss">
#app {
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__count {
      width: 150px;
      height: 35px;
      line-height: 35px;
      border-radius: 4px;
      background: orange;
      color: white;
      text-align: center;
      font-size: 16px;
    }
    &__num {
      margin-right: 30px;
    }
  }

  .roleInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__btn {
      width: 100px;
      height: 35px;
      line-height: 35px;
      border-radius: 4px;
      background: gainsboro;
      color: dodgerblue;
      font-size: 14;
      text-align: center;
    }
  }
}
</style>
