const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://dev.farizdotid.com/api/daerahindonesia/provinsi/';
const fetchKabupatenKotaApi = id => fetch(`${proxyUrl}${targetUrl}${id}/kabupaten`,
  {
    crossDomain: true,
    method: 'GET',
  })
  .then(res => res.json());
export default fetchKabupatenKotaApi;
