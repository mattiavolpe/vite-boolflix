<script>
import { state } from "./../state.js"
import SingleGenre from "./SingleGenre.vue"
import SingleMovieShow from "./SingleMovieShow.vue"
import PaginationComponent from "./PaginationComponent.vue"
export default {
  name: "MoviesShows",
  components: {
    SingleGenre,
    SingleMovieShow,
    PaginationComponent,
  },
  props: {
    type: String,
  },
  data() {
    return {
      state,
    }
  },
}
</script>

<template>

  <template v-if="type === 'movie'">
    <div class="d-flex align-items-center justify-content-between mt-3 mb-2">
      <h3 class="text-decoration-underline m-0" v-if="state.fetchedMovies.length > 0 && !state.welcomePage">Movies</h3>
      <h3 class="text-decoration-underline m-0" v-if="state.fetchedMovies.length > 0 && state.welcomePage">Trending Movies</h3>
      <select v-if="state.fetchedMovies.length > 0 && !state.welcomePage" name="movie_genres" id="movie_genres" v-model="state.currentMovieGenre">
        <option value="">- All genres -</option>
        <SingleGenre v-for="genre in state.movieGenres" :genre="genre"></SingleGenre>
      </select>
    </div>
    <ul v-if="state.fetchedMovies.length > 0" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
      <SingleMovieShow v-for="movie in state.fetchedMovies" :type="'movie'" :movie="movie" :state="state"></SingleMovieShow>
    </ul>
    <div class="pagination_wrapper d-flex align-items-center justify-content-center flex-wrap">
      <PaginationComponent :class="n === state.activeMoviePage ? 'active' : ''" v-if="state.moviePages > 1" v-for="n in state.moviePages" @click="state.newPage(n, 'movie')" :page="n"></PaginationComponent>
    </div>
  </template>

  <template v-else>
    <div class="d-flex align-items-center justify-content-between mt-3 mb-2">
      <h3 class="text-decoration-underline m-0" v-if="state.fetchedTvShows.length > 0 && !state.welcomePage">Tv Shows</h3>
      <h3 class="text-decoration-underline m-0" v-if="state.fetchedTvShows.length > 0 && state.welcomePage">Trending Tv Shows</h3>
      <select v-if="state.fetchedTvShows.length > 0 && !state.welcomePage" name="shows_genres" id="shows_genres" v-model="state.currentTvShowGenre">
        <option value="">- All genres -</option>
        <SingleGenre v-for="genre in state.tvShowGenres" :genre="genre"></SingleGenre>
      </select>
    </div>
    <ul v-if="state.fetchedTvShows.length > 0" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
      <SingleMovieShow v-for="tvShow in state.fetchedTvShows" :type="'tvShow'" :tvShow="tvShow" :state="state"></SingleMovieShow>
    </ul>
    <div class="pagination_wrapper d-flex align-items-center justify-content-center flex-wrap">
      <PaginationComponent :class="n === state.activeTvShowPage ? 'active' : ''" v-if="state.tvShowPages > 1" v-for="n in state.tvShowPages" @click="state.newPage(n, 'tvShow')" :page="n"></PaginationComponent>
    </div>
  </template>
  
</template>