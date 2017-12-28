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
  CustomMenu,
  CustomMenuItem,
  CustomMenuMenu
} from './cssinjs'

class HeaderMenu extends React.Component {
  render() {
    return (
      <Base
        id="header-menu"
        className="transparentMenu"
      >
        <Link
          className="item"
          to="/"
        >
          Wisdom
        </Link>
      </Base>
    );
  }
}

export default HeaderMenu;