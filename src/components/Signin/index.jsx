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

import validate from './../../config/validates/signin';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid,
  initialize
} from 'redux-form';

import {
  signin
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
  Button,
  CustomLink
} from './cssinjs';

import * as actions from './../../actions/app';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignin = this.handleSignin.bind(this);
  }

  async handleSignin() {
    await signin(this.props.formValues.email, this.props.formValues.password);
    this.props.history.push('/');
  }

  async componentWillMount() {
    await this.props.dispatch(initialize('signin', { email: '', password: '' }));
  }

  render() {
    return(
      <div id="signin">
        <Centered>
          <Form>
            <Title>
              Wisdom
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
              <Button
                disabled={(this.props.valid) === false}
               onClick={this.handleSignin}
              >
                Signin
              </Button>
            </FormRow>
            <FormRow>
              <CustomLink
                to="/signup"
              >
                サインアップはこちら
              </CustomLink>
            </FormRow>
          </Form>
        </Centered>
      </div>
    );
  }
}

Signin = connect(
  state => ({
    formValues: getFormValues('signin')(state),
    valid: isValid('signin')(state)
  })
)(Signin);

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
    form: 'signin',
    validate
  })(Signin)));
