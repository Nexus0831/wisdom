// node_modules
import {
  createAction
} from 'redux-actions';

import * as actionName from './actionNames/app';

import * as apis from './api/app';

export const signup = createAction(
  actionName.SIGNUP,
  async (email, password, props) => {
    const payload = {};
    try {
      await apis.signup(email, password);
      payload.isSignup = true;
      props.history.push('/signup/confirm');
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const confirm = createAction(
  actionName.CONFIRM,
  async (email, code, props) => {
    const payload = {};
    try {
      await apis.confirm(email, code);
      payload.isSignup = true;
      props.history.push('/signin');
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const signin = createAction(
  actionName.SIGNIN,
  async (email, password, props) => {
    const payload = {};
    try {
      await apis.signin(email, password);
      payload.isSignin = true;
      props.history.push('/');
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const checkSession = createAction(
  actionName.CHECK_SESSION,
  async () => {
    const payload = {};
    try {
      await apis.checkSession();
      payload.isSignin = false;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);