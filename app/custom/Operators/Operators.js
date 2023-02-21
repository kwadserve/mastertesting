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


function Operators(props) {
  const title = brand.name + ' - Operators';
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
      name: 'Manager Name',
      options: {
        filter: true
      }
    },
    {
      name: 'Operator Name',
      options: {
        filter: true,
      }
    },
    {
      name: 'Mobile',
      options: {
        filter: false,
      }
    },
    {
      name: 'Status',
      options: {
        filter: true,
        customBodyRender: (value) => {
          if (value === 'active') {
            return (<Chip label="Active" color="secondary" />);
          }
          if (value === 'non-active') {
            return (<Chip label="Non Active" color="primary" />);
          }
          return (<Chip label="Unknown" />);
        }
      }
    },
    {
      name: 'Block',
      options: {
        filter: true,
        customBodyRender: (value) => {
          if (value === 'blocked') {
            return (<Chip label="Unblock" color="secondary" />);
          }
          if (value === 'unblocked') {
            return (<Chip label="Block" color="primary" />);
          }
          return (<Chip label="Unknown" />);
        }
      }
    },
  ];

  const data = [
    [12, 'Gabby George', 'Rakesh Hooda', '3045789454', 'active', 'blocked'],
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
          title="Operators list"
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}

Operators.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectIntl(withStyles(styles)(Operators));
