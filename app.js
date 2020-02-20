
let title = "Avengers: Endgame"

getOMDBMovieFromLocal(title, processOMDBMovie)

function getOMDBMovieFromLocal(title, callback) {
  let localRes = JSON.parse(localStorage.getItem(omdbLocalStorageKey(title)))
  if (localRes) {
    //console.log(`local storage OMDB API ${localRes.Title}`)
    renderOMDBElements(localRes)
    getStreamingMovieFromLocal(localRes.Title, processStreamingMovieResponse)
    //console.log(`local storage OMDB API ${localRes.Title} - Done!`)
  } else {
    //console.log(`API call to OMDB API ${title}`)
    getOMDBMovie(title, callback)
    //console.log(`API call to OMDB API ${title} - Done!`)
  }
}

function getStreamingMovieFromLocal(title, callback){
  let localRes = JSON.parse(localStorage.getItem(streamingLocalStorageKey(title)))
  if (localRes){
    //console.log(`local storage Streaming API ${localRes.term}`)
    callback(null, localRes)
    //console.log(`local storage Streaming API ${localRes.term} - Done!`)
  } else {
    //console.log(`API call to Streaming API ${title}`)
    getStreamingMovie(title, callback)
    //console.log(`API call to Streaming API ${title} - Done!`)
  }
}

function processOMDBMovie(err, response) {
  
  if (err) {
    //console.log('omdb err has a value')
    //console.log(err)
  } else {
    if (response["Error"]) {
      //console.log(" error")
      //console.log(response["Error"])
      //console.log(response)
    } else {

      localStorage.setItem(omdbLocalStorageKey(response.Title), JSON.stringify(response))
      //console.log(`omdbapi.com callback for title "${response.Title}"`)
      //console.log(`OMDB Movie Title: ${response.Title}`)
      renderOMDBElements(response)

      
      getStreamingMovieFromLocal(response.Title, processStreamingMovieResponse)
      
      //console.log(`omdbapi.com callback for title "${response.Title}"... done!`)
      //console.log(response)

    }
  }
}

function omdbLocalStorageKey(partialKey) {
  return `omdb.${partialKey.replace(/"/g, "")}`
}

function streamingLocalStorageKey(partialKey) {
  
  return `streaming.${partialKey.replace(/"/g, "")}`
}

function processStreamingMovieResponse(err, res){
  
  if (err) {
    //console.log(err)
  } else {
    if (res.results) {
      
      //console.log(`rapidapi.com processStreamingMovieResponse for term "${res.term}"`)
      //console.log(res)
      
      localStorage.setItem(streamingLocalStorageKey(res.term), JSON.stringify(res))
      
      renderStreamingMovieElements(res)
      
      //console.log(`rapidapi.com processStreamingMovieResponse for term "${res.term}"... done!`)
    } else {
      
      // no results or error
      //console.log(res)
    }
  }
}

function getOMDBMovie(title, callback){
  //console.log(`omdbapi.com Ajax call for title "${title}"`)
  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `http://www.omdbapi.com/?apikey=c164b08f&t="${title}"`,
    "method": "GET",
    success: res => callback(null, res),
    error: err => callback(err)
  })
  //console.log(`omdbapi.com Ajax call for title "${title}"... done!`)
}

function getStreamingMovie(title, callback) {
  
  //console.log(`rapidapi.com Ajax call for title "${title}"`)
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
  //console.log(`rapidapi.com Ajax call for title "${title}"... done!`)
}

function renderStreamingMovieElements(response) {
  console.log('rendering Streaming Movie elements')
  console.log(`Streaming Movie response.term: ${response.term}`)
  console.log(response)
  console.log('OMDB Streaming Movie elements rendered')
}

function renderOMDBElements(response) {
  console.log('rendering OMDB elements')
  console.log(`OMDB response.Title: ${response.Title}`)
  console.log(response)
  console.log('OMDB elements rendered')
}





