// KNEX  implementation test

// const mysql = require('knex')({
//   client: 'mysql',
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: 'knex,public'
// });

const knex = require('knex')({
  client: "mysql",
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'testData'
  }
});

module.exports = knex;