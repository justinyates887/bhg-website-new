const mongoose = require('mongoose')

const suggestSchema = mongoose.Schema({ //{guildID, cID}
    _id: {
        type: String,
        required: true
    },
    cID: {
        type: String,
        required: true
    },
    aCID: {
        type: String,
    }
})

module.exports = mongoose.model('suggest-channels', suggestSchema)