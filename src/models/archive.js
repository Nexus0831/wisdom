import {
  Record,
  List
} from 'immutable';

// ToDo: modesをisMode(Stringオブジェクト)で再定義
const ArchiveState = Record({
  markdown: '',
  isMode: 'editor',
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
    const newState = state.update('isMode',
      () => {
        return payload.isMode;
      });
    return newState;
  }

  fullEditor(state, payload) {
    const newState = state.update('isMode',
      () => {
        return payload.isMode;
      });
    return newState;
  }

  divided(state, payload) {
    const newState = state.update('isMode',
      () => {
        return payload.isMode;
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