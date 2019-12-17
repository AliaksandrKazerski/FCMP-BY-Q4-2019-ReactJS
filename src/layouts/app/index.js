import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { store } from '../../store/store';
import MainPage from '../../components/organisms/main-page';
import ErrorBoundary from '../../components/atoms/error-boundary';

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <ErrorBoundary>
            <MainPage/>
          </ErrorBoundary>
        </Provider>
      </Router>
    );
  };
};
