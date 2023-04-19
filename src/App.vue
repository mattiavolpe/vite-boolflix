<script>
import { state } from "./state.js"
export default {
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
  <input @keyup.enter="state.fetchMovie()" type="search" v-model.trim="state.searchText">
  <button @click="state.fetchMovie()">Search</button>
  <ul>
    <li v-for="(movie, index) in state.fetchedMovies">
      <h2>Movie {{ index }}</h2>
      <p>Title: {{ movie.title }}</p>
      <p>Original title: {{ movie.original_title }}</p>
      <p>Language: {{ movie.original_language }}</p>
      <p>Score: {{ movie.vote_average }}</p>
    </li>
  </ul>
</template>

<style>
</style>
