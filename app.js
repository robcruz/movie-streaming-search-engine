
let movieTitle = "Avengers Endgame"

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://www.omdbapi.com/?apikey=c164b08f&t=Guardians%20of%20the%20Galaxy%20Vol.%202",
  "method": "GET"
}

$.ajax(settings)
  .then(response => console.log(response));




settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=Guardians%20of%20the%20Galaxy%20Vol.%202",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});





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
// $.ajax(settings)
//   .then(response => console.log(response));

// $.ajax({
//   "async": true,
//   "crossDomain": true,
//   "url": url,
//   "method": "GET",
//   "headers": {
//     "Authorization": authorization,
//     "Content-Type": "Content-Type"
//   }
// }).then(function (response) {
//   console.log(response);
// });

//
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
//   "url": "https://unogs-unogs-v1.p.rapidapi.com/api.cgi",
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
//     "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
//   }
// }
//
// $.ajax({
//   type: "GET",
//   "async": true,
//   "crossDomain": true,
//   "url": "https://unogs-unogs-v1.p.rapidapi.com/api.cgi",
//   "headers": {
//     "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
//     "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
//   }
// }).then(function (response) {
//   console.log(response);
// });
//



