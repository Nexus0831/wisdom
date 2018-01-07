import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Route
} from 'react-router';

import BeforeSignin from './BeforeSignin';
import AfterSignin from './AfterSignin';
import Background from './../Common/Background';

class Routes extends React.Component {
  // 初回起動時の共通処理
  async componentWillMount() {
    await this.props.checkSession(this.props);
  }

  // 画面遷移した際の共通処理
  async componentWillUpdate() {
    await this.props.checkSession(this.props);
  }

  render() {
    return (
      <div
        id="routes"
        style={{
          height: "100%"
        }}
      >
        <Background/>
        <AfterSignin
          {...this.props}
        />
        <BeforeSignin
          {...this.props}
        />
      </div>

    );
  }
}

export default Routes;
