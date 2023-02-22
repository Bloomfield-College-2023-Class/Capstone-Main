const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config('./.env')

// I can export this and be able to query the database as long as I can import 
// make my query reusable

// statements needs to be of string type and must use MySQL syntax
const dbquery = ( statements ) => {
    // Stablish connection
    const db = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'reservar'
  })

  // Connect to the database
  db.connect(function(err) {
    // Show error
    if (err) throw err;

    // If this logs then a successful connection was established
    console.log("Connected");
    
    // Result is an array of objects, and throws an error
    db.query( statements, function(error, result) {
      // if we get error we print it out and stop
      if (error) throw error;

      // Show the result of the query
      console.log(result);
    })

    // End connection
    db.end();
  })
}

dbquery('describe users');

{/*
  axios.
*/}