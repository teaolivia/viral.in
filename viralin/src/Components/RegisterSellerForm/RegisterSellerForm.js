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
      jenisUsaha: '',
      submittedJenisUsaha: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeNamaUsahaValue = this.changeNamaUsahaValue.bind(this);
    this.changeJenisUsahaValue = this.changeJenisUsahaValue.bind(this);
  }

  componentDidUpdate() {
    const { submittedNamaUsaha, submittedJenisUsaha } = this.state;
    console.log(`Nama Usaha: ${submittedNamaUsaha}`);
    console.log(`Jenis Usaha: ${submittedJenisUsaha}`);
  }

  handleSubmit(event) {
    const { namaUsaha, jenisUsaha } = this.state;
    event.preventDefault();
    this.setState({
      submittedNamaUsaha: namaUsaha,
      submittedJenisUsaha: jenisUsaha,
    });
    console.log('form submitted');
  }

  changeNamaUsahaValue(event) {
    this.setState({ namaUsaha: event.target.value });
  }

  changeJenisUsahaValue(event) {
    this.setState({ jenisUsaha: event.target.value });
  }

  render() {
    const { namaUsaha, jenisUsaha } = this.state;
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
          <TextField
            id="filled-jenisusaha"
            label="Jenis Usaha"
            className="TextField"
            margin="normal"
            variant="filled"
            fullWidth
            value={jenisUsaha}
            onChange={this.changeJenisUsahaValue}
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
