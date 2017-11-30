import {
  Record,
  List
} from 'immutable';

const Result = Record({
  markdown: '',
  isPreview: false
});

class Archive extends Result {
  realTimePreview(state, payload) {
    const newState = state.update('markdown',
      () => {
        return payload.text;
      });
    return newState;
  }

  fullPreview(state, payload) {
    const newState = state.update('isPreview',
      () => {
        return payload.isPreview;
      });
    return newState;
  }
}

export default Archive;