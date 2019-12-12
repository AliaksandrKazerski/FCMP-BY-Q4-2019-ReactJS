import React from 'react';
import './item-description.scss';

const classBlock = 'item-description';

export default class ItemDescription extends React.PureComponent {
  render() {
    const { descriptionText } = this.props;

    return(
      <>
      <span
        className={classBlock}
      >
        {descriptionText}
      </span>
    </>
    );
  }
}
