import React from 'react';

import ItemImage from '../../atoms/item-image/index';
import ItemReleaseDateAndRunTime from '../../atoms/item-release-date';
import ItemTitle from '../../atoms/item-title/inex';
import ItemRating from '../../atoms/item-rating';
import ItemDescription from '../../atoms/item-description';
import SearchButton from '../../atoms/search-button';

import './film.scss';

const classBlock = 'film';

export default class Film extends React.Component {

  renderReleaseDateAndRunTime = (data, runTime) => {
    return <ItemReleaseDateAndRunTime
      releaseText={data}
      runTime={runTime}
    />
  }

  render() {
    const {
      hideFilm,
      film: { 
        poster_path,
        title,
        release_date,
        vote_average,
        overview,
        runtime,
      }
     } = this.props;

    return(
      <div 
        className={classBlock}
      >
        <ItemImage
          imgURL={poster_path}
        />
        <div className={`${classBlock}__overview`}>
          <div className={`${classBlock}__overview--title-and-raiting`}>
            <ItemTitle
              titleText={title}
            />
            <ItemRating
              ratingText={vote_average}
            />
          </div>
          <div className={`${classBlock}__overview--release-and-runtime`}>
            {release_date && this.renderReleaseDateAndRunTime(release_date)}
            {runtime && this.renderReleaseDateAndRunTime(runtime, true)}
          </div>
          <ItemDescription
            descriptionText={overview}
          />
          <SearchButton
            onClick={hideFilm}
            defaultValue={'back'}
          />
        </div>
      </div>
    );
  }
}