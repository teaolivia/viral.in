/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Group from '@material-ui/icons/Group';
import Accessibility from '@material-ui/icons/Accessibility';

import AdminNavigation from 'Components/AdminNavigation/AdminNavigation';
import 'Components/AdminDashboardScreen/AdminDashboardScreen.css';

class AdminDashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          imageIcon: <VolumeUp fontSize="inherit" />,
          targetUrl: '',
          name: 'Konten',
          header: 'Kelola Konten Viral',
          count: 0,
          activeCount: 0,
        },
        {
          imageIcon: <Group fontSize="inherit" />,
          targetUrl: '',
          name: 'Pebisnis',
          header: 'Database Pebisnis',
          count: 0,
          activeCount: 0,
        },
        {
          imageIcon: <Accessibility fontSize="inherit" />,
          targetUrl: '',
          name: 'Promotor',
          header: 'Database Promotor',
          count: 0,
          activeCount: 0,
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.toPromotorDatabaseScreen = this.toPromotorDatabaseScreen.bind(this);
  }

  handleClick(event) {
    this.setState();
    console.log(event.target);
  }

  toPromotorDatabaseScreen() {
    this.setState();
    window.location.href = '/promotor-database';
  }

  render() {
    const { buttons } = this.state;
    return (
      <div className="AdminDashboardScreen">
        <AdminNavigation username="Admin" />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
          className="ButtonsContainer"
        >
          {buttons.map(button => (
            <ButtonBase
              key={button.name}
              className="Button"
              onClick={(button.name === 'Promotor') ? this.toPromotorDatabaseScreen : this.handleClick}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={0}
                className="ButtonsContainer"
              >
                <Typography variant="h1">{ button.imageIcon }</Typography>
                <Typography variant="h5">{ button.header }</Typography>
                <Grid
                  container
                  direction="column"
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <Typography variant="subtitle1">{ `Total ${button.name}: ${button.count}` }</Typography>
                  <Typography variant="subtitle1">{ `Total Aktif: ${button.activeCount}` }</Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          ))}
        </Grid>
      </div>
    );
  }
}

export default AdminDashboardScreen;
