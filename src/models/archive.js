import {
  Record,
  List
} from 'immutable';

// ToDo: modesをisMode(Stringオブジェクト)で再定義
const ArchiveState = Record({
  markdown: '',
  isMode: 'editor',
  isOpen: false
});

class Archive extends ArchiveState {
  modalAction(state, payload) {
    const newState = state.update('isOpen',
      () => {
        return payload.isOpen;
      });
    return newState
  }


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

  tabInput(state, payload) {
    const newState = state.update('markdown',
      () => {
        return payload.text;
      });
    return newState;
  }

  linefeed(state, payload) {
    const newState = state.update('markdown',
      () => {
        return payload.text;
      });
    return newState;
  }
}

export default Archive;