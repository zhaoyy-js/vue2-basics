<template>
  <div class="container">
    <header style="background: #f9cc9d">Header</header>
    <main style="background: #c3d08b">
      <div>环境变量：{{ this.env() }}</div>
    </main>
    <footer style="background: #2b93f5">Footer</footer>
  </div>
</template>

<script>
import { env } from "@/config";
export default {
  methods: {
    env,
  },
};
</script>
<style scoped lang="scss">
// 第三种方式
.container {
  height: 100vh;
  background: #f1f3f4;
  display: flex;
  flex-direction: column;
  header {
    text-align: center;
    height: 80px;
    line-height: 80px;
    width: 100%;
  }
  footer {
    text-align: center;
    height: 50;
    line-height: 50px;
    width: 100%;
  }
  // 内容区 130 其实就是 header和footer的高度
  main {
    flex-grow: 1;
    overflow-y: scroll;
  }
}
</style>
