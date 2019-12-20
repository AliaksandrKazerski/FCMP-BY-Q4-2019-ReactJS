import React from 'react';
import { connect } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

import SearchPanel from '../../molecules/search-panel';
import ResultsBody from '../../molecules/results-body';
import Film from '../../molecules/film';
import ErrorMessage from '../../atoms/error-message';
import { getMovies, getMovie, getMovieGenre, deleteMovie, getSearchParams } from '../../../store/thunks/moviesThunks';
import { smoothScrollToTop } from "../../../utils/scroll";

import './main-page.scss';

const classBlock = 'main-page';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPanel: true,
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
      return { showSearchPanel: false, filmId: film.id, query: routes.search }
    }
    return {query: routes.search};
  }

  showSearchPanel = () => {
    const { deleteMovie, film } = this.props;

    this.setState({ showSearchPanel: true });
    if (film) {
      deleteMovie();
    }
  };
 
  fetchMovies = (params) => {
    const { getMovies } = this.props;

    getMovies(params);

  };

  fetchMovieById = (id) => {
    const { getMovie } = this.props;

    this.setState({showSearchPanel: false});
    getMovie(id);
    smoothScrollToTop();
  };

  callbackError = () => {
    if (this.state.showSearchPanel) {
      this.setState({showSearchPanel: false});
    }
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

    const {
      showSearchPanel,
    } = this.state;

    return(
      <main className={classBlock}>
        <div className={`${classBlock}__content`}>
          {showSearchPanel && <SearchPanel
            searchParams={searchParams}
            setSearchParams={getSearchParams}
            getSearchParams={this.fetchMovies}
          />}
          <Switch>
            <Route
              exact
              path='/movies'
              component={() => {
                return (
                <>
                  <ResultsBody
                  filmsGenre={filmsGenre}
                  film={film}
                  showResultCount
                  getFilm={this.fetchMovieById}
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
                      hideFilm={this.showSearchPanel}
                    />
                     <ResultsBody
                       filmsGenre={filmsGenre}
                       film={film}
                       getFilm={this.fetchMovieById}
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
  { getMovies, getMovie, getMovieGenre, deleteMovie, getSearchParams }
)(MainPage)
