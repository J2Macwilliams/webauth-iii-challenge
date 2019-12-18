const express = require('express');

// Require
const apiRouter = require('./apiRouter');
const configureMiddleware = require('./configMiddleware');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);

module.exports = server;
