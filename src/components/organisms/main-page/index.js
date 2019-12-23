import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import ErrorMessage from '../../atoms/error-message';
import SearchPanelWithResultBody from '../../molecules/search-panel-with-result-body/index';
import FilmWithResultPanel from '../../molecules/film-with-result-body/index';

import './main-page.scss';

const classBlock = 'main-page';

export default class MainPage extends React.Component {

  render() {

    return(
      <main className={classBlock}>
        <div className={`${classBlock}__content`}>
          <Switch>
            <Route
              exact
              path='/movies'
              component={SearchPanelWithResultBody}
            />
            <Route
              path='/film/:id'
              component={FilmWithResultPanel}
            />
            <Route
              exact
              path='/'
              component={() => <Redirect to='/movies'/>}
            />
            <Route
              component={() => {
                return (
                  <ErrorMessage
                    message={'404 not found'}
                  />
                )
              }}
            />
          </Switch>
        </div>
      </main>
    );
  };
}
