import { reactive } from "vue"
import axios from "axios"

export const state = new reactive({
  searchMovieBaseApi: "https://api.themoviedb.org/3/search/movie",
  apiKey: "47de7fcc53f94d3e0e183ea972c73ff3",
  searchText: "",
  fetchedMovies: [],
  fetchMovie() {
    let url = `${this.searchMovieBaseApi}?api_key=${this.apiKey}&query=${this.searchText.toLowerCase()}`;
    axios.get(url)
    .then(response => {
      console.log(response.data.results);
      this.fetchedMovies = response.data.results;
    })
    .catch(error => {
      console.error(error.message);
    })
  },
})