import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [logger, thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
