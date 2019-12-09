import React from 'react';

import { getSubstringFourSimbols } from '../../../utils/transform-text';

import './item-release-date.scss';

const classBlock = 'item-release-date';

export default class ItemReleaseDateAndRunTime extends React.Component {
  render() {
    const { releaseText, runTime } = this.props;

    return(
      <div className={classBlock}>
        <span>
          {runTime ? `${releaseText} min` : getSubstringFourSimbols(releaseText)}
        </span>
      </div>
    );
  }
}
