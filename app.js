let username = "rcruz@stamps.com"
let apiKey = "iUPKIU4QehgPPAj9pgPK-nKRihZ/TSXvZahM.QHAS";
const http = new BootCampHttp;

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://stamps.testrail.io/index.php?/api/v2/get_case/4930"


// fetch(url, {
//   headers: {
//     "Authorization": "Basic cmNydXpAc3RhbXBzLmNvbTppVVBLSVU0UWVoZ1BQQWo5cGdQSy1uS1JpaFovVFNYdlphaE0uUUhBUw==",
//     "Content-Type": "application/json"
//   }
// }).then(res => console.log(res))


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic cmNydXpAc3RhbXBzLmNvbTppVVBLSVU0UWVoZ1BQQWo5cGdQSy1uS1JpaFovVFNYdlphaE0uUUhBUw==");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://stamps.testrail.io/index.php?/api/v2/get_case/4930", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
