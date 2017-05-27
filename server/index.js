const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const bunyan = require('bunyan');
const log = bunyan.createLogger({ name: 'index.js' });

const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());

// mySQL server w/knex
const SQLRoute = require('./routers/sql_route.js');
app.use('/sql', SQLRoute);

app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => log.info('server-side-app listening on PORT ', PORT));