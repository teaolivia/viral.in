/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';

import fetchProvinsiApi from 'Api/fetchProvinsiApi';
import fetchKabupatenKotaApi from 'Api/fetchKabupatenKotaApi';

class RegisterSellerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namaUsaha: '',
      submittedNamaUsaha: '',
      jenisUsaha: '',
      submittedJenisUsaha: '',
      namaPebisnis: '',
      submittedNamaPebisnis: '',
      isProvinsiLoaded: false,
      provinsiArray: [],
      provinsi: '',
      provinsiValue: 0,
      submittedProvinsi: '',
      isKabupatenKotaLoaded: false,
      kabupatenKotaArray: [],
      kabupatenKota: '',
      kabupatenKotaValue: 0,
      submittedKabupatenKota: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeNamaUsahaValue = this.changeNamaUsahaValue.bind(this);
    this.changeJenisUsahaValue = this.changeJenisUsahaValue.bind(this);
    this.changeNamaPebisnisValue = this.changeNamaPebisnisValue.bind(this);
    this.changeProvinsiValue = this.changeProvinsiValue.bind(this);
    this.changeKabupatenKotaValue = this.changeKabupatenKotaValue.bind(this);
  }

  componentDidMount() {
    this.fetchProvinsi();
  }

  componentDidUpdate() {
    const {
      submittedNamaUsaha,
      submittedJenisUsaha,
      submittedNamaPebisnis,
      submittedProvinsi,
      submittedKabupatenKota,
    } = this.state;
    console.log(`Nama Usaha: ${submittedNamaUsaha}`);
    console.log(`Jenis Usaha: ${submittedJenisUsaha}`);
    console.log(`Nama Usaha: ${submittedNamaPebisnis}`);
    console.log(`Provinsi Alamat: ${submittedProvinsi}`);
    console.log(`Kabupaten/Kota Alamat: ${submittedKabupatenKota}`);
  }

  handleSubmit(event) {
    const {
      namaUsaha,
      jenisUsaha,
      namaPebisnis,
      provinsi,
      kabupatenKota,
    } = this.state;
    event.preventDefault();
    this.setState({
      submittedNamaUsaha: namaUsaha,
      submittedJenisUsaha: jenisUsaha,
      submittedNamaPebisnis: namaPebisnis,
      submittedProvinsi: provinsi,
      submittedKabupatenKota: kabupatenKota,
    });
    console.log('form submitted');
  }

  changeNamaUsahaValue(event) {
    this.setState({ namaUsaha: event.target.value });
  }

  changeJenisUsahaValue(event) {
    this.setState({ jenisUsaha: event.target.value });
  }

  changeNamaPebisnisValue(event) {
    this.setState({ namaPebisnis: event.target.value });
  }

  changeProvinsiValue(event) {
    // event.target.options[event.target.selectedIndex].text
    this.fetchKabupatenKota(event.target.value);
    this.setState({
      provinsi: event.target.options[event.target.selectedIndex].text,
      provinsiValue: event.target.value,
    });
  }

  changeKabupatenKotaValue(event) {
    this.setState({
      kabupatenKota: event.target.options[event.target.selectedIndex].text,
      kabupatenKotaValue: event.target.value,
    });
  }

  fetchProvinsi() {
    const data = fetchProvinsiApi;
    data.then(
      (result) => {
        this.setState({
          isProvinsiLoaded: true,
        });
        if (!result.error) {
          this.setState({ provinsiArray: result.semuaprovinsi });
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }

  fetchKabupatenKota(id) {
    const data = fetchKabupatenKotaApi(id);
    data.then(
      (result) => {
        this.setState({
          isKabupatenKotaLoaded: true,
        });
        if (!result.error) {
          this.setState({ kabupatenKotaArray: result.kabupatens });
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }

  render() {
    const {
      namaUsaha,
      jenisUsaha,
      namaPebisnis,
      isProvinsiLoaded,
      provinsiValue,
      provinsiArray,
      isKabupatenKotaLoaded,
      kabupatenKotaValue,
      kabupatenKotaArray,
    } = this.state;
    const provinsis = provinsiArray.map(i => <option key={i.id} value={i.id}>{i.nama}</option>);
    const kabupatenKotas = kabupatenKotaArray.map(
      i => <option key={i.id} value={i.id}>{i.nama}</option>,
    );
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
          <TextField
            id="filled-namapebisnis"
            label="Nama Pebisnis"
            className="TextField"
            margin="normal"
            variant="filled"
            fullWidth
            value={namaPebisnis}
            onChange={this.changeNamaPebisnisValue}
          />
          { isProvinsiLoaded
          && (
            <FormControl className="FormControl" variant="filled" fullWidth>
              <InputLabel htmlFor="filled-provinsi-native-simple">Provinsi</InputLabel>
              <Select
                native
                value={provinsiValue}
                onChange={this.changeProvinsiValue}
                input={<FilledInput name="age" id="filled-age-native-simple" />}
              >
                <option value="" />
                { provinsis }
              </Select>
            </FormControl>
          )}
          { isKabupatenKotaLoaded
          && (
            <FormControl className="FormControl" variant="filled" fullWidth>
              <InputLabel htmlFor="filled-provinsi-native-simple">Kabupaten / Kota</InputLabel>
              <Select
                native
                value={kabupatenKotaValue}
                onChange={this.changeKabupatenKotaValue}
                input={<FilledInput name="age" id="filled-age-native-simple" />}
              >
                <option value="" />
                { kabupatenKotas }
              </Select>
            </FormControl>
          )}
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
