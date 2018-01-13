import {
  Record,
  List
} from 'immutable';

// ToDo: modesをisMode(Stringオブジェクト)で再定義
const ArchiveState = Record({
  markdown: '',
  isMode: 'editor',
  isOpens: List([]).toArray(),
  isCreate: false,
  datas: List([]).toArray(),
  results: List([]).toArray(),
  data: List([]).toObject()
});

class Archive extends ArchiveState {
  modalAction(state, payload) {
    const newState = state.update('isOpens',
      () => {
        return payload.isOpens;
      });
    return newState
  }

  archiveCreate(state, payload) {
    const newState = state.update('isCreate',
      () => {
        return payload.is_create;
      });
    return newState
  }

  archiveRead(state, payload) {
    const newState = state.update('datas',
      () => {
        return payload.archives;
      });
    return newState
  }

  resultInit(state, payload) {
    const newState = state.update('results',
      () => {
        return payload.results;
      });
    return newState
  }

  archiveSearch(state, payload) {
    const newState = state.update('results',
      () => {
        return payload.archives;
      });
    return newState
  }

  archiveDetail(state, payload) {
    const newState = state.update('data',
      () => {
        return payload.archive;
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