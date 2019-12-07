import React from 'react';
import './item-release-date.scss';

const classBlock = 'item-release-date';

export default class ItemReleaseDate extends React.Component {
  render() {
    const { releaseText } = this.props;

    return(
      <>
        <span 
          className={classBlock}
        >
          {releaseText}
        </span>
      </>
    );
  }
}