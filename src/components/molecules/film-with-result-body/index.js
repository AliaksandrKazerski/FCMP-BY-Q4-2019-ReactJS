import React from 'react';
import { connect } from 'react-redux';
import ResultsBody from '../../molecules/results-body';
import Film from '../../molecules/film';
import { getMovies, getMovie, getMovieGenre, deleteMovie } from '../../../store/thunks/moviesThunks';
import { smoothScrollToTop } from "../../../utils/scroll";

const classBlock = 'main-page';

class FilmWithResultRoby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmId: null,
      query: this.props.routes.search,
    }
  };

  componentDidMount() {
    const { getMovies, routes, movies } = this.props;
    if (routes.search && movies) {
      getMovies(routes.search);
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { film, getMovieGenre, getMovies, routes,  } = props;
    const { query } = state;
    if (routes.search !== query) {
      getMovies(routes.search);
      return {query: routes.search};
    }
    if (film && film.id !== state.filmId) {
      getMovies({params: {search: film.genres[0], searchBy: 'genres'}, config: 'byGenres'});
      getMovieGenre(film.genres[0]);
      return { filmId: film.id, query: routes.search }
    }
    return {query: routes.search};
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
