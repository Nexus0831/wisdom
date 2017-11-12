import {
  createStore,
  applyMiddleware
} from 'redux';

import promiseMiddleware from 'redux-promise';

import thunk from 'redux-thunk';

import reducer from './../reducers/index.js';


const middleWare = [
  promiseMiddleware,
  thunk
];

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare)
);

export default store;