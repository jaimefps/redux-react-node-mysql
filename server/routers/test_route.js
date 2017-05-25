var express = require('express');
var connection = require('../database.js');
var router = express.Router();

router.post('/', function (req, res) {
  console.log('POST action reached the server')
	let data = req.body;
	let row = {
		name: data.name,
		email: data.email,
		description: data.description,
		url: data.url,
	};
  connection.query('INSERT INTO testTable SET ?', row, function (err, result) {
   if (err) console.log(err);
   res.sendStatus(201).end();
  });
});

router.get('/', function (req, res) {
  console.log('GET action reached the server')
  connection.query('SELECT * FROM testTable', function (err, result) {
    if (err) console.log(err);
    res.send(result);
  });
});

module.exports = router;