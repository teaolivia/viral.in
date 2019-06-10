/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import 'Components/PromotorDatabaseScreen/PromotorDatabaseScreen.css';

class PromotorDatabaseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={0}
        className="Top"
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={0}
          className="Top"
          xs={6}
        >
          kiri
        </Grid>
        <Grid
          container
          direction="row-reverse"
          alignItems="center"
          spacing={0}
          className="Top"
          xs={6}
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

export default PromotorDatabaseScreen;
