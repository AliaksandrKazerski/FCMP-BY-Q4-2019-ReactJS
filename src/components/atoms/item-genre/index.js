import React from 'react';
import './item-genre.scss';

import { getTextFromArray } from '../../../utils/transform-text';

const classBlock = 'item-genre';

export default class ItemGenre extends React.PureComponent {
  render() {
    const { genreText } = this.props;

    return(
      <>
      <span
        className={classBlock}
      >
        {getTextFromArray(genreText)}
      </span>
    </>
    );
  }
}
