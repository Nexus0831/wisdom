import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Route
} from 'react-router';

import Home from './../Home';
import ArchiveCreate from './../Archive/ArchiveCreate';

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

        {/*Archive*/}
        <Route
          path="/newArchive"
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