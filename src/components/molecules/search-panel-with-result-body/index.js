import React from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../../molecules/search-panel';
import ResultsBody from '../../molecules/results-body';
import { getMovies, getMovie, getMovieGenre, getSearchParams } from '../../../store/thunks/moviesThunks';
import { smoothScrollToTop } from "../../../utils/scroll";

const classBlock = 'search-panel-with-result-body';

class SearchPanelWithResultBody extends React.Component {
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

  fetchMovies = (params) => {
    const { getMovies } = this.props;

    getMovies(params);

  };

  fetchMovieById = (id) => {
    const { getMovie } = this.props;

    getMovie(id);
    smoothScrollToTop();
  };

  render() {
    const {
      movies,
      resultsCount,
      film,
      filmsGenre,
      searchParams,
      getSearchParams,
    } = this.props;

    return(
      <>
       <SearchPanel
          searchParams={searchParams}
          setSearchParams={getSearchParams}
          getSearchParams={this.fetchMovies}
        />
       <ResultsBody
          filmsGenre={filmsGenre}
          film={film}
          showResultCount
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
      searchParams: state.searchReducer,
    }
  },
  { getMovies, getMovie, getMovieGenre, getSearchParams }
)(SearchPanelWithResultBody)
