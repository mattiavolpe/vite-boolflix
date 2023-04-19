<script>
import { state } from "./../state.js"
import { convertScore } from "./../assets/functions/convertScore.js"
import SingleShow from "./SingleShow.vue"
export default {
  name: "ShowsComponent",
  components: {
    SingleShow,
  },
  data() {
    return {
      state,
    }
  },
}
</script>

<template>
  <h3 class="text-decoration-underline mt-3" v-if="state.fetchedTvShows.length > 0">Tv Shows</h3>
  <ul v-if="state.fetchedTvShows.length > 0" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
    <SingleShow v-for="tvShow in state.fetchedTvShows" :tvShow="tvShow" :state="state"></SingleShow>
  </ul>
</template>