import React from 'react';

import './error-boundary.scss';

const classBlock = 'error-boundary';

export default class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
      <div className={classBlock}>
        <h1 className={`${classBlock}__title`}>The application didn't work. Please come back later.</h1>
      </div>
      );
    }

    return this.props.children;
  }
}
