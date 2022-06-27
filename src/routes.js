const { userHandler } = require('../src/handlers');

module.exports = (app, repo) => {
    userHandler(app, repo);
};
