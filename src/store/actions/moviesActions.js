export function setMovies(movies) {
  return {
    type: 'ADD_MOVIES',
    payload: movies,
  };
}

export function setMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    payload: movie,
  };
}

export function setMovieGenre(genre) {
  return {
    type: 'ADD_MOVIE_GENRE',
    payload: genre,
  };
}
