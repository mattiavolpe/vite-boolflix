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
    fetched: Array,
  },
  data() {
    return {
      state,
    }
  },
}
</script>

<template>
  <div class="d-flex align-items-center justify-content-between mt-3 mb-2">
    <h3 class="text-decoration-underline m-0" v-if="fetched.length > 0 && !state.welcomePage">{{ type === "movie" ? "Movies" : "Tv Shows"}}</h3>
    <h3 class="text-decoration-underline m-0" v-if="fetched.length > 0 && state.welcomePage">Trending {{ type === "movie" ? "Movies" : "Tv Shows"}}</h3>
    <select v-if="type === 'movie' && fetched.length > 0 && !state.welcomePage" name="movie_genres" id="movie_genres" v-model="state.currentMovieGenre">
      <option value="">- All genres -</option>
      <SingleGenre v-for="genre in state.movieGenres" :genre="genre"></SingleGenre>
    </select>
    <select v-if="type === 'tvShow' && fetched.length > 0 && !state.welcomePage" name="shows_genres" id="shows_genres" v-model="state.currentTvShowGenre">
      <option value="">- All genres -</option>
      <SingleGenre v-for="genre in state.tvShowGenres" :genre="genre"></SingleGenre>
    </select>
  </div>
  <ul v-if="fetched.length > 0" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
    <SingleMovieShow v-if="type === 'movie'" v-for="item in fetched" :type="'movie'" :item="item" :state="state"></SingleMovieShow>
    <SingleMovieShow v-else v-for="item in fetched" :type="'tvShow'" :item="item" :state="state"></SingleMovieShow>
  </ul>
  <div class="pagination_wrapper d-flex align-items-center justify-content-center flex-wrap">
    <PaginationComponent v-if="type === 'movie' && state.moviePages > 1" :class="n === state.activeMoviePage ? 'active' : ''" v-for="n in state.moviePages" @click="state.newPage(n, 'movie')" :page="n"></PaginationComponent>
    <PaginationComponent v-if="type === 'tvShow' && state.tvShowPages > 1" :class="n === state.activeTvShowPage ? 'active' : ''" v-for="n in state.tvShowPages" @click="state.newPage(n, 'tvShow')" :page="n"></PaginationComponent>
  </div>  
</template>