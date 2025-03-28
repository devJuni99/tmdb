import axios from 'axios';

// -> Mock Data
export class fetchApis {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: process.env.REACT_APP_TMDB_MOVIES_KEY,
      },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchMovies(keyword) : this.#popularList();
  }

  async getMovieVideos(movieId) {
    return this.httpClient
      .get(`/movie/${movieId}/videos`, {
        params: {
          movie_id: movieId,
          language: 'ko-KR',
        },
      })
      .then((res) => res.data.results);
  }

  async #searchMovies(keyword) {
    return this.httpClient
      .get('/search/movie', {
        params: {
          language: 'ko-KR',
          query: keyword,
        },
      })
      .then((res) => res.data.results);
  }

  async #popularList() {
    return this.httpClient
      .get('/movie/popular', {
        params: {
          language: 'ko-KR',
          page: 1,
        },
      })
      .then((res) => res.data.results);
  }
}
