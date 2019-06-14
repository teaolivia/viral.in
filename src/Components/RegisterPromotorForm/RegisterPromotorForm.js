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
import CircularProgress from '@material-ui/core/CircularProgress';

import fetchProvinsiApi from 'Api/fetchProvinsiApi';
import fetchKabupatenKotaApi from 'Api/fetchKabupatenKotaApi';

class RegisterPromotorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namaPromotor: '',
      submittedNamaPromotor: '',
      email: '',
      submittedEmail: '',
      facebook: '',
      submittedFacebook: '',
      twitter: '',
      submittedTwitter: '',
      instagram: '',
      submittedInstagram: '',
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
      alamat: '',
      submittedAlamat: '',
      username: '',
      submittedUsername: '',
      password: '',
      passwordConfirmation: '',
      submittedPassword: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeProvinsiValue = this.changeProvinsiValue.bind(this);
    this.changeKabupatenKotaValue = this.changeKabupatenKotaValue.bind(this);
  }

  componentDidMount() {
    this.fetchProvinsi();
  }

  handleSubmit(event) {
    const {
      namaPromotor,
      email,
      facebook,
      twitter,
      instagram,
      nomorTelepon,
      tempatLahir,
      tanggalLahir,
      provinsi,
      kabupatenKota,
      alamat,
      username,
      password,
      passwordConfirmation,
    } = this.state;
    event.preventDefault();
    if (password === passwordConfirmation) {
      this.setState({
        submittedNamaPromotor: namaPromotor,
        submittedEmail: email,
        submittedFacebook: facebook,
        submittedTwitter: twitter,
        submittedInstagram: instagram,
        submittedNomorTelepon: nomorTelepon,
        submittedTempatLahir: tempatLahir,
        submittedTanggalLahir: tanggalLahir,
        submittedProvinsi: provinsi,
        submittedKabupatenKota: kabupatenKota,
        submittedAlamat: alamat,
        submittedUsername: username,
        submittedPassword: password,
      }, () => {
        const {
          submittedNamaPromotor,
          submittedEmail,
          submittedFacebook,
          submittedTwitter,
          submittedInstagram,
          submittedNomorTelepon,
          submittedTempatLahir,
          submittedTanggalLahir,
          submittedProvinsi,
          submittedKabupatenKota,
          submittedAlamat,
          submittedUsername,
          submittedPassword,
        } = this.state;
        const submitted = {
          namaPromotor: submittedNamaPromotor,
          facebook: submittedFacebook,
          twitter: submittedTwitter,
          instagram: submittedInstagram,
          email: submittedEmail,
          nomorTelepon: submittedNomorTelepon,
          alamat: submittedAlamat,
          provinsi: submittedProvinsi,
          kabupatenKota: submittedKabupatenKota,
          tempatLahir: submittedTempatLahir,
          tanggalLahir: submittedTanggalLahir,
          username: submittedUsername,
          password: submittedPassword,
        };
        console.table(submitted);
      });
    } else {
      console.log('password not match');
    }
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
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
      namaPromotor,
      email,
      facebook,
      twitter,
      instagram,
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
      alamat,
      username,
      password,
      passwordConfirmation,
    } = this.state;
    const provinsis = provinsiArray.map(i => <option key={i.id} value={i.id}>{i.nama}</option>);
    const kabupatenKotas = kabupatenKotaArray.map(
      i => <option key={i.id} value={i.id}>{i.nama}</option>,
    );
    return (
      <div>
        <form action="http://localhost:5000/promotors" method="post">
          <Typography variant="subtitle1">Registrasi Akun Promotor</Typography>
          <TextField
            id="filled-namaPromotor"
            label="Nama Promotor"
            className="TextField"
            margin="normal"
            variant="filled"
            name="namaPromotor"
            fullWidth
            value={namaPromotor}
            onChange={this.handleInputChange}
          />
          <Typography variant="subtitle1">Informasi Kontak</Typography>
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
            onChange={this.handleInputChange}
          />
          <TextField
            id="filled-nomorTelepon"
            label="Nomor Telepon"
            name="nomorTelepon"
            fullWidth
            value={nomorTelepon}
            onChange={this.handleInputChange}
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
          <TextField
            id="filled-alamat"
            label="Alamat Tinggal"
            className="TextField"
            margin="normal"
            variant="filled"
            name="alamat"
            fullWidth
            value={alamat}
            onChange={this.handleInputChange}
          />
          <br />
          { isLoadingProvinsi && (
            <div>
              <CircularProgress />
              <Typography>Mengambil data provinsi...</Typography>
            </div>
          ) }
          { (isProvinsiLoaded && !isLoadingProvinsi)
          && (
            <FormControl className="FormControl" variant="filled" fullWidth>
              <InputLabel htmlFor="filled-provinsi-native-simple">Provinsi Tempat Tinggal</InputLabel>
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
          <br />
          <br />
          { isLoadingKabupatenKota && (
            <div>
              <CircularProgress />
              <Typography>Mengambil data kabupaten/kota...</Typography>
            </div>
          ) }
          { (isKabupatenKotaLoaded && !isLoadingKabupatenKota)
          && (
            <FormControl className="FormControl" variant="filled" fullWidth>
              <InputLabel htmlFor="filled-provinsi-native-simple">Kabupaten / Kota Tempat Tinggal</InputLabel>
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
          <br />
          <TextField
            id="filled-facebook"
            label="Halaman Facebook"
            name="facebook"
            fullWidth
            value={facebook}
            onChange={this.handleInputChange}
            type="text"
            className="TextField"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">https://www.facebook.com/</InputAdornment>,
            }}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-twitter"
            label="Halaman Twitter"
            name="twitter"
            fullWidth
            value={twitter}
            onChange={this.handleInputChange}
            type="text"
            className="TextField"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">@</InputAdornment>,
            }}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-instagram"
            label="Halaman Instagram"
            name="instagram"
            fullWidth
            value={instagram}
            onChange={this.handleInputChange}
            type="text"
            className="TextField"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">@</InputAdornment>,
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
            name="tempatLahir"
            fullWidth
            value={tempatLahir}
            onChange={this.handleInputChange}
          />
          <TextField
            id="filledtanggallahir"
            label="Tanggal Lahir"
            type="date"
            className="TextField"
            margin="normal"
            variant="filled"
            name="tanggalLahir"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={tanggalLahir}
            onChange={this.handleInputChange}
          />
          <Typography variant="subtitle1">Informasi Akun</Typography>
          <TextField
            id="filled-username"
            label="Username"
            className="TextField"
            margin="normal"
            variant="filled"
            name="username"
            fullWidth
            value={username}
            onChange={this.handleInputChange}
          />
          <TextField
            id="filled-password-input"
            label="Password"
            className="TextField"
            type="password"
            margin="normal"
            variant="filled"
            name="password"
            fullWidth
            value={password}
            onChange={this.handleInputChange}
          />
          <TextField
            id="filled-passwordConfirmation-input"
            label="Konfirmasi Password"
            className="TextField"
            type="password"
            margin="normal"
            variant="filled"
            name="passwordConfirmation"
            fullWidth
            value={passwordConfirmation}
            onChange={this.handleInputChange}
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

export default RegisterPromotorForm;
