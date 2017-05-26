const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// MySQL server.
const connection = require('./database.js');
const testRoute = require('./routers/test_route.js');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.use('/test', testRoute);

app.listen(PORT, () => console.log('server-side-app listening on PORT ', PORT));