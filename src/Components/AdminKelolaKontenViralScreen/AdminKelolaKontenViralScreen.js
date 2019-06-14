/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import AdminNavigation from 'Components/AdminNavigation/AdminNavigation';
import AdminKontenViralTable from 'Components/AdminKontenViralTable/AdminKontenViralTable';
import 'Components/AdminKelolaKontenViralScreen/AdminKelolaKontenViralScreen.css';

const name = 'Konten Viral';
const header = 'Konten Viral Aktif';
const header2 = 'Konten Viral Non-Aktif';

const activeData = {
  id: '1',
  title: 'Indihome Paket Gamer',
  seller: 'Joko',
  status: 'TRUE',
  referral: 0,
  duration_start: '01/01/2019',
  duration_end: '01/02/2019',
};

const nonActiveData = {
  id: '3',
  title: 'Buy 1 Get 1',
  seller: 'Bodo',
  status: 'FALSE',
  referral: 0,
  duration_start: '01/01/2019',
  duration_end: '01/02/2019',
};

const rowsData = [
  activeData,
  nonActiveData,
];

class AdminKelolaKontenViralScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRows: rowsData.filter(row => row.status === 'TRUE'),
      nonActiveRows: rowsData.filter(row => row.status === 'FALSE'),
    };
  }

  render() {
    const { activeRows, nonActiveRows } = this.state;
    return (
      <div className="AdminKelolaKontenViral">
        <AdminNavigation username="Admin" header="KONTEN VIRAL" />
        <AdminKontenViralTable
          className="Tabel"
          rows={activeRows}
          name={name}
          header={header}
          withSearchBox
        />
        <AdminKontenViralTable
          className="Tabel"
          rows={nonActiveRows}
          name={name}
          header={header2}
        />
      </div>
    );
  }
}

export default AdminKelolaKontenViralScreen;
