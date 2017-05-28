// Update with your config settings.
const path = require('path');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: '/server/SQL/mysql_db',
    },
    migrations: {
      directory: path.join(__dirname, '/server/SQL/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/server/SQL/seeds'),
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'SQL_Data',
    },
    pool: {
      min: 0,
      max: 20,
    },
    migrations: {
      tableName: 'sql_table',
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
      min: 0,
      max: 20,
    },
    migrations: {
      tableName: 'sql_table',
    },
  },

};
