import React from 'react';
import { getTextToUpperCase } from './../../../utils/transform-text';

import './error-message.scss';

const classBlock = 'error-message';

export default class ErrorMessage extends React.PureComponent {

  componentDidMount() {
    this.props.callback();
  }


  render() {
    const { message } = this.props;

    return(
      <div className={`${classBlock}`}>
        <h1 className={`${classBlock}__title`}>{getTextToUpperCase(message)}</h1>
      </div>
    );
  }
}
