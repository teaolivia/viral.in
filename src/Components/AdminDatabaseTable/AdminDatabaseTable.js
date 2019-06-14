/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Refresh from '@material-ui/icons/Refresh';
import Sort from '@material-ui/icons/Sort';

import 'Components/AdminDatabaseTable/AdminDatabaseTable.css';

const countActive = (rows) => {
  let count = 0;
  rows.map((row) => {
    Object.keys(row).map((key) => {
      if (row[key] === 'Aktif') {
        count += 1;
      }
      return true;
    });
    return true;
  });

  return count;
};

class AdminDatabaseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name,
      columns,
      rows,
    } = this.props;
    return (
      <div className="AdminDatabaseTable">
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
                  placeholder={`Cari ${name}`}
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
                Total
                &nbsp;
                {name}
                :
                &nbsp;
                {rows.length}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                Total Aktif:&nbsp;
                {countActive(rows)}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper
              className="TableBodyContainer"
            >
              <Table className="Table">
                <TableHead>
                  <TableRow className="HeadRow">
                    {columns.map(column => (
                      <TableCell key={column.toLowerCase().split(' ').join('-')} variant="head">{column}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody className="TableBody">
                  {rows.map((row, rowsIndex) => {
                    const rowsKey = rowsIndex;
                    return (
                      <TableRow key={rowsKey}>
                        {Object.keys(row).map((key, rowIndex) => {
                          const rowKey = rowIndex;
                          return (
                            <TableCell key={`${rowsKey}${rowKey}`}>{row[key]}</TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AdminDatabaseTable.defaultProps = {
  name: '',
  rows: [],
};

AdminDatabaseTable.propTypes = {
  name: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object),
};


export default AdminDatabaseTable;
