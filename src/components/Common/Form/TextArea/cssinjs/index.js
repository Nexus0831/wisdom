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
  }
`;
