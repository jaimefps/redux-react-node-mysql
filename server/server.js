// MySQL server.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var connection = require('./database.js');
var testRoute = require('./routers/test_route.js');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.use('/test', testRoute);

app.listen(PORT, function() {
	console.log('server-side-app listening on PORT ', PORT);
});