// node_modules
import React from 'react';

let MarkdownIt = require('markdown-it');
let md = new MarkdownIt({
  breaks: true
}).use(require('markdown-it-sub'))
  .use(require('markdown-it-highlightjs'));

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
  reduxForm,
  Field,
  getFormValues,
  isValid,
  initialize,
} from 'redux-form';

import validate from './../../../config/validates/archiveCreate';

// components
import Input from './../../Common/Form/Input';
import TextArea from './../../Common/Form/TextArea';

// styles
import {
  MyContainer,
  TitleArea,
  MainArea,
  SubmitArea,
  SubmitButton,
  ToolBar,
  ShortCutArea,
  ModeArea,
  EditorArea,
  PreviewArea,
  DividedArea,
  FullPreviewArea,
  FullEditorArea,
  ToolIcon,
  Separator
} from './cssinjs';

import * as actions from './../../../actions/archive';
import HeaderMenu from "../../Common/HeaderMenu/index";

// ToDo: MarkDownプレビューのスタイル設定;
class ArchiveCreate extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleMarkdownChange() {
    await new Promise(resolve => setTimeout(resolve, 6));
    this.props.realTimePreview(this.props.formValues.markdown);
  }

  async handleOnKeyDown(event) {
    switch (event.key) {
      case '(':
        this.props.automation(this.props.formValues.markdown, ')', this.props);
        break;

      case '{':
        this.props.automation(this.props.formValues.markdown, '}', this.props);
        break;

      case '[':
        this.props.automation(this.props.formValues.markdown, ']', this.props);
        break;

      case '\"':
        this.props.automation(this.props.formValues.markdown, '\"', this.props);
        break;

      case '\'':
        this.props.automation(this.props.formValues.markdown, '\'', this.props);
        break;

      case '\`':
        this.props.automation(this.props.formValues.markdown, '\`', this.props);
        break;

      case 'Tab':
        event.preventDefault();
        this.props.tabInput(this.props.formValues.markdown, this.props);
        break;
    }
  }

  async componentWillMount() {
    await this.props.dispatch(initialize('archiveForm', { markdown: '' }));
    await this.props.fullEditor();
    await this.props.realTimePreview('');
  }

  handleSubmit() {
    const values = {
      title: this.props.formValues.title,
      text: this.props.formValues.markdown,
      userName: this.props.app.userName
    };
    this.props.archiveCreate(values);
    this.props.history.push('/');
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
              <ShortCutArea>
                <ToolIcon
                  name='bold'
                  onClick={() =>
                    this.props.shortCut(this.props.formValues.markdown, '****', 2, this.props)
                  }
                  size='big'
                  disabled={this.props.archive.isMode === 'preview'}
                />
                <ToolIcon
                  name='italic'
                  onClick={() =>
                    this.props.shortCut(this.props.formValues.markdown, '**', 1, this.props)
                  }
                  size='big'
                  disabled={this.props.archive.isMode === 'preview'}
                />
                <ToolIcon
                  name='strikethrough'
                  onClick={() =>
                    this.props.shortCut(this.props.formValues.markdown, '~~~~', 2, this.props)
                  }
                  size='big'
                  disabled={this.props.archive.isMode === 'preview'}
                />

                <Separator/>

                <ToolIcon
                  name='code'
                  onClick={() =>
                    this.props.shortCut(this.props.formValues.markdown, '```\n```', 3, this.props)
                  }
                  size='big'
                  disabled={this.props.archive.isMode === 'preview'}
                />

                <Separator/>

                <ToolIcon
                  name='table'
                  onClick={() =>
                    this.props.shortCut(this.props.formValues.markdown, "\n||||\n|:-:|:-:|:-:|\n||||\n||||\n", 1, this.props)
                  }
                  size='big'
                  disabled={this.props.archive.isMode === 'preview'}
                />

                <Separator/>

                <ToolIcon
                  name='image'
                  onClick={() =>
                    this.props.shortCut(this.props.formValues.markdown, '![]()', 2, this.props)
                  }
                  size='big'
                  disabled={this.props.archive.isMode === 'preview'}
                />
                <ToolIcon
                  name='linkify'
                  onClick={() =>
                    this.props.shortCut(this.props.formValues.markdown, '[]()', 1, this.props)
                  }
                  size='big'
                  disabled={this.props.archive.isMode === 'preview'}
                />
              </ShortCutArea>
              <ModeArea>
                <ToolIcon
                  name='edit'
                  onClick={this.props.fullEditor}
                  size='big'
                  active={this.props.archive.isMode === 'editor' ? '#1AEF22': '#fff'}
                />
                <ToolIcon
                  name='unhide'
                  onClick={this.props.fullPreview}
                  size='big'
                  active={this.props.archive.isMode === 'preview' ? '#1AEF22': '#fff'}
                />
                <ToolIcon
                  name='columns'
                  onClick={this.props.divided}
                  size='big'
                  active={this.props.archive.isMode === 'divide' ? '#1AEF22': '#fff'}
                  mobile='none'
                />
              </ModeArea>
            </ToolBar>
            {
              this.props.archive.isMode === 'preview' ?
                <FullPreviewArea
                  className="markdown-preview"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: md.render(this.props.archive.markdown)
                    }}
                  />
                </FullPreviewArea>
                :
                this.props.archive.isMode === 'divide' ?
                  <DividedArea>
                    <EditorArea>
                      <Field
                        name='markdown'
                        component={TextArea}
                        // wrap='off'
                        placeholder='markdown...'
                        onChange={() => this.handleMarkdownChange()}
                        onKeyDown={(e) => this.handleOnKeyDown(e)}
                      />
                    </EditorArea>
                    <PreviewArea
                      className="markdown-preview"
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: md.render(this.props.archive.markdown)
                        }}
                      />
                    </PreviewArea>
                  </DividedArea>
                  :
                  <FullEditorArea>
                    <Field
                      name='markdown'
                      component={TextArea}
                      // wrap='off'
                      placeholder='markdown...'
                      onChange={() => this.handleMarkdownChange()}
                      onKeyDown={(e) => this.handleOnKeyDown(e)}
                    />
                  </FullEditorArea>
            }

          </MainArea>

          <SubmitArea>
            <SubmitButton
              onClick={this.handleSubmit}
              disabled={(this.props.valid) === false}
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
    formValues: getFormValues('archiveForm')(state),
    valid: isValid('archiveForm')(state)
  })
)(ArchiveCreate);

const mapStateToProps = state => {
  return {
    archive: state.archive,
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
    form: 'archiveForm',
    validate
  })(ArchiveCreate)));
