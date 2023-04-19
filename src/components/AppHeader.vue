<script>
import SearchComponent from "./SearchComponent.vue"
export default {
  name: "AppHeader",
  components: {
    SearchComponent,
  },
}
</script>

<template>
  <header class="px-4 py-3 d-flex align-items-center justify-content-between flex-wrap">
    <img class="py-2" height="45" src="./../assets/img/netflix_logo.png" alt="Netflix logo">
    <SearchComponent></SearchComponent>
  </header>
</template>