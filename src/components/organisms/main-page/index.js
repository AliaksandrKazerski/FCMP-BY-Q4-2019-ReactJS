import React from 'react';

import SearchPanel from '../../molecules/search-panel';
import ResultsBody from '../../molecules/results-body';
import Film from '../../molecules/film';
import { moviesAPI } from '../../../api';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultsCount: '',
      movies: [],
      error: '',
      showSearchPanel: true,
      film: {},
    };
  };

  fetchMovies = (params) => {
    moviesAPI.getMovies(params)
      .then(data => {
        console.log(data);
        this.setState({movies: data.data, resultsCount: data.total});
      })
      .catch(error => this.setState({error}));
  };

  fetchMovieById = (id) => {
    moviesAPI.getMovie(id)
      .then(data => {
        console.log(data);
        this.setState({film: data, showSearchPanel: false});
      })
      .catch(error => this.setState({error}));
  };

  render() {
    const { 
      movies, 
      resultsCount, 
      showSearchPanel, 
      film 
    } = this.state

    return(
      <>
        {showSearchPanel ? 
        <SearchPanel
          getSearchParams={this.fetchMovies}
          resultsCount={resultsCount}
        /> :
        <Film
          film={film}
        />
        }
        <ResultsBody
          getFilm={this.fetchMovieById}
          movies={movies}
        />
      </>
    );
  };
}
