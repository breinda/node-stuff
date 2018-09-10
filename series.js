// two requests being executed sequentially

const got = require ('got');

const url1 = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-09-06'
const url2 = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-09-07'

got(url1, { json: true })
.then (function (response1) {
  console.log(response1.body.date);
  console.log(response1.body.url);
  console.log(response1.body.explanation);

  // returns another promise to the next .then(..) in the chain
  return got (url2, { json: true });
})
.then (response2 => {
  console.log(response2.body.date);
  console.log(response2.body.url);
  console.log(response2.body.explanation);
})
.catch (error => {
  console.log (error);
});
