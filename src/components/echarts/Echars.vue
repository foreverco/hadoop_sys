<template>
  <div
    class="layout_chart"
    @mouseleave="chartmouseleave"
    @mouseenter="chartmouseenter"
  >
    <div id="myChart" ref="chart"></div>
  </div>
</template>

<script>
export default {
  props: {
    chartType: {
      type: String
    },
    option: {
      type: Object,
      default: () => {}
    },
    echartsTem: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    option(option) {
      this.drawLine(option);
    },
    echartsTem(newval) {
      // console.log(123123123);
      // console.log(newval);
      this.init();
      this.drawLine(newval);
    }
  },
  mounted() {
    // this.init();
    window.addEventListener("resize", () => {
      this.myChart.resize();
    });
  },
  methods: {
    // 初始化
    init() {
      let myChart = this.$echarts.init(this.$refs.chart);
      this.myChart = myChart;
      // this.drawLine();
    },
    drawLine(obj) {
      // 绘制图表
      this.myChart.setOption(this.option);
      if (this.chartType == "weather") {
        // this.myChart.showLoading();
        let optionTemp = {
          date: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          tem: [3, 14, 25, 20, 16, 28, 30, 15, 10]
        };
        if (obj) {
          optionTemp.date = [];
          optionTemp.tem = [];
          // console.log(obj);
          obj.hours.forEach(item => {
            optionTemp.date.push(item.day);
            optionTemp.tem.push(item.tem.slice(0, 2));
          });
        }
        // console.log(optionTemp);
        // console.log(obj);
        this.myChart.setOption({
          xAxis: { data: optionTemp.date },
          series: [
            {
              data: optionTemp.tem
            }
          ]
        });
        // 高亮开始
        if (obj.nowTem) {
          let temIndex = obj.hours.findIndex(x => x.day == obj.nowTem.day);
          // console.log(temIndex);
          this.highlightFn(temIndex);
        }

        // this.$store.dispatch("getWeatherMsg").then(res => {
        //   optionTemp.date = [];
        //   optionTemp.tem = [];
        //   res.hours.forEach((item, index) => {
        //     if (index < 7) {
        //       let date = item.day.substring(item.day.length - 3);
        //       optionTemp.date.push(date);
        //       let tem = item.tem.substring(0, item.tem.length - 1);
        //       optionTemp.tem.push(tem);
        //     }
        //   });
        //   console.log(optionTemp);
        //   this.myChart.hideLoading();
        //   this.myChart.setOption({
        //     xAxis: { data: optionTemp.date },
        //     series: [
        //       {
        //         data: optionTemp.tem
        //       }
        //     ]
        //   });
        //   let myDate = new Date().getHours();
        //   let result, dataIndex;
        //   // 与天气数据比较,找出离当前时间最近的时间的index位置
        //   this.myChart.getOption().xAxis[0].data.forEach((date, index) => {
        //     date = date.substring(0, 2);
        //     result = myDate - date;
        //     if (result < 3 && result >= 0) {
        //       // console.log(result);
        //       dataIndex = index;
        //       return;
        //     }
        //   });
        //   // 高亮开始
        //   this.myChart.dispatchAction({
        //     type: "highlight",
        //     seriesIndex: 0,
        //     dataIndex: dataIndex
        //   });
        //   // 高亮结束
        //   console.log(this.myChart.getOption());
        //   console.log(this.myChart.dispatchAction.seriesIndex);
        // });
      }
    },
    highlightFn(e) {
      // 高亮开始
      this.myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e
      });
    },
    chartmouseleave() {
      if (this.echartsTem.nowTem) {
        let temIndex = this.echartsTem.hours.findIndex(
          x => x.day == this.echartsTem.nowTem.day
        );
        this.highlightFn(temIndex);
      }
    },
    chartmouseenter() {
      if (this.echartsTem.nowTem) {
        let temIndex = this.echartsTem.hours.findIndex(
          x => x.day == this.echartsTem.nowTem.day
        );
        this.highlightFn(temIndex);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.layout_chart {
  width: 100%;
  height: 100%;
  // background-color: #0000ff;
}
#myChart {
  width: 100%;
  height: 100%;
}
</style>
