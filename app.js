// app.js
const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
var animalsArray = ['Elephant', 'Eagle', 'Dragonfly'];

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

// 1. I first ensured that I have the correct syntax on using the CORRECT HEADER and CORRECT TOKEN
axios.defaults.headers.common['X-Api-Key'] =
  'ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u';

// 2. established the get request based on the documentation
axios
  .get('https://api.api-ninjas.com/v1/animals?name=cheetah')
  .then((res) => {
    console.log('\nAPI Response', res.data);
  })
  .catch((error) => {
    console.log('\nError fetching data: ', error);
  });

// Conclusion: Successful request to the endpoint!

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
