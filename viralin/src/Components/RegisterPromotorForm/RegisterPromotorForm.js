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
    this.changeNamaPromotorValue = this.changeNamaPromotorValue.bind(this);
    this.changeEmailValue = this.changeEmailValue.bind(this);
    this.changeFacebookValue = this.changeFacebookValue.bind(this);
    this.changeTwitterValue = this.changeTwitterValue.bind(this);
    this.changeInstagramValue = this.changeInstagramValue.bind(this);
    this.changeNomorTeleponValue = this.changeNomorTeleponValue.bind(this);
    this.changeTempatLahirValue = this.changeTempatLahirValue.bind(this);
    this.changeTanggalLahirValue = this.changeTanggalLahirValue.bind(this);
    this.changeProvinsiValue = this.changeProvinsiValue.bind(this);
    this.changeKabupatenKotaValue = this.changeKabupatenKotaValue.bind(this);
    this.changeAlamatValue = this.changeAlamatValue.bind(this);
    this.changeUsernameValue = this.changeUsernameValue.bind(this);
    this.changePasswordValue = this.changePasswordValue.bind(this);
    this.changePasswordConfirmationValue = this.changePasswordConfirmationValue.bind(this);
  }

  componentDidMount() {
    this.fetchProvinsi();
  }

  componentDidUpdate() {
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
    console.log(`Nama Promotor: ${submittedNamaPromotor}`);
    console.log(`Email: ${submittedEmail}`);
    console.log(`Facebook: ${submittedFacebook}`);
    console.log(`Twitter: ${submittedTwitter}`);
    console.log(`Instagram: ${submittedInstagram}`);
    console.log(`Nomor Telepon: ${submittedNomorTelepon}`);
    console.log(`Tempat Lahir: ${submittedTempatLahir}`);
    console.log(`Tanggal Lahir: ${submittedTanggalLahir}`);
    console.log(`Provinsi Alamat: ${submittedProvinsi}`);
    console.log(`Kabupaten/Kota Alamat: ${submittedKabupatenKota}`);
    console.log(`Alamat: ${submittedAlamat}`);
    console.log(`Username: ${submittedUsername}`);
    console.log(`Password: ${submittedPassword}`);
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
        console.log('form submitted');
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

  changeNamaPromotorValue(event) {
    this.setState({ namaPromotor: event.target.value });
  }

  changeEmailValue(event) {
    this.setState({ email: event.target.value });
  }

  changeFacebookValue(event) {
    this.setState({ facebook: event.target.value });
  }

  changeTwitterValue(event) {
    this.setState({ twitter: event.target.value });
  }

  changeInstagramValue(event) {
    this.setState({ instagram: event.target.value });
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

  changeAlamatValue(event) {
    this.setState({ alamat: event.target.value });
  }

  changeUsernameValue(event) {
    this.setState({ username: event.target.value });
  }

  changePasswordValue(event) {
    this.setState({ password: event.target.value });
  }

  changePasswordConfirmationValue(event) {
    this.setState({ passwordConfirmation: event.target.value });
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
        <form onSubmit={this.handleSubmit}>
          <Typography variant="subtitle1">Registrasi Akun Promotor</Typography>
          <TextField
            id="filled-namaPromotor"
            label="Nama Promotor"
            className="TextField"
            margin="normal"
            variant="filled"
            fullWidth
            value={namaPromotor}
            onChange={this.changeNamaPromotorValue}
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
          <TextField
            id="filled-alamat"
            label="Alamat Tinggal"
            className="TextField"
            margin="normal"
            variant="filled"
            fullWidth
            value={alamat}
            onChange={this.changeAlamatValue}
          />
          <br />
          { isLoadingProvinsi && <Typography>Mengambil data provinsi...</Typography> }
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
          { isLoadingKabupatenKota && <Typography>Mengambil data kabupaten/kota...</Typography> }
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
            fullWidth
            value={facebook}
            onChange={this.changeFacebookValue}
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
            fullWidth
            value={twitter}
            onChange={this.changeTwitterValue}
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
            fullWidth
            value={instagram}
            onChange={this.changeInstagramValue}
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
          <Typography variant="subtitle1">Informasi Akun</Typography>
          <TextField
            id="filled-username"
            label="Username"
            className="TextField"
            margin="normal"
            variant="filled"
            fullWidth
            value={username}
            onChange={this.changeUsernameValue}
          />
          <TextField
            id="filled-password-input"
            label="Password"
            className="TextField"
            type="password"
            margin="normal"
            variant="filled"
            fullWidth
            value={password}
            onChange={this.changePasswordValue}
          />
          <TextField
            id="filled-passwordConfirmation-input"
            label="Konfirmasi Password"
            className="TextField"
            type="password"
            margin="normal"
            variant="filled"
            fullWidth
            value={passwordConfirmation}
            onChange={this.changePasswordConfirmationValue}
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
