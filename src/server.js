const express = require('express');

const server = (repo) => {
    const app = express();
    app.use(express.json());

    //Routes
    require('./routes')(app, repo);

    return app;
};

module.exports = server;