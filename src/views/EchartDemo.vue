<template>
  <div class="main-right">
    <chart-base
      :option="option"
      :data="optionData"
      style="width: 680px; height: 360px"
    ></chart-base>
  </div>
</template>

<script>
import * as echarts from "echarts";

let option = {
  xAxis: {
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {},
  series: [
    {
      type: "bar",
      data: [23, 24, 18, 25, 27, 28, 25],
    },
  ],
};

import ChartBase from "@/components/ChartBase";
export default {
  name: "EchartDemo",
  components: {
    ChartBase,
  },
  computed: {
    optionData() {
      // *:更新图标数据。
      return this.option;
    },
  },
  data() {
    return {
      option,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-right {
  width: 680px;
  height: 360px;
  background: #ffffff;
  box-shadow: 0px 4px 7px 0px #eef1f5;
  border: 1px solid #ffffff;
}
</style>
