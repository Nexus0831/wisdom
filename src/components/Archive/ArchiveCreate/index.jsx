// node_modules
import React from 'react';

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import {
  withRouter,
} from 'react-router';

import SimpleMDE  from 'react-simplemde-editor';

import {
  NavLink
} from 'react-router-dom';

import {
  Modal,
  Header
} from 'semantic-ui-react';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid
} from 'redux-form';

// components
import Input from './../../Common/Form/Input';
import CheckBox from './../../Common/Form/CheckBox';
import TextArea from './../../Common/Form/TextArea';

// styles
import {
  MyContainer,
  TitleArea,
  SharingArea,
  MainArea,
  SubmitArea,
  SubmitButton,
  ToolBar,
  EditorArea,
  PreviewArea
} from './cssinjs';

import * as actions from './../../../actions/app';
import HeaderMenu from "./../../Common/HeaderMenu/index";

import 'react-simplemde-editor/dist/simplemde.min.css';


class ArchiveCreate extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  // }
  //
  // handleChange() {
  //   this.props.formValues.sharing = !this.props.formValues.sharing
  // }




  render() {
    return (
      <div id="archive-create">

        <HeaderMenu
          defaultTransparent
          style={{
            gridRow: "1 / -1",
            gridColumn: "1 / 2"
          }}
        />
        <MyContainer>
          <TitleArea>
            <Field
              name='title'
              placeholder='title...'
              component={Input}
            />
          </TitleArea>

          <SharingArea>
            <Field
              name='sharing'
              label="sharing"
              component={CheckBox}
            />
          </SharingArea>

          <MainArea>
            <ToolBar>
            </ToolBar>
            <EditorArea>
              <Field
                name='markdown'
                component={TextArea}
              />
              {/*<Field*/}
                {/*name='title'*/}
                {/*placeholder='title...'*/}
                {/*component={Input}*/}
              {/*/>*/}
            </EditorArea>
            <PreviewArea>
            </PreviewArea>
          </MainArea>

          <SubmitArea>
            <SubmitButton>
              Submit
            </SubmitButton>
          </SubmitArea>
        </MyContainer>
      </div>
    );
  }
}

ArchiveCreate = connect(
  state => ({
    formValues: getFormValues('archiveCreate')(state),
    valid: isValid('archiveCreate')(state)
  })
)(ArchiveCreate);

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
    form: 'archiveCreate',
  })(ArchiveCreate)));
