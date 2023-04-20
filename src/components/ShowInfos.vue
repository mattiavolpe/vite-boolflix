<script>
import LanguageComponent from "./LanguageComponent.vue";
import ScoreComponent from "./ScoreComponent.vue"
import CastGenresShow from "./CastGenresShow.vue"
export default {
  name: "ShowInfos",
  components: {
    LanguageComponent,
    ScoreComponent,
    CastGenresShow,
  },
  props: {
    tvShow: Object,
  },
}
</script>

<template>
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