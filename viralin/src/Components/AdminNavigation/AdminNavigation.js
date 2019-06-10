/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import PropTypes from 'prop-types';
import Person from '@material-ui/icons/Person';
import Home from '@material-ui/icons/Home';

import 'Components/AdminNavigation/AdminNavigation.css';

class AdminNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { header } = this.props;
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={0}
        className="Navigation"
      >
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          spacing={0}
          className="Left"
          xs={4}
        >
          <ButtonBase>
            <Home />
          </ButtonBase>
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
          className="Middle"
          xs={4}
        >
          <Typography variant="h5">{header}</Typography>
        </Grid>
        <Grid
          container
          item
          direction="row-reverse"
          alignItems="center"
          spacing={0}
          className="Right"
          xs={4}
        >
          <Avatar><Person /></Avatar>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <Typography>Admin</Typography>
        </Grid>
      </Grid>
    );
  }
}

AdminNavigation.propTypes = {
  header: PropTypes.string.isRequired,
};

export default AdminNavigation;
