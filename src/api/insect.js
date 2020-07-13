import axios from "axios";
// import service from "@/utils/request.js";
/**
 * 首页接口
 */
// 实况天气
const CITYID = "101080403";
export const reqWeather = () => {
  return axios.request({
    type: "get",
    url:
      "https://tianqiapi.com/api?version=v6&appid=41624998&appsecret=0X3izBoB&cityid=" +
      CITYID
  });
};
// 七日天气
export const reqWeatherMsg = () => {
  return axios.request({
    type: "get",
    url:
      "https://tianqiapi.com/api?version=v1&appid=41624998&appsecret=0X3izBoB&cityid=" +
      CITYID
  });
};
