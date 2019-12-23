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
      query: this.props.routes.search,
      isFetchMovies: false,
    }
  };

  componentDidMount() {
    const { getMovies, routes, movies } = this.props;

    if (routes.search && !movies.length) {
      getMovies(routes.search);
    }
    
    smoothScrollToTop();
  }

  static getDerivedStateFromProps(props, state) {
    const { getMovies, routes } = props;
    const { query, isFetchMovies } = state;

    if (routes.search !== query && !isFetchMovies) {
      getMovies(routes.search);
      return {query: routes.search};
    }
    return {query: routes.search, isFetchMovies: false};
  }

  fetchMovies = (params) => {
    const { getMovies } = this.props;

    getMovies(params);
    this.setState({ isFetchMovies: true })

  };

  fetchMovieById = () => {
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
