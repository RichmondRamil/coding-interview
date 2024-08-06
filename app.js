// app.js
const express = require("express");
const app = express();
const axios = require("axios");
const { addListener } = require("nodemon");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

var animalsArray = ["Elephant", "Eagle", "Dragonfly"];
var labelsArray = ['Mammals', 'Birds', 'Insects']
let outputArray = {}
for(let i = 0; i < 3; i++){
  outputArray[labelsArray[i]] = [animalsArray[i]]
}

console.log(outputArray)

//! YOU LOG ALL OF YOUR ANSWERS HERE ON NODE JS SERVER
// 1. Can you categorize the animalsArray into the following categories without manually mapping them?
//! PLEASE USE ANY ITERATION METHODS OR ANY METHODS TO SOLVE THIS PROBLEM

// Desired Output
// {
//     Mammals: [ 'Elephant' ],
//     Birds: [ 'Eagle' ],
//     Insects: [ 'Dragonfly' ]
// }

//

// 2. After you get the desired output create an API call to this API endpoint without manually typing each one of the desired output?
//! USE THE DISIRED OUTPUT AS YOUR PAYLOAD TO THIS API
// https://api.api-ninjas.com/v1/animals
// Or Visit this URL for more info: https://api-ninjas.com/api/animals
// API-Key to use: ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});

// app.get('/', function(req, res, next) {

//   var apiKey = 'ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u' 

//   let url = "https://api.api-ninjas.com/v1/animals?name=cheetah" ; // + req.params.term + "/standings";

//   var options = {
//     host: url,
//     method: 'GET',
//     headers: {
//       'X-Auth-Token': apiKey
//     }
//   };
//   console.log(res)
// });


// var name = 'cheetah';
// app.get({
//   url: 'https://api.api-ninjas.com/v1/animals?name=' + name,
//   headers: {
//     'X-Api-Key': 'ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u'
//   },
// }, function(error, response, body) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });

var name = 'cheetah';
app.get('/api', async(req, res) => {
  let url = 'https://api.api-ninjas.com/v1/animals?name=' + name

  const response = await axios.get(url, {
    headers: {
      'X-Api-Key': 'ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u'
    } 
  })
  .then(response => res.json(response.data))
  .catch(error => console.error('Error:', error));
})


/*
Explanation of Steps

  Initially I had forgotten how to use express so I looked for examples of using the express API. I was familiar that the process needed was the get function in order to get the data but the syntax was not surfacing in my mind so I copied the format online
    
  Lines 41-55 were the express format of how to use the get function. however it was not working.
  Lines 58-68 were the format given by the https://api-ninjas.com/api/animals when set to node.js instead of javascript. I tried it but the code was still not running for expressJS

  So I then searched up specific documentation and found that express used the format app.get(url, function). I then readjusted the function to work for express but the request was still not being sent

  I then realized that the variable axios had not been used and remembered it's purpose to send requests, and so I remade the code to use axios and searched up https://deadsimplechat.com/blog/setting-headers-with-axios-in-nodejs/ to use axios.

  Lines 70-85 were the final working data after all the edits
*/