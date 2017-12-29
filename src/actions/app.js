// node_modules
import {
  createAction
} from 'redux-actions';

import * as actionName from './actionNames/app';

import * as apis from './api/app';

export const signup = createAction(
  actionName.SIGNIN,
  async (email, password) => {
    const payload = {};
    try {
      await apis.signup(email, password);
      payload.isSignup = true;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);