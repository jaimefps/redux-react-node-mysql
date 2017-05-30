const config = require('./config');

const knex = require('knex')({
  client: 'mysql',
  connection: config,
});

module.exports = knex;