<template>
  <div id="insect">
    <div class="leftBox">
      <div class="titleBox">
        <Title titleTxt="地区虫情预警"></Title>
        <div>
          <el-input
            placeholder="请输入内容..."
            v-model="placeForm.content"
            class="input-with-select"
          >
            <el-button slot="append">搜索</el-button>
          </el-input>
        </div>
      </div>
      <div class="block">
        <div class="datebox">
          <span>
            日期选择
            <!-- {{ sevenwether }} -->
          </span>
          <el-select v-model="placeForm.year" placeholder="请选择">
            <el-option
              v-for="item in yearList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <!-- <div class="dateblock">
            <span class="demonstration">日期选择 </span>
            <el-date-picker
              v-model="placeForm.year"
              type="year"
              placeholder="选择年"
            >
            </el-date-picker>
          </div> -->
        </div>
        <div class="timelineBox">
          <el-timeline>
            <el-timeline-item
              :timestamp="item.date"
              placement="top"
              :icon="item.icon"
              :color="item.color"
              :size="item.size"
              v-for="(item, index) in timelineList"
              :key="index"
            >
              <div style="padding-left:15px">
                <p>害虫名称: {{ item.name }}</p>
                <p>危害作物: {{ item.plant }}</p>
                <p>预警级别: {{ item.level }}</p>
                <el-button
                  style="background:transparent;padding:2px 4px !important;font-size:12px"
                  size="mini"
                  @click="openDialog"
                  >查看详情</el-button
                >
              </div>
              <i
                v-if="item.level === '高'"
                style="color:#C71D24"
                class="el-icon-warning"
              ></i>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
    <div class="rightBox">
      <div class="titleBox">
        <Title titleTxt="自然天气预警"></Title>
        <ul class="daysList">
          <li
            v-for="(item, index) in daysType"
            :key="index"
            :class="{ daysactive: daysActive === index }"
            @click="changeDaysType(index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="block">
        <div class="tqtop">
          <SwiperVue
            :sevenwether="sevenwether"
            :echartsTem.sync="echartsTem"
          ></SwiperVue>
        </div>
        <div class="tqmid">
          <EcharsVue
            :option="weatherOption"
            :chartType="weather_msg"
            :echartsTem.sync="echartsTem"
          ></EcharsVue>
        </div>
        <div class="tqbot">
          <TableVue
            :config="configTable"
            :tableRow.sync="tableRow"
            ref="sensorTable"
          >
          </TableVue>
        </div>
      </div>
    </div>
    <DialogVue :flag.sync="dialog_stock" :editData.sync="editData"></DialogVue>
  </div>
