import React from 'react';
import { withRouter, Link } from "react-router-dom";

import ItemImage from '../../atoms/item-image/index';
import ItemReleaseDateAndRunTime from '../../atoms/item-release-date';
import ItemTitle from '../../atoms/item-title/inex';
import ItemRating from '../../atoms/item-rating';
import ItemDescription from '../../atoms/item-description';
import IconButton from '../../atoms/icon-button';

import SearchLogo from '../../../../img/search-1.jpg';
import NetflixLogo from '../../../../img/netflix2.png';

import './film.scss';

const classBlock = 'film';

class Film extends React.Component {

  componentWillMount() {
    const { film, getFilm, match: {params} } = this.props;

    if (!film) {
      getFilm(params.id);
    }
  }

  componentDidMount() {
    const {film, movies, getMovies, getMoviesGenre} = this.props;

    if (!movies.length && film) {
      getMovies({search: film.genres[0], searchBy: 'genres'});
      getMoviesGenre(film.genres[0]);
    }
  }

  renderReleaseDateAndRunTime = (data, runTime) => {
    return <ItemReleaseDateAndRunTime
      releaseText={data}
      runTime={runTime}
    />
  };

  renderFilmContent = () => {
    const {
      hideFilm,
      film
    } = this.props;

    return (
      <>
        <IconButton
          logo={NetflixLogo}
        />
        <ItemImage
          imgURL={film.poster_path}
        />
        <div className={`${classBlock}__overview`}>
          <div className={`${classBlock}__overview--title-and-raiting`}>
            <ItemTitle
              titleText={film.title}
            />
            <ItemRating
              ratingText={film.vote_average}
            />
          </div>
          <div className={`${classBlock}__overview--release-and-runtime`}>
            {film.release_date && this.renderReleaseDateAndRunTime(film.release_date)}
            {film.runtime && this.renderReleaseDateAndRunTime(film.runtime, true)}
          </div>
          <ItemDescription
            descriptionText={film.overview}
          />
          <Link to='/'>
            <IconButton
              logo={SearchLogo}
              onClick={hideFilm}
            />
          </Link>
        </div>
      </>
    );
  };

  render() {
    return (
      <div
        className={classBlock}
      >
        {this.props.film ? this.renderFilmContent() : <span>{'Download'}</span>}
      </div>
    );
  };
}

export default withRouter(Film)
