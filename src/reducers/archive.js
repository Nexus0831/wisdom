import * as actions from './../actions/archive';

import {
  handleActions
} from 'redux-actions';

import Archive from './../models/archive'

const reducer = handleActions({
  [actions.realTimePreview](state, action) {
    return state.realTimePreview(state, action.payload);
  },
  [actions.fullPreview](state, action) {
    return state.fullPreview(state, action.payload);
  },
  [actions.divided](state, action) {
    return state.divided(state, action.payload);
  }
}, new Archive());

export default reducer;