<template>
  <el-button v-bind="$attrs" :loading="loadingStatus" @click="handleClick">
    <slot />
  </el-button>
</template>
<script>
import debounce from "@/utils/debounce.js";
export default {
  name: "myButton",
  props: {
    /* 
        是否开启loading
     */
    autoLoading: {
      type: Boolean,
      default: false,
    },
    /* 
        是否开启防抖
     */
    isDebounce: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    initClick() {
      if (this.autoLoading) {
        this.loadingStatus = true;
      }
      this.$emit("click", () => {
        this.loadingStatus = false;
      });
    },
    handleClick() {
      if (this.isDebounce) {
        debounce(this.initClick, 2000);
      } else {
        this.initClick();
      }
    },
  },
};
</script>
