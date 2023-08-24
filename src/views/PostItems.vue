<template>
  <b-container>
    <b-pagination
      :items="posts.data"
      :per-page="perPage"
      v-model="currentPage"
      :total-rows="rows.data.length"
    ></b-pagination>
    <div v-for="post in posts.data" :key="post.id">
      <PostItem :item="post" />
    </div>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { mapState } from "vuex";

import PostItem from "../components/PostItem.vue";

export default defineComponent({
  name: "PostItems",
  components: {
    PostItem,
  },
  props: {
    items: [],
  },
  data() {
    return {
      perPage: 6,
      currentPage: 1,
    };
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    rows() {
      return this.posts;
    },
    currentData() {
      return this.posts;
    },
    ...mapState<{ data: { body: string; id: number; title: string }[] }>([
      "posts",
    ]),
  },
});
</script>
