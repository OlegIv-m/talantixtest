import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PostItems from "../views/PostItems.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "posts",
    component: PostItems,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
