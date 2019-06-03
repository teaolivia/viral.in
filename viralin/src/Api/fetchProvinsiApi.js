const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://dev.farizdotid.com/api/daerahindonesia/provinsi';
const fetchProvinsiApi = fetch(proxyUrl + targetUrl, {
  crossDomain: true,
  method: 'GET',
})
  .then(res => res.json())
  .then(
    result => result,
    (error) => {
      console.log(error);
    },
  );
export default fetchProvinsiApi;
