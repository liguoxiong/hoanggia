import Vue from "vue";
import Vuex from "vuex";
import app from "./main";

import VueLocalStorage from "vue-localstorage";

Vue.use(Vuex);
Vue.use(VueLocalStorage);

const LANG_KEY = "language";

const initLang = () => {
  let lang = Vue.localStorage.get(LANG_KEY);
  return lang || "vi";
};

const state = {
  lang: initLang()
};

const actions = {
  setLang({ commit }, payload) {
    commit("SET_LANG", payload);
  }
};

const mutations = {
  SET_LANG(state, payload) {
    app.$i18n.locale = payload;
    Vue.localStorage.set(LANG_KEY, payload);
    state.lang = payload;
  }
};

const getters = {
  // getLang: state => state.lang
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
