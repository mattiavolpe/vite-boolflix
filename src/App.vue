<script>
import { state } from "./state.js"
import axios from "axios"
export default {
  data() {
    return {
      state,
    }
  },
}
</script>

<template>
  <input @keyup.enter="state.fetchMovies(), state.fetchTvShows()" type="search" v-model.trim="state.searchText">
  <button @click="state.fetchMovies(), state.fetchTvShows()">Search</button>
  <h2 v-if="state.fetchedMovies.length > 0">Movies</h2>
  <ul v-if="state.fetchedMovies.length > 0">
    <li v-for="(movie, index) in state.fetchedMovies">
      <h4>Movie {{ index }}</h4>
      <img v-if="movie.poster_path" :src="`${state.coverBaseUrl}${movie.poster_path}`" :alt="`${movie.title} cover image`">
      <p>Title: {{ movie.title }}</p>
      <p v-if="movie.title != movie.original_title">Original title: {{ movie.original_title }}</p>
      <p class="d-flex align-items-center">Language: 
        <img class="ms-2" :src="`https://flagcdn.com/32x24/${movie.original_language}.png`" :alt="`${movie.original_language} flag`">
      </p>
      <p>Score: {{ movie.vote_average }}</p>
    </li>
  </ul>
  <h2 v-if="state.fetchedTvShows.length > 0">Tv Shows:</h2>
  <ul v-if="state.fetchedTvShows.length > 0">
    <li v-for="(tvShow, index) in state.fetchedTvShows">
      <h4>Tv Show {{ index }}</h4>
      <img v-if="tvShow.poster_path" :src="`${state.coverBaseUrl}${tvShow.poster_path}`" :alt="`${tvShow.title} cover image`">
      <p>Title: {{ tvShow.name }}</p>
      <p v-if="tvShow.name != tvShow.original_name">Original title: {{ tvShow.original_name }}</p>
      <p class="d-flex align-items-center">Language: 
        <img class="ms-2" :src="`https://flagcdn.com/32x24/${tvShow.original_language}.png`" :alt="`${tvShow.original_language} flag`">
      </p>
      <p>Score: {{ tvShow.vote_average }}</p>
    </li>
  </ul>
</template>

<style>
</style>
