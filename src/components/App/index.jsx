import React from 'react';

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import {
  BrowserRouter
} from 'react-router-dom';

import * as actions from './../../actions/app';
import Routes from '../Routes';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes
          {...this.props}
        />
      </BrowserRouter>
    );
  }
}

// To Contaienr
const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      actions
    ),
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);