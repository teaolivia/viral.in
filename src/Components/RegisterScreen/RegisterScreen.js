/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import 'Components/RegisterScreen/RegisterScreen.css';

import TabContainer from 'Components/TabContainer/TabContainer';
import RegisterSellerForm from 'Components/RegisterSellerForm/RegisterSellerForm';
import RegisterPromotorForm from 'Components/RegisterPromotorForm/RegisterPromotorForm';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
    };
    this.changeTabValue = this.changeTabValue.bind(this);
    this.registerButtonClickHandler = this.registerButtonClickHandler.bind(this);
  }

  changeTabValue(event, newValue) {
    this.setState({ tabValue: newValue });
  }

  registerButtonClickHandler() {
    const { tabValue } = this.state;
    console.log(`Register button click handler terpanggil, nilai tab: ${tabValue}`);
  }

  render() {
    const { tabValue } = this.state;
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
              Daftar
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
                </Tabs>
                <TabContainer>
                  { tabValue === 0
                  && <RegisterSellerForm />
                  }
                  { tabValue === 1
                  && <RegisterPromotorForm />
                  }
                </TabContainer>
              </Paper>
              <Typography variant="subtitle1">
                <br />
                Promosi? Viralin ajaaa..
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

export default RegisterScreen;
