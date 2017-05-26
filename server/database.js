const mysql = require('mysql');

// disjunction set up for Runnable's deployment environment.
var connection = mysql.createConnection({
 host: process.env.DB_HOST || 'localhost',
 user: process.env.DB_USER || 'root',
 password: process.env.DB_PASSWORD || '',
 database: process.env.DB_DATABASE || 'testData'
});

connection.connect();
module.exports = connection;