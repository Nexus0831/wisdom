import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Route
} from 'react-router';

import Signin from './../Signin';
import Signup from './../Signup';
import Confirm from './../Signup/Confirm';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* Signin */}
        <Route
          path="/signin"
          exact
          render={
            props => (
              <Signin
                {...props}
              />
            )
          }
          {...this.props}
        />

        {/* Signup */}
        <Route
          path="/signup"
          exact
          render={
            props => (
              <Signup
                {...props}
              />
            )
          }
          {...this.props}
        />

        {/* Confirm */}
        <Route
          path="/signup/confirm"
          exact
          render={
            props => (
              <Confirm
                {...props}
              />
            )
          }
          {...this.props}
        />

      </Switch>
    );
  }
}

export default Routes;
