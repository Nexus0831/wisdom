import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

import {
  Provider
} from 'react-redux';

// components
import App from './components/App';

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);
