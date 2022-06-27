const mongoose = require('mongoose');
const MONGO = process.env.MONGO;

const dbConnect = () => {
    try {
        mongoose.connect(MONGO,)
    } catch (err) {
        console.log(`ERROR: ${err}`);
    };
};

module.exports = {
    dbConnect
};