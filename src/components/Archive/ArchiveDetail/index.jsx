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
  MyContainer
} from './cssinjs';

import * as actions from './../../../actions/archive';
import HeaderMenu from "./../../Common/HeaderMenu/index";

// ToDo: MarkDownプレビューのスタイル設定;
class ArchiveDetail extends React.Component {

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
        <MyContainer
          className="markdown-preview"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: md.render("# プレビューテスト\n" +
                "## プレビューテスト\n" +
                "### プレビューテスト\n" +
                "#### プレビューテスト\n" +
                "##### プレビューテスト\n" +
                "![test](https://raw.githubusercontent.com/Nexus0831/wisdom/changeMenu/assets/zoltan.jpg)")
            }}
          />
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