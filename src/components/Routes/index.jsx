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
  render() {
    return (
      <div
        id="routes"
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
