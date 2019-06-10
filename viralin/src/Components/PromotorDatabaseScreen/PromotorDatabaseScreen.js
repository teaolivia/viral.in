/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Person from '@material-ui/icons/Person';
import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import Refresh from '@material-ui/icons/Refresh';
import Sort from '@material-ui/icons/Sort';
import 'Components/PromotorDatabaseScreen/PromotorDatabaseScreen.css';

const createData = (namaPromotor, kota, tanggalRegistrasi, status, jumlahKonten, namaKonten) => {
  const returnData = {
    namaPromotor,
    kota,
    tanggalRegistrasi,
    status,
    jumlahKonten,
    namaKonten,
  };
  return returnData;
};

class PromotorDatabaseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        createData('Joko', 'Bandung', '10-06-2019', 'Aktif', 1, 'Peduli kasih'),
      ],
      activeCount: 0,
    };
  }

  render() {
    const { rows, activeCount } = this.state;
    return (
      <div className="PromotorDatabaseScreen">

        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={0}
          className="Navigation"
        >
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            spacing={0}
            className="Left"
            xs={4}
          >
            <ButtonBase>
              <Home />
            </ButtonBase>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
            className="Middle"
            xs={4}
          >
            <Typography variant="h5">DATABASE PROMOTOR</Typography>
          </Grid>
          <Grid
            container
            item
            direction="row-reverse"
            alignItems="center"
            spacing={0}
            className="Right"
            xs={4}
          >
            <Avatar><Person /></Avatar>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <Typography>Admin</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          spacing={0}
          className="Main"
        >
          <Grid
            container
            direction="row"
            spacing={2}
            className="Tools"
            alignItems="center"
          >
            <Grid item>
              <Paper>
                <TextField
                  className="SearchInput"
                  id="input-with-icon-searchinput"
                  label="Cari Promotor"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </Paper>
            </Grid>
            <Grid item>
              <ButtonBase>
                <Refresh />
              </ButtonBase>
            </Grid>
            <Grid item>
              <ButtonBase>
                <Sort />
              </ButtonBase>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                Total Promotor:
                {rows.length}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                Total Aktif:
                {activeCount}
              </Typography>
            </Grid>
          </Grid>
          <Paper
            className="TableContainer"
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nama Promotor</TableCell>
                  <TableCell>Kota</TableCell>
                  <TableCell>Tanggal Registrasi</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Jumlah Konten Dishare</TableCell>
                  <TableCell>Nama Konten Viral</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.namaPromotor}>
                    <TableCell>{row.namaPromotor}</TableCell>
                    <TableCell>{row.kota}</TableCell>
                    <TableCell>{row.tanggalRegistrasi}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.jumlahKonten}</TableCell>
                    <TableCell>{row.namaKonten}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default PromotorDatabaseScreen;
