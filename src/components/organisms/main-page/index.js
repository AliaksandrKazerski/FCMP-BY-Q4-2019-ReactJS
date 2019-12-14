import React from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../../molecules/search-panel';
import ResultsBody from '../../molecules/results-body';
import Film from '../../molecules/film';
import { moviesAPI } from '../../../api';
import { getMovies } from '../../../store/thunks/movieThunks';

import './main-page.scss';

const classBlock = 'main-page';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchPanel: true,
      film: null,
      filmsGenre: '',
    };
  };

  fetchMovies = (params) => {
    const { getMovies } = this.props;
    getMovies(params);
  };

  fetchMovieById = (id, genre) => {
    moviesAPI.getMovie(id)
      .then(data => {
        this.setState({film: data, showSearchPanel: false});
      })
      .catch(error => this.setState({error}));
    moviesAPI.getMovies({genre})
      .then(data => {
        this.setState({movies: data.data, filmsGenre: genre});
      })
      .catch(error => this.setState({error}));
  };

  showSearchPanel = () => {
    this.setState({showSearchPanel: true, film: null});
  };

  render() {
    console.log(this.props);
    const {
      showSearchPanel,
      film,
      filmsGenre,
      error,
    } = this.state;

    const {
      movies,
      resultsCount,
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
    }
  },
  { getMovies }
)(MainPage)
