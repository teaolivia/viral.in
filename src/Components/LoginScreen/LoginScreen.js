/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import 'Components/LoginScreen/LoginScreen.css';

import TabContainer from 'Components/TabContainer/TabContainer';

const ADMIN_PASSWORD = 'asdf';

const loginAdmin = (password) => {
  if (password === ADMIN_PASSWORD) {
    window.location.href = '/admin-dashboard';
  } else {
    alert('Password salah');
  }
};

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
      username: '',
      password: '',
    };
    this.changeTabValue = this.changeTabValue.bind(this);
    this.changeUsernameValue = this.changeUsernameValue.bind(this);
    this.changePasswordValue = this.changePasswordValue.bind(this);
    this.loginButtonClickHandler = this.loginButtonClickHandler.bind(this);
  }

  changeTabValue(event, newValue) {
    this.setState({ tabValue: newValue });
  }

  changeUsernameValue(event) {
    this.setState({ username: event.target.value });
  }

  changePasswordValue(event) {
    this.setState({ password: event.target.value });
  }

  loginButtonClickHandler() {
    const { username, password, tabValue } = this.state;
    switch (tabValue) {
      case 0:
        // Login pebisnis
        break;
      case 1:
        // Login promotor
        break;
      case 2:
        // Login admin
        loginAdmin(password);
        break;
      default:
        break;
    }
  }

  render() {
    const { tabValue, username, password } = this.state;
    return (
      <div className="LoginScreen">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12}>
            <Typography className="Header" variant="h1" component="h2">
                VIRALIN
            </Typography>
          </Grid>
          <Grid item xs={12}><br /></Grid>
          <Grid item xs={3} />
          <Grid item xs={12} sm={6}>
            <Container>
              <Paper className="Paper">
                <Tabs
                  value={tabValue}
                  onChange={this.changeTabValue}
                >
                  <Tab label="Akun Bisnis" />
                  <Tab label="Akun Promotor" />
                  <Tab label="Akun Admin" />
                </Tabs>
                <TabContainer>
                  {
                    (tabValue === 0 || tabValue === 1)
                      && (
                      <TextField
                        id="filled-username"
                        label="Username"
                        className="TextField"
                        margin="normal"
                        variant="filled"
                        fullWidth
                        value={username}
                        onChange={this.changeUsernameValue}
                      />
                      )}
                  <TextField
                    id="filled-password"
                    label="Password"
                    className="TextField"
                    margin="normal"
                    variant="filled"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={this.changePasswordValue}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    className="Button"
                    onClick={this.loginButtonClickHandler}
                  >
                    <Typography variant="subtitle1">Login</Typography>
                  </Button>
                  {
                    (tabValue === 0 || tabValue === 1)
                      && (
                      <Box component="span">
                        <br />
                        <br />
                        <Link to="/forgot-password" className="Button">Forgot Password?</Link>
                        &nbsp; | &nbsp;
                        <Link to="/register" className="Button">Register</Link>
                      </Box>
                      )
                  }
                </TabContainer>
              </Paper>
              {
                (tabValue === 0 || tabValue === 1)
                  && (
                    <Typography variant="subtitle1">
                      <br />
                      Promosi? Viralin ajaaa..
                    </Typography>
                  )
              }
            </Container>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

export default LoginScreen;
