

let movieTitle = "Avengers Endgame"
let movieInfo = null


testCallback(movieTitle, getMovieInfo)

function testCallback(title, callback){
  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `http://www.omdbapi.com/?apikey=c164b08f&t=${title}`,
    "method": "GET",
    success: callback,
    error: err => console.log(err)
  })
}

function getMovieInfo(response) {
  alert('getMovieInfo')
  movieInfo = response
  alert(movieInfo['Title'])
  console.log(movieInfo)
}



// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": `http://www.omdbapi.com/?apikey=c164b08f&t=${movieTitle}`,
//   "method": "GET"
// }
//
// testCallback(settings, getMovieInfo)
//
// function testCallback(settings, callback){
//   $.ajax(settings)
//     .then(callback)
//     .catch(err => console.log(err));
// }







// settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${movieTitle}`,
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
//     "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
//   }
// }
//
// $.ajax(settings)
//   .then(response => console.log(response))
//   .catch(err => console.log(err));
//
//
//
