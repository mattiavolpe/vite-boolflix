<script>
export default {
  name: "SingleGenre",
  props: {
    genre: Object,
  },
}
</script>

<template>
  <option :value="genre.id">{{ genre.name }}</option>
</template>