<script>
import { state } from "../state.js"
import axios from "axios"
export default {
  name: "CastGenresShow",
  props: {
    show: Object,
  },
  data() {
    return {
      state,
    }
  },
  methods: {
    fetchAdditionalInfos(type) {
      axios.get(`https://api.themoviedb.org/3/tv/${this.show.id}?api_key=${this.state.apiKey}&append_to_response=credits`)
      .then(response => {
        if (type === "cast") {
          this.show.lookingForCast = !this.show.lookingForCast;
        }
        if (type === "genres") {
          this.show.lookingForGenres = !this.show.lookingForGenres;
        }
        if(response.data.credits.cast.length > 0) {
          this.show.cast = response.data.credits.cast;
        } else {
          this.show.cast = [];
          this.show.cast.push({name: "Cast not found"})
        }
        if(response.data.genres.length > 0) {
          this.show.genres = response.data.genres;
        } else {
          this.show.genres = [];
          this.show.genres.push({name: "Genres not found"})
        }
      })
      .catch(error => {
        console.error(error.message);
      })
    },
  },
  computed: {
    retrieveCastLength() {
      if (this.show.cast.length > 5) {
        return 5;
      }
      return this.show.cast.length;
    }
  },
}
</script>

<template>
  <button @click="fetchAdditionalInfos('cast')">Cast</button>
  <button @click="fetchAdditionalInfos('genres')">Genres</button>
  <div class="cast" v-if="show.lookingForCast">
    <hr class="my-2">
    <p class="my-2">Cast</p>
    <ul>
      <li v-for="n in retrieveCastLength">{{ show.cast[n - 1].name }}</li>
    </ul>
  </div>
  <div class="genres" v-if="show.lookingForGenres">
    <hr class="my-2">
    <p class="my-2">Genres</p>
    <ul>
      <li v-for="genre in show.genres">{{ genre.name }}</li>
    </ul>
  </div>
</template>