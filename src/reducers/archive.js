import * as actions from './../actions/archive';

import {
  handleActions
} from 'redux-actions';

import Archive from './../models/archive'

const reducer = handleActions({
  [actions.modalAction](state, action) {
    return state.modalAction(state, action.payload);
  },
  [actions.archiveCreate](state, action) {
    return state.archiveCreate(state, action.payload);
  },
  [actions.archiveRead](state, action) {
    return state.archiveRead(state, action.payload);
  },
  [actions.resultInit](state, action) {
    return state.resultInit(state, action.payload);
  },
  [actions.archiveSearch](state, action) {
    return state.archiveSearch(state, action.payload);
  },
  [actions.realTimePreview](state, action) {
    return state.realTimePreview(state, action.payload);
  },
  [actions.fullPreview](state, action) {
    return state.fullPreview(state, action.payload);
  },
  [actions.fullEditor](state, action) {
    return state.fullEditor(state, action.payload);
  },
  [actions.divided](state, action) {
    return state.divided(state, action.payload);
  },
  [actions.shortCut](state, action) {
    return state.shortCut(state, action.payload);
  },
  [actions.automation](state, action) {
    return state.automation(state, action.payload);
  },
  [actions.tabInput](state, action) {
    return state.linefeed(state, action.payload);
  },
  [actions.linefeed](state, action) {
    return state.linefeed(state, action.payload);
  }
}, new Archive());

export default reducer;