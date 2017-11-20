// node_modules
import styled, {
  injectGlobal
} from 'styled-components';

export const GhostCheckBox = styled.input`
  display: none;
  width: 100%;
  height: 100%;
  
  & + label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid gray;
    border-radius: 0;
    color: gray;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    font-weight: 300;
    font-size: 16px;
    font-family: "Helvetica Neue";
  }
  
  &:checked + label {
    border: 2px solid #1AEF22;
    color: #1AEF22;
  }
`;

export const globalStyles = injectGlobal`
  #checkbox {
    height: 100%;
    width: 100%;
  }
`;