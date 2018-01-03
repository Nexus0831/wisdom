// node_modules
import {
  createAction
} from 'redux-actions';

import * as actionName from './actionNames/app';

import * as apis from './api/app';

export const checkSession = createAction(
  actionName.CHECK_SESSION,
  async () => {
    const payload = {};
    try {
      payload.isSignin = await apis.checkSession();
      console.log(await apis.checkSession());
      console.log(payload.isSignin);
      return payload;
    } catch (error) {
      return payload;
    }
  }
);