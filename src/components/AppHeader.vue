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
  <header class="p-3 d-flex align-items-center justify-content-between flex-wrap">
    <img height="50" src="./../assets/img/netflix_logo.png" alt="Netflix logo">
    <SearchComponent></SearchComponent>
  </header>
</template>