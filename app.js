

getOMDBMovie("Avengers Endgame", (err, res) => {
  if (err) {
    console.log('omdb err has a value')
    console.log(err)
  } else {
    if (res["Error"]) {
      console.log(" error")
      console.log(res["Error"])
      console.log(res)
    } else {
      console.log(`omdbapi.com callback for title "${res['Title']}"`)
      console.log(`OMDB Movie Title: ${res['Title']}`)
      getStreamingMovie(res['Title'], (err, res) => {
        console.log(`rapidapi.com callback for term "${res.term}"`)
        if (err) {
          alert("There was an error")
          console.log(err)
        } else {
          if (res.results) {
            console.log(res)
          } else {
            // no results or error
            console.log(res)
          }
        }
        console.log(`rapidapi.com callback for term "${res.term}"... done!`)
      })
      console.log(`omdbapi.com callback for title "${res['Title']}"... done!`)
      console.log(res)
    }
  }
})


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







