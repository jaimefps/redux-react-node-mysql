// Update with your config settings.
module.exports = {

  development: {
    client: 'mysql',
    connection: 'mysql://localhost/knex_test',
    migrations: {
      directory: `${__dirname}/SQL/migrations`,
    },
    seeds: {
      directory: `${__dirname}/SQL/seeds`,
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
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'sql_table',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'SQL_Data',
      user: 'root',
      password: '',
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
