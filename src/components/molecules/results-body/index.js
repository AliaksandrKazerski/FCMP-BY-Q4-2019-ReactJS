import React from 'react';

import Movie from '../../molecules/movie/index';

import './results-body.scss';

const classBlock = 'results-body';

export default class ResultsBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  renderMovies = () => {
    const { movies, getFilm } = this.props;    
    
    return movies.map(movie => {
      return (
          <Movie
            onClick={() => {getFilm(movie.id)}}
            key={movie.id}
            imgURL={movie.poster_path}
            releaseText={movie.release_date}
            genreText={movie.genres}
            titleText={movie.title}
          />
      );
    })
  }

  render() {
    const { movies } = this.props;

    return(
      <div className={classBlock}>
        {!!movies.length && this.renderMovies()}
      </div>
    );
  }
}