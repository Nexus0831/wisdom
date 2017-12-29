import {
  Record,
  List
} from 'immutable';

const TestState = Record({
  isSignup: false
});

class App extends ArchiveState {
  signup(state, payload) {
    const newState = state.update('isSignup',
      () => {
        return payload.isSignup;
      });
    return newState
  }

}

export default App;