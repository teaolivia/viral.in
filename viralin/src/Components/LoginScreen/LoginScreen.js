import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './LoginScreen.css';

import TabContainer from 'Components/TabContainer/TabContainer';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value : 0};
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(event, newValue) {
        this.setState({value : newValue});
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
                    <Grid item xs={6}>
                        <Container>
                            <Paper className = "Paper">
                                <Tabs value={this.state.value} onChange={this.handleChange}>
                                    <Tab label="Akun Bisnis" />
                                    <Tab label="Akun Promotor" />
                                    <Tab label="Akun Admin" />
                                </Tabs>
                                {this.state.value === 0 && <TabContainer>
                                    s
                                    {/* <TextField
                                        id="filled-name"
                                        label="Name"
                                        className={classes.textField}
                                        value={values.name}
                                        onChange={this.setState({username : value})}
                                        margin="normal"
                                        variant="filled"
                                    /> */}
                                </TabContainer>}
                                {this.state.value === 1 && <TabContainer>
                                    Itesm Two
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