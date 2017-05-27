const express = require('express');
const knex = require('../database.js');
const router = express.Router();

router.post('/', (req, res) => {
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
  knex.select().table('testTable')
    .then((result) => res.send(result));
});

module.exports = router;