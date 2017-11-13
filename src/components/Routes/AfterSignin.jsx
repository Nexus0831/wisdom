import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Route
} from 'react-router';

import Home from './../Home';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={
            props => (
              <Home
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