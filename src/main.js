import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionApi from "@vue/composition-api";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

//高德地图
import "./plugin/aMap";

// 全局组件
import "./components/TitleTxt";

import "lib-flexible";

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
