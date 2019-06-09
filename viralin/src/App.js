/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from 'Components/LoginScreen/LoginScreen';
import RegisterScreen from 'Components/RegisterScreen/RegisterScreen';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form action="http://127.0.0.1:5000" method="post">
        <Router>
          <div className="App">
            <Route path="/" exact component={LoginScreen} />
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/register" exact component={RegisterScreen} />
          </div>
        </Router>
      </form>
    );
  }
}

export default App;
