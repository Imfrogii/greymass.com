import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql, StaticQuery } from 'gatsby';

import HeaderSidebar from './header/sidebar';
import HeaderMenu from './header/menu';

import TransitWrapper from '../shared/wrappers/transit';

class Header extends TransitWrapper {
  state = {
    transitSessions: [],
    sidebarVisible: false
  };

  componentDidMount() {
    window.onstorage = () => {
      this.loadSessions();
    };

    this.loadSessions();
  }

  loadSessions = () => {
    this.setState({ transitSessions: window.localStorage.getItem('transitSessions') })
  }

  handlePusher = () => {
    const { sidebarVisible } = this.state;

    if (sidebarVisible) this.setState({ sidebarVisible: false });
  };

  handleToggle = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });

  render() {
    const { data, intl, location } = this.props;
    const { sidebarVisible, transitSessions } = this.state;

    const pathName = (location && location.pathname.split('/')[2]) || '';
    const activeItem = location && `/${intl.locale}${(pathName) ? '/' : ''}${pathName}`;

    const navbarItems = [
      { as: `/${intl.locale}`, content: 'home', key: '/' },
      { as: `/${intl.locale}/about`, content: 'about', key: 'about' },
      { as: `/${intl.locale}/projects`, content: 'projects', key: 'projects' },
      { as: `/${intl.locale}/apis`, content: 'apis', key: 'apis' },
      { as: `/${intl.locale}/blog`, content: 'blog', key: 'blog' },
    ];

    return (
      <React.Fragment>
        <HeaderSidebar
          handleToggle={this.handleToggle}
          navbarItems={navbarItems}
          sidebarVisible={sidebarVisible}
          transitSessions={transitSessions}
        />
        <HeaderMenu
          activeItem={activeItem}
          data={data}
          handlePusher={this.handlePusher}
          handleToggle={this.handleToggle}
          navbarItems={navbarItems}
          transitSessions={transitSessions}
        />
      </React.Fragment>
    )
  }
}

const HeaderWrapper = injectIntl(Header);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "greymassLogo.png" }) {
          childImageSharp {
            fluid(maxWidth: 256, maxHeight: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HeaderWrapper data={data} {...props} />}
  />
);
