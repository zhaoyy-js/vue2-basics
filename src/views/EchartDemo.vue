<template>
  <section>
    <div class="main-right">
      <chart-base
        :option="option"
        :data="optionData"
        style="width: 680px; height: 360px"
      ></chart-base>
    </div>
    <el-form
      :model="feValidateForm"
      ref="fe"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="FE:" prop="fe">
        <el-input
          v-model="feValidateForm.fe"
          placeholder="请您输入x-x格式的数据"
        ></el-input>
      </el-form-item>
    </el-form>
  </section>
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
  data() {
    return {
      option,
      feValidateForm: {
        fe: "",
      },
      rules: {
        fe: [{ validator: this.validatePass, trigger: "blur" }],
      },
    };
  },
  computed: {
    optionData() {
      // *:更新图标数据。
      return this.option;
    },
  },
  methods: {
    changeHandler(value) {
      this.numberTwo = Number(value);
    },
    validatePass(_, value, callback) {
      let felist = value.split("-");
      let filterData = value.split("").filter((item) => {
        if (Object.is(item, "-")) {
          return item;
        }
      });
      if (
        filterData.length !== 1 ||
        felist[0] > 99 ||
        felist[1] > 99 ||
        felist[1] == "" ||
        Object.is(parseInt(felist[0]), NaN) ||
        Object.is(parseInt(felist[1]), NaN)
      ) {
        callback(new Error("格式不正确，请输入x-x格式 并且x为数字小于100"));
      } else {
        this.feValidateForm.fe = `${Number(felist[0])} - ${Number(felist[1])}`;
        callback();
      }
    },
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
