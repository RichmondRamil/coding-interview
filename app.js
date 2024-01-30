// app.js
const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

var animalsArray = ['Elephant', 'Eagle', 'Dragonfly'];
// 1. I need to define the desired structure
const animals = {
  Mammals: [],
  Birds: [],
  Insects: [],
};

// 2. Checking where does each of the animals in the given array falls into
animalsArray.forEach((animal) => {
  if (animal.includes('Elephant')) {
    animals.Mammals.push(animal);
  } else if (animal.includes('Eagle')) {
    animals.Birds.push(animal);
  } else if (animal.includes('Dragonfly')) {
    animals.Insects.push(animal);
  }
});

// 3. See if I did the right thing
console.log(animals);
// Desired Output
// {
//   Mammals: ['Elephant'],
//   Birds: ['Eagle'],
//   Insects: ['Dragonfly'],
// };

// After you get the design output create an API call to this API endpoint
// https://api.api-ninjas.com/v1/animals
// Or Visit this URL for more info: https://api-ninjas.com/api/animals
// API-Key to use: ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
