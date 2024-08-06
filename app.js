// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

//! YOU LOG ALL OF YOUR ANSWERS HERE ON NODE JS SERVER
// 1. Can you categorize the animalsArray into the following categories without manually mapping them?
//! PLEASE USE ANY ITERATION METHODS OR ANY METHODS TO SOLVE THIS PROBLEM

// Desired Output
// {
//     Mammals: [ 'Elephant' ],
//     Birds: [ 'Eagle' ],
//     Insects: [ 'Dragonfly' ]
// }

app.get('/q1', (req, res) => {
  const animalsArray = ['Elephant', 'Eagle', 'Dragonfly'];
  const categories = ['Mamals', 'Birds', 'Insects'];

  const arr = {};

  categories.forEach((category, index) => {
    arr[category] = [animalsArray[index]];
  });

  console.log(arr);
  return res.json(arr);
});

//

// 2. After you get the desired output create an API call to this API endpoint without manually typing each one of the desired output?
//! USE THE DISIRED OUTPUT AS YOUR PAYLOAD TO THIS API

// https://api.api-ninjas.com/v1/animals
// Or Visit this URL for more info: https://api-ninjas.com/api/animals
// API-Key to use: ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u

app.get('/q2', async (req, res) => {
  // should be hidden to an env file
  const KEY = 'ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u';

  // The documentation said that I also have to include a query param to make it work
  //? I forgot to include the query that's why its returning a 404 error
  const animal = req.query.name;
  const url = `https://api.api-ninjas.com/v1/animals?name=${animal}`;

  const response = await fetch(url, {
    headers: { 'X-Api-Key': KEY },
  });

  //! this was my first implementation I used the .data instead of .json() :(
  // const data = await response.data
  const data = await response.json();

  // sample output at 'http://localhost:3000/q2?name=cat'
  console.log(data);
  return res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
