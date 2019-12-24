import React from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../../molecules/search-panel';
import ResultsBody from '../../molecules/results-body';

import { getMovies, getMovie, getMovieGenre } from '../../../store/thunks/moviesThunks';
import { getSearchParams } from '../../../store/thunks/searchThunks';
import { getActivePage } from '../../../store/thunks/paginationThunks';
import { smoothScrollToTop } from "../../../utils/scroll";

const classBlock = 'search-panel-with-result-body';

class SearchPanelWithResultBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: null,
      query: null,
      isFetchMovies: false,
    }
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    const { movies, searchParams, getMovies, routes, paginationParams: { activePage } } = props;
    const { query, page, isFetchMovies } = state;

    if (routes.search && routes.search !== query) {
      console.log('2');
      getMovies(routes.search);
      return { query: routes.search, isFetchMovies: true };
    }
    if (activePage !== page && !isFetchMovies) {
      console.log('1');
      getMovies(searchParams);
      return { page: activePage, isFetchMovies: false };
    }
    return { query: routes.search };
  }

  fetchMovies = (params) => {
    const { getMovies } = this.props;

    getMovies(params);
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
