import queryString from 'query-string';

const DEFAULT_URL = `https://reactjs-cdp.herokuapp.com/movies`;

export const moviesAPI = {
  getMovies(params) {
    console.log(params);
    const query = queryString.stringify(params);
    console.log(`${DEFAULT_URL}?${query}`);
    return fetch(`${DEFAULT_URL}?${query}`)
      .then(res => res.json());
  },

  getMovie(id) {
    return fetch(`${DEFAULT_URL}/${id}`)
      .then(res => res.json());
  }
}