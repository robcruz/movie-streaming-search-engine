function getOmdbMovie(title){
  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `http://www.omdbapi.com/?apikey=c164b08f&t=${title}`,
    "method": "GET",
    success: res => renderOmdbMovie(null, res),
    error: err => renderOmdbMovie(err)
  })
}

function renderOmdbMovie(err, response) {
  if (err) {
    alert("There was an error")
    console.log(err)
  } else {
    if (response["Error"]) {
      alert(response["Error"])
      console.log(response["Error"])
    } else {
      alert(response["Title"])
      console.log(response)
    }
  }
}

function getStreamingMovie(title) {
  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${title}`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
      "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
    },
    success: res => renderStreamingMovie(null, res),
    error: err => renderStreamingMovie(err)
  })
}

function renderStreamingMovie(err, response) {
  if (err) {
    alert("There was an error")
    console.log(err)
  } else {
    if (response.results) {
      alert(response.results)
      console.log(response)
    } else {
      // no results or error
      console.log(response)
    }
  }
}