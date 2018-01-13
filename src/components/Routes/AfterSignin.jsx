import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  Redirect
} from 'react-router';

import Archives from './../Archive/index';
import ArchiveCreate from './../Archive/ArchiveCreate';
import ArchiveDetail from './../Archive/ArchiveDetail';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* Archives */}
        <Route
          path="/"
          exact
          render={
            props => {
              return (
                this.props.app.isSignin ?
                  <Archives
                    {...props}
                  />
                  :
                  <Redirect
                    to='/signin'
                  />
              );
            }
          }
          {...this.props}
        />

        {/* ArchiveCreate */}
        <Route
          path="/archive/create"
          exact
          render={
            props => {
              return (
                this.props.app.isSignin ?
                  <ArchiveCreate
                    {...props}
                  />
                  :
                  <Redirect
                    to='/signin'
                  />
              );
            }
          }
          {...this.props}
        />

        {/* ArchiveDetail */}
        <Route
          path="/archive/:id"
          exact
          render={
            props => {
              return (
                this.props.app.isSignin ?
                  <ArchiveDetail
                    {...props}
                  />
                  :
                  <Redirect
                    to='/signin'
                  />
              );
            }
          }
          {...this.props}
        />
      </Switch>
    );
  }
}

export default Routes;