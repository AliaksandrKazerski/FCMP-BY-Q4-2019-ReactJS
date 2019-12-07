import React from 'react';
import './results-count.scss';

const classBlock = 'results-count';

export default class ResultsCount extends React.Component {
  render() {
    const { resultValue } = this.props;
    
    return(
      <>
        <span 
          className={classBlock}
        >
          {!!resultValue && `${resultValue} movie found`}
        </span>
      </>
    );
  }
}