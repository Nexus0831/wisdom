import {
  Record,
  List
} from 'immutable';

const AppState = Record({
  isSignin: false,
  userName: '',
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