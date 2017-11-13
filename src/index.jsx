import React from 'react';
import { render } from 'react-dom';

import store from './store';

import 'react-hot-loader/patch';

import {
  Provider
} from 'react-redux';

// components
import App from './components/App';

render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);

// hot reload
if (module.hot) {
  module.hot.accept(App, () => { render(<App />); });
}