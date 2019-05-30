
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
<<<<<<< HEAD
      <Router>
        <div className="App">
          <p>Hello, world!</p>
        </div>
      </Router>      
=======
      <Route>
        <div className="App">
          <p>Hello, world!</p>
        </div>
      </Route>      
>>>>>>> change jsx root into Route
    );
  }
}

export default App;