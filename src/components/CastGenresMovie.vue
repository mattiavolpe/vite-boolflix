<script>
import { state } from "../state.js"
import axios from "axios"
export default {
  name: "CastGenresMovie",
  props: {
    movie: Object,
  },
  data() {
    return {
      state,
    }
  },
  methods: {
    fetchAdditionalInfos(type) {
      axios.get(`https://api.themoviedb.org/3/movie/${this.movie.id}?api_key=${this.state.apiKey}&append_to_response=credits`)
      .then(response => {
        if (type === "cast") {
          this.movie.lookingForCast = !this.movie.lookingForCast;
        }
        if (type === "genres") {
          this.movie.lookingForGenres = !this.movie.lookingForGenres;
        }
        if(response.data.credits.cast.length > 0) {
          this.movie.cast = response.data.credits.cast;
        } else {
          this.movie.cast = [];
          this.movie.cast.push({name: "Cast not found"})
        }
        if(response.data.genres.length > 0) {
          this.movie.genres = response.data.genres;
        } else {
          this.movie.genres = [];
          this.movie.genres.push({name: "Genres not found"})
        }
      })
      .catch(error => {
        console.error(error.message);
      })
    },
  },
  computed: {
    retrieveCastLength() {
      if (this.movie.cast.length > 5) {
        return 5;
      }
      return this.movie.cast.length;
    }
  },
}
</script>

<template>
  <button @click="fetchAdditionalInfos('cast')">Cast</button>
  <button @click="fetchAdditionalInfos('genres')">Genres</button>
  <div class="cast" v-if="movie.lookingForCast">
    <hr class="my-2">
    <p class="my-2">Cast</p>
    <ul>
      <li v-for="n in retrieveCastLength">{{ movie.cast[n - 1].name }}</li>
    </ul>
  </div>
  <div class="genres" v-if="movie.lookingForGenres">
    <hr class="my-2">
    <p class="my-2">Genres</p>
    <ul>
      <li v-for="genre in movie.genres">{{ genre.name }}</li>
    </ul>
  </div>
</template>