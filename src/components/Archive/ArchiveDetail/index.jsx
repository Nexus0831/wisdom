// node_modules
import React from 'react';
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt({
  breaks: true
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

// components
import Input from './../../Common/Form/Input';
import CheckBox from './../../Common/Form/CheckBox';
import TextArea from './../../Common/Form/TextArea';

// styles
import {
  MyContainer,
  Title,
  Date
} from './cssinjs';

import * as actions from './../../../actions/archive';
import HeaderMenu from "./../../Common/HeaderMenu/index";

// ToDo: MarkDownプレビューのスタイル設定;
class ArchiveDetail extends React.Component {
  async componentWillMount() {
    await this.props.archiveDetail(this.props.archive.datas, this.props.match.params.id);
  }

  render() {
    return (
      <div id="archive-detail">
        <HeaderMenu
          defaultTransparent
          style={{
            gridRow: "1 / -1",
            gridColumn: "1 / 2"
          }}
        />
        <MyContainer>
          <div>
            <Title>
              {this.props.archive.data.title}
            </Title>
            <Date>
              {this.props.archive.data.date}
            </Date>
            <div
              className="markdown-preview"
            >
            <span
              dangerouslySetInnerHTML={{
                __html: md.render(
                  this.props.archive.data.text
                    ?
                    this.props.archive.data.text : "")
              }}
            />
            </div>
          </div>
        </MyContainer>
      </div>
    );
  }
}

// To Contaienr
const mapStateToProps = (state) => {
  return {
    archive: state.archive
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      actions
    ),
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveDetail);