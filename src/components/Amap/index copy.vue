<template>
  <div class="amap-wrap">
    <div class="input-card">
      <!-- <div class="input-item">
        <input type="radio" name="func" checked="" value="marker" /><span
          class="input-text"
          >画点</span
        >
        <input type="radio" name="func" value="polyline" /><span
          class="input-text"
          >画折线</span
        >
        <input type="radio" name="func" value="polygon" /><span
          class="input-text"
          style="width:5rem;"
          >画多边形</span
        >
      </div>
      <div class="input-item">
        <input type="radio" name="func" value="rectangle" /><span
          class="input-text"
          >画矩形</span
        >
        <input type="radio" name="func" value="circle" /><span
          class="input-text"
          >画圆</span
        >
      </div> -->
      <el-radio-group v-model="mapRadio" @change="mapRadioChange(mapRadio)">
        <el-radio label="marker">画点</el-radio>
        <el-radio label="polyline">画折线</el-radio>
        <el-radio label="polygon">画多边形</el-radio>
        <el-radio label="rectangle">画矩形</el-radio>
        <el-radio label="circle">画圆</el-radio>
      </el-radio-group>
      <div class="input-item">
        <!-- <input id="clear" type="button" class="btn" value="清除" />
        <input id="close" type="button" class="btn" value="关闭绘图" /> -->
        <el-button type="danger" @click="clear">清除</el-button>
        <el-button type="danger" @click="close">关闭绘图</el-button>
      </div>
    </div>
    <el-amap
      vid="amapContainer"
      :zoom="zoom"
      class="amap-demo"
      :events="events"
    >
    </el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Amap",
  props: {
    pointList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      map: null,
      mouseTool: null,
      mapRadio: "marker",
      overlays: [],
      marker: null,
      zoom: 18,
      // amapManager,
      events: {
        click: e => {
          console.log(e);
        }
      }
    };
  },
  mounted() {
    console.log(AMapManager);
    this.initMap();
  },
  methods: {
    // 初始化地图
    initMap() {
      lazyAMapApiLoaderInstance.load().then(() => {
        // your code ...
        this.map = new AMap.Map("amapContainer", {
          center: [114.039128, 41.895942],
          zoom: this.zoom,
          pitch: 60, // 地图俯仰角度，有效范围 0 度- 83 度
          viewMode: "3D" // 地图模式
          // mapStyle: "amap://styles/darkblue" //设置地图的显示样式
        });
        this.getPoints();
        this.mapClick();
        this.mouseTool = new AMap.MouseTool(this.map);
        // var overlays = [];

        console.log(this.overlays);
        this.draw(this.mapRadio);
      });
    },
    // 点位坐标
    getPoints() {
      console.log(this.pointList);
      if (this.pointList && this.pointList.length > 0) {
        this.pointList.forEach(item => {
          console.log(item);
          this.marker = new AMap.Marker({
            position: new AMap.LngLat(item.lg, item.la), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "北京",
            clickable: true
          });
          // 将创建的点标记添加到已有的地图实例：
          this.map.add(this.marker);
          AMap.event.addListener(this.marker, "click", function() {
            console.log(this.marker.Ce);
            alert(this.marker.Ce.title);
          });
        });
      }
    },
    // 区域坐标
    getArea() {},
    mapRadioChange(e) {
      console.log(e);
      this.draw(e);
    },
    /* 清除 */
    clear() {
      console.log(this.overlays);
      this.map.remove(this.overlays);
      this.overlays = [];
      console.log(123);
    },
    /* 关闭绘制 */
    close() {
      this.mouseTool.close(true); //关闭，并清除覆盖物
      this.mapRadio = "";
    },
    mapClick() {
      // this.map.on("click", e => {
      //   console.log(e);
      // });
    },
    /* 绘制 */
    draw(type) {
      let _this = this;
      this.mouseTool.on("draw", function(e) {
        _this.overlays.push(e.obj);
      });
      switch (type) {
        case "marker": {
          this.mouseTool.marker({
            //同Marker的Option设置
            title: "南京"
          });
          break;
        }
        case "polyline": {
          console.log(this.mouseTool);
          this.mouseTool.polyline({
            strokeColor: "#80d8ff"
            //同Polyline的Option设置
          });
          break;
        }
        case "polygon": {
          this.mouseTool.polygon({
            fillColor: "#00b0ff",
            strokeColor: "#80d8ff"
            //同Polygon的Option设置
          });
          break;
        }
        case "rectangle": {
          this.mouseTool.rectangle({
            fillColor: "#00b0ff",
            strokeColor: "#80d8ff"
            //同Polygon的Option设置
          });
          break;
        }
        case "circle": {
          this.mouseTool.circle({
            fillColor: "#00b0ff",
            strokeColor: "#80d8ff"
            //同Circle的Option设置
          });
          break;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.amap-wrap {
  height: 100%;
  position: relative;
  .input-card {
    background: #00000080;
    position: absolute;
    z-index: 103;
    bottom: 0;
    right: 0;
    padding: 20px 0px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // width: 400px;
    .input-item {
      margin-top: 20px;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
