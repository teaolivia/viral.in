/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import AdminNavigation from 'Components/AdminNavigation/AdminNavigation';
import AdminDatabaseTable from 'Components/AdminDatabaseTable/AdminDatabaseTable';
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
        createData('Joko1', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko2', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko3', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko4', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko5', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko6', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko7', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko8', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko9', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko10', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko11', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko12', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
        createData('Joko13', 'Bandung', '10-06-2019', 'Aktif', '1', 'Peduli kasih'),
      ],
    };
  }

  render() {
    const { rows } = this.state;
    return (
      <div className="PromotorDatabaseScreen">
        <AdminNavigation
          header="DATABASE PROMOTOR"
          isWithHomeButton
          username="Admin"
        />
        <AdminDatabaseTable
          name="Promotor"
          columns={[
            'Nama Promotor',
            'Kota',
            'Tanggal Registrasi',
            'Status',
            'Jumlah Konten Dishare',
            'Nama Konten Viral',
          ]}
          rows={rows}
        />
      </div>
    );
  }
}

export default PromotorDatabaseScreen;
