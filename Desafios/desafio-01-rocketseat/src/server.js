const express = require('express');
const routes = require('./routes');
const { logMiddleware } = require('./middlewares/index');

server = express();

server.use(express.json());
server.use(logMiddleware);
server.use(routes);

server.listen(3000);
