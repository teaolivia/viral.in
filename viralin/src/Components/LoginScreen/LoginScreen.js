import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import './LoginScreen.css';

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
                                <TextField
                                        id="filled-username"
                                        label="Username"
                                        className="TextField"
                                        margin="normal"
                                        variant="filled"
                                        fullWidth
                                        onChange={this.changeUsernameValue}
                                    />
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
                                </TabContainer>
                                {this.state.tabValue === 0 && <TabContainer>
                                    Item one
                                </TabContainer>}
                                {this.state.tabValue === 1 && <TabContainer>
                                    Itesm Two
                                </TabContainer>}
                                {this.state.tabValue === 2 && <TabContainer>
                                    Itesm Three
                                </TabContainer>}
                            </Paper>            
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