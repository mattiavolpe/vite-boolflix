<script>
import imgUrl from "./../assets/img/no_poster.png"
import MovieShowInfos from "./MovieShowInfos.vue"
export default {
  name: "SingleMovieShow",
  components: {
    MovieShowInfos,
  },
  data() {
    return {
      imgUrl,
    }
  },
  props: {
    type: String,
    movie: Object,
    tvShow: Object,
    state: Object,
  },
}
</script>

<template>
  <template v-if="type === 'movie'">
    <li v-if="movie.genre_ids.includes(state.currentMovieGenre) || state.currentMovieGenre === ''" class="single_result col text-center position-relative mb-3">
      <img class="img-fluid h-100" :src="movie.poster_path ? `${state.coverBaseUrl}${movie.poster_path}` : imgUrl" :alt="`${movie.title} cover image`">
      <MovieShowInfos :type="'movie'" :movie="movie"></MovieShowInfos>
    </li>
  </template>
  <template v-else>
    <li v-if="tvShow.genre_ids.includes(state.currentTvShowGenre) || state.currentTvShowGenre === ''" class="single_result col text-center position-relative mb-3">
      <img class="img-fluid h-100" :src="tvShow.poster_path ? `${state.coverBaseUrl}${tvShow.poster_path}` : imgUrl" :alt="`${tvShow.title} cover image`">
      <MovieShowInfos :type="'tvShow'" :tvShow="tvShow"></MovieShowInfos>
    </li>
  </template>
</template>