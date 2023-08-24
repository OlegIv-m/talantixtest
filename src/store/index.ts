import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuex);
const typicode = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
});

export default new Vuex.Store({
  state: {
    posts: {},
  },
  getters: {},
  mutations: {},
  actions: {
    async getPosts({ state }) {
      try {
        const result = await typicode.get("posts");
        state.posts = result;
        console.log("result: ", result);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
