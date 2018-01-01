import {
  Record,
  List
} from 'immutable';

const AppState = Record({
  isSignin: false,
  userName: '',
  isSignup: false
});

class App extends AppState {
  signup(state, payload) {
    const newState = state.update('isSignup',
      () => {
        return payload.isSignup;
      });
    return newState
  }

  confirm(state, payload) {
    const newState = state.update('isSignup',
      () => {
        return payload.isSignup;
      });
    return newState
  }

  signin(state, payload) {
    const newState = state.update('isSignin',
      () => {
        return payload.isSignin;
      });
    return newState
  }

  checkSession(state, payload) {
    const newState = state.update('isSignin',
      () => {
        return payload.isSignin;
      });
    return newState
  }

}

export default App;