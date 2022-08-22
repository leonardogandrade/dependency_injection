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
    },

    async findByName(repo, filter) {
        let result;

        try {
            result = await repo.find({ name: filter.name });
        } catch (err) {
            console.log(`ERROR: ${err}`);
        }

        if (result)
            return result;

        return false
    }
}