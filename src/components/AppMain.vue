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
      <MoviesShows :type="'movie'" :fetched="state.fetchedMovies"></MoviesShows>
      <MoviesShows :type="'tvShow'" :fetched="state.fetchedTvShows"></MoviesShows>
    </div>
  </main>
</template>