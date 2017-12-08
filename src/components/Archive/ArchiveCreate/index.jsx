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
  FullEditorArea
} from './cssinjs';

import * as actions from './../../../actions/archive';
import HeaderMenu from "./../../Common/HeaderMenu/index";


class ArchiveCreate extends React.Component {

  async handleMarkdownChange() {
    // ToDo: reduxで再実装;
    // ToDo: ToolBarの機能はreduxで実装;
    await new Promise(resolve => setTimeout(resolve, 5));
    // if (this.props.formValues.markdown === '{') {
    //   let sentence = this.props.formValues.markdown;
    //   sentence = sentence + '}';
    //   await this.props.dispatch(change('archiveCreate', 'markdown', sentence ));
    //
    // }
    this.props.realTimePreview(this.props.formValues.markdown);
  }

  // plusLink() {
  //
  // }

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

          <SharingArea>
            <Field
              name='sharing'
              component={CheckBox}
            />
          </SharingArea>

          <MainArea>
            <ToolBar>
              <Icon
                color='yellow'
                name='unhide'
                onClick={() => this.changeFullPreview()}
                size='big'
              />
              <Icon
                color='yellow'
                name='columns'
                onClick={() => this.changeDivided()}
                size='big'
              />
              <Icon
                color='yellow'
                name='linkify'
                // onClick={this.changeFullPreview}
                size='big'
              />
            </ToolBar>
            {
              this.props.archive.mode.isPreview && !this.props.archive.mode.isDivided ?
                <FullPreviewArea>
                  {/*<div*/}
                    {/*dangerouslySetInnerHTML={{__html: MarkdownIt(this.props.archive.markdown)}}*/}
                  {/*/>*/}
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
  })(ArchiveCreate)));
