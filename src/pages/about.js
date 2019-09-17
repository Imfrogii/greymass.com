import React from 'react';

import { translate } from 'react-i18next';

import AboutValues from '../components/about/values';
import AboutTeamMembers from '../components/about/teamMembers';
import Layout from '../components/layout';
import SharedHeader from '../components/shared/header';

class About extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <Layout>
        { () => (
          <div>
            <SharedHeader
              title={t('header_title')}
              paragraph={t('header_paragraph')}
            />
            <AboutValues />
            <AboutTeamMembers />
          </div>
        )}
      </Layout>
    )
  }
}

export default translate('about')(About);
