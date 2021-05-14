const mongoose = require('mongoose');

const warnSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    gID: {
        type: String,
        required: true
    },
    warnings: {
        type: [Object],
        required: true
    },
})

module.exports = mongoose.model('warnings', warnSchema);