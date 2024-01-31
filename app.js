// app.js
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});
var animalsArray = ["Elephant", "Eagle", "Dragonfly"];

const animalCategory = ["Mammals", "Birds", " Insects"];

const categorizedAnimals = () => {
    let categorizedAnimal = {
        Mammals: [],
        Birds: [],
        Insects: [],
    };
    animalsArray.forEach((animal) => {
        if (animal === "Elephant") categorizedAnimal.Mammals.push(animal);
        if (animal === "Eagle") categorizedAnimal.Birds.push(animal);
        if (animal === "Dragonfly") categorizedAnimal.Insects.push(animal);
    });
    return categorizedAnimal;
};

console.log(categorizedAnimals());

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
const animals = Object.values(categorizedAnimals());
const baseUrl = "https://api.api-ninjas.com/v1/animals";

Promise.all(
    animals.map((animal) =>
        axios.get(`${baseUrl}?name=${animal[0]}`, {
            headers: {
                "X-API-Key": "ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u",
            },
        }),
    ),
).then((result) => result.forEach((val) => console.log(val.data)));

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
