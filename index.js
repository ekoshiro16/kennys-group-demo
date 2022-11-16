// This file is reserved for your Express API app
// Step 1) Imports
const express = require('express'); 
const morgan = require('morgan'); 
const { fetchAllRecipes } = require('./db/recipes'); 

// Step 2) Create a new Express server instance
const server = express(); 

// Step 3) Create some middlewares 
server.use(morgan('dev'));

    // Note: Do not forget your body parsing middleware 
        // You need 2 types of body-parsing middleware:
            // 1) JSON body parsing 
server.use(express.json());
            // 2) Encoded HTML form body parsing 
server.use(express.urlencoded({ extended: false }));

async function consoleLogger(req, res, next) {
    try {
        console.log("A request is being received")
        console.log(req.body);
        next(); 
    } catch (error) {
        console.log(error); 
    }
};

server.use(consoleLogger); 

// Step 4) Once you finish your middleware, now you can write some real route handlers 

server.get("/recipes", async (req, res, next) => {
    try {
        const recipeData = await fetchAllRecipes(); 
        const recipeObj = {
            
        }
        // const convertedData = await recipeData.json(); 
        // Almost all request handlers will use res.send 
        res.send(recipeObj).status(203)
    } catch (error) {
        console.log(error); 
    }
})

// Last step) Last thing you should always do is make sure that your application is listening + booting up your new express server 
    // Note: You will also need to make sure your DB client connection has been started
const client = require('./db/index');
client.connect(); 

server.listen(3000, () => {
    console.log(`We are running on port 3000`)
});