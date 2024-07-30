// app.js
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 3000;
const request = require('request');

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
var animalsArray = ["Elephant", "Eagle", "Dragonfly"];

// Can you categorize the animalsArray into the following categories?

// Desired Output
// {
//     Mammals: [ 'Elephant' ],
//     Birds: [ 'Eagle' ],
//     Insects: [ 'Dragonfly' ]
// }

  function animalArray(animalsArray){
    const categories = {}

    if(animalsArray[0] === 'Elephant'){
      categories.Mammals = [animalsArray[0]]
    }

    if(animalsArray[1] === 'Eagle'){
      categories.Birds = [animalsArray[1]]
    }
    
    if(animalsArray[2] === 'Dragonfly'){
      categories.Insects = [animalsArray[2]]
    }

    console.log(categories)
  }
  animalArray(animalsArray);

  //

  app.get('/v1/animals', (req, res) => {

    const animalArray = req.query.name;

    request.get({
      url: `https://api.api-ninjas.com/v1/animals?name=${animalArray}`,
      headers: {
        'X-Api-Key': 'ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u'
      }
    },
    function(error, response, body){

      if(error) return console.error('Request failed:', error);
      else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
      res.json({
        message: 'Animals',
        data: body
      });
    });
  })

// After you get the design output create an API call to this API endpoint
// https://api.api-ninjas.com/v1/animals
// Or Visit this URL for more info: https://api-ninjas.com/api/animals
// API-Key to use: 

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
