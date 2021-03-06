// node_modules
import {
  createAction
} from 'redux-actions';

import {
  change
} from 'redux-form';

import * as actionName from './actionNames/archive';
import * as apis from './api/archive';
import * as app from './app';

export const modalAction = createAction(
  actionName.IS_OPEN,
  async (is_opne, index) => {
    const payload = {};
    const stack = [];
    try {
      stack[index] = is_opne;
      payload.isOpens = stack;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const archiveCreate = createAction(
  actionName.ARCHIVE_CREATE,
  async (values) => {
    const payload = {};
    try {
      await apis.archiveCreate(values);
      payload.is_create = true;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const archiveRead = createAction(
  actionName.ARCHIVE_READ,
  async (userName) => {
    const payload = {};
    try {
      payload.archives = await apis.archiveRead(userName);
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const archiveEdit = createAction(
  actionName.ARCHIVE_EDIT,
  async (values) => {
    const payload = {};
    try {
      payload.is_edited = await apis.archiveEdit(values);
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const archiveDelete = createAction(
  actionName.ARCHIVE_DELETE,
  async (id) => {
    const payload = {};
    try {
      payload.is_delete = await apis.archiveDelete(id);
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const resultInit = createAction(
  actionName.RESULT_INIT,
  async (archives) => {
    const payload = {};
    try {
      payload.results = archives;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const archiveSearch = createAction(
  actionName.ARCHIVE_SEARCH,
  async (archives, word) => {
    const payload = {};
    try {
      if(word.length !== 0) {
        payload.results = archives.filter(item => {
          return (item.title.indexOf(word) !== -1)
        }) ;
      } else {
        payload.results = archives;
      }
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const archiveDetail = createAction(
  actionName.ARCHIVE_DETAIL,
  (archives, id) => {
    const payload = {};
    try {
      payload.archive = archives.filter(item => {
        return (item.id === id)
      })[0];
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const realTimePreview = createAction(
  actionName.REAL_TIME_PREVIEW,
  async (text) => {
    const payload = {};
    try {
      payload.text = text;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

// モード切り替え
export const fullPreview = createAction(
  actionName.FULL_PREVIEW,
  async () => {
    const payload = {};
    try {
      payload.isMode = 'preview';
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const fullEditor = createAction(
  actionName.FULL_EDITOR,
  async () => {
    const payload = {};
    try {
      payload.isMode = 'editor';
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const divided = createAction(
  actionName.DIVIDED,
  async () => {
    const payload = {};
    try {
      payload.isMode = 'divide';
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

// ツールバー
export const shortCut = createAction(
  actionName.SHORT_CUT,
  async (sentence, text, num, props) => {
    const payload = {};
    try {
      const textarea = document.querySelector('textarea');
      const pos = textarea.selectionStart;
      textarea.focus();
      sentence = sentence.substr(0, pos) + text + sentence.substr(pos, sentence.length);
      await props.dispatch(change('archiveForm', 'markdown', sentence ));
      textarea.selectionEnd = pos + num;
      textarea.selectionStart = pos + num;
      payload.text = sentence;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

// エディタ機能
export const automation = createAction(
  actionName.AUTOMATION,
  async (sentence, char, props) => {
    const payload = {};
    try {
      const textarea = document.querySelector('textarea');
      const pos = textarea.selectionStart;
      sentence = sentence.substr(0, pos) + char + sentence.substr(pos, sentence.length);
      await props.dispatch(change('archiveForm', 'markdown', sentence ));
      textarea.selectionEnd = pos;
      textarea.selectionStart = pos;
      payload.text = sentence;
      return payload;
    } catch(error) {
      return payload;
    }
  }
);

export const tabInput = createAction(
  actionName.TAB_INPUT,
  async (sentence, props) => {
    const payload = {};
    try {
      const textarea = document.querySelector('textarea');
      const pos = textarea.selectionStart;
      textarea.focus();
      sentence = sentence.substr(0, pos) + "  " + sentence.substr(pos, sentence.length);
      await props.dispatch(change('archiveForm', 'markdown', sentence ));
      payload.text = sentence;
      textarea.focus();
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

// ToDo: 未実装
export const linefeed = createAction(
  actionName.LINE_FEED,
  async (sentence, props) => {
    const payload = {};
    try {
      const textarea = document.querySelector('textarea');
      const pos = textarea.selectionStart;
      const lines = sentence.split("\n");
      if (lines[lines.length-1].match(/^\- /)) {
        sentence = sentence.substr(0, pos) + "\n- " + sentence.substr(pos, sentence.length - 2);
        await props.dispatch(change('archiveForm', 'markdown', sentence ));
      }
      payload.text = sentence;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);