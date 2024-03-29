const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    surname: String,
    email: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);
