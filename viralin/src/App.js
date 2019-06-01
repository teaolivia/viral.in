
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen"

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  componentWillMount(){
  }
  render() {
    return (
      <Router>        
        <div className="App">
          <Route path="/" exact component={LoginScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={LoginScreen} />
        </div>
      </Router>      
    );
  }
}

export default App;