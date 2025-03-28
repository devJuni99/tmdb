import axios from 'axios';

// --> Mock Data <--
export class FakeMovies {
  search(keyword) {
    return keyword ? this.#searchMovies() : this.#popularList();
  }

  async #searchMovies() {
    return axios.get(`/data/search.json`).then((res) => res.data.results);
  }

  async #popularList() {
    return axios.get(`/data/popular.json`).then((res) => res.data.results);
  }
}
