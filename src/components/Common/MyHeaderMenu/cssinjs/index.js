// node_modules
import styled, {
  injectGlobal
} from 'styled-components';

import {
  Menu
} from 'semantic-ui-react';

import {
  Link
} from 'react-router-dom';

export const Base = styled.div`
  position: fixed;
  width: 100% !important;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 60px;
  
  &.transparentMenu {
    transition-duration: .5s;
    background-color: transparent !important;
  }
`;

export const CustomLink = styled(Link)`
  color: #555555;
  font-size: 20px;
  font-family: "mr-eaves-modern";
  
  &:hover {
    color: #F3D179;
  }
  
  &.transparentItem {
    color: #ffffff;
    
    &:hover {
     color: #1AEF22; 
    }
  }
`;

export const globalStyles = injectGlobal`
`;