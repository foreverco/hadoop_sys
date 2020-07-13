import { reqWeatherMsg } from "@/api/insect";
const state = {
  sevenwether: []
};
const getters = {};
const mutations = {
  RECETIVE_SEVENWETHER(state, value) {
    state.sevenwether = value;
  }
};
const actions = {
  // 获取7日天气
  // getWeather({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     reqWeather().then(res => {
  //       console.log(commit);
  //       console.log(res);
  //     });
  //   });
  // },
  // 获取7日天气
  getsevenWeather({ commit }) {
    // alert();
    return new Promise((resolve, reject) => {
      reqWeatherMsg()
        .then(res => {
          console.log(res);
          let sevenwether = res.data.data;
          commit("RECETIVE_SEVENWETHER", sevenwether);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
