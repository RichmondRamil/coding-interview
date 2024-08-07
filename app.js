// app.js
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 3000;

const request = require("request");

var animalsArray = ["Elephant", "Eagle", "Dragonfly"];

app.get("/", async (req, res) => {
  // define empty object first
  let categorized = {};

  // loop through animals array
  animalsArray.forEach((animal) => {
    switch (animal) {
      case "Elephant":
        categorized.Mammals = [animal];
        break;
      case "Eagle":
        categorized.Birds = [animal];
        break;
      case "Dragonfly":
        categorized.Insects = [animal];
        break;
    }
  });

  // log the result
  console.log(categorized);

  res.send("Hello, Express!");
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

//

// 2. After you get the desired output create an API call to this API endpoint without manually typing each one of the desired output?
//! USE THE DISIRED OUTPUT AS YOUR PAYLOAD TO THIS API
// https://api.api-ninjas.com/v1/animals
// Or Visit this URL for more info: https://api-ninjas.com/api/animals
// API-Key to use: ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u

app.get("/:animal", async (req, res) => {
  // get paramter
  const animal = req.params.animal;

  // perform get request to the api endpoint
  try {
    const result = await axios.get(
      `https://api.api-ninjas.com/v1/animals?name=${animal}`,
      {
        // ! error was caused by forgeting to put the api key in the headers
        headers: {
          "X-Api-Key": "ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u",
        },
      }
    );

    // log the result
    console.log(result.data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

  res.send("Finished Solution to 2!");
});

/*

Usually in my projects, I decouple the frontend and the backend which means that I perform the api calls in the frontend to the backend API endpoint. So, when I tackled problem 2, I was a bit confused on how to achieve an API call.

I wasn't able to make 'request' work so I resorted to using axios which I was more familiar with using. However, I again faced with an error and was not able to fetch the data and make problem 2 work within the time period.



After the interview, I looked up for examples of an axios api call with express in google until I stumble upon this https://stackoverflow.com/questions/72060067/apikey-and-axios
Turns out, I forgot to add the header config and the API key.

*/

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
