import React, { Component } from 'react';

import { translate } from 'react-i18next';
import { Container, Image, Menu } from 'semantic-ui-react';

import { Link } from 'gatsby';
import Logo from '../../../images/greymass-logo-white.png';
import LayoutHeaderLink from './desktop/link';

import sharedHeaderStyles from './shared.module.css';
import SupportUsButton from "../../shared/buttons/supportUs"

class HeaderDesktop extends Component {
  render() {
    const {
      activeItem,
      data,
      navbarItems,
    } = this.props;
    return (
      <Container>
        <Menu secondary>
          <Menu.Item>
            <Link
              className={sharedHeaderStyles.imageContainer}
              to={`/`}
            >
              <Image
                alt="Greymass Logo"
                centered
                className={sharedHeaderStyles.image}
                src={Logo}
                verticalAlign="middle"
              />
            </Link>
          </Menu.Item>

          {navbarItems.map(navbarItem => (
            <Menu.Item>
              <LayoutHeaderLink
                active={activeItem === navbarItem.as}
                content={navbarItem.content}
                to={navbarItem.as}
              />
            </Menu.Item>
          ), this)}

          <Menu.Menu position='right'>
            <Menu.Item>
              <SupportUsButton />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

export default translate('layout')(HeaderDesktop);
