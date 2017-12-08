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
      if (isPreview) {
        payload.isPreview = {isPreview: isPreview, isDivided: !isPreview};
      } else {
        payload.isPreview = {isPreview: isPreview, isDivided: isPreview};
      }
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const divided = createAction(
  actionName.DIVIDED,
  async (isDivided) => {
    const payload = {};
    try {
      if (isDivided) {
        payload.isDivided = {isPreview: !isDivided, isDivided: isDivided};
      } else {
        payload.isDivided = {isPreview: isDivided, isDivided: isDivided};
      }

      return payload;
    } catch (error) {
      return payload;
    }
  }
);