// node_modules
import React from 'react';
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt({
  breaks: true
});

// marked.setOptions({
//   sanitize: true,
//   langPrefix: '',
// });

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
  Header,
  Icon
} from 'semantic-ui-react';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid,
  initialize,
  change
} from 'redux-form';

import validate from './../../../config/validates/archiveCreate';

// components
import Input from './../../Common/Form/Input';
import CheckBox from './../../Common/Form/CheckBox';
import TextArea from './../../Common/Form/TextArea';

// styles
import {
  MyContainer,
  TitleArea,
  MainArea,
  SubmitArea,
  SubmitButton,
  ToolBar,
  EditorArea,
  PreviewArea,
  DividedArea,
  FullPreviewArea,
  FullEditorArea,
  ToolIcon,
} from './cssinjs';

import * as actions from './../../../actions/archive';
import HeaderMenu from "./../../Common/HeaderMenu/index";


class ArchiveCreate extends React.Component {

  async handleMarkdownChange() {
    await new Promise(resolve => setTimeout(resolve, 6));
    this.props.realTimePreview(this.props.formValues.markdown);
  }


  changeFullPreview() {
    this.props.fullPreview(!this.props.archive.mode.isPreview);
  }

  changeDivided() {
    this.props.divided(!this.props.archive.mode.isDivided);
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

          <MainArea>
            <ToolBar>
              <ToolIcon
                name='bold'
                onClick={() =>
                  this.props.shortCut(this.props.formValues.markdown, '****', 2, this.props)
                }
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='italic'
                onClick={() =>
                  this.props.shortCut(this.props.formValues.markdown, '**', 1, this.props)
                }
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='strikethrough'
                onClick={() =>
                  this.props.shortCut(this.props.formValues.markdown, '~~~~', 2, this.props)
                }
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='code'
                onClick={() =>
                  this.props.shortCut(this.props.formValues.markdown, '```\n```', 3, this.props)
                }
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='table'
                onClick={() =>
                  this.props.shortCut(this.props.formValues.markdown, "\n||||\n|:-:|:-:|:-:|\n||||\n||||\n", 1, this.props)
                }
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='image'
                onClick={() =>
                  this.props.shortCut(this.props.formValues.markdown, '![]()', 2, this.props)
                }
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='linkify'
                onClick={() =>
                  this.props.shortCut(this.props.formValues.markdown, '[]()', 1, this.props)
                }
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='unhide'
                onClick={() => this.changeFullPreview()}
                size='big'
                backcolor={this.props.archive.mode.isPreview ? 'red': 'transparent'}
              />
              <ToolIcon
                name='columns'
                onClick={() => this.changeDivided()}
                size='big'
                backcolor={this.props.archive.mode.isDivided ? 'red': 'transparent'}
              />
            </ToolBar>
            {
              this.props.archive.mode.isPreview && !this.props.archive.mode.isDivided ?
                <FullPreviewArea>
                  <span
                    dangerouslySetInnerHTML={{__html: md.render(this.props.archive.markdown)}}
                  />
                </FullPreviewArea>
                :
                !this.props.archive.mode.isPreview && this.props.archive.mode.isDivided ?
                  <DividedArea>
                    <EditorArea>
                      <Field
                        name='markdown'
                        component={TextArea}
                        // wrap='off'
                        onChange={() => this.handleMarkdownChange()}
                      />
                    </EditorArea>
                    <PreviewArea>
                      <span
                        dangerouslySetInnerHTML={{__html: md.render(this.props.archive.markdown)}}
                      />
                    </PreviewArea>
                  </DividedArea>
                  :
                  <FullEditorArea>
                    <Field
                      name='markdown'
                      component={TextArea}
                      // wrap='off'
                      onChange={() => this.handleMarkdownChange()}
                    />
                  </FullEditorArea>
            }

          </MainArea>

          <SubmitArea>
            <SubmitButton
              // onClick={this.handleChange}
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
    validate
  })(ArchiveCreate)));
