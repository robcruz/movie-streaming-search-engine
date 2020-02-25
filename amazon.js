
// let title = "Captain America: The First Avenger"
// let title = "Captain America: Civil War"
let title = "BoJack Horseman"

getOMDBMovie(title)
  .then(resolveIMDBResponse)
  .catch(rejectOMDBResponse)

function getOMDBMovie(title) {
  let obj = {
    "async": true,
    "crossDomain": true,
    "url": `https://imdb8.p.rapidapi.com/title/find?q=${title}`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
    }
  }

  return $.ajax(obj).done(function (response) {
    response = response
    console.log('getOMDBMovie')
    console.log(response)
  });

}

function getId(str) {
  return str.match(/^\/title\/(.+)\/$/)[1]
}

function resolveIMDBResponse(response){
  console.log(getId(response.results[0].id))

  let obj = {
    "async": true,
    "crossDomain": true,
    "url": `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=US&source_id=${getId(response.results[0].id)}&source=imdb`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
      "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
    }
  }

  $.ajax(obj)
    .then(resolveUtellyResponse)
    .catch(rejectUtellyResponse)
}

function rejectOMDBResponse(error){
  response = error
  console.log('There was an error')
  console.log(response)
}

function resolveUtellyResponse(response){
  console.log("Amazon")
  console.log(res);
}

function rejectUtellyResponse(err){
  console.log(err);
}