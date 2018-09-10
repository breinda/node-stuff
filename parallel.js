// two requests being executed in parallel

const got = require ('got');

const url1 = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-09-06'
const url2 = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-09-07'
//const dummy = 'blah'

async function aBunchOfGets (url1, url2) {
  var result = await Promise.all([
    got(url1, { json: true })
    .then (response1 => {
      console.log(response1.body.date);
      console.log(response1.body.url);
      console.log(response1.body.explanation);
    }),

    got(url2, { json: true })
    .then (response2 => {
      console.log(response2.body.date);
      console.log(response2.body.url);
      console.log(response2.body.explanation);
    })
  ])
  
  return result;
}

aBunchOfGets(url1, url2)
.then (response => {
  console.log("all done!");
})
.catch (error => {
  console.log("WHOOPS");
  console.log(error);
})
