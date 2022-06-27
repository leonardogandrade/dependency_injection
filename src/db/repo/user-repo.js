module.exports = {
    async create(repo, payload) {
        let result;

        try {
            result = await repo.create(payload);
        } catch (err) {
            console.log(`ERROR: ${err}`);
        }

        if (result)
            return result;

        return false
    }
}