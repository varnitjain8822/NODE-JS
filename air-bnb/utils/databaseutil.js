// Import mysql2
const mysql = require('mysql2');

// Create connection
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'airbnb'
});


module.exports = pool.promise();