
let movieTitle = "12341234asdfasdfasffsd!"

var settings = {
  "async": true,
  "crossDomain": true,
  "url": `http://www.omdbapi.com/?apikey=c164b08f&t=${movieTitle}`,
  "method": "GET"
}

$.ajax(settings)
  .then(response => console.log(response))
  .catch(err => console.log(err));




settings = {
  "async": true,
  "crossDomain": true,
  "url": `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${movieTitle}`,
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
  }
}

$.ajax(settings)
  .then(response => console.log(response))
  .catch(err => console.log(err));



