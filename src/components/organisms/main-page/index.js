import React from 'react';

import SearchPanel from '../../molecules/search-panel';
import ResultsBody from '../../molecules/results-body';
import Film from '../../molecules/film';
import { moviesAPI } from '../../../api';

import './main-page.scss';

const classBlock = 'main-page';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultsCount: '',
      movies: [],
      error: null,
      showSearchPanel: true,
      film: null,
      filmsGenre: '',
    };
  };

  fetchMovies = (params) => {
    moviesAPI.getMovies(params)
      .then(data => {
        this.setState({movies: data.data, resultsCount: data.total});
      })
      .catch(error => this.setState({error}));
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
  }

  render() {
    const { 
      movies, 
      resultsCount, 
      showSearchPanel, 
      film,
      filmsGenre,
      error, 
    } = this.state

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
}
