import React from 'react';

import MainPage from '../../components/organisms/main-page';
import ErrorBoundary from '../../components/atoms/error-boundary';

export default class App extends React.Component {

  render() {
    return (
      <ErrorBoundary>
        <MainPage/>
      </ErrorBoundary>
    );
  };
};
