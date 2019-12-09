import React from 'react';

import { getTextToUpperCase } from '../../../utils/transform-text';

import './search-button.scss';

const classBlock = 'search-button';

export default class SearchButton extends React.Component {
  render() {
    const { defaultValue, onClick, active, additionalClass } = this.props;

    return(
      <>
        <input
          type={'button'}
          className={active ? `${classBlock}--active ${additionalClass}` : `${classBlock} ${additionalClass}`}
          onClick={onClick}
          value={getTextToUpperCase(defaultValue)}
        >
        </input>
      </>
    );
  }
}
