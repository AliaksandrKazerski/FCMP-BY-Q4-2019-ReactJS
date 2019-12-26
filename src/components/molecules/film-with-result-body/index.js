import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ResultsBody from '../../molecules/results-body';
import Film from '../../molecules/film';

import { getMovies, getMovie, getMovieGenre, deleteMovie } from '../../../store/thunks/moviesThunks';
import { getSearchParams } from '../../../store/thunks/searchThunks';
import { getActivePage } from '../../../store/thunks/paginationThunks';
import { smoothScrollToTop } from '../../../utils/scroll';

const classBlock = 'main-page';

class FilmWithResultRoby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filmId: null,
      isFilmGenre: false,
    }
  };

  static getDerivedStateFromProps(props, state) {
    const { film, getMovieGenre, getMovies, getMovie, match: {params : { id: movieId } } } = props;

    if (movieId !== state.filmId) {
      getMovie(movieId);
      return {filmId: movieId, isFilmGenre: false};
    }

    if (film && !state.isFilmGenre) {
      getMovies({params: {search: film.genres[0], searchBy: 'genres'}, config: 'byGenres'});
      getMovieGenre(film.genres[0]);
      return {isFilmGenre: true};
    }

    smoothScrollToTop();
    return null;
  }

  fetchMovieById = () => {
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
      getSearchParams,
      paginationParams,
      getActivePage,
      searchParams,
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
          setPageParams={getSearchParams}
          paginationParams={paginationParams}
          setActivePage={getActivePage}
          searchParams={searchParams}
          getMovies={getMovies}
        />
      </>
    );
  };
}

export default withRouter(connect(
  state => {
    return {
      movies: state.movieReducer.movies,
      resultsCount: state.movieReducer.resultsCount,
      film: state.movieReducer.movie,
      filmsGenre: state.movieReducer.movieGenre,
      routes: state.routing.locationBeforeTransitions,
      searchParams: state.searchReducer,
      paginationParams: state.paginationReducer,
    }
  },
  { getMovies, getMovie, getMovieGenre, deleteMovie, getSearchParams, getActivePage }
)(FilmWithResultRoby))
