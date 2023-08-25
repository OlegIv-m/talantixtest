<template footer="">
  <b-card :footer="userName" footer-class="cardFooter">
    <b-card-title class="cardTitle">
      {{ title }}
    </b-card-title>
    <b-card-body>{{ body }}</b-card-body>
  </b-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "PostItem",
  props: {
    title: String,
    id: Number,
    body: String,
    userName: String,
  },
});
</script>

<style lang="scss" scoped>
.cardTitle {
  color: blue;
  text-align: left;
}
.cardFooter {
  background-color: unset;
  text-align: left;
}
</style>
