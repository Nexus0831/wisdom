import React from 'react';
import $ from 'jquery';

import {
  Menu,
  Dropdown,
  Modal,
  Icon,
  Button
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
          id="default-menu"
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

            {/* Sharing */}
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
                      to="/sharing"
                    >
                      Sharing
                    </Link>
                  );
                }
              }
            />
            </Menu.Menu>

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
        </Menu>

        {/*スマホ版メニュー*/}
        <Menu
          fixed="top"
          fluid
          id="mobile-menu"
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
            <Modal
              trigger={
                <Button
                  circular
                  icon='align justify'
                  className="item"
                />
              }
              basic
              dimmer="blurring"
            >
              <Modal.Content>
                <Link
                  className="dropdown_link"
                  to="/newArchive"
                >
                  New Archive
                </Link>
                <br/>
                <Link
                  className="dropdown_link"
                  to="/sharing"
                >
                  Sharing
                </Link>
                <br/>
                <Link
                  className="dropdown_link"
                  to="/interest"
                >
                  Interest
                </Link>
              </Modal.Content>
            </Modal>
          {/*<Dropdown*/}
            {/*className="item"*/}
            {/*icon="align justify"*/}
            {/*simple*/}
            {/*item*/}
            {/*open={false}*/}
          {/*>*/}
            {/*<Dropdown.Menu*/}

            {/*>*/}
              {/*<Dropdown.Item>*/}
                {/*<Link*/}
                  {/*className="dropdown_link"*/}
                  {/*to="/newArchive"*/}
                {/*>*/}
                  {/*New Archive*/}
                {/*</Link>*/}
              {/*</Dropdown.Item>*/}

              {/*<Dropdown.Item>*/}
                {/*<Link*/}
                  {/*className="dropdown_link"*/}
                  {/*to="/sharing"*/}
                {/*>*/}
                  {/*Sharing*/}
                {/*</Link>*/}
              {/*</Dropdown.Item>*/}

              {/*<Dropdown.Item>*/}
                {/*<Link*/}
                  {/*className="dropdown_link"*/}
                  {/*to="/interest"*/}
                {/*>*/}
                  {/*Interest*/}
                {/*</Link>*/}
              {/*</Dropdown.Item>*/}
            {/*</Dropdown.Menu>*/}
          {/*</Dropdown>*/}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default HeaderMenu;
