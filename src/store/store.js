import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import movieReducer from './reducers/moviesReducer';

const reducer = combineReducers({movieReducer});

export const store = createStore(reducer, applyMiddleware(thunk, logger));
