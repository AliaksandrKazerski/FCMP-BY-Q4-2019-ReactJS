import React from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../../molecules/search-panel';
import ResultsBody from '../../molecules/results-body';
import Film from '../../molecules/film';
import { getMovies, getMovie, getMovieGenre } from '../../../store/thunks/movieThunks';

import './main-page.scss';

const classBlock = 'main-page';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchPanel: true,
    };
  };

  componentDidUpdate(prevProps) {
    if (this.props.film !== prevProps.film) {
      this.setState({ showSearchPanel: false });
    }
  }

  fetchMovies = (params) => {
    const { getMovies } = this.props;
    getMovies(params);
  };

  fetchMovieById = (id, genre) => {
    const { getMovie, getMovieGenre } = this.props;
    getMovie(id);
    getMovies({genre});
    getMovieGenre(genre);
  };

  showSearchPanel = () => {
    this.setState({showSearchPanel: true, film: null});
  };

  render() {
    console.log(this.props);
    const {
      showSearchPanel,
      error,
    } = this.state;

    const {
      movies,
      resultsCount,
      film,
      filmsGenre,
    } = this.props;

    return(
      <main className={classBlock}>
        {error ?
        <div className={`${classBlock}__error`}>
          {error}
        </div> :
        <div className={`${classBlock}__content`}>
        {showSearchPanel ?
        <SearchPanel
          getSearchParams={this.fetchMovies}
        /> :
        <Film
          film={film}
          hideFilm={this.showSearchPanel}
        />
        }
        <ResultsBody
          filmsGenre={filmsGenre}
          film={film}
          showResultCount={showSearchPanel}
          getFilm={this.fetchMovieById}
          movies={movies}
          resultsCount={resultsCount}
        />
      </div>}
      </main>
    );
  };
};

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
