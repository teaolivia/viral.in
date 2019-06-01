import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TabContainer from './Components/TabContainer';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  });


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
                <Paper className = {classes.paper}>
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
        );        
    }
}

export default withStyles(styles)(LoginScreen);
;