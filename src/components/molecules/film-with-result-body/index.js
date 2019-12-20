import React from 'react';
import { connect } from 'react-redux';

import ResultsBody from '../../molecules/results-body';
import Film from '../../molecules/film';

import { getMovies, getMovie, getMovieGenre, deleteMovie } from '../../../store/thunks/moviesThunks';
import { smoothScrollToTop } from '../../../utils/scroll';

const classBlock = 'main-page';

class FilmWithResultRoby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filmId: null,
    }
  };

  static getDerivedStateFromProps(props, state) {
    const { film, getMovieGenre, getMovies } = props;

    if (film && film.id !== state.filmId) {
      getMovies({params: {search: film.genres[0], searchBy: 'genres'}, config: 'byGenres'});
      getMovieGenre(film.genres[0]);
      smoothScrollToTop();
      return { filmId: film.id }
    }
    return null;
  }

  fetchMovieById = (id) => {
    const { getMovie } = this.props;

    getMovie(id);
    smoothScrollToTop();
  };

  render() {
    const {
      getMovies,
      getMovie,
      movies,
      resultsCount,
      film,
      filmsGenre,
      getMovieGenre,
    } = this.props;

    return(
      <>
        <Film
          film={film}
          movies={movies}
          getFilm={getMovie}
          getMovies={getMovies}
          getMovieGenre={getMovieGenre}
        />
        <ResultsBody
          filmsGenre={filmsGenre}
          film={film}
          getFilm={this.fetchMovieById}
          movies={movies}
          resultsCount={resultsCount}
        />
      </>
    );
  };
}

export default connect(
  state => {
    return {
      movies: state.movieReducer.movies,
      resultsCount: state.movieReducer.resultsCount,
      film: state.movieReducer.movie,
      filmsGenre: state.movieReducer.movieGenre,
      routes: state.routing.locationBeforeTransitions,
    }
  },
  { getMovies, getMovie, getMovieGenre, deleteMovie }
)(FilmWithResultRoby)
