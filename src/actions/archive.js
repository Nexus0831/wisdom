// node_modules
import {
  createAction
} from 'redux-actions';

import * as actionName from './actionNames/archive';

// CRUD
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
  async (isPreview) => {
    const payload = {};
    try {
      payload.isPreview = isPreview;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);