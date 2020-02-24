
// let title = "Captain America: The First Avenger"
// let title = "Captain America: Civil War"
let title = "BoJack Horseman"

let response

getOMDBMovie(title)
  .then(resolveOMDBResponse)
  .catch(rejectOMDBResponse)

function getOMDBMovie(title) {
  // return $.ajax({
  //   "async": true,
  //   "crossDomain": true,
  //   "url": `http://www.omdbapi.com/?apikey=c164b08f&t="${title}"`,
  //   "dataType": "jsonp",
  //   "method": "GET"
  // })

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://imdb8.p.rapidapi.com/title/find?q=${title}`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
    }
  }

  return $.ajax(settings).done(function (response) {
    console.log('getOMDBMovie')
    console.log(response)
  });

}

function getId(str) {
  return str.match(/^\/title\/(.+)\/$/)[1]
}

function resolveOMDBResponse(response){

  console.log(getId(response.results[0].id))
  debugger

  let settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=US&source_id=${getId(response.results[0].id)}&source=imdb`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
      "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
    }
  }

  $.ajax(settings)
    .then(function (res) {
    console.log("Amazon")
    console.log(res);
  })
    .catch(function (err) {
      console.log(err);
    })
}

function rejectOMDBResponse(error){
  response = error
  console.log('There was an error')
  console.log(response)
}