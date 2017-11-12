// node_modules
import styled, {
  injectGlobal
} from 'styled-components';


// styled component
export const ValidateError = styled.div`
  &&& {
    font-size: 12px;
    color: #bd081c;
    white-space: nowrap;
    padding-top: 5px;
  }
`;

export const GhostInput = styled.input`
  height: 40px;
  width: 100%;
  font-size: 20px;
  padding-left: 10px;
  padding-right: -10px;
  font-family: Helvetica Neue;
  color: #FFFFFF;
  outline: 0 !important;
  border: 2px solid #FFFFFF;
  background-color: rgba(0, 0, 0, 0);
  letter-spacing: ${props => props.type ? '5px' : 'normal'};
  
  &:focus {
    background-color: rgba(255, 255, 255, .3);
  }
`;
