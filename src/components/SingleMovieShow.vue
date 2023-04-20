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
    item: Object,
    state: Object,
  },
}
</script>

<template>
    <li v-if="type === 'movie' && (item.genre_ids.includes(state.currentMovieGenre) || state.currentMovieGenre === '')" class="single_result col text-center position-relative mb-3">
      <img class="img-fluid h-100" :src="item.poster_path ? `${state.coverBaseUrl}${item.poster_path}` : imgUrl" :alt="`${item.title} cover image`">
      <MovieShowInfos :type="'movie'" :item="item"></MovieShowInfos>
    </li>
    <li v-if="type === 'tvShow' && (item.genre_ids.includes(state.currentTvShowGenre) || state.currentTvShowGenre === '')" class="single_result col text-center position-relative mb-3">
      <img class="img-fluid h-100" :src="item.poster_path ? `${state.coverBaseUrl}${item.poster_path}` : imgUrl" :alt="`${item.name} cover image`">
      <MovieShowInfos :type="'tvShow'" :item="item"></MovieShowInfos>
    </li>
</template>