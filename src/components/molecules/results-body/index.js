import React from 'react';
import { Link } from 'react-router-dom';

import Movie from '../../molecules/movie';
import ResultCount from '../../atoms/results-count'
import ItemGenre from '../../atoms/item-genre';
import IconButton from '../../atoms/icon-button';
import Pagination from '../pagination';

import { getOffset, getPageFromOffset } from '../../../utils/pagination';

import Logo from '../../../../img/netflix2.png'

import './results-body.scss';

const classBlock = 'results-body';

export default class ResultsBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActivePagination: false,
      offset: null,
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { searchParams, setActivePage, paginationParams } = props;

    if (state.offset !== searchParams.offset) {
      setActivePage(getPageFromOffset(searchParams.offset, paginationParams.limit));
      return { offset: searchParams.offset };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    const { searchParams, getMovies, toggleIsFetchMovies, withSearchPanel, film } = this.props;

    if (prevProps.searchParams.offset !== searchParams.offset && this.state.isActivePagination) {
      if (withSearchPanel) {
        getMovies(searchParams);
        toggleIsFetchMovies();
      } else {
        getMovies({ params: { search: film.genres[0], searchBy: 'genres', offset: searchParams.offset }, config: 'byGenres' });
      }
      this.setState({ isActivePagination: false });
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
    this.setState({ isActivePagination: true });
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
          <Pagination
            count={resultsCount}
            limit={paginationParams.limit}
            activePage={paginationParams.activePage}
            changePage={this.changePage}
          />
          <IconButton
            logo={Logo}
          />
        </div>
      </div>
    );
  };
};
