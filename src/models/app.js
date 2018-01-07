import {
  Record,
  List
} from 'immutable';

const AppState = Record({
  userName: '',
  isSignin: true
});

class App extends AppState {
  readSigninUser(state, payload) {
    const newState = state.update('userName',
      () => {
        return payload.userName;
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