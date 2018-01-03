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

import {
  NavLink
} from 'react-router-dom';

import validate from './../../config/validates/signup';

import { signup } from './../../actions/api/app.js';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid,
  initialize
} from 'redux-form';

import {
  signUp
} from '../../utils/cognito';

// components
import Background from './../Common/Background';

import Input from './../Common/Form/Input';

// styles
import {
  Form,
  Centered,
  Title,
  FormRow,
  Button
} from './cssinjs';

import * as actions from './../../actions/app';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }

  async handleSignup() {
    await signUp(this.props.formValues.email, this.props.formValues.password);
    this.props.history.push('/signup/confirm');
  }

  async componentWillMount() {
    await this.props.dispatch(initialize('signup', { email: '', password: '', confirmation: '' }));
  }

  render() {
    return(
      <div id="signup">
        <Centered>
          <Form>
            <Title>
              SignUp
            </Title>
            <FormRow>
              <Field
                name="email"
                placeholder='email...'
                component={Input}
              />
            </FormRow>
            <FormRow>
              <Field
                name="password"
                type="password"
                placeholder='password...'
                component={Input}
              />
            </FormRow>

            <FormRow>
              <Field
                name="confirmation"
                type="password"
                placeholder='confirmation password...'
                component={Input}
              />
            </FormRow>

            <FormRow>
              <Button
                disabled={(this.props.valid) === false}
                onClick={this.handleSignup}
              >
                Signup
              </Button>
            </FormRow>
          </Form>
        </Centered>
      </div>
    );
  }
}

Signup = connect(
  state => ({
    formValues: getFormValues('signup')(state),
    valid: isValid('signup')(state)
  })
)(Signup);

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
    form: 'signup',
    validate
  })(Signup)));
