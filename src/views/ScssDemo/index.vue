<template>
  <div class="box">
    <h1>vue2</h1>
    <p>这是。。。</p>
    <div class="btn">确认提交</div>
    <div class="box-text l-size">
      从 Sass3.3 开始，可以在同一行中使用最近选择器引用(&)来实现高级选择器
    </div>
  </div>
</template>

<script>
export default {
  name: "ScssDemo",
  mounted() {
    console.log(this.$variables);
  },
};
</script>

<style lang="scss" scoped>
/* 
   引用css常量
 */
@import "@/styles/constant.scss";
.box {
  &-text {
    color: $sass-color;
    margin-top: 10px;
  }
  .btn {
    display: inline-block;
    width: $sass-width;
    height: $sass-height;
    border: $sass-border;
    background: $sass-background;
    color: $sass-color;
    text-align: $sass-textAlign;
    border-radius: $sass-borderRadius;
    line-height: 50px;
    cursor: $sass-pointer;

    &:hover {
      color: black;
    }
  }
}
</style>
