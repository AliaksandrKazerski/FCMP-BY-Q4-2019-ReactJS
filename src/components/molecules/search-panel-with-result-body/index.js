import React from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../../molecules/search-panel';
import ResultsBody from '../../molecules/results-body';

import { getMovies, getMovie, getMovieGenre } from '../../../store/thunks/moviesThunks';
import { getSearchParams } from '../../../store/thunks/searchThunks';
import { getActivePage } from '../../../store/thunks/paginationThunks';
import { smoothScrollToTop } from "../../../utils/scroll";
import { getPageFromOffset } from '../../../utils/pagination';

const classBlock = 'search-panel-with-result-body';

class SearchPanelWithResultBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: null,
      isFetchMovies: false,
    }
  };

  static getDerivedStateFromProps(props, state) {
    const { getMovies, routes } = props;
    const { query, isFetchMovies } = state;

    if (routes.search && routes.search !== query && !isFetchMovies) {
      getMovies(routes.search);

      return {query: routes.search, isFetchMovies: true};
    }
    return {query: routes.search, isFetchMovies: false };
  }

  fetchMovies = (params) => {
    const { getMovies } = this.props;

    params.offset = '0';
    this.setState({ isFetchMovies: true});
    getMovies(params);
  };

  fetchMovieById = () => {
    smoothScrollToTop();
  };

  toggleIsFetchMovies = () => {
    this.setState({isFetchMovies: true});
  };

  render() {
    const {
      movies,
      resultsCount,
      film,
      filmsGenre,
      searchParams,
      getSearchParams,
      paginationParams,
      getMovies,
      getActivePage,
    } = this.props;

    return(
      <>
       <SearchPanel
          searchParams={searchParams}
          setSearchParams={getSearchParams}
          getSearchParams={this.fetchMovies}
        />
       <ResultsBody
          withSearchPanel
          filmsGenre={filmsGenre}
          film={film}
          showResultCount
          getFilm={this.fetchMovieById}
          movies={movies}
          resultsCount={resultsCount}
          setPageParams={getSearchParams}
          paginationParams={paginationParams}
          setActivePage={getActivePage}
          searchParams={searchParams}
          getMovies={getMovies}
          toggleIsFetchMovies={this.toggleIsFetchMovies}
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
      paginationParams: state.paginationReducer,
    }
  },
  { getMovies, getMovie, getMovieGenre, getSearchParams, getActivePage }
)(SearchPanelWithResultBody)
