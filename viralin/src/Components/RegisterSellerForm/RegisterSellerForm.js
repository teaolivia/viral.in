/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class RegisterSellerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namaUsaha: '',
      submittedNamaUsaha: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeNamaUsahaValue = this.changeNamaUsahaValue.bind(this);
    this.printSumbmitted = this.printSubmitted.bind(this);
  }

  printSubmitted() {
    const { submittedNamaUsaha } = this.state;
    console.log(`Nama Usaha: ${submittedNamaUsaha}`);
  }

  handleSubmit(event) {
    const { namaUsaha } = this.state;
    event.preventDefault();
    this.setState({
      submittedNamaUsaha: namaUsaha,
    });
    console.log('form submitted');
    this.printSubmitted();
  }

  changeNamaUsahaValue(event) {
    this.setState({ namaUsaha: event.target.value });
  }

  render() {
    const { namaUsaha } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="subtitle1">Registrasi Akun Bisnis</Typography>
          <TextField
            id="filled-namausaha"
            label="Nama Usaha"
            className="TextField"
            margin="normal"
            variant="filled"
            fullWidth
            value={namaUsaha}
            onChange={this.changeNamaUsahaValue}
          />
          <Button
            variant="contained"
            color="primary"
            className="Button"
            type="submit"
          >
            <Typography variant="subtitle1">Register</Typography>
          </Button>
        </form>
      </div>
    );
  }
}

export default RegisterSellerForm;
