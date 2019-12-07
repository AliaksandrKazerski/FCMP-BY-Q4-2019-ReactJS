import React from 'react';

import ItemImage from '../../atoms/item-image/index';
import ItemReleaseDate from '../../atoms/item-release-date';
import ItemTitle from '../../atoms/item-title/inex';
import ItemRating from '../../atoms/item-rating';

import './film.scss';

const classBlock = 'film';

export default class Film extends React.Component {

  render() {
    const { 
      poster_path,
      title,
      release_date,
      vote_count,

    } = this.props.film;

    return(
      <div 
        className={classBlock}
      >
        <ItemImage
          imgURL={poster_path}
        />
        <ItemTitle
          titleText={title}
        />
        <ItemRating
          ratingText={vote_count}
        />
        <ItemReleaseDate
          releaseText={release_date}
        />
      </div>
    );
  }
}