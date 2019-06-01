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
import Link from '@material-ui/core/Link';

import 'Components/LoginScreen/LoginScreen.css';

import TabContainer from 'Components/TabContainer/TabContainer';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabValue : 0,
            username : '',
        };
        this.changeTabValue = this.changeTabValue.bind(this);
        this.changeUsernameValue = this.changeUsernameValue.bind(this);
    }
    
    changeTabValue(event, newValue) {
        this.setState({tabValue : newValue});
    }

    changeUsernameValue(event) {        
        this.setState({username : event.target.value});
    }

    render () {
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
                    <Grid item xs={3}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Container> 
                            <Paper className = "Paper">
                                <Tabs value={this.state.tabValue}
                                    onChange={this.changeTabValue}
                                >
                                    <Tab label="Akun Bisnis" />
                                    <Tab label="Akun Promotor" />
                                    <Tab label="Akun Admin" />
                                </Tabs>
                                <TabContainer>
                                    {(this.state.tabValue === 0 || this.state.tabValue === 1) &&  <TextField
                                            id="filled-username"
                                            label="Username"
                                            className="TextField"
                                            margin="normal"
                                            variant="filled"
                                            fullWidth
                                            onChange={this.changeUsernameValue}
                                    />}
                                    <TextField
                                            id="filled-password"
                                            label="Password"
                                            className="TextField"
                                            margin="normal"
                                            variant="filled"
                                            type="password"
                                            fullWidth
                                            onChange={this.changeUsernameValue}
                                    />
                                    <Button variant="contained" color="primary" className="Button">
                                        <Typography variant="subtitle1">Login</Typography>
                                    </Button>
                                    {(this.state.tabValue === 0 || this.state.tabValue === 1) &&                                      
                                    <Box component="span">
                                        <br />
                                        <br />
                                        <Link className="Button">Forgot Password?</Link>
                                        &nbsp; | &nbsp; 
                                        <Link className="Button">Register</Link>
                                    </Box>
                                    }
                                </TabContainer>                                                                
                            </Paper>           
                            {(this.state.tabValue === 0 || this.state.tabValue === 1) && 
                                <Typography variant="subtitle1">
                                    <br />
                                    Promosi? Viralin ajaaa..
                                </Typography>
                            } 
                        </Container>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    
                </Grid>
            </div>
        );        
    }
}

export default LoginScreen;
;