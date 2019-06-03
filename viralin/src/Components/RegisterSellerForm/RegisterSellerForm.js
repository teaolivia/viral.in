/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Typography from '@material-ui/core/Typography';

class RegisterSellerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namaUsaha: '',
      submittedNamaUsaha: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState();
    console.log('form submitted');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="subtitle1">Registrasi Akun Bisnis</Typography>

        </form>
      </div>
    );
  }
}

export default RegisterSellerForm;
