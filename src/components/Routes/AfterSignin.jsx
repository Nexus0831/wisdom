import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Route
} from 'react-router';

import Archives from './../Archive/index';
import ArchiveCreate from './../Archive/ArchiveCreate';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/*Archives*/}
        <Route
          path="/"
          exact
          render={
            props => (
              <Archives
                {...props}
              />
            )
          }
          {...this.props}
        >
        </Route>

        {/*ArchiveCreate*/}
        <Route
          path="/archive/create"
          exact
          render={
            props => (
              <ArchiveCreate
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