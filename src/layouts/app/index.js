import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store/store';
import MainPage from '../../components/organisms/main-page';
import ErrorBoundary from '../../components/atoms/error-boundary';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <MainPage/>
        </ErrorBoundary>
      </Provider>
    );
  };
};
