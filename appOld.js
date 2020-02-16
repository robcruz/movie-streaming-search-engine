let username = "rcruz@stamps.com"
let apiKey = "iUPKIU4QehgPPAj9pgPK-nKRihZ/TSXvZahM.QHAS";
let authorization = "Basic cmNydXpAc3RhbXBzLmNvbTppVVBLSVU0UWVoZ1BQQWo5cGdQSy1uS1JpaFovVFNYdlphaE0uUUhBUw=="
const url = "https://stamps.testrail.io/index.php?/api/v2/get_case/4930"





$.ajax({
  "async": true,
  "crossDomain": true,
  "url": url,
  "method": "GET",
  "headers": {
    "Authorization": authorization,
    "Content-Type": "Content-Type"
  }
}).then(function (response) {
  console.log(response);
});

// $.ajax({
//   "async": true,
//   "crossDomain": true,
//   "url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=lc&q=available",
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
//     "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
//   }
// }).then(function (response) {
//   console.log(response);
// });

// $.ajax({
//   type: "GET",
//   data: {
//     apikey:"c1f50a305f3f47234be0d4c3568ef5c9",
//     country: "US",
//     page_size: "50",
//     format:"jsonp",
//     callback:"jsonp_callback"
//   },
//   url: "https://api.musixmatch.com/ws/1.1/CHART.TRACKS.GET",
//   dataType: "jsonp",
//   jsonpCallback: 'jsonp_callback',
//   contentType: 'application/json',
//   success: successful,
//   error: withError
// })
//
// function jsonp_callback(res){
//   console.log(`jsonp_callback: ${res}`)
//   console.log(res)
// }
//
// function successful(res){
//   console.log(`successful: ${res}`)
//   console.log(res)
// }
//
// function withError(res){
//   console.log(res)
// }


//
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=lc&q=available",
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
//     "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
//   }
// }
//
// $.ajax(settings).then(function (response) {
//   console.log(response);
// });
