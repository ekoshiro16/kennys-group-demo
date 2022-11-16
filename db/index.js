// Steps to creating a connection to your DB server
// 1) Imports 
const { Client } = require('pg');
// const pg = require('pg'); 

// 2) Now we have to establish a client connection to our DB url
const client = new Client('postgres://localhost:5432/coolRecipes');

// 3) Export this client connection that we just created
module.exports = client; 