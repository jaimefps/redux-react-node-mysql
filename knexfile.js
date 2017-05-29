// run the following command to make a migration:
// knex migrate:make $migration_name

// run the following command to start a migration:
// knex migrate:latest

const path = require('path');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'SQL_Data',
    },
    migrations: {
      directory: path.join(__dirname, '/server/SQL/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/server/SQL/seeds'),
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'SQL_Data',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'sql_table',
    },
  },

};
