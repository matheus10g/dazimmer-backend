const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    device: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', UserSchema);