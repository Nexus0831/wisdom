// node_modules
import {
  createAction
} from 'redux-actions';

import { addNotification as notify } from 'reapop';

import * as actionName from './actionNames/app';

import * as apis from './api/app';

export const checkSession = createAction(
  actionName.CHECK_SESSION,
  async (props) => {
    const payload = {
      isSignin: false
    };
    try {
      const result = await apis.checkSession();
      await props.readSigninUser(result.userName);
      payload.isSignin = result.isSignin;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const readSigninUser = createAction(
  actionName.READ_SIGNIN_USER,
  async (userName) => {
    const payload = {};
    try {
      payload.userName = userName;
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