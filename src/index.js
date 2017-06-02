import './styles/index.css'

import React from 'react'
import {Provider} from 'react-redux';
import store from './store';
import {render} from 'react-dom'

import App from './components/App'

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root/>, document.querySelector('#app'))
