import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  posts: [],
};

const getters = {};

const actions = {
  getPosts({ commit }) {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      commit("SET_POSTS", response.data);
    });
  },
};

const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
