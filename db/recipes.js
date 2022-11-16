// Steps to writing some DB functions in a separate file: 

// Step 1) Make sure you import your client connection 
const client = require('./index');

// Step 2) Writing your actual functions that interact with a specific table in your database

// Step 2a) Make sure when you declare your function that you make it asynchronous 
async function fetchAllRecipes() {
    try {
        // Step 2b) This is where we are going to write a client.query
        // Step 2c) Inside of the client.query's parenthesis block, you will write your SQL
            // Note: Don't forget your semicolon after the end of your SQL command
        const { rows } = await client.query(`
            SELECT * FROM recipes; 
        `);

        console.log(rows); 
    } catch (error) {
        console.log(error); 
    }
};

async function fetchRecipeByIdNum(idNum) {
    try {
        // const { rows } = await client.query(`
        //     SELECT * FROM recipes
        //     WHERE id = ($1);
        // `, [idNum])
        const { rows } = await client.query(`
            SELECT * FROM recipes
            WHERE id = ${idNum};
        `);


        console.log(rows); 

    } catch (error) {
        console.log(error); 
    }
}

module.exports = {
    fetchAllRecipes
}