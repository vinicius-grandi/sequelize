const express = require('express');
const port = (process.env.PORT || 3000);
const routes = require('./routes');
require('./database');
const app = express();

app.use(express.json());
app.use(routes);
app.listen(port);
