import * as actions from './../actions/app';

import {
  handleActions
} from 'redux-actions';

import App from '../models/app';

const reducer = handleActions({
  [actions.checkSession](state, action) {
    return state.checkSession(state, action.payload);
  },
  [actions.readSigninUser](state, action) {
    return state.readSigninUser(state, action.payload);
  }

}, new App());

export default reducer;