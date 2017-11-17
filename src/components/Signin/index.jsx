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

import validate from './../../config/validates/signin';

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
import {
  Form,
  Centered,
  Title,
  FormRow,
  Button
} from './cssinjs';

import * as actions from './../../actions/app';

class Signin extends React.Component {
  render() {
    return(
      <div id="signin">
        <Background/>
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
              >
                Signin
              </Button>
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
