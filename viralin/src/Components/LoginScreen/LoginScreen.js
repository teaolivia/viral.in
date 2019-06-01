import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
                <div className="LoginFormContainer">
                    <Paper className = "Paper">
                        <Tabs value={this.state.value} onChange={this.handleChange}>
                            <Tab label="Akun Bisnis" />
                            <Tab label="Akun Promotor" />
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
                </div>
            </div>
        );        
    }
}

export default LoginScreen;
;