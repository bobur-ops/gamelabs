<template>
  <HomePage />
</template>

<script lang="ts">
import Vue from "vue";
import HomePage from "@/containers/main_page/HomePage.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { HomePage },
});
</script>

<style lang="scss">
body {
  margin: 0;
  background: #1f2128;
}
</style>
