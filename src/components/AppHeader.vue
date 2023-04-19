<script>
import { state } from "./../state.js"
export default {
  name: "AppHeader",
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
<header class="p-3 d-flex align-items-center justify-content-between flex-wrap">
  <img height="50" src="./../assets/img/netflix_logo.png" alt="Netflix logo">
  <div class="header_right_section d-flex align-items-center">
    <input @keyup.enter="state.fetchMovies(), state.fetchTvShows()" v-model.trim="state.searchText" class="px-3" type="search" placeholder="Search movies / tv shows">
    <button @click="state.fetchMovies(), state.fetchTvShows()" class="px-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    </button>
  </div>
</header>
</template>

<style lang="scss" scoped>
@use "./../assets/scss/partials/_variables.scss" as *;

header {
  position: sticky;
  top: 0;
  background: linear-gradient(180deg, #000000, $dark);
  box-shadow: 0 0 8px 1px $medium;

  .header_right_section {
    min-width: 250px;
    max-width: 100%;

    input,
    button {
      background-color: $light;
      color: $dark;
      border: 0;
      cursor: pointer;
    }

    input {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: 1px solid $dark;
      min-width: 200px;
    }

    button {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

  }

}
</style>