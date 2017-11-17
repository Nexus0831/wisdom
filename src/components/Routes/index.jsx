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

class Routes extends React.Component {
  render() {
    return (
      <div
        id="routes"
      >
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
