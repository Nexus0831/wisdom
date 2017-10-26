import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Route
} from 'react-router';


class Routes extends React.Component {
  render() {
    return(
        <Switch>
          <Route
            path="/"
            exact
            render={}
          >
          </Route>
        </Switch>
    );
  }
}

export default Routes;
