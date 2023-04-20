<script>
import { state } from "./../state.js"
import LoaderComponent from "./LoaderComponent.vue"
import MoviesShows from "./MoviesShows.vue"
export default {
  name: "AppMain",
  components: {
    LoaderComponent,
    MoviesShows,
  },
  data() {
    return {
      state,
    }
  },
}
</script>

<template>
  <main class="py-3">
    <div class="container">
      <LoaderComponent :loading="state.loading"></LoaderComponent>
      <MoviesShows :type="'movie'"></MoviesShows>
      <MoviesShows :type="'tvShow'"></MoviesShows>
    </div>
  </main>
</template>