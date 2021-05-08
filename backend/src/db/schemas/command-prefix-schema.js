const mongoose = require('mongoose')

const commandPrefixSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    prefix: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('guild-prefixes', commandPrefixSchema)