<template>
  <div>
    <b-container>
      <SearchPosts />
      <div class="postsContainer">
        <template v-for="col in currentData">
          <PostItem
            :title="col.title"
            :body="col.body"
            :userName="col.userName"
            :key="col.id"
          />
        </template>
      </div>
    </b-container>
    <b-pagination
      :per-page="perPage"
      v-model="currentPage"
      :total-rows="posts.length"
      class="mt-3 mr-3 ml-auto justify-content-end"
    ></b-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import PostItem from "../components/PostItem.vue";
import SearchPosts from "../components/SearchPosts.vue";
import { Post } from "../models/Posts";

export default defineComponent({
  name: "PostItems",
  components: {
    PostItem,
    SearchPosts,
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
  async mounted() {
    await this.$store.dispatch("getUsers");
    this.$store.dispatch("getPosts");
  },
  computed: {
    posts(): Post[] {
      return this.$store.getters.filteredPosts;
    },
    currentData(): Post[] {
      if (!this.posts) return [];
      return this.posts.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.postsContainer {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 995px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 770px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }
}
</style>
