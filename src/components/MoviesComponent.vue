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
  <h3 class="text-decoration-underline mt-3" v-if="state.fetchedMovies.length > 0">Movies</h3>
  <ul v-if="state.fetchedMovies.length > 0" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
    <SingleMovie v-for="movie in state.fetchedMovies" :movie="movie" :state="state"></SingleMovie>
  </ul>
</template>