<script>
import { state } from "./../state.js"
import PaginationComponent from "./PaginationComponent.vue"
import SingleMovie from "./SingleMovie.vue"
export default {
  name: "MoviesComponent",
  components: {
    SingleMovie,
    PaginationComponent,
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
  <div class="d-flex align-items-center justify-content-center flex-wrap">
    <PaginationComponent v-if="state.moviePages > 1" v-for="n in state.moviePages" @click="state.newPage(n, 'movie')" :page="n"></PaginationComponent>
  </div>
</template>