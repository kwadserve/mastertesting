import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from '../messages';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all'
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  }
});


function Places(props) {
  const title = brand.name + ' - Places';
  const description = brand.desc;
  const docSrc = 'custom/Users/demos/';
  const { intl } = props;
  const { classes } = props;

  const columns = [
    {
      name: 'ID',
      options: {
        filter: false
      }
    },
    {
      name: 'Name',
      options: {
        filter: true,
      }
    }
  ];

  const data = [
    [30, 'Corporate']
  ];

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    print: true,
    rowsPerPage: 10,
    page: 0
  };

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
      <div className={classes.table}>
        <MUIDataTable
          title="Places"
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}

Places.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectIntl(withStyles(styles)(Places));
