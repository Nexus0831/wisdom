// node_modules
import {
  createAction
} from 'redux-actions';

import * as actionName from './actionNames/app';

import * as apis from './api/app';

export const signup = createAction(
  actionName.SIGNIN,
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
  actionName.SIGNIN,
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
      payload.isSignup = true;
      props.history.push('/');
      return payload;
    } catch (error) {
      return payload;
    }
  }
);