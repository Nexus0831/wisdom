import {
  combineReducers
} from 'redux';

import {
  reducer as formReducer
} from 'redux-form';

import archive from './archive';
import app from './app';

export default combineReducers({
  form: formReducer,
  archive,
  app
});