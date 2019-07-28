import Vue from "vue";
import Vuex from "vuex";
import app from "./main";
import axios from "axios";

import VueLocalStorage from "vue-localstorage";

Vue.use(Vuex);
Vue.use(VueLocalStorage);

const LANG_KEY = "language";

const initLang = () => {
  let lang = Vue.localStorage.get(LANG_KEY);
  return lang || "vi";
};

const initContent = () => {
  axios.get("/api/content").then(response => {
    return response.data;
  });
};

const state = {
  lang: initLang(),
  content: initContent()
};

const actions = {
  setLang({ commit }, payload) {
    commit("SET_LANG", payload);
  },
  getContent({ commit, state }) {
    return axios.get("/api/content").then(response => {
      commit("GET_CONTENT", response.data.data[0]);
      return state.content;
    });
  }
};

const mutations = {
  SET_LANG(state, payload) {
    app.$i18n.locale = payload;
    Vue.localStorage.set(LANG_KEY, payload);
    state.lang = payload;
  },
  GET_CONTENT(state, content) {
    state.content = content;
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
