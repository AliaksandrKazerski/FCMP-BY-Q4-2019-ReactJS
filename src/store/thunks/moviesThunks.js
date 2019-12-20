import { moviesAPI } from '../../api/index';
import { setMovies, setMovie, setMovieGenre } from '../actions/moviesActions';
import { setSearchParams } from '../actions/searchActions';

export const getMovies = (params) => (dispatch) => {
  moviesAPI.getMovies(params, dispatch)
    .then(data => dispatch(setMovies(data)))
    .catch(error => console.log(error))
};

export const getMovie = (id) => (dispatch) => {
  moviesAPI.getMovie(id)
    .then(data => dispatch(setMovie(data)))
    .catch(error => console.log(error));
};

export const getMovieGenre = (genre) => (dispatch) => {
  dispatch(setMovieGenre(genre));
};

export const getSearchParams = (param) => (dispatch) => {
  dispatch(setSearchParams(param));
};
