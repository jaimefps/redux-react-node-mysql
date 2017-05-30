
exports.up = (knex, Promise) => knex.schema.createTable('sql_table', ((table) => {
  table.increments();
  table.string('name').notNullable();
  table.string('email').notNullable();
  table.string('description').notNullable();
  table.string('url').notNullable();
}));

exports.down = (knex, Promise) => knex.schema.dropTable('sql_table');
