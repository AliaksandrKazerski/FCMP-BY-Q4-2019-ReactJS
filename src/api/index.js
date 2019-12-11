import queryString from 'query-string';

const DEFAULT_URL = `https://reactjs-cdp.herokuapp.com/movies`;

export const moviesAPI = {
  getMovies(params) {
    const query = queryString.stringify(params);
    return fetch(`${DEFAULT_URL}?${query}`)
      .then(res => res.json());
  },

  getMovie(id) {
    return fetch(`${DEFAULT_URL}/${id}`)
      .then(res => res.json());
  }
};
