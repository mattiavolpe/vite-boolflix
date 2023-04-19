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
  <input @keyup.enter="state.fetchMovie()" type="search" v-model.trim="state.searchText">
  <button @click="state.fetchMovie()">Search</button>
  <ul>
    <li v-for="(movie, index) in state.fetchedMovies">
      <h2>Movie {{ index }}</h2>
      <p>Title: {{ movie.title }}</p>
      <p>Original title: {{ movie.original_title }}</p>
      <p class="d-flex align-items-center">Language: 
        <img class="ms-2" :src="`https://flagcdn.com/32x24/${movie.original_language}.png`" :alt="`${movie.original_language} flag`">
      </p>
      <p>Score: {{ movie.vote_average }}</p>
    </li>
  </ul>
</template>

<style>
</style>
