<script>
import imgUrl from "./../assets/img/netflix_logo.png"
export default {
  name: "LoaderComponent",
  props: {
    loading: Boolean,
  },
  data() {
    return {
      imgUrl,
    }
  }
}
</script>

<template>
  <div class="loading text-center" v-if="loading">
    <div class="img_wrapper mb-3">
      <img width="250" :src="imgUrl" alt="Netflix logo">
    </div>
    <h3 class="m-0">Loading...</h3>
  </div>
</template>