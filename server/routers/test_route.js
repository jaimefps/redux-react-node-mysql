const express = require('express');
const connection = require('../database.js');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('POST action reached the server')
	const data = req.body;
	const row = {
		name: data.name,
		email: data.email,
		description: data.description,
		url: data.url,
	};
  connection.query('INSERT INTO testTable SET ?', row, (err, result) => {
   if (err) console.log(err);
   res.sendStatus(201).end();
  });
});

router.get('/', function (req, res) {
  console.log('GET action reached the server')
  connection.query('SELECT * FROM testTable', (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

module.exports = router;