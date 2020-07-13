<template>
  <div class="layout_chart">
    <p>{{ this.option.title }}</p>
    <div id="myChart" ref="chart"></div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    option(option) {
      this.drawLine(option);
    }
  },
  methods: {
    // 初始化
    init() {
      let myChart = this.$echarts.init(this.$refs.chart);
      this.myChart = myChart;
      this.drawLine();
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    drawLine() {
      const series = [];

      console.log(this.option);
      // console.log(this.option.data);
      // const test1 = [[], ["8.2", "10.3", null, null, null, null, null]];
      // const test2 = [[], ["5", "2.8", null, null, null, null, null]];
      // this.option.data = { test1, test2 };
      console.log(this.option.data);
      Object.keys(this.option.data).forEach(key => {
        // console.log(key, this.option.data[key][1]);
        const optionSeries = {
          data: [],
          type: "line",
          smooth: true,
          name: "",
          symbol: "circle",
          symbolSize: 8,
          label: {
            normal: {
              offset: [0, 0],
              show: true,
              formatter: "{c}",
              color: "#000"
            }
          }
        };
        optionSeries.data = this.option.data[key][1];
        optionSeries.name = key;
        series.push(optionSeries);
      });
      console.log(series);
      // this.option.forEach(item => {
      //   console.log(item);
      // });
      // 绘制图表
      this.myChart.setOption({
        grid: {
          top: "15%",
          right: "10%",
          left: "15%"
        },
        xAxis: [
          {
            type: "category",
            data: ["00:00", "4:00", "8:00", "12:00", "16:00", "20:00", "24:00"],
            // data: this.option.x,
            show: true,
            axisLabel: {
              interval: 0,
              rotate: 40
            }
          }
        ],
        yAxis: [
          {
            // data: ["现在", "12点", "1点", "2点", "3点", "4点", "5点"],
            show: true
          }
        ],
        tooltip: {
          trigger: "axis",
          formatter: "{b}\n\n\n{c}°"
        },
        series: series
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/reset.scss";
.layout_chart {
  width: 100%;
  height: 100%;
  // border: 1px solid red;
}
.layout_chart > p {
  // border: 1px solid blue;
  margin-top: 20px;
}
#myChart {
  width: 100%;
  height: 85%;
}
</style>
