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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState();
    window.location.href = '/';
    console.log(event.target);
  }

  render() {
    const {
      header,
      isWithHomeButton,
      username,
      imageUrl,
    } = this.props;
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
          { isWithHomeButton && (
            <ButtonBase onClick={this.handleClick}>
              <Home />
            </ButtonBase>
          )}
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
          { imageUrl ? <Avatar src={imageUrl} /> : <Avatar><Person /></Avatar>}
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <Typography>{username}</Typography>
        </Grid>
      </Grid>
    );
  }
}

AdminNavigation.defaultProps = {
  header: '',
  username: 'User',
  imageUrl: '',
  isWithHomeButton: false,
};

AdminNavigation.propTypes = {
  header: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  isWithHomeButton: PropTypes.bool,
};

export default AdminNavigation;
