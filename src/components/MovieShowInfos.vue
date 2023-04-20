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
    item: Object,
  },
}
</script>

<template>
  <div class="infos">
    <h5 v-if="type === 'movie'" class="m-0">{{ item.title }}</h5>
    <h5 v-else class="m-0">{{ item.name }}</h5>
    <p v-if="type === 'movie' && item.title != item.original_title" class="m-0">Original title: {{ item.original_title }}</p>
    <p v-if="type === 'tvShow' && item.name != item.original_name" class="m-0">Original title: {{ item.original_name }}</p>
    <hr class="my-1">
    <div v-if="item.overview">
      <p class="m-0">{{ item.overview }}</p>
      <hr class="my-1">
    </div>
    <LanguageComponent :lang="item.original_language"></LanguageComponent>
    <ScoreComponent :vote="item.vote_average"></ScoreComponent>
    <CastGenresMovie v-if="type === 'movie'" :movie="item"></CastGenresMovie>
    <CastGenresShow v-else :show="item"></CastGenresShow>
  </div>
</template>