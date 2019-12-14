import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import movieReducer from './reducers/movieReducer';

const reducer = combineReducers({movieReducer});

export const store = createStore(reducer, applyMiddleware(thunk));
