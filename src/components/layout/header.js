import React, { Component } from "react";

import { Menu } from "semantic-ui-react";
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from "gatsby"

class Header extends Component {
  render() {
    const { data, t } = this.props;
    console.log({data})
    const activeItem = ''
    return (
      <Menu secondary>
        <Menu.Item active={activeItem === 'home'}>
          <Link to={`/`}>
            <h3>
              LOGO
            </h3>
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'about'}>
          <Link to={`about`}>
            <h3>
              {t('about')}
            </h3>
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'projects'}>
          <Link to={`projects`}>
            <h3>
              {t('projects')}
            </h3>
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'blog'}>
          <Link to={`blog`}>
            <h3>
              {t('blog')}
            </h3>
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item active={activeItem === 'support_us'}>
            <Link to={`support_us`}>
              <h3>
                {t('support_us')}
              </h3>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

const HeaderWrapper = translate('layout')(Header);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "static/greymass-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HeaderWrapper data={data} {...props} />}
  />
);


