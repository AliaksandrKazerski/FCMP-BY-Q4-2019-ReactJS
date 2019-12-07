import React from 'react';

import Movie from '../../molecules/movie';
import ResultCount from '../../atoms/results-count'
import ItemGenre from '../../atoms/item-genre';

import './results-body.scss';

const classBlock = 'results-body';

export default class ResultsBody extends React.Component {

  renderAdditionalPanel = () => {
    const { showResultCount, resultsCount, filmsGenre } = this.props 
    return (
      <div>
        {showResultCount ? 
          <ResultCount
          resultValue={resultsCount}
          /> : 
          <span>
            {'Films by '}
            <ItemGenre
              genreText={filmsGenre}
            />
            {' genre'}
          </span>
        }
      </div>
    )
  }

  renderMovies = () => {
    const { movies, getFilm, film } = this.props;
    return movies.map(movie => {
      if (film && film.id === movie.id) {
        return;
      }
      return (
        <Movie
          onClick={() => {getFilm(movie.id, movie.genres[0])}}
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
        {!!movies.length && this.renderAdditionalPanel()}
        {!!movies.length ? this.renderMovies() : <span> No films found </span>}
      </div>
    );
  }
}