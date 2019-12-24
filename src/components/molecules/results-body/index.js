import React from 'react';
import { Link } from 'react-router-dom';

import Movie from '../../molecules/movie';
import ResultCount from '../../atoms/results-count'
import ItemGenre from '../../atoms/item-genre';
import IconButton from '../../atoms/icon-button';
import Pagination from '../pagination';

import { getOffset } from '../../../utils/pagination';

import Logo from '../../../../img/netflix2.png'

import './results-body.scss';

const classBlock = 'results-body';

export default class ResultsBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: null,
    }
  }

  renderAdditionalPanel = () => {
    const { showResultCount, resultsCount, filmsGenre } = this.props;
    return (
      <div className={`${classBlock}__additional-panel--result-count`}>
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
  };

  renderMovies = () => {
    const { movies, getFilm, film } = this.props;
    return movies.map(movie => {
      if (film && film.id === movie.id) {
        return;
      }
      return (
        <Link
          to={`/film/${movie.id}`}
          key={movie.id}
        >
          <Movie
            onClick={getFilm}
            imgURL={movie.poster_path}
            releaseText={movie.release_date}
            genreText={movie.genres}
            titleText={movie.title}
          />
        </Link>
      );
    })
  };

  changePage = (activePage, limit) => {
    const { setPageParams, setActivePage } = this.props;
    const offset = getOffset(activePage, limit);

    setPageParams({ offset });
    setActivePage(activePage);
  };

  render() {
    const { movies, paginationParams, resultsCount } = this.props;

    return(
      <div className={classBlock}>
        <div className={`${classBlock}__additional-panel`}>
          {!!movies.length && this.renderAdditionalPanel()}
        </div>
        <div className={`${classBlock}__movies`}>
          {!!movies.length ? this.renderMovies() : <span className={`${classBlock}__movies--not-found`}> No films found </span>}
        </div>
        <div className={`${classBlock}__footer`}>
          <IconButton
            logo={Logo}
          />
        </div>
        <Pagination
          count={resultsCount}
          limit={paginationParams.limit}
          activePage={paginationParams.activePage}
          changePage={this.changePage}
        />
      </div>
    );
  };
};
