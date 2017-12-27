// node_modules
import {
  createAction
} from 'redux-actions';

import {
  change
} from 'redux-form';

import * as actionName from './actionNames/archive';

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
      await props.dispatch(change('archiveCreate', 'markdown', sentence ));
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
      await props.dispatch(change('archiveCreate', 'markdown', sentence ));
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
      await props.dispatch(change('archiveCreate', 'markdown', sentence ));
      payload.text = sentence;
      textarea.focus();
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const linefeed = createAction(
  actionName.LINE_FEED,
  async (sentence, props) => {
    const payload = {};
    try {
      const textarea = document.querySelector('textarea');
      const pos = textarea.selectionStart;
      const lines = sentence.split("\n");
      console.log(lines);
      if (lines[lines.length-1].match(/^\- /)) {
        sentence = sentence.substr(0, pos) + "\n- " + sentence.substr(pos, sentence.length - 2);
        await props.dispatch(change('archiveCreate', 'markdown', sentence ));
      }
      payload.text = sentence;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);