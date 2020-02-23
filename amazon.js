
let title = "Ford v Ferrari"
let response

getOMDBMovie(title)
  .then(resolveOMDBResponse)
  .catch(rejectOMDBResponse)

function getOMDBMovie(title) {
  return $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `http://www.omdbapi.com/?apikey=c164b08f&t="${title}"`,
    "dataType": "jsonp",
    "method": "GET"
  })
}

function resolveOMDBResponse(response){
  console.log(response.imdbID)
  debugger
  // var settings = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": `https://streamzui-streamzui-v1.p.rapidapi.com/search?country=us&imdbid=${response.imdbID}&yearend=2019&yearstart=1900&page=1`,
  //   "method": "GET",
  //   "dataType": "jsonp",
  //   "headers": {
  //     "x-rapidapi-host": "streamzui-streamzui-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
  //   }
  // }

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://streamzui-streamzui-v1.p.rapidapi.com/search?country=us&imdbid=${response.imdbID}&yearend=2019&yearstart=1900&page=1`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "streamzui-streamzui-v1.p.rapidapi.com",
      "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
    }
  }

  console.log(settings)

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