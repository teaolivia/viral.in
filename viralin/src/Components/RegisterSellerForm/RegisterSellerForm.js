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
import InputAdornment from '@material-ui/core/InputAdornment';

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
      email: '',
      submittedEmail: '',
      nomorTelepon: '',
      submittedNomorTelepon: '',
      tempatLahir: '',
      submittedTempatLahir: '',
      tanggalLahir: '',
      submittedTanggalLahir: '',
      isLoadingProvinsi: false,
      isProvinsiLoaded: false,
      provinsiArray: [],
      provinsi: '',
      provinsiValue: 0,
      submittedProvinsi: '',
      isLoadingKabupatenKota: false,
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
    this.changeEmailValue = this.changeEmailValue.bind(this);
    this.changeNomorTeleponValue = this.changeNomorTeleponValue.bind(this);
    this.changeTempatLahirValue = this.changeTempatLahirValue.bind(this);
    this.changeTanggalLahirValue = this.changeTanggalLahirValue.bind(this);
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
      submittedEmail,
      submittedNomorTelepon,
      submittedTempatLahir,
      submittedTanggalLahir,
      submittedProvinsi,
      submittedKabupatenKota,
    } = this.state;
    console.log(`Nama Usaha: ${submittedNamaUsaha}`);
    console.log(`Jenis Usaha: ${submittedJenisUsaha}`);
    console.log(`Nama Usaha: ${submittedNamaPebisnis}`);
    console.log(`Email: ${submittedEmail}`);
    console.log(`Nomor Telepon: ${submittedNomorTelepon}`);
    console.log(`Tempat Lahir: ${submittedTempatLahir}`);
    console.log(`Tanggal Lahir: ${submittedTanggalLahir}`);
    console.log(`Provinsi Alamat: ${submittedProvinsi}`);
    console.log(`Kabupaten/Kota Alamat: ${submittedKabupatenKota}`);
  }

  handleSubmit(event) {
    const {
      namaUsaha,
      jenisUsaha,
      namaPebisnis,
      email,
      nomorTelepon,
      tempatLahir,
      tanggalLahir,
      provinsi,
      kabupatenKota,
    } = this.state;
    event.preventDefault();
    this.setState({
      submittedNamaUsaha: namaUsaha,
      submittedJenisUsaha: jenisUsaha,
      submittedNamaPebisnis: namaPebisnis,
      submittedEmail: email,
      submittedNomorTelepon: nomorTelepon,
      submittedTempatLahir: tempatLahir,
      submittedTanggalLahir: tanggalLahir,
      submittedProvinsi: provinsi,
      submittedKabupatenKota: kabupatenKota,
    }, () => {
      console.log('form submitted');
    });
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

  changeEmailValue(event) {
    this.setState({ email: event.target.value });
  }

  changeNomorTeleponValue(event) {
    this.setState({ nomorTelepon: event.target.value });
  }

  changeTempatLahirValue(event) {
    this.setState({ tempatLahir: event.target.value });
  }

  changeTanggalLahirValue(event) {
    this.setState({ tanggalLahir: event.target.value });
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
    this.setState({ isLoadingProvinsi: true });
    const data = fetchProvinsiApi;
    data.then(
      (result) => {
        this.setState({
          isProvinsiLoaded: true,
        });
        if (!result.error) {
          this.setState({ provinsiArray: result.semuaprovinsi, isLoadingProvinsi: false });
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }

  fetchKabupatenKota(id) {
    this.setState({ isLoadingKabupatenKota: true });
    const data = fetchKabupatenKotaApi(id);
    data.then(
      (result) => {
        this.setState({
          isKabupatenKotaLoaded: true,
        });
        if (!result.error) {
          this.setState({ kabupatenKotaArray: result.kabupatens, isLoadingKabupatenKota: false });
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
      email,
      nomorTelepon,
      tempatLahir,
      tanggalLahir,
      isLoadingProvinsi,
      isProvinsiLoaded,
      provinsiValue,
      provinsiArray,
      isLoadingKabupatenKota,
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
          <TextField
            id="filled-email-input"
            label="Email"
            className="TextField"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
            fullWidth
            value={email}
            onChange={this.changeEmailValue}
          />
          <TextField
            id="filled-nomorTelepon"
            label="Nomor Telepon"
            fullWidth
            value={nomorTelepon}
            onChange={this.changeNomorTeleponValue}
            type="number"
            className="TextField"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">+62</InputAdornment>,
            }}
            margin="normal"
            variant="filled"
          />
          <Typography variant="subtitle1">Informasi Kelahiran</Typography>
          <TextField
            id="filled-tempatlahir"
            label="Tempat Lahir"
            className="TextField"
            margin="normal"
            variant="filled"
            fullWidth
            value={tempatLahir}
            onChange={this.changeTempatLahirValue}
          />
          <TextField
            id="filledtanggallahir"
            label="Tanggal Lahir"
            type="date"
            className="TextField"
            margin="normal"
            variant="filled"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={tanggalLahir}
            onChange={this.changeTanggalLahirValue}
          />
          <Typography variant="subtitle1">Informasi Tempat Tinggal</Typography>
          { isLoadingProvinsi && <Typography>Mengambil data provinsi...</Typography> }
          { (isProvinsiLoaded && !isLoadingProvinsi)
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
          { isLoadingKabupatenKota && <Typography>Mengambil data kabupaten/kota...</Typography> }
          { (isKabupatenKotaLoaded && !isLoadingKabupatenKota)
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
