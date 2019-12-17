import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'

import movieReducer from './reducers/moviesReducer';

const middleware = routerMiddleware(browserHistory);

const reducer = combineReducers({movieReducer, routing: routerReducer});

export const store = createStore(reducer, applyMiddleware(thunk, logger, middleware));
