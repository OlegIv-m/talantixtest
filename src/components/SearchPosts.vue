<template>
  <b-input-group class="mb-3 mt-3 search">
    <b-input-group-prepend>
      <b-input-group-text class="searchIcon">
        <b-icon-search />
      </b-input-group-text>
    </b-input-group-prepend>
    <b-form-input
      v-model="search"
      debounce="500"
      placeholder="Filter by author..."
    />
  </b-input-group>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "SearchPosts",
  computed: {
    search: {
      get: function () {
        return this.$store.state.search;
      },
      set: function (value: string) {
        this.$store.commit("setSearch", value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.search {
  width: 350px;
  margin: 0 auto;
}
.searchIcon {
  background-color: unset;
}
</style>
