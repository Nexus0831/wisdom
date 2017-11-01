import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Route
} from 'react-router';

import Redirect from './Redirect';

class Routes extends React.Component {
  render() {
    return(
      <div
        id="routes"
      >
        <Switch>
          {/* <Route
            path="/"
            exact
            render={}
          > */}
          {/* </Route> */}
        </Switch>
        <Redirect
          {...this.props}
        />
      </div>

    );
  }
}

export default Routes;
