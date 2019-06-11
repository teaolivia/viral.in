/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import AdminNavigation from 'Components/AdminNavigation/AdminNavigation';
import AdminDatabaseTable from 'Components/AdminDatabaseTable/AdminDatabaseTable';
import 'Components/SellerDatabaseScreen/SellerDatabaseScreen.css';

const createData = (
  namaPebisnis,
  kota,
  tanggalRegistrasi,
  status,
  jumlahPromotor,
  jumlahIklanAktif,
  namaKonten,
) => {
  const returnData = {
    namaPebisnis,
    kota,
    tanggalRegistrasi,
    status,
    jumlahPromotor,
    jumlahIklanAktif,
    namaKonten,
  };
  return returnData;
};

class SellerDatabaseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        createData('Joko1', 'Bandung', '10-06-2019', 'Aktif', '1', '1', 'Peduli kasih'),
        createData('Joko2', 'Bandung', '10-06-2019', 'Aktif', '1', '1', 'Peduli kasih'),
      ],
    };
  }

  render() {
    const { rows } = this.state;
    return (
      <div className="SellerDatabaseScreen">
        <AdminNavigation
          header="DATABASE PEBISNIS"
          isWithHomeButton
          username="Admin"
        />
        <AdminDatabaseTable
          name="Pebisnis"
          columns={[
            'Nama Pebisnis',
            'Kota',
            'Tanggal Registrasi',
            'Status',
            'Jumlah Promotor',
            'Jumlah Iklan Aktif',
            'Nama Konten Viral',
          ]}
          rows={rows}
        />
      </div>
    );
  }
}

export default SellerDatabaseScreen;
