const repository = require('../db/repo/user-repo');
const { passwordValidation } = require('../utils/string-utils');

module.exports = (app, repo) => {
    app.post('/user', async (req, res, next) => {
        const payload = req.body;
        let result;

        // Validate password
        try {
            if (passwordValidation(payload.password)) {
                result = await repository.create(repo, payload);
                res.status(200).json(result);
            } else {
                const error = new Error('user creation error.');
                error.code = 400;
                error.msg = `${error.code}  - user creation error`
                throw error;
            }
        } catch (err) {
            next(err);
        }
    });
    app.get('/user', async (req, res, next) => {
        const filter = req.body;
        result = await repository.findByName(repo, filter);

        try {
            if (result.length != 0) {
                res.status(200).json(result);
            } else {
                const error = new Error('User doens\'t exist.')
                error.code = 400;
                error.msg = 'User doens\'t exist.'
                throw error;
            }
        } catch (err) {
            next(err)
        }
    });
    app.use((error, req, res, next) => {
        res.status(error.code).json(error.msg);
    });
};
