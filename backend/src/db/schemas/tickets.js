const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    cID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('tickets', ticketSchema)