// node_modules
import React from 'react';

import {
  Menu
} from 'semantic-ui-react';

import {
  Link
} from 'react-router-dom';

// styled
import {
  Base,
  CustomLink
} from './cssinjs'

class HeaderMenu extends React.Component {
  render() {
    return (
      <Base
        id="header-menu"
        className="transparentMenu"
      >
        <CustomLink
          className="item transparentItem"
          to="/"
        >
          Wisdom
        </CustomLink>
      </Base>
    );
  }
}

export default HeaderMenu;