<template>
  <div>
    <el-input
      style="margin-bottom: 10px"
      v-model="input"
      placeholder="请输入内容"
    ></el-input>
    <el-button type="primary" @click.prevent="search">搜索</el-button>
    <el-button @click.prevent="resetHandler">重置</el-button>
  </div>
</template>

<script>
export default {
  name: "searchForm",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    search() {
      this.$emit("search",this.input);
    },
    resetHandler() {
      this.input = "";
    },
  },
};
</script>

<style lang="less" scoped></style>
