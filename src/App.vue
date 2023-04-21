<script>
import { state } from "./state.js"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      state,
    }
  },
  mounted() {
    this.state.fetchMoviesShows("movie");
    this.state.fetchMoviesShows("tvShow");
    this.state.fetchGenres("movie");
    this.state.fetchGenres("tvShow");
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style>
</style>
