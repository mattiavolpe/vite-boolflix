<script>
import { state } from "./../state.js"
export default {
  name: "PaginationComponent",
  props: {
    page: Number,
  },
  data() {
    return {
      state,
    }
  },
}
</script>

<template>
  <div class="pagination d-flex align-items-center justify-content-center">{{page}}</div>
</template>