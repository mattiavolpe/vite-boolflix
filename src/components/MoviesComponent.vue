<script>
import { state } from "./../state.js"
import SingleMovie from "./SingleMovie.vue"
export default {
  name: "MoviesComponent",
  components: {
    SingleMovie,
  },
  data() {
    return {
      state,
    }
  },
}
</script>

<template>
  <h3 v-if="state.fetchedMovies.length > 0">Movies</h3>
  <ul v-if="state.fetchedMovies.length > 0" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
    <SingleMovie v-for="(movie, index) in state.fetchedMovies" :movie="movie" :index="index" :state="state"></SingleMovie>
  </ul>
</template>