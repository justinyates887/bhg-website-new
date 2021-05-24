const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const logsSchema = mongoose.Schema({
    _id: reqString,
    cID: reqString,
    desired: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('logs', logsSchema)