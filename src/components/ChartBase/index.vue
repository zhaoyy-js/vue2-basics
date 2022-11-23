<template>
  <div ref="eChart" class="chart-base" :class="{ ready: ready }"></div>
</template>

<script>
import * as echarts from "echarts";

function autoChart(chart, option, app) {
  const interval = setInterval(function () {
    const dataLen = option.series[0].data.length;

    // 取消之前高亮的图形
    chart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: app.currentIndex,
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    // 高亮当前图形
    chart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: app.currentIndex,
    });
    // 显示 tooltip
    chart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: app.currentIndex,
    });
  }, 1000);
  return function () {
    clearInterval(interval);
  };
}

export default {
  name: "ChartBase",
  props: {
    data: Object,
    option: Object,
    autoTooltip: {
      type: Boolean,
      default: false,
    },
    loopOption: {
      type: Object,
      default() {
        return {
          loopSeries: true,
        };
      },
    },
    // 是否在数据更新时执行动画
    animateOnUpdate: {
      type: Boolean,
      default: false,
    },
    // 执行初始化时
    handleInit: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      instance: null,
      ready: false,
      ratio: 1,
    };
  },
  methods: {
    initEchart() {
      // 清除自动轮播
      this.clearLoop && this.clearLoop();
      if (this.instance) {
        this.instance.clear();
      } else {
        this.instance = echarts.init(this.$refs.eChart);
      }
      this.handleInit && this.handleInit(this.instance, echarts);
      this.instance.showLoading();
      this.instance.setOption(this.option);

      if (this.autoTooltip) {
        const option = this.instance.getOption();
        this.clearLoop = autoChart(this.instance, option, {
          currentIndex: -1,
        });
      }
      this.instance.hideLoading();
      this.ready = true;
      this.$emit("ready", this.instance);
    },
    updateChart() {
      const { animateOnUpdate, data, autoTooltip } = this;
      this.instance.showLoading();
      // 清除自动轮播
      this.clearLoop && this.clearLoop();
      this.instance.setOption(data);

      /**
       * 如果需要执行动画
       * 则执行 一遍清除配置、设置配置 操作
       */
      if (animateOnUpdate) {
        const options = this.instance.getOption();
        this.instance.clear();
        this.instance.setOption(options, true);
      }

      if (autoTooltip) {
        const option = this.instance.getOption();
        this.clearLoop = autoChart(this.instance, option, {
          currentIndex: -1,
        });
      }
      this.instance.hideLoading();
    },
    updateSize() {
      this.instance && this.instance.resize();
    },
  },
  watch: {
    data() {
      this.updateChart();
    },
  },
  mounted() {
    this.initEchart();
    this.data && Object.keys(this.data).length && this.updateChart();
    window.addEventListener("resize", this.updateSize);
  },
  beforeDestroy() {
    this.instance = null;
    this.clearLoop && this.clearLoop();
    window.removeEventListener("resize", this.updateSize);
  },
};
</script>

<style lang="scss"></style>
