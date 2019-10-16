import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DashboardItem from './DashboardItem/DashboardItem';
import { isMobile } from '../../utils';

const styles = () => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
});

const Dashboard = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container direction={isMobile ? 'column' : 'row'} spacing={3} justify="center" alignItems="center">
        <DashboardItem size={9} priority="primary" metric="Users" type="line" />
        <DashboardItem size={3} priority="secondary" metric="Sessions" />
        <DashboardItem size={3} priority="primary" metric="Page Views" />
        <DashboardItem size={9} priority="Total Events" metric="Chart" type="line" />
      </Grid>
    </div>
  );
};

Dashboard.PropTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);