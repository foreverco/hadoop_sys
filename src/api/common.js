// import { newsList } from "@/api/news";
import { reactive } from "@vue/composition-api";
import service from "../utils/request";
export function common() {
  const newsObj = reactive({
    item: []
  });
  // const getNewsList = () => {
  //   newsList()
  //     .then(res => {
  //       console.log("common的res");
  //       console.log(res.data.data);
  //       newsObj.item = res.data.data;
  //     })
  //     .catch(() => {});
  // };
  return {
    // getNewsList,
    newsObj
  };
}

/**
 *用户列表接口
 *
 * @export
 * @param {*
 * Ctrl+Alt+D
 * } params
 * @returns
 */
export function loadTableData(params) {
  return service.request({
    method: params.method || "get",
    url: params.url,
    params: params.data
    // baseURL: Config.proxy.zxy
  });
}

/**
 * 获取传感器ID
 *reqareas 获取区域ID
 *reqStatitions 获取采集站

 
 */
export function reqlargeArea() {
  return service.request({
    method: "get",
    url: "/device/common/largeArea"
  });
}

export function reqareas(params) {
  return service.request({
    method: "get",
    url: "/device/common/areas",
    params: params
  });
}

// 采集站下拉数据
export function reqStatitions(params) {
  return service.request({
    method: "get",
    url: "/device/common/collectStatitions",
    params: params
  });
}
// 传感器下拉数据
export function reqSensors(params) {
  return service.request({
    method: "get",
    url: "/device/common/sensors",
    params: params
  });
}

/* 根据id获取传感器信息 */

export function reqSensorsMsg(params) {
  console.log(params);
  return service.request({
    method: "get",
    url: `/device/sensor/sensor/${params}`,
    params: params
  });
}

/* 根据id获取继电器信息 */

export function reqRelaysMsg(params) {
  console.log(params);
  return service.request({
    method: "get",
    url: `/device/relay/relay/${params}`,
    params: params
  });
}

// 采集站下拉数据
export function reqControls(params) {
  return service.request({
    method: "get",
    url: "/device/common/controlStations",
    params: params
  });
}

// 传感器下拉数据
export function reqRelays(params) {
  return service.request({
    method: "get",
    url: "/device/common/relays",
    params: params
  });
}
/* 手动控制 */
export function edithandle(data) {
  console.log(data);
  return service.request({
    method: "PUT",
    url: "/setting/log",
    data: data
  });
}
/* 根据id获取继电器详情 */
export function sengetrelay(params) {
  return service.request({
    method: "get",
    url: "/device/relay/getRelayBySensorid",
    params: params
  });
}
