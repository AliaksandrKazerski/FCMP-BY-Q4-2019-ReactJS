import React from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import SearchPanel from '../../molecules/search-panel';
import ResultsBody from '../../molecules/results-body';
import Film from '../../molecules/film';
import { getMovies, getMovie, getMovieGenre } from '../../../store/thunks/moviesThunks';
import { smoothScrollToTop } from "../../../utils/scroll";

import './main-page.scss';

const classBlock = 'main-page';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  };

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
      getMovies,
      getMovie,
      movies,
      resultsCount,
      film,
      filmsGenre,
      getMovieGenre,
    } = this.props;

    return(
      <main className={classBlock}>
        <div className={`${classBlock}__content`}>
          <Switch>
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
                      getMoviesGenre={getMovieGenre}
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
              component={() => {
                return (
                <>
                  <SearchPanel
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
                )
              }}
            />
            <Route component={() => <span>{'Not Found'}</span>}/>
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
    }
  },
  { getMovies, getMovie, getMovieGenre }
)(MainPage)
