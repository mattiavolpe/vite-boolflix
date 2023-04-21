import { reactive } from "vue"
import axios from "axios"

export const state = new reactive({
  searchMovieBaseApi: "https://api.themoviedb.org/3/search/movie",
  searchTvShowBaseApi: "https://api.themoviedb.org/3/search/tv",
  coverBaseUrl: "https://image.tmdb.org/t/p/w342",
  genresBaseApi: "https://api.themoviedb.org/3/genre",
  welcomePageBaseApi: "https://api.themoviedb.org/3/trending",
  apiKey: "47de7fcc53f94d3e0e183ea972c73ff3",
  searchText: "",
  lastSearched: "",
  fetchedMovies: [],
  moviePages: null,
  activeMoviePage: 0,
  fetchedTvShows: [],
  tvShowPages: null,
  activeTvShowPage: 0,
  movieGenres: [],
  tvShowGenres: [],
  currentMovieGenre: "",
  currentTvShowGenre: "",
  welcomePage: true,
  loading: true,
  /**
   * Sets the URL to call to make the API request
   * @param {String} type Specifies if it's a movie or a tv show
   * @returns {String} The URL to call to request the API
   */
  setUrl(type) {
    if (type === "movie") {
      if (this.welcomePage) {
        return `${this.welcomePageBaseApi}/movie/day?api_key=${this.apiKey}&page=${this.activeMoviePage}`;
      }
      return `${this.searchMovieBaseApi}?api_key=${this.apiKey}&query=${this.lastSearched}&page=${this.activeMoviePage}`;
    } else {
      if (this.welcomePage) {
        return `${this.welcomePageBaseApi}/tv/day?api_key=${this.apiKey}&page=${this.activeTvShowPage}`;
      }
      return `${this.searchTvShowBaseApi}?api_key=${this.apiKey}&query=${this.lastSearched}&page=${this.activeTvShowPage}`;
    }
  },
  /**
   * Makes the call to the API
   * @param {String} type Specifies if it's a movie or a tv show
   * @param {String} url The URL to call to request the API
   */
  sendRequest(type, url) {
    if (type === "movie") {
      axios.get(url)
      .then(response => {
        this.fetchedMovies = response.data.results;
        this.moviePages = response.data.total_pages;
        this.activeMoviePage = response.data.page;
        this.searchText = "";
        this.loading = false;
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
        this.loading = false;
      })
      .catch(error => {
        console.error(error.message);
      })
    }
  },
  /**
   * Starts the mechanism to call the API for movies or tv shows search
   */
  fetchMoviesShows(type) {
    if (this.searchText === "" && !this.welcomePage) {
      this.searchText = "";
      return;
    }
    this.loading = true;
    if (type === "movie") {
      this.fetchedMovies = [];
    } else {
      this.fetchedTvShows = [];
    }
    this.lastSearched = this.searchText.toLowerCase();
    if (type === "movie") {
      this.activeMoviePage = 1;
      let url = this.setUrl("movie");
      this.sendRequest("movie", url);
      this.currentMovieGenre = "";
    } else {
      this.activeTvShowPage = 1;
      let url = this.setUrl("tvShow");
      this.sendRequest("tvShow", url);
      this.currentTvShowGenre = "";
    }
  },
  /**
   * Asks for a new page
   * @param {Number} n The page to ask for
   * @param {String} type Specifies if it's a movie or a tv show
   */
  newPage(n, type) {
    this.loading = true;
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
  },
  /**
   * Retrieves the genres used by the API and uses them to populate the filter select
   * @param {String} type Specifies if it's movie or tv show
   */
  fetchGenres(type) {
    let url;
    if (type === "movie") {
      url = `${this.genresBaseApi}/movie/list?api_key=${this.apiKey}`;
    } else {
      url = `${this.genresBaseApi}/tv/list?api_key=${this.apiKey}`;
    }
    axios.get(url)
    .then(response => {
      if (type === "movie") {
        this.movieGenres = response.data.genres;
      } else {
        this.tvShowGenres = response.data.genres;
      }
    })
  }
})