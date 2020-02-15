let username = "rcruz@stamps.com"
let apiKey = "iUPKIU4QehgPPAj9pgPK-nKRihZ/TSXvZahM.QHAS";
const http = new BootCampHttp;

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://stamps.testrail.io/index.php?/api/v2/get_case/4930"


fetch(url, {
  headers: {
    "Authorization": "Basic " + username + ":" + apiKey,
    "Content-Type": "application/json"
  }
}).then(res => console.log(res))
