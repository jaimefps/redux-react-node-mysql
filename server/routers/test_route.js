const express = require('express');
const knex = require('../database.js');
const router = express.Router();

const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'test_route.js'})

router.post('/', (req, res) => {
  log.info('POST fired with incomming data', req.body);
	const data = req.body;
	const row = {
		name: data.name,
		email: data.email,
		description: data.description,
		url: data.url,
	};
  knex.insert(row).into('testTable')
    .then((result) => res.json({ success: true, message: 'ok' }));
});

router.get('/', function (req, res) {
  log.info('GET fired');
  knex.select().table('testTable')
    .then((result) => res.send(result));
});

module.exports = router;