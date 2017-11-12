import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Route
} from 'react-router';

import Signin from './../Signin';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
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
        >
        </Route>
      </Switch>
    );
  }
}

export default Routes;
