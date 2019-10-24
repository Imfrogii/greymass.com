import React, { Component } from "react";

import { Link } from "gatsby";

import linkStyles from './link.module.css'

class LayoutHeaderLink extends Component {
  render() {
    const {
      active,
      content,
      to,
    } = this.props;

    return (
      <Link
        className={active ?
        linkStyles.activeContainer :
          linkStyles.inactiveContainer
        }
        to={to}
      >
        <h3
          className={
            `${linkStyles.text} ${
              active ?
                linkStyles.activeText :
                linkStyles.inactiveText
            }`}>
          {content}
          {active && (
            <div
              className={linkStyles.activeBottomBar}
            />
          )}
        </h3>
      </Link>
    )
  }
}

export default LayoutHeaderLink;
