// node_modules
import React from 'react';

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';


import {
  withRouter
} from 'react-router';

// import validate from './../../config/validates/signin';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid
} from 'redux-form';

// components
import Background from './../Common/Background';

import Input from './../Common/Form/Input';

// styles
// import {
//     Form,
//     Centered,
//     Title,
//     FormRow,
//     Button
// } from './cssinjs';

import * as actions from './../../actions/app';
import HeaderMenu from "../Common/HeaderMenu/index";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <Background/>
        <HeaderMenu
          defaultTransparent
        />

      </div>
    );
  }
}

Home = connect(
  state => ({
    formValues: getFormValues('home')(state),
    valid: isValid('home')(state)
  })
)(Home);

const mapStateToProps = state => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    Object.assign(
      {},
      actions
    ),
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'home',
    // validate
  })(Home)));
