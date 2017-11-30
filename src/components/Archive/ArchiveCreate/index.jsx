// node_modules
import React from 'react';
import marked from 'marked';

marked.setOptions({
  sanitize: true,
  // highlight:
});

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import {
  withRouter,
} from 'react-router';

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
  isValid,
  initialize
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
  PreviewArea,
  DividedArea,
  FullPreviewArea
} from './cssinjs';

import * as actions from './../../../actions/archive';
import HeaderMenu from "./../../Common/HeaderMenu/index";


class ArchiveCreate extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fullPreview = this.fullPreview.bind(this);
  }


  handleChange() {
    this.props.realTimePreview(this.props.formValues.markdown);
  }

  fullPreview() {
    this.props.realTimePreview(this.props.formValues.markdown);
    this.props.fullPreview(!this.props.archive.isPreview);
  }

  async componentWillMount() {
    await this.props.dispatch(initialize('archiveCreate', { markdown: '' }));
  }

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
              <button
                onClick={this.fullPreview}
              >
                Preview
              </button>
            </ToolBar>
            {
              this.props.archive.isPreview ?
                <FullPreviewArea>
                  <div
                    dangerouslySetInnerHTML={{__html: marked(this.props.archive.markdown)}}
                  />
                </FullPreviewArea>
                :
                <DividedArea>
                  <EditorArea>
                    <Field
                      name='markdown'
                      component={TextArea}
                      // wrap='off'
                      // onChange={this.props.onChange(thi)}
                    />
                  </EditorArea>
                  <PreviewArea>
                    <div
                       dangerouslySetInnerHTML={{__html: marked(this.props.archive.markdown)}}
                     />
                  </PreviewArea>
                </DividedArea>
            }




          </MainArea>

          <SubmitArea>
            <SubmitButton
              onClick={this.handleChange}
            >
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
    archive: state.archive
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
