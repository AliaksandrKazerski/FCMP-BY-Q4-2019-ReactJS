import React from 'react';
import './item-rating.scss';

const classBlock = 'item-rating';

export default class ItemRating extends React.Component {
  render() {
    const { ratingText } = this.props;

    return(
      <>
        <div 
          className={classBlock}
        >
          <span className={`${classBlock}__text`}>{ratingText}</span>
        </div>
      </>
    );
  }
}
