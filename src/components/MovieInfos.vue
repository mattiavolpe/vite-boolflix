<script>
import ScoreComponent from "./ScoreComponent.vue"
import CastGenres from "./CastGenres.vue"
export default {
  name: "MovieInfos",
  components: {
    ScoreComponent,
    CastGenres,
  },
  props: {
    movie: Object,
  },
}
</script>

<template>
  <div class="infos">
    <h5 class="m-0">{{ movie.title }}</h5>
    <p class="m-0" v-if="movie.title != movie.original_title">Original title: {{ movie.original_title }}</p>
    <hr class="my-1">
    <div v-if="movie.overview">
      <p class="m-0">{{ movie.overview }}</p>
      <hr class="my-1">
    </div>
    <p class="d-flex align-items-center justify-content-center mb-2">Language:
      <img class="ms-2" :src="`https://flagcdn.com/32x24/${movie.original_language}.png`" :alt="`${movie.original_language} flag`">
    </p>
    <ScoreComponent :vote="movie.vote_average"></ScoreComponent>
    <CastGenres :movie="movie"></CastGenres>
    
  </div>
</template>