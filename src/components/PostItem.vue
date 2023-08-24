<template>
  <b-card :title="item.title" footer>{{ item.body }}</b-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "PosrItem",
  props: {
    item: {},
  },
});
</script>
