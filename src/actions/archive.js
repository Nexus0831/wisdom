// node_modules
import {
  createAction
} from 'redux-actions';

import {
  change
} from 'redux-form';

import * as actionName from './actionNames/archive';


export const realTimePreview = createAction(
  actionName.REALTIMEPREVIEW,
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

export const fullPreview = createAction(
  actionName.FULLPREVIEW,
  async () => {
    const payload = {};
    try {
      payload.isModes = {isPreview: true, isDivided: false};
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const fullEditor = createAction(
  actionName.FULLPREVIEW,
  async () => {
    const payload = {};
    try {
      payload.isModes = {isPreview: false, isDivided: false};
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
      payload.isModes = {isPreview: false, isDivided: true};
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const shortCut = createAction(
  actionName.SHORTCUT,
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