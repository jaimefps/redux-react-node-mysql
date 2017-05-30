// run the following command to make a migration:
// knex migrate:make $migration_name

// run the following command to start a migration:
// knex migrate:latest

const path = require('path');
const config = require('./server/mysql/config');

module.exports = {

  development: {
    client: 'mysql',
    connection: config,
    migrations: {
      directory: path.join(__dirname, '/server/mysql/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/server/mysql/seeds'),
    },
  },

  production: {
    client: 'mysql',
    connection: config,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'sql_table',
    },
  },

};
