import React from 'react';
import { connect } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

import SearchPanel from '../../molecules/search-panel';
import ResultsBody from '../../molecules/results-body';
import Film from '../../molecules/film';
import ErrorMessage from '../../atoms/error-message';
import { getMovies, getMovie, getMovieGenre, getSearchParams } from '../../../store/thunks/moviesThunks';

import './main-page.scss';

const classBlock = 'main-page';

class MainPage extends React.Component {
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
      return {query: routes.search}
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

  render() {
    const {
      getMovies,
      getMovie,
      movies,
      resultsCount,
      film,
      filmsGenre,
      getMovieGenre,
      searchParams,
      getSearchParams,
    } = this.props;

    return(
      <main className={classBlock}>
        <div className={`${classBlock}__content`}>
          <Switch>
            <Route
              exact
              path='/movies'
              component={() => {
                return (
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
                  movies={movies}
                  resultsCount={resultsCount}
                  />
                </>
                )
              }}
            />
            <Route
              path='/film/:id'
              component={() => {
                return (
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
                       movies={movies}
                       resultsCount={resultsCount}
                     />
                  </>
                )
              }}
            />
            <Route
              exact
              path='/'
              component={() => <Redirect to='/movies'/>}
            />
            <Route
              component={() => {
                return (
                  <ErrorMessage
                    callback={this.callbackError}
                    message={'404 not found'}
                  />
                )
              }}
            />
          </Switch>
        </div>
      </main>
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
)(MainPage)
