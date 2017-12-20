import {
  Record,
  List
} from 'immutable';

// ToDo: modesをisMode(Stringオブジェクト)で再定義
const ArchiveState = Record({
  markdown: '',
  modes: {isPreview: false, isDivided: false},
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
    const newState = state.update('modes',
      () => {
        return payload.isModes;
      });
    return newState;
  }

  fullEditor(state, payload) {
    const newState = state.update('modes',
      () => {
        return payload.isModes;
      });
    return newState;
  }

  divided(state, payload) {
    const newState = state.update('modes',
      () => {
        return payload.isModes;
      });
    return newState;
  }

  shortCut(state, payload) {
    const newState = state.update('markdown',
      () => {
        return payload.text;
      });
    return newState;
  }

  automation(state, payload) {
    const newState = state.update('markdown',
      () => {
        return payload.text;
      });
    return newState;
  }
}

export default Archive;