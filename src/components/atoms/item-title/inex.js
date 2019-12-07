import React from 'react';
import './item-title.scss';

const classBlock = 'item-title';

export default class ItemTitle extends React.Component {
  render() {
    const { titleText } = this.props;

    return(
      <>
      <span 
        className={classBlock}
      >
        {titleText}
      </span>
    </>
    );
  }
}