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
          {/*<Menu.Item*/}
            {/*active={*/}
              {/*activeItem === 'top'*/}
            {/*}*/}
          {/*>*/}
            {/*<Link*/}
              {/*to="/"*/}
            {/*>*/}
              {/*Wisdom*/}
            {/*</Link>*/}
          {/*</Menu.Item>*/}
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
                    WISDOM
                  </Link>
                );
              }
            }
          />
          <Menu.Menu
            position="right"
          >
            {/* About */}
            <Menu.Item
              name="signin"
              active={
                activeItem === 'signin'
              }
              // onClick={this.handleItemClick}
              as={
                () => {
                  return (
                    <Link
                      className="item"
                      to="/signin"
                    >
                      SIGNIN
                    </Link>
                  );
                }
              }
            />

            {/* News */}
            <Menu.Item
              name="news"
              active={
                activeItem === 'news'
              }
              // onClick={this.handleItemClick}
              as={
                () => {
                  return (
                    <Link
                      className="item"
                      to="/news"
                    >
                      NEWS
                    </Link>
                  );
                }
              }
            />

            {/* Recruit */}
            <Menu.Item
              name="recruit"
              active={
                activeItem === 'recruit'
              }
              // onClick={this.handleItemClick}
              as={
                () => {
                  return (
                    <Link
                      className="item"
                      to="/recruit"
                    >
                      RECRUIT
                    </Link>
                  );
                }
              }
            />

            {/* Contact */}
            <Menu.Item
              name="contact"
              active={
                activeItem === 'contact'
              }
              // onClick={this.handleItemClick}
              as={
                () => {
                  return (
                    <Link
                      className="item"
                      to="/contact"
                    >
                      CONTACT
                    </Link>
                  );
                }
              }
            />

            {/* TechBlog */}
            <Menu.Item
              name="tech"
              active={
                activeItem === 'tech'
              }
              as={
                () => {
                  return (
                    <span
                      // onClick={this.handleTechClick}
                      className="item link"
                    >
                      TECH BLOG
                    </span>
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
