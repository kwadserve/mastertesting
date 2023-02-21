import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from '../messages';
import AdvFilter from '../demos/AdvFilter';

function UserList(props) {
  const title = brand.name + ' - Users';
  const description = brand.desc;
  const docSrc = 'custom/Users/demos/';
  const { intl } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <AdvFilter />
    </div>
  );
}

UserList.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(UserList);
