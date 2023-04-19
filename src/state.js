import { reactive } from "vue"
import axios from "axios"

export const state = new reactive({
  searchMovieBaseApi: "https://api.themoviedb.org/3/search/movie",
  searchTvShowBaseApi: "https://api.themoviedb.org/3/search/tv",
  coverBaseUrl: "https://image.tmdb.org/t/p/w342",
  apiKey: "47de7fcc53f94d3e0e183ea972c73ff3",
  searchText: "",
  lastSearched: "",
  fetchedMovies: [],
  moviePages: null,
  activeMoviePage: 0,
  fetchedTvShows: [],
  tvShowPages: null,
  activeTvShowPage: 0,
  setUrl(type) {
    if (type === "movie") {
      return `${this.searchMovieBaseApi}?api_key=${this.apiKey}&query=${this.lastSearched}&page=${this.activeMoviePage}`;
    } else {
      return `${this.searchTvShowBaseApi}?api_key=${this.apiKey}&query=${this.lastSearched}&page=${this.activeTvShowPage}`;
    }
  },
  sendRequest(type, url) {
    if (type === "movie") {
      axios.get(url)
      .then(response => {
        this.fetchedMovies = response.data.results;
        this.moviePages = response.data.total_pages;
        this.activeMoviePage = response.data.page;
        this.searchText = "";
      })
      .catch(error => {
        console.error(error.message);
      })
    } else {
      axios.get(url)
      .then(response => {
        this.fetchedTvShows = response.data.results;
        this.tvShowPages = response.data.total_pages;
        this.activeTvShowPage = response.data.page;
        this.searchText = "";
      })
      .catch(error => {
        console.error(error.message);
      })
    }
  },
  fetchMovies() {
    if (this.searchText === "") {
      this.searchText = "";
      return;
    }
    this.lastSearched = this.searchText.toLowerCase();
    this.activeMoviePage = 1;

    let url = this.setUrl("movie");
    this.sendRequest("movie", url);
  },
  fetchTvShows() {
    if (this.searchText === "") {
      this.searchText = "";
      return;
    }
    this.lastSearched = this.searchText.toLowerCase();
    this.activeTvShowPage = 1;

    let url = this.setUrl("tvShow");
    this.sendRequest("tvShow", url);
  },
  newPage(n, type) {
    if (type === "movie") {
      if (n === this.activeMoviePage) {
        return;
      }
      this.activeMoviePage = n;
      let url = this.setUrl("movie");
      this.sendRequest("movie", url);
    } else {
      if (n === this.activeTvShowPage) {
        return;
      }
      this.activeTvShowPage = n;
      let url = this.setUrl("tvShow");
      this.sendRequest("tvShow", url);
    }
  }
})