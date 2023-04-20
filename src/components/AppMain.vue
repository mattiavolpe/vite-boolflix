<script>
import { state } from "./../state.js"
import LoaderComponent from "./LoaderComponent.vue"
import MoviesComponent from "./MoviesComponent.vue"
import ShowsComponent from "./ShowsComponent.vue"
export default {
  name: "AppMain",
  components: {
    LoaderComponent,
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
      <LoaderComponent :loading="state.loading"></LoaderComponent>
      <MoviesComponent></MoviesComponent>
      <ShowsComponent></ShowsComponent>
    </div>
  </main>
</template>