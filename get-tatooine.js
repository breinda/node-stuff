/*
  gets some data about tatooine

  usage: node get-tatooine.js [-w]
  -w is used to wookiee-fy the response, and is always the superior option
*/

const request = require('request');

var wookiee = ""
var url = 'https://swapi.co/api/planets/1/'

if (process.argv[2] == "-w") {
  wookiee = '?format=wookiee'
  url = url + wookiee
}

// callback
function handleGet (err, res, body) {
  if (err) {
    return console.log(err);
  }

  if (wookiee) {
    console.log(body);
  }
  else {
    console.log(body.name);
    console.log(body.terrain);
    console.log(body.residents);
  }
}

request(url, { json: true }, handleGet);

// console.log('we done wit dis');
