import {
  Record,
  List
} from 'immutable';

const SigninUserRecord = Record({
  username: ''
});

const AppState = Record({
  signinUser: new SigninUserRecord(),
  isSignin: true
});

class App extends AppState {
  checkSession(state, payload) {
    const newState = state.update('isSignin',
      () => {
        return payload.isSignin;
      });
    return newState
  }

}

export default App;