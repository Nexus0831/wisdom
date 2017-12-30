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

import validate from './../../../config/validates/signup';

import { signup } from './../../../actions/api/app.js';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid,
  initialize
} from 'redux-form';

// components
import Background from './../../Common/Background';

import Input from './../../Common/Form/Input';

// styles
import {
  Form,
  Centered,
  Title,
  FormRow,
  Button
} from './../cssinjs';

import * as actions from './../../../actions/app';

class Confirm extends React.Component {

  async componentWillMount() {
    await this.props.dispatch(initialize('confirm', { email: '', code: '' }));
  }

  render() {
    return(
      <div id="confirm">
        <Centered>
          <Form>
            <Title>
              Confirm
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
                name="code"
                placeholder='code...'
                component={Input}
              />
            </FormRow>

            <FormRow>
              <Button
                disabled={(this.props.valid) === false}
                onClick={() =>
                  this.props.confirm(
                    this.props.formValues.email,
                    this.props.formValues.code,
                    this.props
                  )
                }
              >
                Confirm
              </Button>
            </FormRow>
          </Form>
        </Centered>
      </div>
    );
  }
}

Confirm = connect(
  state => ({
    formValues: getFormValues('confirm')(state),
    valid: isValid('confirm')(state)
  })
)(Confirm);

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
    form: 'confirm',
    validate
  })(Confirm)));
