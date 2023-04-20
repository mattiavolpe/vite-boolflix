<script>
export default {
  name: "PaginationComponent",
  props: {
    page: Number,
  },
}
</script>

<template>
  <div class="pagination d-flex align-items-center justify-content-center">{{page}}</div>
</template>