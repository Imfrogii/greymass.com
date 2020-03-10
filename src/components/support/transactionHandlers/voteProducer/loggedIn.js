import React, { Component } from 'react';
import {
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Segment,
  Message,
} from 'semantic-ui-react';

import loggedInStyles from './loggedIn.module.css';

import SharedDropdownsTransitSessions from '../../../shared/dropdowns/transit/sessions';
import SharedElementsChainLogo from '../../../shared/elements/chainLogo';
import SharedElementsExplorerLink from '../../../shared/elements/explorerLink';

class VoteProducerLoggedIn extends Component {
  render() {
    const {
      account,
      clearTransaction,
      currentTransitSession,
      logout,
      proxyVotes,
      setVoteToRemove,
      transaction,
      vote,
    } = this.props;

    const { chainName } = currentTransitSession;

    return (
      <div className={loggedInStyles.root}>
        <Segment
          secondary
          stacked
          textAlign="center"
        >
          <Header
            content="To support us directly from our website, select an option below."
            textAlign="center"
          />
          <Segment attached="top" size="large">
            <SharedElementsChainLogo
              chain={chainName}
            />
            <p style={{ marginTop: '1em'}}>
              Voting on <strong>{chainName}</strong> as
              &nbsp;
              <SharedDropdownsTransitSessions />
            </p>
          </Segment>
          <Segment attached>
            <Grid centered stackable>
              <Grid.Column computer={6} textAlign="center">
                <Button
                  content="Proxy your Vote"
                  onClick={proxyVotes}
                  primary
                  size="huge"
                />
                <p>
                  Proxy your voting rights to the
                  {' '}
                  <SharedElementsExplorerLink
                    chain={chainName}
                    type="account"
                    value="greymassvote"
                  />
                  {' '}
                  proxy, which will be used to vote for the block producers we feel bring the most value (including Greymass).
                </p>
              </Grid.Column>
              <Grid.Column width={1} />
              <span className="mobile-only">OR</span>
              <Grid.Column width={6} textAlign="center">
                {(account.voter_info && account.voter_info.producers.length === 30) && (
                  <Dropdown
                    fluid
                    onChange={(event, data) => setVoteToRemove(data.text)}
                    options={
                      account.voter_info.producers.map(producer => ({
                        key: producer,
                        text: producer,
                        value: producer,
                      }))
                    }
                    placeholder="Remove one of your votes"
                    selection
                  />
                )}
                <Button
                  content="Vote for Greymass"
                  onClick={vote}
                  primary
                  size="huge"
                />
                <p>
                  Add
                  {' '}
                  <SharedElementsExplorerLink
                    chain={chainName}
                    type="account"
                    value="teamgreymass"
                  />
                  {' '}
                  as one of your 30 votes to support us while controlling the remaining 29 votes.
                </p>
              </Grid.Column>
            </Grid>
            <Divider className="mobile-hidden" vertical>OR</Divider>
          </Segment>
        </Segment>
        {(transaction) && (
          <Message
            positive
            onDismiss={clearTransaction}
          >
            <Header size="large">
              Thank you, {account.name}!
              <Header.Subheader>
                We truly appreciate your support.
              </Header.Subheader>
            </Header>
            <p>If you'd like to vote again with a different account, simply login to that account and select it from the dropdown above.</p>
          </Message>
        )}
      </div>
    );
  }
}

export default VoteProducerLoggedIn;
