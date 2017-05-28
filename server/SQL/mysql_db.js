const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: '',
    password: '',
    database: 'SQL_Data',
  },
});

module.exports = knex;
