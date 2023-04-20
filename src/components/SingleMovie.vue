<script>
import imgUrl from "./../assets/img/no_poster.png"
import MovieInfos from "./MovieInfos.vue"
export default {
  name: "SingleMovie",
  components: {
    MovieInfos,
  },
  data() {
    return {
      imgUrl,
    }
  },
  props: {
    movie: Object,
    state: Object,
  },
}
</script>

<template>
  <li v-if="movie.genre_ids.includes(state.currentMovieGenre) || state.currentMovieGenre === ''" class="single_result col text-center position-relative mb-3">
    <img class="img-fluid h-100" :src="movie.poster_path ? `${state.coverBaseUrl}${movie.poster_path}` : imgUrl" :alt="`${movie.title} cover image`">
    <MovieInfos :movie="movie"></MovieInfos>
  </li>
</template>