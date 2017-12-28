// node_modules
import styled, {
  injectGlobal
} from 'styled-components';

import {
  Menu
} from 'semantic-ui-react';

export const Base = styled.div`
  position: absolute;
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

export const CustomMenu = styled(Menu)`
  border-left: 0 !important;
  
  &.transparentMenu {
    transition-duration: .5s;
    background-color: transparent !important;
  }
  
`;

export const CustomMenuItem = styled(Menu.Item)`
  background-color: transparent !important;
  
  &.item.transparentItem {
    color: #ffffff !important;
  }
  
`;

export const CustomMenuMenu = styled(Menu.Menu)`
  background-color: transparent !important;
`;

export const globalStyles = injectGlobal`
`;