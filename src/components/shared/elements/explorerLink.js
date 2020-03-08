import React, { Component } from 'react';

const explorers = {
  'eos': 'https://bloks.io',
  'jungle': 'https://jungle.bloks.io',
  'telos': 'https://telos.bloks.io',
  'wax': 'https://wax.bloks.io',
}

class SharedElementsExplorerLink extends Component {
  render() {
    const {
      chain,
      type,
      value,
    } = this.props;
    let url = explorers[chain]
    switch(type) {
      case "account":
        url += `/account/${value}`
        break;
    }
    return (
      <a
        href={url}
      >
        {value}
      </a>
    );
  }
}

export default SharedElementsExplorerLink;
