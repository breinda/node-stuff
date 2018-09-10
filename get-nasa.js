/*
GOT
- lightweight!
- works with Promises
*/

/*
the following code:
- sends a GET request to NASA’s API
- prints out the URL for the astronomy picture of the day + an explanation
*/

const got = require('got');

got('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true })
.then (response => {
  console.log(response.body.url);
  console.log(response.body.explanation);

})
.catch (error => {
  console.log(error.response.body);

});

// console.log('we done wit dis');
