import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';

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
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
function AdvFilter(props) {
  const columns = [
    {
      name: 'ID',
      options: {
        filter: false
      }
    },
    {
      name: 'First Name',
      options: {
        filter: true
      }
    },
    {
      name: 'Last Name',
      options: {
        filter: true
      }
    },
    {
      name: 'Email',
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
    [124,'Gabby', 'George', 'gabby@gamil.com', '7548789535', 'active', 'unblocked'],
  ];

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    print: true,
    rowsPerPage: 10,
    page: 0
  };

  const { classes } = props;

  return (
    <div className={classes.table}>
      <MUIDataTable
        title="Users list"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

AdvFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvFilter);
