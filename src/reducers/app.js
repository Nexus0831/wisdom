import * as actions from './../actions/app';

import {
  handleActions
} from 'redux-actions';

import App from './../models/app';

const reducer = handleActions({
  [actions.signup](state, action) {
    return state.signup(state, action.payload);
  },
  [actions.signin](state, action) {
    return state.signin(state, action.payload);
  },
  [actions.confirm](state, action) {
    return state.confirm(state, action.payload);
  }

}, new App());

export default reducer;