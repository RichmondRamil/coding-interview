// app.js
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
let categorize = {}
var animalsArray = ["Elephant", "Eagle", "Dragonfly"];

animalsArray.map(animal => {
  if (animal === "Elephant") {
    console.log('Mamal')
    categorize.Mammals = ["Elephant"]
  }
  if (animal === 'Eagle') {
    categorize.Birds = ["Eagle"]
  }
  if (animal === 'Dragonfly') {
    categorize.Insects = ['Dragonfly']
  }
})
console.log(categorize)
// Can you categorize the animalsArray into the following categories?

// Desired Output
// {
//     Mammals: [ 'Elephant' ],
//     Birds: [ 'Eagle' ],
//     Insects: [ 'Dragonfly' ]
// }

//

// After you get the design output create an API call to this API endpoint
// https://api.api-ninjas.com/v1/animals
// Or Visit this URL for more info: https://api-ninjas.com/api/animals
// API-Key to use: ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u

app.get('/animal/', async (req, res) => {
  // forgot to destructure the value from the query params , it should be {name}
  const name = req.query
  console.log(name)
  try {
    const response = await axios.get(`https://api.api-ninjas.com/v1/animals?name=${name}`, {
      headers: { 'X-Api-Key': 'ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u', }
    })
    console.log(response.data)
    res.json(response.data)
  } catch (error) {
    console.error(error)
  }
})


app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
