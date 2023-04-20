<script>
import SearchComponent from "./SearchComponent.vue"
export default {
  name: "AppHeader",
  components: {
    SearchComponent,
  },
  methods: {
    reloadApp() {
      location.reload();
    }
  }
}
</script>

<template>
  <header class="px-4 py-3 d-flex align-items-center justify-content-between flex-wrap">
    <a @click.prevent="reloadApp()" href="#">
      <img class="py-2" height="45" src="./../assets/img/netflix_logo.png" alt="Netflix logo">
    </a>
    <SearchComponent></SearchComponent>
  </header>
</template>