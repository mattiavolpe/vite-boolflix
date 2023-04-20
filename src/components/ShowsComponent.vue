<script>
import { state } from "./../state.js"
import SingleGenre from "./SingleGenre.vue"
import SingleShow from "./SingleShow.vue"
import PaginationComponent from "./PaginationComponent.vue"
export default {
  name: "ShowsComponent",
  components: {
    SingleGenre,
    SingleShow,
    PaginationComponent,
  },
  data() {
    return {
      state,
    }
  },
}
</script>

<template>
  <div class="d-flex align-items-center justify-content-between mt-3 mb-2">
    <h3 class="text-decoration-underline m-0" v-if="state.fetchedTvShows.length > 0 && !state.welcomePage">Tv Shows</h3>
    <h3 class="text-decoration-underline m-0" v-if="state.fetchedTvShows.length > 0 && state.welcomePage">Trending Tv Shows</h3>
    <select v-if="state.fetchedTvShows.length > 0" name="shows_genres" id="shows_genres" v-model="state.currentTvShowGenre">
      <option value="">- All genres -</option>
      <SingleGenre v-for="genre in state.tvShowGenres" :genre="genre"></SingleGenre>
    </select>
  </div>
  <ul v-if="state.fetchedTvShows.length > 0" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
    <SingleShow v-for="tvShow in state.fetchedTvShows" :tvShow="tvShow" :state="state"></SingleShow>
  </ul>
  <div class="pagination_wrapper d-flex align-items-center justify-content-center flex-wrap">
    <PaginationComponent :class="n === state.activeTvShowPage ? 'active' : ''" v-if="state.tvShowPages > 1" v-for="n in state.tvShowPages" @click="state.newPage(n, 'tvShow')" :page="n"></PaginationComponent>
  </div>
</template>

<style lang="scss" scoped>
  .loading {

    .img_wrapper {
      position: relative;
      width: fit-content;
      margin: auto;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(90deg, #141414, #373737, #141414);
        opacity: 0.4;
        background-position: 0 0;
        background-clip: content-box;
        animation: move 1s infinite linear;
      }
    }
  }

  @keyframes move {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 250px 0;
    }
  }
</style>