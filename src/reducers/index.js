import {
  combineReducers
} from 'redux';

import {
  reducer as formReducer
} from 'redux-form';

import archive from './archive';

export default combineReducers({
  form: formReducer,
  archive
});