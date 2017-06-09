import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import DevTools from './DevTools/DevTools';

import reducers from './reducers'

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import passthruMiddleware from './middlewares/passthruMiddleware';
import confirmMiddleware from './middlewares/confirmMiddleware';

const middlewares = [logger, thunk, passthruMiddleware, confirmMiddleware];

const createStore = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(_createStore);

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

export default store;
