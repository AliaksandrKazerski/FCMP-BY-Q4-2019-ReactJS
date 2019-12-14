import { moviesAPI } from '../../api/index';
import { setMovie } from '../actions/movieActions';

export const getMovies = (params) => (dispatch) => {
  moviesAPI.getMovies(params)
    .then(data => dispatch(setMovie(data)))
    .catch(error => console.log(error));
};