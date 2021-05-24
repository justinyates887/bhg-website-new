const mongoose = require('mongoose');

const blacklistSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    words: {
        type: [Object],
        required: true
    },
    warns: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('blacklist', blacklistSchema);