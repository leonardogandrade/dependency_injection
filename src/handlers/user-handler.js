const repository = require('../db/repo/user-repo');
const { passwordValidation } = require('../utils/string-utils');

module.exports = (app, repo) => {
    app.post('/user', async (req, res) => {
        const payload = req.body;
        let result;

        // Validadte password
        if (passwordValidation(payload.password)) {
            result = await repository.create(repo, payload);
            res.status(200).json(result);
        } else {
            res.status(404).json({
                'msg': 'Error creating user'
            });
        }
    });
};
