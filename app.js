// app.js
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
const animalsArray = ["Elephant", "Eagle", "Dragonfly"];

//! YOU LOG ALL OF YOUR ANSWERS HERE ON NODE JS SERVER
// 1. Can you categorize the animalsArray into the following categories without manually mapping them?
//! PLEASE USE ANY ITERATION METHODS OR ANY METHODS TO SOLVE THIS PROBLEM
const categorizedAnimals = (animals) => {
  let result = {};
  const category = ["Mammals", "Birds", "Insects"];

  for (let i = 0; i < animals.length; i++) {
    // result.category[i] = animals[i];
    result[category[i]] = [ animals[i] ];
  }
  return result;
}

console.log(categorizedAnimals(animalsArray));
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

const result = categorizedAnimals(animalsArray);
const animalNames = Object.values(result).flat();

const apiURL = "https://api.api-ninjas.com/v1/animals";
const apiKEY = "ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u";

app.get("/animals", async (req, res) => {
  try {
    const animalPromises = animalNames.map(animal =>
      axios.get(apiURL, {
        params: { name: animal },
        headers: { "X-Api-Key": apiKEY }
      }).then(response => response.data)
    );

    const results = await Promise.all(animalPromises);
    const filteredResults = results.flat().filter(item => animalNames.includes(item.name));
    res.json(filteredResults);
  } catch (error) {
    res.status(500).json(`Error: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
