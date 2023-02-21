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


function Parking(props) {
  const title = brand.name + ' - Parkings';
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
        filter: true
      }
    },
    {
      name: 'Place',
      options: {
        filter: true,
      }
    },
    {
      name: 'Area',
      options: {
        filter: true
      }
    },
    {
      name: 'City',
      options: {
        filter: true
      }
    },
    {
      name: 'State',
      options: {
        filter: true
      }
    },
    {
      name: 'Address',
      options: {
        filter: false
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
  ];

  const data = [
    [1, 'Leela Enterprises', 'Pay n Park', 'Lohegaon', 'Pune', 'Maharashtra', 'Leela Enterprises, Near AeroMall, Pune Airport', 'active']
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
          title="Parkings"
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}

Parking.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectIntl(withStyles(styles)(Parking));
