import React from 'react';

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
