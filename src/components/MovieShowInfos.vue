<script>
import LanguageComponent from "./LanguageComponent.vue";
import ScoreComponent from "./ScoreComponent.vue"
import CastGenresMovie from "./CastGenresMovie.vue"
import CastGenresShow from "./CastGenresShow.vue"
export default {
  name: "MovieInfos",
  components: {
    LanguageComponent,
    ScoreComponent,
    CastGenresMovie,
    CastGenresShow,
  },
  props: {
    type: String,
    movie: Object,
    tvShow: Object,
  },
}
</script>

<template>
  <template v-if="type === 'movie'">
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
  <template v-else>
    <div class="infos">
      <h5 class="m-0">{{ tvShow.name }}</h5>
      <p class="m-0" v-if="tvShow.name != tvShow.original_name">Original title: {{ tvShow.original_name }}</p>
      <hr class="my-1">
      <div v-if="tvShow.overview">
        <p class="m-0">{{ tvShow.overview }}</p>
        <hr class="my-1">
      </div>
      <LanguageComponent :lang="tvShow.original_language"></LanguageComponent>
      <ScoreComponent :vote="tvShow.vote_average"></ScoreComponent>
      <CastGenresShow :show="tvShow"></CastGenresShow>
    </div>
  </template>
</template>