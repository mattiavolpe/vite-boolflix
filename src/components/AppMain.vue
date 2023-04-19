<script>
import { state } from "./../state.js"
import MoviesComponent from "./MoviesComponent.vue"
import ShowsComponent from "./ShowsComponent.vue"
export default {
  name: "AppMain",
  components: {
    MoviesComponent,
    ShowsComponent,
  },
  data() {
    return {
      state,
    }
  },
}
</script>

<template>
  <main class="py-3">
    <div class="container">
      <MoviesComponent :state="state"></MoviesComponent>
      <ShowsComponent :state="state"></ShowsComponent>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "./../assets/scss/partials/_variables.scss" as *;

main {
  background-color: $dark;
  color: $light;
}
</style>