</template>
<script>
import TableVue from "@/components/Table";
import SwiperVue from "@/components/SwiperVue";
import EcharsVue from "@/components/echarts/Echars.vue";
import DialogVue from "./dialog/dialog";
import { mapState } from "vuex";
export default {
  name: "Insect",
  components: {
    TableVue,
    SwiperVue,
    EcharsVue,
    DialogVue
  },
  computed: {
    ...mapState({
      sevenwether: state => state.insect.sevenwether
    })
  },
  data() {
    return {
      /* 弹框 */
      dialog_stock: false,
      editData: {},
      echartsTem: {},
      yearList: [
        {
          value: "2020",
          label: "2020年"
        },
        {
          value: "2019",
          label: "2019年"
        },
        {
          value: "2018",
          label: "2018年"
        }
      ],
      placeForm: {
        content: "",
        year: "2020"
      },
      timelineList: [
        {
          date: "2020年 1月",
          name: "蝗虫",
          plant: "黄芪,防风，板蓝根",
          level: "一般",
          icon: "el-icon-circle-plus",
          size: "large",
          color: "#face45"
        },
        {
          date: "2020年 1月",
          name: "蝗虫",
          plant: "黄芪,防风",
          level: "高",
          icon: "el-icon-circle-plus",
          size: "large",
          color: "#face45"
        },
        {
          date: "2020年 1月",
          name: "蝗虫",
          plant: "黄芪,防风",
          level: "高",
          icon: "el-icon-circle-plus",
          size: "large",
          color: "#face45"
        },
        {
          date: "2020年 1月",
          name: "蝗虫",
          plant: "黄芪,防风",
          level: "一般",
          icon: "el-icon-circle-plus",
          size: "large",
          color: "#face45"
        },
        {
          date: "2020年 1月",
          name: "蝗虫",
          plant: "黄芪,防风",
          level: "一般",
          icon: "el-icon-circle-plus",
          size: "large",
          color: "#face45"
        },
        {
          date: "2020年 1月",
          name: "蝗虫",
          plant: "黄芪,防风",
          level: "高",
          icon: "el-icon-circle-plus",
          size: "large",
          color: "#face45"
        },
        {
          date: "2020年 1月",
          name: "蝗虫",
          plant: "黄芪,防风",
          level: "一般",
          icon: "el-icon-circle-plus",
          size: "large",
          color: "#face45"
        }
      ],
      /* 自然天气预警 */
      daysType: [{ name: "近7天" }, { name: "近15天" }],
      daysActive: 0,

      /* 表格 */
      // table选择的数据
      tableRow: {},
      configTable: {
        // 多选框
        selection: false,
        // 翻页记录
        recordCheckbox: false,
        isLoadingData: false,
        // 表头
        tHead: [
          // {
          //   label: "...",
          //   columnType: "expand",
          //   slotname: "tabelmsg"
          // },
          { label: "灾害类型", field: "name" },
          { label: "预警类型", field: "no" },
          { label: "持续时间", field: "typeName" },
          { label: "灾害级别", field: "areaName" },
          { label: "预防措施", field: "collectionName", width: "130" }
          // { label: "安装时间", field: "installTime", width: "130" },
          // { label: "负责人", field: "principalPerson" },
          // { label: "负责人电话", field: "contactNumber", width: "130" },
          // {
          //   label: "操作",
          //   columnType: "slot",
          //   slotname: "operation",
          //   width: "170"
          // }
        ],
        // 请求接口参数
        requestData: {
          url: "getSensorList",
          method: "get",
          data: {
            page: 1,
            pageSize: 6
          }
        },
        pagination: {
          show: false
        }
        // paginationLayout: {
        //   layout: "prev, pager, next, jumper,total, sizes"
        // }
      },
      /* echarts */
      weather_msg: "weather",
      weatherOption: {
        grid: {
          top: "25%",
          right: "8%",
          left: "8%",
          bottom: "5%"
        },
        xAxis: [
          {
            type: "category",
            show: false
          }
        ],
        yAxis: [
          {
            show: false
          }
        ],
        tooltip: {
          trigger: "axis",
          formatter: "{b}\n\n\n{c}°"
        },
        series: [
          {
            type: "line",
            smooth: true,
            name: "天气",
            color: "#fff",
            // symbol: "image://" + yuan,
            // symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              borderColor: "#F1C15F",
              borderWidth: 2,
              shadowColor: "rgba(0, 0, 0, .3)"
            },
            label: {
              normal: {
                offset: [0, 35],
                show: true,
                formatter: "{b}\n\n\n{c}°",
                color: "#fff"
              }
            },
            // 高亮样式
            emphasis: {
              itemStyle: {
                color: "#F1C15F80",
                borderWidth: 0
              },
              label: {
                show: true,
                formatter: "当前\n\n\n{c}°",
                color: "#F1C15F"
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    changeDaysType(index) {
      this.daysActive = index;
    },
    openDialog() {
      this.dialog_stock = true;
    }
  },
  mounted() {
    this.$store.dispatch("insect/getsevenWeather");
  }
};
</script>
<style lang="scss">
#insect {
  .el-input-group {
    line-height: normal;
    display: inline-table;
    width: 390px;
    border-collapse: separate;
    border-spacing: 0;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    background-color: transparent;
    /* color: #909399; */
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 0;
    // height: 300px;
    /* border-radius: 0.020833rem; */
    padding: 0 0.104167rem;
    width: 0.005208rem;
    white-space: nowrap;
  }
  .el-input-group__append button.el-button,
  .el-input-group__append div.el-select .el-input__inner,
  .el-input-group__append div.el-select:hover .el-input__inner,
  .el-input-group__prepend button.el-button,
  .el-input-group__prepend div.el-select .el-input__inner,
  .el-input-group__prepend div.el-select:hover .el-input__inner {
    border-color: $maincolor;
    background-color: $maincolor;
    color: #ffffff;
    border-radius: 0 5px 5px 0;
    // height: 30px;
    // line-height: 30px;
    // height: 30px;
    // border-top: 0;
    // border-bottom: 0;
  }
  .el-input__inner {
    -webkit-appearance: none;
    background-color: transparent;
    background-image: none;
    border-radius: 0;
    border: 1px solid #ffffff50;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;

    outline: 0;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }
  .el-input__icon {
    height: 100%;
    width: 0.130208rem;
    text-align: center;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    line-height: 30px;
    height: 30px;
  }
  .block {
    // border: 1px solid blue;
    background: $mainbgF20;
    height: calc(100vh - 165px);
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .datebox {
      position: absolute;
      top: 30px;
      right: 25px;
      z-index: 100;
      color: #ffffff;

      .el-input {
        width: 120px;
        .el-input__inner {
          color: #fff;
          font-size: 12px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
    .timelineBox {
      // border: 1px solid red;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      height: calc(100vh - 215px);
      width: 100%;
      overflow: auto;
      position: relative;
    }
    .el-timeline {
      width: 50%;
      position: absolute;
      top: 30px;
      .el-timeline-item {
        position: relative;
        padding-bottom: 0.104167rem;
        width: 60%;
        .el-timeline-item__wrapper {
          border: 1px solid #00b6a880;
          box-shadow: inset 2px 2px 10px 0 $maincolor;
          padding-left: 0;
          padding-bottom: 15px;
          position: relative;
          i {
            // border: 1px solid red;
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 18px;
          }
          p {
            // border: 1px solid red;
            padding: 0;
            margin: 5px 0;
            letter-spacing: 5px;
          }
          .el-timeline-item__timestamp.is-top {
            background: $maincolor;
            color: #ffffff;
            padding: 5px;
            font-size: 22px;
          }
        }
        &:nth-child(odd) {
          .el-timeline-item__wrapper {
            left: -120%;
          }
        }
        &:nth-child(even) {
          .el-timeline-item__wrapper {
            left: 20%;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
#insect {
  height: 100%;
  position: relative;
  .titleBox {
    height: 35px;
    // background: #00000050;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .leftBox {
    width: 55%;
    height: 100%;
    position: absolute;
    left: 0;
    .block {
      align-items: flex-end;
    }
    // border: 1px solid blue;
  }
  .rightBox {
    width: 43.5%;
    height: 100%;
    position: absolute;
    right: 0;
    // border: 1px solid blue;
    .titleBox {
      .daysList {
        // border: 1px solid red;
        height: 100%;
        li {
          float: left;
          height: 100%;
          border: 1px solid $maincolor;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 10px;
          &:first-child {
            border-radius: 5px 0 0 5px;
          }
          &:last-child {
            border-radius: 0 5px 5px 0;
          }
          &:hover {
            cursor: pointer;
            background: #00b6a820;
          }
          &.daysactive {
            background: $maincolor;
          }
        }
      }
    }
    .block {
      > div {
        width: 100%;
      }
      .tqtop {
        height: 40%;
        // background: red;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        // justify-content: center;
      }
      .tqmid {
        height: 20%;
        // background: blue;
      }
      .tqbot {
        height: 40%;
        // background: yellow;
        overflow: auto;
        padding: 20px;
      }
    }
  }
}
</style>
