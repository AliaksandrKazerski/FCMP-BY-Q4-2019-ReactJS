import { moviesAPI } from '../../api/index';
import { setMovies, setMovie, setMovieGenre } from '../actions/moviesActions';


export const getMovies = (params) => (dispatch) => {
  moviesAPI.getMovies(params)
    .then(data => dispatch(setMovies(data)))
    .catch(error => console.log(error));
};

export const getMovie = (id) => (dispatch) => {
  moviesAPI.getMovie(id)
    .then(data => dispatch(setMovie(data)))
    .catch(error => console.log(error));
}

export const getMovieGenre = (genre) => (dispatch) => {
  dispatch(setMovieGenre(genre));
}
