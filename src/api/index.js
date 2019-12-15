import queryString from 'query-string';

const DEFAULT_URL = `https://reactjs-cdp.herokuapp.com/movies`;

function transformParams(params) {
  if (params.sortBy === 'release date') {
    params.sortBy = 'release_date';
  }
  if (params.sortBy === 'rating') {
    params.sortBy = 'vote_average';
    params.sortOrder = 'asc';
  }
  return params;
}

export const moviesAPI = {
  getMovies(params) {
    console.log(params);
    const query = queryString.stringify(transformParams(params));
    console.log(query);
    return fetch(`${DEFAULT_URL}?${query}`)
      .then(res => res.json());
  },

  getMovie(id) {
    return fetch(`${DEFAULT_URL}/${id}`)
      .then(res => res.json());
  }
};
