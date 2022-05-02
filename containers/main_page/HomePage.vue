<template>
  <div class="home-page">
    <MainHeader />
    <Table_rating :data="rating" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainHeader from "@/components/headers/MainHeader.vue";

import Table_rating from "./components/Tabel_rating.vue";

import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  components: {
    MainHeader,
    Table_rating,
  },
  computed: {
    ...mapGetters("rating", ["rating"]),
  },
  methods: {
    ...mapActions("rating", ["fetchRating"]),
  },
  created() {
    this.fetchRating();
  },
});
</script>
