
let title = "Avengers: Endgame"
let omdbResponse = JSON.parse(localStorage.getItem(title))

if (omdbResponse) {
  console.log(`Picking up from local storage ${omdbResponse.Title}`)
  renderOMDBElements(omdbResponse)
  
  getStreamingMovie(omdbResponse.Title, processStreamingMovieResponse)

  console.log(`Picking up from local storage ${omdbResponse.Title} - Done!`)
} else {
  
  getOMDBMovie(title, processOMDBMovie)
  
}


function processOMDBMovie(err, res) {
  
  if (err) {
    console.log('omdb err has a value')
    console.log(err)
  } else {
    if (res["Error"]) {
      console.log(" error")
      console.log(res["Error"])
      console.log(res)
    } else {
      
      localStorage.setItem(res.Title, JSON.stringify(res))
      console.log(`omdbapi.com callback for title "${res.Title}"`)
      console.log(`OMDB Movie Title: ${res.Title}`)
      renderOMDBElements(res)
      
      getStreamingMovie(res.Title, processStreamingMovieResponse)
      
      console.log(`omdbapi.com callback for title "${res.Title}"... done!`)
      console.log(res)

    }
  }
}

function processStreamingMovieResponse(err, res){
  
  if (err) {
    console.log(err)
  } else {
    if (res.results) {
      
      console.log(`rapidapi.com processStreamingMovieResponse for term "${res.term}"`)
      console.log(res)
      renderingStreamingMovieElements(res)
      
      console.log(`rapidapi.com processStreamingMovieResponse for term "${res.term}"... done!`)
    } else {
      // no results or error
      console.log(res)
    }
  }
}

function renderOMDBElements(res) {
  
  console.log('rendering OMDB elements')
  console.log(res.Title)
  console.log(res)
  console.log('OMDB elements rendered')
}


function getOMDBMovie(title, callback){
  console.log(`omdbapi.com Ajax call for title "${title}"`)
  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `http://www.omdbapi.com/?apikey=c164b08f&t="${title}"`,
    "method": "GET",
    success: res => callback(null, res),
    error: err => callback(err)
  })
  console.log(`omdbapi.com Ajax call for title "${title}"... done!`)
}

function getStreamingMovie(title, callback) {
  
  console.log(`rapidapi.com Ajax call for title "${title}"`)
  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="${title}"`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
      "x-rapidapi-key": "b1ca774955msh58c2e44d8019f1cp19dff8jsn096f4ba49c6a"
    },
    success: res => callback(null, res),
    error: err => callback(err)
  })
  console.log(`rapidapi.com Ajax call for title "${title}"... done!`)
}

function renderingStreamingMovieElements(res) {
  console.log('rendering Streaming Movie elements')
  console.log(res)
  console.log('OMDB Streaming Movie elements rendered')
}





