import font from '/Users/N.daigo/Downloads/ime_jp_rp.woff';

// node_modules
import styled, {
  injectGlobal
} from 'styled-components';


// styled component
export const ValidateError = styled.div`
  &&& {
    font-size: 12px;
    color: #df2a3e;
    white-space: nowrap;
    padding-top: 5px;
  }
`;

export const MarkdownEditor = styled.textarea`
  outline: 0 !important;
  padding: 10px;
  font-size: 18px;
  resize: none;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  line-height: 1.5;
  font-family: Menlo;
  width: 100% !important;
  height: 100% !important;
  
  &:focus {
    background-color: rgba(255, 255, 255, .2);
  }
  
  &::selection {
    background-color: rgba(255, 255, 255, .4);
  }
  
  &::-moz-selection {
    background-color: rgba(255, 255, 255, .4);
  }
`;

export const globalStyles = injectGlobal`
  #textarea {
    width: 100% !important;
    height: 100% !important;
    font-family: Menlo !important;
    //.ace_editor {
    //  border: 2px solid #fff;
    //  font-size: 18px;
    //  width: 100% !important;
    //  height: 100% !important; 
    //}
    ////.ace_text-input:focus {
    ////  &.ace-monokai {
    ////    background-color: rgba(255, 255, 255, .2) !important;
    ////  }
    ////}
    //.ace_scroller {
    //  padding-left: 5px;
    //  padding-top: 8px;
    //}
    //
    ////textarea {
    ////  //width: 0 !important;
    ////  //height: 0 !important;
    ////}
    //
    //.ace-monokai {
    // background-color: rgba(0, 0, 0, 0) !important;
    // color: #fff;  
    //}
    //
    //.ace_content {
    //  font-feature-settings : "palt";
    //}
    //
    //.ace_gutter-cell {
    // width: 30px;
    // text-align: center;
    //}
    //
    //.ace-monokai .ace_marker-layer .ace_active-line {
    //  background: rgba(255, 255, 255, 0); 
    //}
    //
    //.ace-monokai .ace_gutter {
    //  display: none;
    //}
    //
    //.ace-monokai .ace_gutter-active-line {
    //  background-color: rgba(255, 255, 255, .2);
    //}
    
  //   @font-face {
  //   font-family: 'ime_jp_rp';
  //   src: url( format('woff');
  // }
  // .ace_editor > .ace_text-input {
  //   padding-top: 1px;
  //   padding-left: 1px;
  //   letter-spacing: 1px;
  //   font-family: ime_jp_rp, Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace;
  // }
  }
`;
