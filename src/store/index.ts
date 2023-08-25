import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import type { Post, User } from "../models/Posts";

Vue.use(Vuex);

const typicode = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
});

interface StoreState {
  posts: Post[];
  users: User[];
  search: string;
}

export default new Vuex.Store<StoreState>({
  state: {
    posts: [],
    users: [],
    search: "",
  },
  getters: {
    filteredPosts(state) {
      if (state.search.length)
        return state.posts.filter((post) =>
          post.userName
            ?.toLocaleLowerCase()
            .includes(state.search.toLowerCase())
        );
      return state.posts;
    },
  },
  mutations: {
    setSearch(state, search) {
      state.search = search;
    },
  },
  actions: {
    async getPosts({ state }) {
      try {
        let posts = (await typicode.get<any, { data: Post[] }>("posts")).data;
        if (state.users.length) {
          posts = posts.map((post) => {
            const postUser = state.users.find(
              (user) => post.userId === user.id
            );
            return { ...post, userName: postUser?.name };
          });
        }
        state.posts = posts;
      } catch (error) {
        console.error(error);
      }
    },
    async getUsers({ state }) {
      try {
        const users = (await typicode.get<any, { data: User[] }>("users")).data;
        state.users = users;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
