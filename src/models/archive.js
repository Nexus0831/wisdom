import {
  Record,
  List
} from 'immutable';

const ArchiveState = Record({
  markdown: '',
  mode: {isPreview: false, isDivided: false},
  additional: ''
});

class Archive extends ArchiveState {
  realTimePreview(state, payload) {
    const newState = state.update('markdown',
      () => {
        return payload.text;
      });
    return newState;
  }

  fullPreview(state, payload) {
    const newState = state.update('mode',
      () => {
        return payload.isPreview;
      });
    return newState;
  }

  divided(state, payload) {
    const newState = state.update('mode',
      () => {
        return payload.isDivided;
      });
    return newState;
  }
}

export default Archive;