// CREATING A NEW SUBROUTER WITH EXPRESS

// Step 1) Imports
const express = require("express"); 
// const { fetchAllActivities } = require("./db/activities.js")

// Step 2) Create the individual subrouter itself
const activityRouter = express.Router(); 

// Step 3) Write your subrouter's route handlers themselves
activityRouter.get("/",async  (req, res, next) => {
    try {
        // const activitiesData = await fetchAllActivities(); 
        // res.send(activitiesData); 
    } catch (error) {
        console.error(error); 
    }
})

// Last steP: Make sure you export your subrouter
module.exports = activityRouter;

// Refer to the root index.js file to see how I created the activities subrouter