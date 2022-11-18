const express = require('express');
const routes = require('./routes')
const app = express();

const server = (repo) => {
    app.use(express.json());

    //Routes
    routes(app, repo);

    return app;
};

module.exports = server;