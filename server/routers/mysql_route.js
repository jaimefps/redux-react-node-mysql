const express = require('express');
const knex = require('../mysql/database.js');
const router = express.Router();

const bunyan = require('bunyan');
const log = bunyan.createLogger({ name: 'sql_route.js' });

router.post('/', (req, res) => {
  const data = req.body;
  const row = {
    name: data.name,
    email: data.email,
    description: data.description,
    url: data.url,
  };
  knex.insert(row).into('sql_table')
    .then(() => res.sendStatus(201).end())
    .catch((err) => {
      res.end(err);
      log.info(err);
    });
});

router.get('/', (req, res) => {
  knex.select().table('sql_table')
    .then(result => res.send(result))
    .catch((err) => {
      res.end(err);
      log.info(err);
    });
});

module.exports = router;
