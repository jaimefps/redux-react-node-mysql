// Update with your config settings.
const path = require('path');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: './SQL/mysql_db',
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
      database: 'SQL_Data',
      user: 'root',
      password: '',
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
      database: 'SQL_Data',
      user: 'root',
      password: '',
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
