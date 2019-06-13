/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from 'Components/LoginScreen/LoginScreen';
import RegisterScreen from 'Components/RegisterScreen/RegisterScreen';
import AdminDashboardScreen from 'Components/AdminDashboardScreen/AdminDashboardScreen';
import PromotorDatabaseScreen from 'Components/PromotorDatabaseScreen/PromotorDatabaseScreen';
import SellerDatabaseScreen from 'Components/SellerDatabaseScreen/SellerDatabaseScreen';
import AdminKelolaKontenViralScreen from 'Components/AdminKelolaKontenViralScreen/AdminKelolaKontenViralScreen';

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
            <Route path="/admin-dashboard" exact component={AdminDashboardScreen} />
            <Route path="/admin-kelola-konten-viral" exact component={AdminKelolaKontenViralScreen} />
            <Route path="/seller-database" exact component={SellerDatabaseScreen} />
            <Route path="/promotor-database" exact component={PromotorDatabaseScreen} />
          </div>
        </Router>
      </form>
    );
  }
}

export default App;
