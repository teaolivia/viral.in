/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import 'Components/AdminDashboardScreen/AdminDashboardScreen.css';

class AdminDashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      buttons: [
        {
          imageUrl: '',
          targetUrl: '',
          name: 'Konten',
          header: 'Kelola Konten Viral',
          count: 0,
          activeCount: 0,
        },
        {
          imageUrl: '',
          targetUrl: '',
          name: 'Pebisnis',
          header: 'Database Pebisnis',
          count: 0,
          activeCount: 0,
        },
        {
          imageUrl: '',
          targetUrl: '',
          name: 'Promotor',
          header: 'Database Promotor',
          count: 0,
          activeCount: 0,
        },
      ],
    });
  }

  render() {
    return (
      <div className="AdminDashboardScreen">
        <Grid
          container
          direction="row-reverse"
          alignItems="center"
          spacing={0}
          className="Top"
        >
          <Avatar><Person /></Avatar>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <Typography>Admin</Typography>
        </Grid>
      </div>
    );
  }
}

export default AdminDashboardScreen;
