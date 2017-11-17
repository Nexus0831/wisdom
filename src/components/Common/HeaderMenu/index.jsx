import React from 'react';
import $ from 'jquery';

import {
  Menu,
  Dropdown
} from 'semantic-ui-react';

import {
  Link
} from 'react-router-dom';

import classNames from 'classnames';

import './scss/index.scss';


class HeaderMenu extends React.Component {
  state = {};

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  //
  // handleTechClick() {
  //   window.location.href = 'https://blog.withonoware.co.jp/tech/';
  // }

  render() {
    const { activeItem } = this.state;
    const menu = $('#gc-hero-menu .ui.menu');

    return (
      <div
        id="gc-hero-menu"
      >
        <Menu
          fixed="top"
          fluid
          borderless
          className={
            classNames({
              transparentMenu: this.props.defaultTransparent,
              defaultTransparent: this.props.defaultTransparent
            })
          }
        >
          <Menu.Item
            name="home"
            active={
              activeItem === 'home'
            }
            // onClick={this.handleItemClick}
            as={
              () => {
                return (
                  <Link
                    className="item"
                    to="/"
                  >
                    Wisdom
                  </Link>
                );
              }
            }
          />
          <Menu.Menu
            position="right"
          >
            {/* New Archive */}
            <Menu.Item
              name="newArchive"
              active={
                activeItem === 'newArchive'
              }
              // onClick={this.handleItemClick}
              as={
                () => {
                  return (
                    <Link
                      className="item"
                      to="/newArchive"
                    >
                      New Archive
                    </Link>
                  );
                }
              }
            />

            {/* Interest */}
            <Menu.Item
              name="interest"
              active={
                activeItem === 'interest'
              }
              // onClick={this.handleItemClick}
              as={
                () => {
                  return (
                    <Link
                      className="item"
                      to="/interest"
                    >
                      Interest
                    </Link>
                  );
                }
              }
            />

            {/* Article */}
            <Menu.Item
              name="article"
              active={
                activeItem === 'article'
              }
              // onClick={this.handleItemClick}
              as={
                () => {
                  return (
                    <Link
                      className="item"
                      to="/article"
                    >
                      Article
                    </Link>
                  );
                }
              }
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default HeaderMenu;
