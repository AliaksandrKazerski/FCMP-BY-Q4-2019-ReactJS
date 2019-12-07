import React from 'react';
import './item-image.scss';

const classBlock = 'item-image';

export default class ItemImage extends React.Component {
  render() {
    const { imgURL } = this.props;

    return(
        <div 
          className={classBlock}
        >
          <img
          src={imgURL}
          />
        </div>
    );
  }
}