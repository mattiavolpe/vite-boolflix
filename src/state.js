import { reactive } from "vue"
import axios from "axios"

export const state = new reactive({
  searchMovieBaseApi: "https://api.themoviedb.org/3/search/movie",
  searchTvShowBaseApi: "https://api.themoviedb.org/3/search/tv",
  apiKey: "47de7fcc53f94d3e0e183ea972c73ff3",
  searchText: "",
  fetchedMovies: [],
  fetchedTvShows: [],
  fetchMovies() {
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
  fetchTvShows() {
    let url = `${this.searchTvShowBaseApi}?api_key=${this.apiKey}&query=${this.searchText.toLowerCase()}`;
    axios.get(url)
    .then(response => {
      console.log(response.data.results);
      this.fetchedTvShows = response.data.results;
    })
    .catch(error => {
      console.error(error.message);
    })
  }
})