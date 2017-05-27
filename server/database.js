// KNEX  implementation test
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