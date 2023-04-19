<script>
import imgUrl from "./../assets/img/no_poster.png"
import ShowInfos from "./ShowInfos.vue"
export default {
  name: "SingleShow",
  components: {
    ShowInfos,
  },
  data() {
    return {
      imgUrl,
    }
  },
  props: {
    tvShow: Object,
    state: Object,
  },
}
</script>

<template>
  <li class="single_result col text-center position-relative mb-3">
    <img class="img-fluid h-100" :src="tvShow.poster_path ? `${state.coverBaseUrl}${tvShow.poster_path}` : imgUrl" :alt="`${tvShow.title} cover image`">
    <ShowInfos :tvShow="tvShow"></ShowInfos>
  </li>
</template>