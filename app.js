// app.js
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});
app.use(express.json());
var animalsArray = ["Elephant", "Eagle", "Dragonfly"];
var animalTypes = ["Mammals", "Birds", "Insects"];

//! YOU LOG ALL OF YOUR ANSWERS HERE ON NODE JS SERVER
// 1. Can you categorize the animalsArray into the following categories without manually mapping them?
//! PLEASE USE ANY ITERATION METHODS OR ANY METHODS TO SOLVE THIS PROBLEM

// Desired Output
// {
//     Mammals: [ 'Elephant' ],
//     Birds: [ 'Eagle' ],
//     Insects: [ 'Dragonfly' ]
// }
var animalOutput = {};
for (let i = 0; i < animalsArray.length; i++) {
    animalOutput[animalTypes[i]] = [animalsArray[i]];
}
// console.log(animalOutput); // 1st question

//

// 2. After you get the desired output create an API call to this API endpoint without manually typing each one of the desired output?
//! USE THE DISIRED OUTPUT AS YOUR PAYLOAD TO THIS API
// https://api.api-ninjas.com/v1/animals
// Or Visit this URL for more info: https://api-ninjas.com/api/animals
// API-Key to use: ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u

app.use("/v1/animals", (req, res) => {
    const { name } = req.query;

    try {
        fetch("https://api.api-ninjas.com/v1/animals?name=" + name, {
            headers: {
                "X-Api-Key": "ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u",
            },
        }).then(async (response) => {
            // when response.status is 400, respond with error message
            if (!response.ok) {
                return res.status(400).send({
                    message: "Bad request",
                });
            }

            // get data from response using .json() -> returns a promise
            const data = await response.json();
            // after retrieving data, return it as a response
            return res.send({
                message: "Successfully retrieved",
                response: data,
            });
        });
    } catch (error) {
        // when error occurs, log error, and return status 500 when
        console.log(error);
        res.status(500).send({
            message: "An error occurred.",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
