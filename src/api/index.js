import queryString from 'query-string';
import { push } from 'react-router-redux';

const DEFAULT_URL = `https://reactjs-cdp.herokuapp.com/movies`;

function transformParams(params) {
  if (params.sortBy === 'release date') {
    params.sortBy = 'release_date';
  }
  if (params.sortBy === 'rating') {
    params.sortBy = 'vote_average';
  }
  params.sortOrder = 'desc';
  return params;
}

export const moviesAPI = {
  getMovies(params, dispatch) {
    if (typeof params === 'string') {
      return fetch(`${DEFAULT_URL}${params}`)
        .then(res => res.json());
    }
    if (params.config) {
      const query = queryString.stringify(transformParams(params.params));
      return fetch(`${DEFAULT_URL}?${query}`)
        .then(res => res.json());
    }
    const query = queryString.stringify(transformParams(params));
    dispatch(push(`/movies?${query}`));
    return fetch(`${DEFAULT_URL}?${query}`)
      .then(res => res.json());
  },

  getMovie(id) {
    return fetch(`${DEFAULT_URL}/${id}`)
      .then(res => res.json());
  }
};
