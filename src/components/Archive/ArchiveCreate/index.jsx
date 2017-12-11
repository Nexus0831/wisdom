// node_modules
import React from 'react';
import Markdown from 'react-markdown-it';

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
  SharingArea,
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
  Form,
  FormRow,
  Title,
  Centered
} from './cssinjs';

import * as actions from './../../../actions/archive';
import HeaderMenu from "./../../Common/HeaderMenu/index";


class ArchiveCreate extends React.Component {

  constructor(props) {
    super(props);
    this.handleIconClick = this.handleIconClick.bind(this);
  }

  async handleIconClick(name) {
    const textarea = document.querySelector('textarea');
    let sentence = this.props.formValues.markdown;
    const pos = textarea.selectionStart;
    textarea.focus();
    switch (name) {
      case 'bold':
        sentence = sentence.substr(0, pos) + '****' + sentence.substr(pos, sentence.length);
        await this.props.dispatch(change('archiveCreate', 'markdown', sentence ));
        textarea.selectionEnd = pos + 2;
        textarea.selectionStart = pos + 2;
        break;

      case 'italic':
        sentence = sentence.substr(0, pos) + '**' + sentence.substr(pos, sentence.length);
        await this.props.dispatch(change('archiveCreate', 'markdown', sentence ));
        textarea.selectionEnd = pos + 1;
        textarea.selectionStart = pos + 1;
        break;

      case 'strike':
        sentence = sentence.substr(0, pos) + '~~~~' + sentence.substr(pos, sentence.length);
        await this.props.dispatch(change('archiveCreate', 'markdown', sentence ));
        textarea.selectionEnd = pos + 2;
        textarea.selectionStart = pos + 2;
        break;

      case 'code':
        sentence = sentence.substr(0, pos) + "```\n```" + sentence.substr(pos, sentence.length);
        await this.props.dispatch(change('archiveCreate', 'markdown', sentence ));
        textarea.selectionEnd = pos + 3;
        textarea.selectionStart = pos + 3;
        break;

      case 'link':
        sentence = sentence.substr(0, pos) + '[]()' + sentence.substr(pos, sentence.length);
        await this.props.dispatch(change('archiveCreate', 'markdown', sentence ));
        textarea.selectionEnd = pos + 1;
        textarea.selectionStart = pos + 1;
        break;

      case 'image':
        sentence = sentence.substr(0, pos) + '![]()' + sentence.substr(pos, sentence.length);
        await this.props.dispatch(change('archiveCreate', 'markdown', sentence ));
        textarea.selectionEnd = pos + 2;
        textarea.selectionStart = pos + 2;
        break;

      case 'table':
        sentence = sentence.substr(0, pos) + "\n||||\n|:-:|:-:|:-:|\n||||\n||||\n" + sentence.substr(pos, sentence.length);
        await this.props.dispatch(change('archiveCreate', 'markdown', sentence ));
        textarea.selectionEnd = pos + 1;
        textarea.selectionStart = pos + 1;
        break;
    }

    this.props.realTimePreview(this.props.formValues.markdown);
  }

  // async handleTableClick() {
  //   const textarea = document.querySelector('textarea');
  //   let table = "";
  //   let sentence = this.props.formValues.markdown;
  //   const pos = textarea.selectionStart;
  //   textarea.focus();
  //
  //   for (let i = 0; i < this.props.formValues.column; i++) {
  //     table += '|   ';
  //   }
  //
  //   table += "|\n";
  //
  //   for (let i = 0; i < this.props.formValues.column; i++) {
  //     table += '|:-:';
  //   }
  //
  //   table += "|\n";
  //
  //   for (let i =0; i < this.props.formValues.row; i++) {
  //     for (let j = 0; j < this.props.formValues.column; j++) {
  //       table += '|   ';
  //     }
  //     table += "|\n";
  //   }
  //
  //   sentence = sentence.substr(0, pos) + table + sentence.substr(pos, sentence.length);
  //   await this.props.dispatch(change('archiveCreate', 'markdown', sentence ));
  //   textarea.selectionEnd = pos + 1;
  //   textarea.selectionStart = pos + 1;
  // }

  async handleMarkdownChange() {
    await new Promise(resolve => setTimeout(resolve, 5));
    this.props.realTimePreview(this.props.formValues.markdown);
  }


  changeFullPreview() {
    this.props.fullPreview(!this.props.archive.mode.isPreview);
  }

  changeDivided() {
    this.props.divided(!this.props.archive.mode.isDivided);
  }

  async componentWillMount() {
    await this.props.dispatch(initialize('archiveCreate', { markdown: '', sharing: false }));
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
                onClick={() => this.handleIconClick('bold')}
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='italic'
                onClick={() => this.handleIconClick('italic')}
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='strikethrough'
                onClick={() => this.handleIconClick('strike')}
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='code'
                onClick={() => this.handleIconClick('code')}
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='table'
                onClick={() => this.handleIconClick('table')}
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />

              <ToolIcon
                name='image'
                onClick={() => this.handleIconClick('image')}
                size='big'
                disabled={this.props.archive.mode.isPreview}
              />
              <ToolIcon
                name='linkify'
                onClick={() => this.handleIconClick('link')}
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
                  <Markdown
                    source={this.props.archive.markdown}
                    options={{
                      breaks: true
                    }}
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
                      <Markdown
                        source={this.props.archive.markdown}
                        options={{
                          breaks: true
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
