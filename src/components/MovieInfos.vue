<script>
import LanguageComponent from "./LanguageComponent.vue";
import ScoreComponent from "./ScoreComponent.vue"
import CastGenresMovie from "./CastGenresMovie.vue"
export default {
  name: "MovieInfos",
  components: {
    LanguageComponent,
    ScoreComponent,
    CastGenresMovie,
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
    <LanguageComponent :lang="movie.original_language"></LanguageComponent>
    <ScoreComponent :vote="movie.vote_average"></ScoreComponent>
    <CastGenresMovie :movie="movie"></CastGenresMovie>
  </div>
</template>