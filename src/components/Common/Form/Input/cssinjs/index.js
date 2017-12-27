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

export const GhostInput = styled.input`
  height: 40px;
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  padding-left: 10px;
  padding-right: -10px;
  font-family: Helvetica Neue;
  color: #FFFFFF;
  outline: 0 !important;
  border-radius: 0;
  border: 2px solid #FFFFFF;
  background-color: rgba(0, 0, 0, 0);
  letter-spacing: ${props => props.type ? '5px' : '2px'};
  
  &:focus {
    background-color: rgba(255, 255, 255, .3);
  }
  
  /* 各ベンダープレフィックスが取れた標準版！！(http://caniuse.com/#search=placeholder-shown) */
  &:placeholder-shown {
      color: #ccc; 
      letter-spacing: 2px;
  }
  
  /* Google Chrome, Safari, Opera 15+, Android, iOS */
  &::-webkit-input-placeholder {
      color: #ccc; 
      letter-spacing: 2px;
  }

  /* Firefox 19+ */
  &::-moz-placeholder {
      color: #ccc; opacity: 1; 
      letter-spacing: normal;
  }

  /* IE 10+ */
  &:-ms-input-placeholder {
      color: #ccc; 
      letter-spacing: normal;
  }
  
  &::selection {
    background-color: rgba(255, 255, 255, .4);
  }
  
  &::-moz-selection {
    background-color: rgba(255, 255, 255, .4);
  }
`;
