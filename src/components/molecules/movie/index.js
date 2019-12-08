import React from 'react';

import ItemImage from '../../atoms/item-image/index';
import ItemReleaseDate from '../../atoms/item-release-date';
import ItemGenre from '../../atoms/item-genre';
import ItemTitle from '../../atoms/item-title/inex';

import './movie.scss';

const classBlock = 'movie';

export default class Movie extends React.Component {

  render() {
    const { 
      imgURL,
      releaseText,
      genreText,
      titleText,
      onClick, 
    } = this.props;

    return(
      <div 
        className={classBlock}
        onClick={onClick}
      >
          <ItemImage
            imgURL={imgURL}
          />
          <div className={`${classBlock}__release-and-title`}>
            <ItemTitle
              titleText={titleText}
            />
            <ItemReleaseDate
              releaseText={releaseText}
            />
          </div>
          <ItemGenre
            genreText={genreText}
          />
        </div>
    );
  }
}