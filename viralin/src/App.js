
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
          <p>Hello, world!</p>
        </div>
      </Router>      
    );
  }
}

export default App;