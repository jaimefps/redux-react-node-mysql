const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());

// mySQL server w/knex
const testRoute = require('./routers/test_route.js');
app.use('/test', testRoute);

app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => console.log('server-side-app listening on PORT ', PORT));