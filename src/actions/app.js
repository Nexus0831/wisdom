// node_modules
import {
  createAction
} from 'redux-actions';

import { addNotification as notify } from 'reapop';

import * as actionName from './actionNames/app';

import * as apis from './api/app';

export const checkSession = createAction(
  actionName.CHECK_SESSION,
  async () => {
    const payload = {};
    try {
      payload.isSignin = await apis.checkSession();
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const openSnackbar = createAction(
  actionName.OPEN_SNACK_BAR,
  (m = '', s = 'info', t = 'Wisdom') => {
    return (
      notify({
        title: t,
        message: m,
        status: s
      })
    );
  }
);