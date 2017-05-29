
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('sql_table').del()
    .then(() =>
      // Inserts seed entries
       knex('sql_table').insert([
        { id: 1, name: 'test_seed1', email: 'test_seed_x', description: 'test_seed-X', url: 'some_url' },
        { id: 2, name: 'test_seed2', email: 'test_seed_x', description: 'test_seed-X', url: 'some_url' },
        { id: 3, name: 'test_seed3', email: 'test_seed_x', description: 'test_seed-X', url: 'some_url' },
       ]));
};

