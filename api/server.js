const express = require('express');

// Require
const apiRouter = require('./apiRouter.js');
const configureMiddleware = require('./configMiddleware.js');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);

module.exports = server;
