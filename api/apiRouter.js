const router = require('express').Router();

const  companyRouter = require('../router/companyRouter');

server.use('/api', companyRouter);

// Global test endpoint
server.get('/', (req, res) => {
    res.send(`<h3>Welcome to the Company!</h3>`)
    });

module.exports = router;