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

import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';

import * as actions from './../../actions/app';
import Routes from '../Routes';


class App extends React.Component {
  render() {
    return (
      <div
        style={{
          height: '100%'
        }}
      >
        <BrowserRouter>
          <Routes
            {...this.props}
          />
        </BrowserRouter>
        <NotificationsSystem theme={theme} />
      </div>
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