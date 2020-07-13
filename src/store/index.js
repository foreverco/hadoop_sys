import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import insect from "./modules/insect";

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    insect
  }
});
