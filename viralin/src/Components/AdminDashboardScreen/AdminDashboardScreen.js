/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import 'Components/AdminDashboardScreen/AdminDashboardScreen.css';

class AdminDashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      totalContent: 0,
      totalActiveContent: 0,
      totalPebisnis: 0,
      totalActivePebisnis: 0,
      totalPromotor: 0,
      totalActivePromotor: 0,
    });
  }

  render() {
    return(
      <div className="AdminDashboardScreen">
        hello
      </div>
    );
  }
}

export default AdminDashboardScreen;
