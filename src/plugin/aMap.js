import Vue from "vue";
// 高德地图
// 高德离线地图
import VueAMap from "vue-amap";
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "6d8f1a9280c2da9afd0a270754d6c2c1",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor",
    "AMap.MouseTool",
    "AMap.Geocoder"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.15",
  uiVersion: "1.0.11"
});
